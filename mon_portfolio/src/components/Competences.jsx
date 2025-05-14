import React from "react";
import "./Competences.css";
import "./Typewriter.css";
import Tete from "./Tete";        
import Navbar from "./Navbar";
import Projects from "./Projects";
import DataAnalysis from "./DataAnalysis";
import Seo from "./Seo";
import Cms from "./Cms";
import Footer from "./Footer";

export default function Competences() {
  return (
    <div className="competences-page">
      <Navbar />
      <section className="competences-section">
        <Tete />
        <Projects />
        <Cms />
        <Seo />
        <DataAnalysis />
      </section>
      <Footer />
    </div>
  );
}
