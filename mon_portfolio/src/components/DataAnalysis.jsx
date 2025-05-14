import React from "react";
import "./Projects.css";
import "./Typewriter.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-heading typewriter">Data analysis</h2>
      
      <div className="project-grid">
        <div className="project-card">
          <img src="/excel2-svgrepo-com.svg" alt="excel" className="tech-icon" />
        </div>
        <div className="project-card blue">
          <img src="/tableau-icon-svgrepo-com.svg" alt="tableau" className="tech-icon" />
        </div>
        <div className="project-card blue">
          <img src="/icons8-power-bi.svg" alt="power-bi" className="tech-icon" />
        </div>
        <div className="project-card">
          <img src="/sql-svgrepo-com.svg" alt="sql" className="tech-icon" />
        </div>
        <div className="project-card">
          <img src="/python-svgrepo-com.svg" alt="python" className="tech-icon" />
        </div>

      </div>

    </section>

    
  );
}
