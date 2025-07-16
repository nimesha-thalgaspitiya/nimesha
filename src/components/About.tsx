import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Leaf, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <Parallax speed={-5} className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-emerald-50 to-green-50 opacity-50"></div>
      </Parallax>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* <div className="flex justify-center mb-8">
            <div className="bg-emerald-100 p-4 rounded-full">
              <Leaf className="h-8 w-8 text-emerald-600" />
            </div>
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12">
            I’m an undergraduate student in Landscape Architecture at the University of Moratuwa, with a strong foundation in landscape design principles and hands-on experience in the field. Driven by a passion for nature, I approach every project with creativity, dedication, and a commitment to sustainability. My work focuses on harmoniously blending built and natural environments through innovative, environmentally-conscious design solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Passionate</h3>
              <p className="text-gray-600">Deeply committed to creating sustainable and beautiful landscapes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovative</h3>
              <p className="text-gray-600">Always seeking creative solutions that harmonize nature and design</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainable</h3>
              <p className="text-gray-600">Focused on environmentally conscious design practices</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

<br />

export default About;