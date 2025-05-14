import React from "react";
import "./Projects.css";
import "./Typewriter.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-heading typewriter">Cms</h2>
      
      <div className="project-grid">
        <div className="project-card">
          <img src="/wordpress-color-svgrepo-com.svg" alt="wordpress" className="tech-icon" />
        </div>
        <div className="project-card">
          <img src="/shopify-color-svgrepo-com.svg" alt="shopify" className="tech-icon" />
        </div>
        <div className="project-card blue">
          <img src="/wix-svgrepo-com.svg" alt="wix" className="tech-icon" />
        </div>
        <div className="project-card">
          <img src="/prestashop-logo-svgrepo-com.svg" alt="prestashop" className="tech-icon" />
        </div>

      </div>

    </section>

    
  );
}
