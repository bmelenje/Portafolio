import "./Projects.scss";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <header className="projects__header">
          <h2>Proyectos</h2>
          <p>
            Algunos proyectos donde he aplicado desarrollo de software,
            integración con hardware y arquitecturas modernas.
          </p>
        </header>

        <div className="projects__grid">
          {/* Proyecto 1 */}
          <div className="project__card">
            <h3>Sistema de Gestión Web</h3>
            <p>
              Aplicación web para gestión de usuarios, roles y operaciones,
              desarrollada con arquitectura frontend y backend desacoplada.
            </p>

            <ul className="project__stack">
              <li>React</li>
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>APIs REST</li>
            </ul>

            <div className="project__links">
              <a href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="project__card">
            <h3>Sistema IoT de Monitoreo</h3>
            <p>
              Sistema de monitoreo con sensores y microcontroladores,
              integrando hardware y software para visualización de datos.
            </p>

            <ul className="project__stack">
              <li>ESP32</li>
              <li>Arduino</li>
              <li>Firebase</li>
              <li>WiFi</li>
            </ul>

            <div className="project__links">
              <a href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="project__card">
            <h3>Aplicación Full Stack</h3>
            <p>
              Plataforma web con autenticación, roles y persistencia de datos,
              enfocada en buenas prácticas de desarrollo.
            </p>

            <ul className="project__stack">
              <li>React</li>
              <li>Supabase</li>
              <li>SCSS</li>
              <li>Vite</li>
            </ul>

            <div className="project__links">
              <a href="#" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
