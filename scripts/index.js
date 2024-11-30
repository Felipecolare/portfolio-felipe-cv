import React, { useState } from 'react';
import './App.css';

// Skills Data
const skillsData = [
  { name: 'HTML5', icon: 'assets/languages/html.svg' },
  { name: 'CSS3', icon: 'assets/languages/css.svg' },
  { name: 'JavaScript', icon: 'assets/languages/javascript.svg' },
  { name: 'TypeScript', icon: 'assets/languages/typescript.svg' },
  { name: 'React.js', icon: 'assets/languages/react.svg' },
  { name: 'Next.js', icon: 'assets/languages/nextjs.svg' },
  { name: 'CSS-in-JS', icon: 'assets/languages/styledcomponents.svg' },
  { name: 'Material UI', icon: 'assets/languages/materialui.svg' },
  { name: 'Tailwind CSS', icon: 'assets/languages/tailwindcss.svg' }
];

const projectsData = [
  {
    id: 1,
    name: 'The Movie Guide',
    image: 'assets/projects/themovieguide.jpg',
    date: '17 de Março de 2022',
    technologies: ['react', 'typescript', 'styledcomponents', 'materialui', 'figma']
  },
  {
    id: 2,
    name: 'DoWhile 2021 Virtual Badge',
    image: 'assets/projects/dowhile2021virtualbadge.jpg',
    date: '24 de Outubro de 2021',
    technologies: ['html', 'sass', 'javascript', 'figma']
  }
];

const contactData = [
  {
    type: 'E-mail',
    value: 'Felipe83105202@gmail.com',
    icon: 'images/o-email (1).svg',
    link: 'mailto:Felipe83105202@gmail.com'
  },
  {
    type: 'Telefone',
    value: '351927971906',
    icon: 'images/icons8-telefone-ao-quadrado-32.svg',
    link: 'https://api.whatsapp.com/send?phone=351927971906'
  },
  {
    type: 'LinkedIn',
    value: '@felipe83105202',
    icon: 'images/icons8-linkedin.svg',
    link: 'https://www.linkedin.com/in/felipe83105202/'
  },
  {
    type: 'GitHub',
    value: 'Felipecolare',
    icon: 'images/icons8-github.svg',
    link: 'https://github.com/Felipecolare'
  }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <MainContent />
    </div>
  );
}

function Header({ isDarkMode, toggleTheme }) {
  return (
    <header>
      <div className="container">
        <div className="menu">
          <i className="ri-menu-line"></i>
          <i className="ri-close-line hidden"></i>
        </div>
        <a href="#sobre">
          <h2>Portfolio</h2>
        </a>
        <div className="toggle">
          <input 
            type="checkbox" 
            name="checkbox" 
            id="checkbox" 
            checked={isDarkMode}
            onChange={toggleTheme}
          />
          <label htmlFor="checkbox" className="label">
            <div className="box"></div>
          </label>
        </div>
      </div>
    </header>
  );
}

function MainContent() {
  return (
    <>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="js-section active">
      <div className="container">
        <div className="banner">
          <div className="intro">
            <div className="title">
              <h1>Olá, eu sou o</h1>
              <span>Felipe Augusto :)</span>
              <p>Desenvolvedor Front-End</p>
            </div>
            <div className="actions">
              <a href="assets/cv/cv-felipe-augusto.pdf" download>Download CV</a>
              <a href="mailto:Felipe83105202@gmail.com" target="_blank" rel="noopener noreferrer">Entrar em contato</a>
            </div>
          </div>
          <div className="profile">
            <a href="https://github.com/Felipecolare" target="_blank" rel="noopener noreferrer">
              <img src="images/WhatsApp Image 2024-09-22 at 13.05.30.jpeg" alt="avatar" />
            </a>
          </div>
        </div>
        <div className="about">
          <h2>Sobre mim</h2>
          <p>Desenvolvedor Front-end com experiência em React.js, Next.js, Redux, JavaScript, TypeScript, Styled Components, Material UI e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis. Também possui experiência em projetos gerenciados por Metodologias Ágeis. Formado em Sistemas de Informação e cursando Especialização em Front-End na Digital House Brasil.</p>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="js-section">
      <div className="skills">
        <div className="container">
          <h2>Habilidades</h2>
          <div className="cards">
            {skillsData.map((skill, index) => (
              <div key={index} className="box">
                <p>{skill.name}</p>
                <img src={skill.icon} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="js-section">
      <div className="container">
        <h2>Projetos</h2>
        <div className="highlights">
          <h3>Destaques</h3>
          <div className="cards-projects">
            {projectsData.map(project => (
              <div key={project.id} className="box">
                <div className="cover">
                  <img src={project.image} alt={project.name} />
                  <div className="details">
                    <p>{project.name}</p>
                    <div className="mini-languages">
                      {project.technologies.map((tech, index) => (
                        <img 
                          key={index} 
                          src={`assets/mini-languages/${tech}.svg`} 
                          alt={tech} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {project.date && (
                  <div className="description">
                    <p>{project.date}</p>
                    <a href="#" className="view-more">Ver mais</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contacts" className="js-section">
      <div className="container">
        <h2>Contatos</h2>
        <div className="icons">
          {contactData.map((contact, index) => (
            <div key={index} className="icon">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <div className="box">
                  <img src={contact.icon} alt={contact.type} />
                </div>
                <p>{contact.type}</p>
                <p>{contact.value}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
