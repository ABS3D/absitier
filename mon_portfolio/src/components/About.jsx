import React from "react";
import "./About.css";
import "./Typewriter.css";
import Tete from "./Tete";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div className="about-page">
      <Navbar />
      <section className="about-section">
        <Tete />
        <h2 className="section-heading">About Me</h2>
        <div className="about-content">
        <div className="about-photo">
            <img src="/ana.jpg" alt="My portrait" className="portrait-img" />
          </div>
          
          <div className="about-text">
            <p>
              🎓 <strong>My Training Journey in Web Development and Data Analysis</strong>
            </p>
            <p>
              I completed a <strong>400-hour Web Developer program at OpenClassrooms</strong>, where I worked on several real-world projects and developed strong technical skills in:
            </p>
            <ul>
              <li><strong>HTML5 / CSS3</strong>: building responsive websites (e.g., Booki, OhMyFood)</li>
              <li><strong>JavaScript</strong>: creating dynamic and interactive user interfaces</li>
              <li><strong>React.js</strong>: developing single-page applications (e.g., Kasa, personal portfolio)</li>
              <li><strong>SEO, accessibility, and web performance optimization</strong></li>
              <li><strong>Project management methodologies</strong>: version control, deployment, UX/UI best practices</li>
            </ul>
            <p>
              This program awarded me a <strong>Level 5 RNCP diploma</strong>, officially recognized in France and equivalent to <strong>a 2-year associate degree (BAC+2)</strong>.
            </p>
            <p>
              I further strengthened my skills through a <strong>certified Software Engineering training program at Correlation One</strong>, where I learned to:
            </p>
            <ul>
              <li>Master modern <strong>front-end development</strong> (HTML, CSS, JavaScript, ReactJS)</li>
              <li>Work with <strong>APIs</strong>, perform <strong>CRUD operations</strong>, and use <strong>SQL databases</strong></li>
              <li>Apply best practices in <strong>debugging</strong>, <strong>version control (Git)</strong>, and collaborate using <strong>Agile/Scrum</strong> methodologies</li>
              <li>Solve common <strong>algorithmic challenges</strong> with precision</li>
            </ul>
            <p>
              I successfully completed this program and earned a <strong>certificate of completion</strong>.
            </p>
            <p>
              Currently, I’m continuing my specialization through a <strong>Data Analyst training program at Correlation One</strong>, where I’m deepening my expertise in data processing, statistical analysis, and professional data tools.
            </p>
            <p>
              In parallel, I have enrolled at <strong>Studi</strong> in the <strong>Bachelor’s in Python Application Development</strong>, aiming to obtain a <strong>Bachelor's degree</strong> and further solidify my career in software development.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
