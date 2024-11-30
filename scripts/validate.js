import * as Yup from 'yup';

// Validation Schema
const contactValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Nome é obrigatório')
    .min(2, 'Nome deve ter no mínimo 2 caracteres')
    .max(50, 'Nome deve ter no máximo 50 caracteres'),
  
  email: Yup.string()
    .required('E-mail é obrigatório')
    .email('E-mail inválido')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Formato de e-mail inválido'),
  
  phone: Yup.string()
    .required('Telefone é obrigatório')
    .matches(/^(351)?\d{9}$/, 'Número de telefone inválido'),
  
  message: Yup.string()
    .required('Mensagem é obrigatória')
    .min(10, 'Mensagem deve ter no mínimo 10 caracteres')
    .max(500, 'Mensagem deve ter no máximo 500 caracteres')
});

// Contact Form Component
function ContactForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    },
    validationSchema: contactValidationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Simulated API call
        await submitContactForm(values);
        
        // Success handling
        toast.success('Mensagem enviada com sucesso!');
        resetForm();
      } catch (error) {
        // Error handling
        toast.error('Erro ao enviar mensagem. Tente novamente.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone">Telefone</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="error">{formik.errors.phone}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="error">{formik.errors.message}</div>
        ) : null}
      </div>

      <button 
        type="submit" 
        disabled={formik.isSubmitting || !formik.isValid}
      >
        {formik.isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
    </form>
  );
}

// Utility function for form submission
async function submitContactForm(formData) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Erro na submissão do formulário');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro no envio do formulário:', error);
    throw error;
  }
}

// Project Validation
function validateProject(project) {
  const errors = {};

  if (!project.name || project.name.trim() === '') {
    errors.name = 'Nome do projeto é obrigatório';
  }

  if (!project.description || project.description.length < 10) {
    errors.description = 'Descrição deve ter pelo menos 10 caracteres';
  }

  if (!project.technologies || project.technologies.length === 0) {
    errors.technologies = 'Selecione pelo menos uma tecnologia';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

// Performance Tracking Utility
function trackPagePerformance() {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const { timing } = window.performance;
    const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
    
    // Log or send performance metrics
    console.log('Page Load Time:', pageLoadTime);
    
    // Optional: Send to analytics
    sendPerformanceMetrics({
      loadTime: pageLoadTime,
      ttfb: timing.responseStart - timing.navigationStart,
      domInteractive: timing.domInteractive - timing.navigationStart
    });
  }
}

export { 
  contactValidationSchema, 
  ContactForm, 
  validateProject, 
  trackPagePerformance 
};