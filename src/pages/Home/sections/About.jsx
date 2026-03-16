import React from 'react';
import "./About.scss";
import { FaGraduationCap, FaCode, FaMicrochip, FaLayerGroup } from "react-icons/fa6";
import profileImage from "../../../assets/images/perfil.jpg"; 

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        
        <header className="about__header">
          <h2 className="about__title">Sobre <span className="highlight">Mí</span></h2>
          <p className="about__subtitle">
            Ingeniería de precisión + Agilidad de software. <br/>
            Construyendo puentes entre el mundo físico y el digital.
          </p>
        </header>

        <div className="about__content">
          
          <div className="about__text-column">
            
            <div className="about__profile-wrapper">
              <div className="about__profile-glow"></div>
              <img src={profileImage} alt="Foto de perfil Esteban" className="about__profile-img" />
            </div>

            <div className="about__bio">
              <p>
                Soy <strong>Ingeniero en Electrónica</strong> con una evolución natural hacia el <strong>Desarrollo de Software</strong>. 
                Mi especialidad no es solo escribir código, sino entender la máquina completa: desde el voltaje en un sensor hasta la petición HTTP en la nube.
              </p>

              <p>
                A diferencia de un desarrollador web tradicional, mi background en ingeniería me permite abordar problemas de 
                <strong> optimización, latencia y arquitectura</strong> con una visión mucho más profunda. 
                No solo hago que funcione; hago que sea robusto.
              </p>

              <p>
                Actualmente, busco proyectos desafiantes donde pueda explotar esta dualidad:
                crear interfaces modernas (React/Ionic) que se sientan vivas y sistemas de backend (NestJS/Python) que sean inquebrantables.
              </p>
            </div>
            
            <a href="/cv.pdf" target="_blank" className="btn-download">
              Descargar CV
            </a>
          </div>

          <div className="about__cards-grid">
            
            <div className="about__card engineering">
              <div className="card-icon"><FaGraduationCap /></div>
              <div className="card-info">
                <h4>Base Ingenieril</h4>
                <p>Pensamiento sistémico y resolución de problemas complejos.</p>
              </div>
            </div>

            <div className="about__card software">
              <div className="card-icon"><FaCode /></div>
              <div className="card-info">
                <h4>Software Architect</h4>
                <p>Clean Code, patrones de diseño y escalabilidad.</p>
              </div>
            </div>

            <div className="about__card iot">
              <div className="card-icon"><FaMicrochip /></div>
              <div className="card-info">
                <h4>Hardware & IoT</h4>
                <p>Sistemas embebidos, ESP32 y telemetría en tiempo real.</p>
              </div>
            </div>

            <div className="about__card fullstack">
              <div className="card-icon"><FaLayerGroup /></div>
              <div className="card-info">
                <h4>Full Stack Vision</h4>
                <p>Control total del producto: Frontend, Backend y Despliegue.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}