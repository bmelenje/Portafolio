import "./Skills.scss";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <header className="skills__header">
          <h2>Skills & Tecnologías</h2>
          <p>
            Tecnologías y herramientas que utilizo para desarrollar soluciones
            de software, integrando frontend, backend y sistemas de ingeniería
            electrónica.
          </p>
        </header>

        <div className="skills__grid">
          {/* Frontend */}
          <div className="skills__card frontend">
            <h3>Desarrollo Frontend</h3>
            <ul className="skills__list">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Vite</li>
              <li>HTML5 / CSS3</li>
              <li>SCSS</li>
              <li>Diseño responsive</li>
              <li>Arquitectura de componentes</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="skills__card backend">
            <h3>Backend & Software</h3>
            <ul className="skills__list">
              <li>Node.js</li>
              <li>APIs REST</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>SQLite</li>
              <li>Firebase</li>
              <li>Supabase</li>
              <li>Autenticación y roles</li>
            </ul>
          </div>

          {/* IoT */}
          <div className="skills__card iot">
            <h3>Ingeniería Electrónica & IoT</h3>
            <ul className="skills__list">
              <li>Arduino (UNO, Mega)</li>
              <li>ESP32 (DOIT Dev Kit)</li>
              <li>ESP8266</li>
              <li>Sensores y actuadores</li>
              <li>Serial, WiFi y Bluetooth</li>
              <li>Proyectos académicos y propios</li>
              <li>Integración hardware ↔ software</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="skills__card tools">
            <h3>Herramientas & Metodología</h3>
            <ul className="skills__list">
              <li>Git / GitHub</li>
              <li>Documentación técnica</li>
              <li>Trabajo en equipo</li>
              <li>Metodologías ágiles</li>
              <li>Windows</li>
              <li>Linux (VMs y VoIP)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
