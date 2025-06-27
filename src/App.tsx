import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  // Set page title
  useEffect(() => {
    document.title = 'Vargas Carpentry & Handyman Services';
  }, []);

  return (
    <div className="font-['Open_Sans']">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <CallToAction />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;