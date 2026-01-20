import { Parallax } from "react-scroll-parallax";
import { motion, useReducedMotion } from "framer-motion";
import {
  Download,
  Mail,
  ArrowDownRight,
  Leaf,
  MapPin,
  Ruler,
  Linkedin,
} from "lucide-react";
import "../styles/Hero.css";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="home" className="hero-root">
      {/* Background */}
      <div className="hero-bg">
        {!prefersReducedMotion ? (
          <Parallax speed={-18} className="hero-parallax">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="hero-video"
              poster="/hero-poster.jpg"
            >
              <source src="/background-video.mp4" type="video/mp4" />
            </video>
          </Parallax>
        ) : (
          <div
            className="hero-fallback"
            style={{ backgroundImage: "url(/hero-poster.jpg)" }}
          />
        )}

        <div className="hero-overlay" />
        <div className="hero-grain" />
      </div>

      {/* ✅ Left Social Icons */}
      <div className="hero-socials">
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>

        <a
          className="social-icon"
          href="mailto:yourmail@gmail.com"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Content */}
      <div className="hero-container">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 14, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Profile */}
          <motion.div
            className="hero-avatar-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-avatar">
              <img src="/profile.png" alt="Nimesha Thalgaspitiya" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={fadeUp(0.05).initial}
            animate={fadeUp(0.05).animate}
            transition={fadeUp(0.05).transition}
          >
            <p className="hero-kicker">
              <MapPin className="kicker-ico" />
              Sri Lanka • Available for Freelance / Studio Roles
            </p>

            <h1 className="hero-title">Nimesha Thalgaspitiya</h1>

            <p className="hero-subtitle">
              Landscape Architect | Nature-Driven Designer
            </p>
          </motion.div>

          {/* Chips */}
          <motion.div
            className="hero-chips"
            initial={fadeUp(0.15).initial}
            animate={fadeUp(0.15).animate}
            transition={fadeUp(0.15).transition}
          >
            <span className="chip">
              <Leaf className="chip-ico" /> Eco Design
            </span>
            <span className="chip">
              <Ruler className="chip-ico" /> Masterplanning
            </span>
            <span className="chip">
              <ArrowDownRight className="chip-ico" /> Concept → Detail
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="hero-actions"
            initial={fadeUp(0.25).initial}
            animate={fadeUp(0.25).animate}
            transition={fadeUp(0.25).transition}
          >
            <a href="/Nimesha_Thalgaspitiya_CV.pdf" download className="btn-primary">
              <Download className="btn-ico" />
              <span>Download Resume</span>
            </a>

            <a href="#contact" className="btn-outline">
              <Mail className="btn-ico" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Scroll */}
          <motion.button
            type="button"
            className="hero-scroll"
            onClick={scrollToNext}
            aria-label="Scroll to About section"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="scroll-pill">
              <span>Scroll</span>
              <ArrowDownRight className="scroll-ico" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
