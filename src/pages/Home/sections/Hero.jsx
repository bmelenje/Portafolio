import "./Hero.scss";
import heroImage from "../../../assets/images/hero-engineering.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Columna izquierda: Texto */}
        <div className="hero__content">
          <h1 className="hero__title">
            Desarrollador Full Stack <br />
            <span className="hero__highlight">& Entusiasta IoT</span>
          </h1>

          {/* Subtítulo: Tu propuesta de valor única */}
          <h2 className="hero__subtitle">
            Transformo retos complejos en sistemas funcionales. 
            Experiencia real conectando <strong>hardware</strong> y desarrollando ecosistemas de software Web y Móvil.
          </h2>

          {/* Descripción: Tu filosofía de ingeniero */}
          <p className="hero__text">
            Soy un ingeniero proactivo impulsado por el <em>"¿por qué?"</em>. 
            Me obsesiona desarmar problemas complejos para encontrar la mejor solución técnica. 
            He llevado proyectos desde la idea hasta la producción, combinando 
            <strong> React, Ionic y Express</strong> con una mentalidad de ingeniería de precisión.
          </p>

          {/* Botones de llamada a la acción (CTA) */}
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">Ver Proyectos</a>
            <a href="#contact" className="btn btn--secondary">Hablemos</a>
          </div>
        </div>

        {/* Columna derecha: Imagen */}
        <div className="hero__image">
          <img
            src={heroImage}
            alt="Ingeniero desarrollando soluciones IoT y Software"
          />
        </div>
      </div>
    </section>
  );
}