import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <header className="contact__header">
          <h2>Contacto</h2>
          <p>
            ¿Te interesa trabajar conmigo o tienes un proyecto en mente?
            Estoy abierto a nuevas oportunidades.
          </p>
        </header>

        <div className="contact__content">
          <a href="mailto:tuemail@email.com" className="contact__card">
            📧
            <span>Email</span>
            <small>tuemail@email.com</small>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="contact__card"
          >
            💼
            <span>LinkedIn</span>
            <small>Perfil profesional</small>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="contact__card"
          >
            💻
            <span>GitHub</span>
            <small>Repositorios</small>
          </a>
        </div>
      </div>
    </section>
  );
}
