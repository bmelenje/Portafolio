import React, { useState, useEffect } from 'react';
import "./Navbar.scss";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__logo">
          Esteban<span>.dev</span>
        </div>

        <nav className="navbar__nav">
          <a href="#about">Sobre mí</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </nav>

        <div className="navbar__actions">
          <a href="/cv-esteban.pdf" download className="navbar__cv-btn">
            <FaDownload /> CV
          </a>
        </div>
      </div>
    </header>
  );
}