import React from 'react';
import './Skills.scss';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaDocker, FaLinux } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiIonic, SiPostgresql, SiEspressif, SiPostman, SiArduino } from "react-icons/si";
import { MdSettingsInputComponent, MdCode, MdDeveloperBoard, MdWifiTethering } from "react-icons/md";

const CategoryIcons = {
  frontend: <MdCode />,
  backend: <FaDatabase />,
  iot: <MdDeveloperBoard />
};

const skillsOverview = [
  { name: "Frontend & Mobile", percentage: 40, color: "#00f2fe", icon: CategoryIcons.frontend },
  { name: "Backend & Cloud", percentage: 35, color: "#fe019a", icon: CategoryIcons.backend },
  { name: "Electrónica & IoT", percentage: 25, color: "#fae100", icon: CategoryIcons.iot }
];

const coreTech = [
  { name: "React / Native", percentage: 95, color: "#61DAFB", icon: <FaReact />, level: "Experto" },
  { name: "NestJS Framework", percentage: 85, color: "#E0234E", icon: <SiNestjs />, level: "Avanzado" },
  { name: "Ionic / Capacitor", percentage: 90, color: "#3880FF", icon: <SiIonic />, level: "Avanzado" },
  { name: "ESP32 / IoT", percentage: 80, color: "#E7352C", icon: <SiEspressif />, level: "Intermedio" },
  { name: "Python / MicroPy", percentage: 75, color: "#FFD43B", icon: <FaPython />, level: "Intermedio" },
  { name: "Node.js", percentage: 85, color: "#68A063", icon: <FaNodeJs />, level: "Avanzado" },
];

const toolsAndMethods = [
  { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },       
  { name: "Linux Server", icon: <FaLinux />, color: "#FCC624" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },    
  { name: "Arduino C++", icon: <SiArduino />, color: "#00979D" },
];

const Skills = () => {
  let currentAngle = 0;
  const gradientParts = skillsOverview.map(skill => {
    const endAngle = currentAngle + (skill.percentage * 3.6);
    const part = `${skill.color} ${currentAngle}deg ${endAngle}deg`;
    currentAngle = endAngle;
    return part;
  });
  const conicGradient = `conic-gradient(${gradientParts.join(', ')})`;

  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <header className="skills__header">
          <h2 className="skills__title">Arsenal <span className="highlight">Tecnológico</span></h2>
          <p className="skills__subtitle">
            Stack completo de ingeniería: Desarrollo Full Stack moderno fusionado con control de hardware.
          </p>
        </header>

        <div className="skills__dashboard">
          
          <div className="skills__card skills__card--overview">
            <h3 className="skills__card-title">Distribución de Enfoque</h3>
            <div className="skills__chart-wrapper">
              <div className="skills__donut-chart" style={{ background: conicGradient }}>
                <div className="skills__chart-center">
                  <span className="skills__chart-number">100%</span>
                  <span className="skills__chart-text">Full Stack</span>
                </div>
              </div>
            </div>
            
            <div className="skills__legend">
              {skillsOverview.map((skill, index) => (
                <div key={index} className="skills__legend-item">
                  <span className="skills__legend-dot" style={{ backgroundColor: skill.color, boxShadow: `0 0 10px ${skill.color}` }}></span>
                  <span className="skills__legend-name">{skill.name}</span>
                  <span className="skills__legend-value" style={{ color: skill.color }}>{skill.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills__card skills__card--core">
            <h3 className="skills__card-title">Tecnologías Principales</h3>
            <div className="skills__list">
              {coreTech.map((tech, index) => (
                <div key={index} className="skills__item">
                  <div className="skills__item-header">
                    <div className="skills__tech-info">
                      <span className="skills__icon" style={{ color: tech.color, filter: `drop-shadow(0 0 5px ${tech.color})` }}>
                        {tech.icon}
                      </span>
                      <span className="skills__name">{tech.name}</span>
                    </div>
                    <span className="skills__level">{tech.level}</span>
                  </div>
                  
                  <div className="skills__bar-bg">
                    <div 
                      className="skills__bar-fill" 
                      style={{ 
                        width: `${tech.percentage}%`, 
                        background: `linear-gradient(90deg, ${tech.color} 0%, ${tech.color}aa 100%)`,
                        boxShadow: `0 0 12px ${tech.color}66`
                      }}
                    >
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills__card skills__card--tools">
            <h3 className="skills__card-title">Herramientas & Entorno</h3>
            <div className="skills__grid-tools">
              {toolsAndMethods.map((tool, index) => (
                <div 
                  key={index} 
                  className="skills__tool-badge"
                  style={{ borderColor: `${tool.color}40` }}
                >
                  <span className="skills__tool-icon" style={{ color: tool.color }}>{tool.icon}</span>
                  <span className="skills__tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;