import React from "react";
import "./Programming.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-heading ">Projects</h2>
      <div className="project-grid">
        <div className="project-card yellow">JS</div>
        <div className="project-card teal">
          <img src="/tailwind-icon.svg" alt="Tailwind CSS" className="tech-icon" />
        </div>
        <div className="project-card green">
          <img src="/nodejs-icon.svg" alt="Node.js" className="tech-icon" />
        </div>
        <div className="project-card red">&lt;/&gt;</div>
      </div>
    </section>
  );
}
