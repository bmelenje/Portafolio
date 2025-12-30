import "./About.scss";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <header className="about__header">
          <h2>Sobre mí</h2>
          <p>
            Un perfil que combina ingeniería electrónica y desarrollo de
            software para crear soluciones tecnológicas completas.
          </p>
        </header>

        <div className="about__content">
          {/* Texto principal */}
          <div className="about__text">
            <p>
              Soy ingeniero en electrónica con una fuerte orientación al
              desarrollo de software. Me especializo en construir soluciones
              donde el hardware y el software trabajan de forma integrada,
              desde sistemas embebidos hasta aplicaciones web modernas.
            </p>

            <p>
              Tengo experiencia desarrollando interfaces frontend, arquitecturas
              backend y sistemas IoT, lo que me permite entender los proyectos
              de forma integral y tomar mejores decisiones técnicas.
            </p>

            <p>
              Me apasiona el desarrollo de software y busco seguir creciendo
              profesionalmente en esta área, sin dejar de aprovechar mi base
              sólida en ingeniería electrónica.
            </p>
          </div>

          {/* Cards laterales */}
          <div className="about__cards">
            <div className="about__card">
              <span>🎓</span>
              <h4>Ingeniería</h4>
              <p>Formación en electrónica y sistemas</p>
            </div>

            <div className="about__card">
              <span>💻</span>
              <h4>Software</h4>
              <p>Frontend, backend y APIs modernas</p>
            </div>

            <div className="about__card">
              <span>⚙️</span>
              <h4>IoT</h4>
              <p>Sistemas embebidos e integración</p>
            </div>

            <div className="about__card">
              <span>🔧</span>
              <h4>Full Stack</h4>
              <p>Visión completa del producto</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
