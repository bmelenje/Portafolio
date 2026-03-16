import React from 'react';
import "./Projects.scss";

const myProjects = [
  {
    id: 1,
    title: "Sistema de Domótica Integral",
    description: "Plataforma IoT para el control automatizado y manual de iluminación, ventilación y acceso mediante RFID con monitoreo en tiempo real.",
    type: "Full Stack & IoT",
    stack: [
      { name: "NestJS", percentage: 40, color: "#E0234E" },
      { name: "Ionic", percentage: 25, color: "#3880FF" },
      { name: "ESP32", percentage: 20, color: "#E7352C" },
      { name: "PostgreSQL", percentage: 15, color: "#336791" }
    ],
    github: "https://github.com/bmelenje/domotica-app",
    demo: "" 
  },
  {
    id: 2,
    title: "Talento Tech Project",
    description: "Desarrollo integral realizado bajo el programa Talento Tech, aplicando metodologías ágiles y stacks modernos para soluciones escalables.",
    type: "Web Development",
    stack: [
      { name: "React", percentage: 45, color: "#61DAFB" },
      { name: "Node.js", percentage: 30, color: "#68A063" },
      { name: "Express", percentage: 15, color: "#ffffff" },
      { name: "MongoDB", percentage: 10, color: "#47A248" }
    ],
    github: "https://github.com/bmelenje/TALENTO_TECH",
    demo: ""
  },
  {
    id: 3,
    title: "Healthbot AI",
    description: "Chatbot inteligente para el sector salud enfocado en la gestión de citas y asistencia preliminar al paciente.",
    type: "AI & Software",
    stack: [
      { name: "Python", percentage: 40, color: "#FFD43B" },
      { name: "OpenAI API", percentage: 30, color: "#74aa9c" },
      { name: "FastAPI", percentage: 20, color: "#05998b" },
      { name: "React", percentage: 10, color: "#61DAFB" }
    ],
    github: "https://github.com/tu-usuario/healthbot",
    demo: ""
  }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        
        <header className="projects__header">
          <h2>Proyectos <span className="highlight">Destacados</span></h2>
          <p>
            Análisis técnico del stack utilizado: Integración de Software moderno, 
            Hardware (IoT) y soluciones con Inteligencia Artificial.
          </p>
        </header>

        <div className="projects__grid">
          {myProjects.map((project) => (
            <article className="project__card" key={project.id}>
              
              <div className="project__content">
                <div className="project__type-tag">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Sección de Barras de Tecnologías (Inspirado en Skills) */}
                <div className="project__tech-analysis">
                  {project.stack.map((tech, index) => (
                    <div key={index} className="project__tech-item">
                      <div className="project__tech-header">
                        <span className="project__tech-name">{tech.name}</span>
                        <span className="project__tech-percentage">{tech.percentage}%</span>
                      </div>
                      <div className="project__bar-bg">
                        <div 
                          className="project__bar-fill" 
                          style={{ 
                            width: `${tech.percentage}%`, 
                            background: `linear-gradient(90deg, ${tech.color} 0%, ${tech.color}aa 100%)`,
                            boxShadow: `0 0 10px ${tech.color}66`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="project__links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-github"
                  >
                    GitHub
                  </a>
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-demo"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}