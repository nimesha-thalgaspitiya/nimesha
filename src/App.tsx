import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingLeaves from './components/FloatingLeaves';

function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 relative overflow-x-hidden">
        <FloatingLeaves />
        <Header />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Research />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;