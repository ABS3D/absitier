import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <h1 className="section-heading typewriter">
        Hi, my name is <span className="highlight">ABBAS YOUSSOUF</span>
      </h1>

      <p>I’m a passionate software engineer and data analyst</p>
      <p>helping businesses create high-performing websites</p>
      <p>improve SEO, and maintain a strong online presence</p>
      <p>By turning data into actionable insights</p>
      <p>I drive strategic decisions that boost user experience and digital growth.</p>

      <a href="#project-gallery" className="cta-button">View My Work</a>




      <div className="project-showcase" id="project-gallery">
        <h2 className="section-subheading">My training  programme</h2>
        <div className="project-gallery">
          <div className="project-item">
            <img src="/booki.png" alt="Project 1" className="project-img" />
            <p className="project-desc">This work was carried out for Project 2 of the OpenClassrooms Web Developer training program.
Booki is a small company that helps users plan their vacations by finding accommodations and activities in their destination city.
Users can also apply filters to view results based on selected themes.
This prototype was built using HTML5 and CSS3.</p>
         
          </div>
          <div className="project-item">
            <img src="/food.png" alt="Project 2" className="project-img" />
            <p className="project-desc">This work was carried out for Project 3 of the OpenClassrooms Web Integrator training program.
This repository contains the code for the OhMyFood mobile website.

OhMyFood is a startup aiming to establish itself in the gourmet dining market.
The website allows users to browse menus from fine-dining restaurants and book a table.
They can also pre-select their meals to reduce wait times once at the restaurant.
The work on this project focused on implementing a design mockup, creating CSS animations, and using Sass.</p>
          </div>

          <div className="project-item">
            <img src="/panthere.png" alt="Project 3" className="project-img" />
            <p className="project-desc">This work was carried out for Project 4 of the OpenClassrooms Web Integrator training program. Optimize an existing website
Improve SEO
Adopt best practices for an existing website
Research web development best practices
Optimize the size and speed of a website
Write maintainable HTML and CSS code
Optimize a website's search engine visibility
Ensure a website’s accessibility</p>
          </div>

          <div className="project-item">
            <img src="/kanap.png" alt="Project 5" className="project-img" />
            <p className="project-desc">This work is the fifth project of OpenClassrooms Web Developer training.
This repo contains the front-end and back-end of Kanap online shop.
Kanap is a sofa brand that used to sell only through its physical store. This online store is then their first ever.
The work on this repo was focused on the link with the API, and the integration of its elements in the already-constructed pages.</p>
          </div>

          <div className="project-item">
            <img src="/piquante.png" alt="Project 3" className="project-img" />
            <p className="project-desc">This work is the 6th project of OpenClassrooms Web Developer training.
            This repo contains the backend of Hot Takes web app. Hot Takes is an application, developped for the brand Piiquante, that allows users to upload and rate spicy sauces.</p>
          </div>

          <div className="project-item">
            <img src="/kasa.png" alt="Project 3" className="project-img" />
            <p className="project-desc">Kasa is a real estate rental website developed as part of the OpenClassrooms training program project 7.
Built with React and Vite, the project showcases the creation of a dynamic interface that allows users to browse available rentals, filter results, and view detailed property pages.
The focus was placed on component modularity, smooth navigation using React Router, and the integration of interactive animations (carousel, collapsible panels) to ensure an optimal user experience.</p>
          </div>
        </div>
      </div>


      
      <div className="project-showcase" id="project-gallery">
        <h2 className="section-subheading">My professional prestations</h2>
        <div className="project-gallery">
          <div className="project-item">
            <img src="/jaycia.png" alt="Project 1" className="project-img" />
            <p className="project-desc">This is a project I designed and developed from A to Z using WordPress.
            Founded in 2023, Jaycia Office PR is a press office specializing in the exclusive fields of fashion and luxury.</p>
            <a href="https://jaycia-office.fr" className="cta-button">jaycia-office</a>
          </div>
          <div className="project-item">
            <img src="/danis.png" alt="Project 2" className="project-img" />
            <p className="project-desc">Mondaine Home is an e-commerce website specializing in luxury furniture, built with PrestaShop.
The team reached out to me to add new products to the site and enhance its online performance, focusing on technical optimization and increasing web visibility.</p>
<a href="www.mondainehome.com/fr" className="cta-button">mondainehome</a>
          </div>

          <div className="project-item">
            <img src="/ibagus.png" alt="Project 3" className="project-img" />
            <p className="project-desc">IBAGUS is a consulting firm specializing in supporting institutions in frontier markets.
I was approached by their team to create their website.
I was responsible for setting up the hosting, connecting the domain name, and configuring the site so it was accessible online.
They then continued designing the pages either in-house or with another service provider.</p>
<a href="https://www.ibagus.uk" className="cta-button">ibagus</a>
          </div>

          
        </div>
      </div>
    </section>
  );
}
