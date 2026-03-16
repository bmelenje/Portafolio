import React from 'react';
import './Contact.scss';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const email = "estebanmelenje02@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/brian-esteban-melenje-zu%C3%B1iga-bbb90a363/";
  const githubUrl = "https://github.com/bmelenje"; // Basado en tus repos anteriores

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <header className="contact__header">
          <h2>Contacto <span className="highlight">Profesional</span></h2>
          <p>
            ¿Tienes un proyecto en mente o buscas un perfil con experiencia en 
            Software e IoT? Hagamos que suceda.
          </p>
        </header>

        <div className="contact__content">
          {/* Card de Email - Abre el cliente de correo */}
          <a href={`mailto:${email}`} className="contact__card">
            <div className="contact__icon-wrapper">
              <FaEnvelope className="contact__icon" />
            </div>
            <div className="contact__info">
              <span>Email</span>
              <small>{email}</small>
            </div>
          </a>

          {/* Card de LinkedIn */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="contact__card"
          >
            <div className="contact__icon-wrapper">
              <FaLinkedin className="contact__icon" />
            </div>
            <div className="contact__info">
              <span>LinkedIn</span>
              <small>Conecta conmigo</small>
            </div>
          </a>

          {/* Card de GitHub */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="contact__card"
          >
            <div className="contact__icon-wrapper">
              <FaGithub className="contact__icon" />
            </div>
            <div className="contact__info">
              <span>GitHub</span>
              <small>Explora mi código</small>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}