import "./Hero.scss";
import heroImage from "../../../assets/images/hero-engineering.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Columna izquierda */}
        <div className="hero__content">
          <h1 className="hero__title">
            Ingeniero en Electrónica <br />
            & Desarrollador de Software
          </h1>

          <p className="hero__text">
            Desarrollo soluciones digitales combinando software moderno con
            pensamiento ingenieril.
          </p>
        </div>

        {/* Columna derecha */}
        <div className="hero__image">
          <img
            src={heroImage}
            alt="Ingeniería electrónica y desarrollo de software"
          />
        </div>
      </div>
    </section>
  );
}
