import { motion } from 'framer-motion';
import { Mail, Phone, Globe, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:nimesha2000.24@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:0719876911', label: 'Phone' },
    { icon: Globe, href: 'https://nimesha.web.app', label: 'Website' },
    { icon: Linkedin, href: 'https://linkedin.com/in/nimesha-thalgaspitiya', label: 'LinkedIn' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Nimesha Thalgaspitiya</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Soon-to-be Landscape Architecture graduate from the University of Moratuwa (Dec 2025), passionate about creative, sustainable, and nature-driven design that blends built and natural environments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Education', 'Experience', 'Skills', 'Research', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact and Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex flex-wrap gap-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-emerald-600 transition-colors duration-300 group"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
            <button
              onClick={scrollToTop}
              className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
            >
              Back to Top ↑
            </button>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} Developed and Designed By Nimesha Thalgaspitiya</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;