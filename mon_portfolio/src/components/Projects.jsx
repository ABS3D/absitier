import React from "react";
import "./Projects.css";
import "./Typewriter.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-heading typewriter">Programming Languages</h2>

      <h3 className="section-subheading">Frontend</h3>
      <div className="project-grid">
        <div className="project-card">
          <img src="/html-5-svgrepo-com.svg" alt="HTML5" className="tech-icon" />
        </div>
        <div className="project-card blue">
          <img src="/css-3-svgrepo-com.svg" alt="CSS3" className="tech-icon" />
        </div>
        <div className="project-card blue">
          <img src="/icons8-bootstrap.svg" alt="Bootstrap" className="tech-icon" />
        </div>
        <div className="project-card">
          <img src="/icons8-java-script.svg" alt="JavaScript" className="tech-icon" />
        </div>
        <div className="project-card">
          <img src="/react.svg" alt="React" className="tech-icon" />
        </div>
        <div className="project-card blue">
          <img src="/icons8-tailwindcss.svg" alt="TailwindCSS" className="tech-icon" />
        </div>
      </div>

      <h3 className="section-subheading">Backend</h3>
      <div className="project-grid">
        <div className="project-card">
          <img src="/icons8-node-js.svg" alt="Node.js" className="tech-icon" />
        </div>
        <div className="project-card dark">
          <img src="/python-svgrepo-com.svg" alt="Python" className="tech-icon" />
        </div>
        <div className="project-card">
          <img src="/php2-svgrepo-com.svg" alt="PHP" className="tech-icon" />
        </div>
        <div className="project-card">
          <img src="/sql-svgrepo-com.svg" alt="SQL" className="tech-icon" />
        </div>
        <div className="project-card">
          <img src="/icons8-git.svg" alt="Git" className="tech-icon" />
        </div>
        <div className="project-card">
          <img src="/icons8-github.svg" alt="GitHub" className="tech-icon" />
        </div>
      </div>

      <h3 className="section-subheading">UI/UX Design</h3>
      <div className="project-card">
          <img src="/figma-svgrepo-com.svg" alt="figma" className="tech-icon" />
        </div>
    </section>

    
  );
}
