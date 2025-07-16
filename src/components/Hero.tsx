import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';
import '../styles/Hero.css'; // ✅ Import the custom CSS

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative flex items-center justify-center">
      {/* Parallax Video Background */}
      <Parallax speed={-20} className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Parallax>

      {/* Overlay tint */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        {/* Profile Image */}
        <motion.div
          className="profile-pic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="src/public/profile.png" alt="Nimesha Thalgaspitiya" />
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Nimesha Thalgaspitiya</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Undergraduate Landscape Architect | Nature-Driven Designer
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="/resume.pdf" download className="hero-button white">
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="hero-button outline">
              <Mail className="h-5 w-5" />
              <span>Contact Me</span>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-down"
          onClick={scrollToNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ArrowDown className="h-6 w-6 text-white opacity-70" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
