import React from "react";
import "./Projects.css";
import "./Typewriter.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-heading typewriter">Seo</h2>
      
      <div className="project-grid">
        <div className="project-card blue">
          <img src="/seo-3-svgrepo-com.svg" alt="seo" className="tech-icon" />
        </div>
        <div className="project-card blue">
          <img src="/google-ads-svgrepo-com.svg" alt="google-ads" className="tech-icon" />
        </div>
        <div className="project-card blue">
          <img src="/google-analytics-svgrepo-com.svg" alt="google-analytics" className="tech-icon" />
        </div>
        <div className="project-card blue">
          <img src="/social-media-campaign-svgrepo-com.svg" alt="social-media" className="tech-icon" />
        </div>

      </div>

    </section>

    
  );
}
