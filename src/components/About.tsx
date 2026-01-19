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
            I have completed my degree in Landscape Architecture at the University of Moratuwa. I have a foundation in landscape design principles and practical experience in the field. I am a hard working, creative and nature driven designer with a passion for integrating built and natural environments through sustainable and innovative solutions.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

<br />

export default About;