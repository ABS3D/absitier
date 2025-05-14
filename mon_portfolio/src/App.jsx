import React, { useState, useEffect } from "react";
import Tete from "./components/Tete";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate a short delay to see the preloader
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <div className="app-container">
      <Navbar />
      <Tete />
      <Hero />
      <Footer/>
    </div>
  );
}
