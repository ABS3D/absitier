import React from "react";
import "./Contact.css";
import "./Typewriter.css";
import Tete from "./Tete";        
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className="contact-page">
        <Navbar/>
        <section className="contact-section">
        <Tete />
      <h2 className="section-heading ">Contact</h2>
      <form className="contact-form" action="https://formspree.io/f/mgvklyly" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
    <Footer/>
    </div>
   
  );
}
