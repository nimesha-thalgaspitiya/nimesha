import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const skills = [
    'Landscape Gardening',
    'Plant Identification',
    'Arboriculture',
    'Visualization',
    'Nursery Management'
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-emerald-100 p-4 rounded-full">
              <Briefcase className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Experience
          </h2>
          
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <Briefcase className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Landscape Architecture Intern</h3>
                <p className="text-emerald-600 font-semibold">Department of National Botanic Gardens, Peradeniya</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="flex items-center text-gray-600 mb-2 md:mb-0">
                <Calendar className="h-4 w-4 mr-2" />
                <span>October 2023 – March 2024</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Peradeniya, Sri Lanka</span>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                Gained hands-on experience in botanical garden management, plant care, and landscape maintenance. 
                Developed expertise in plant identification, horticultural practices, and sustainable garden design 
                principles while working with diverse plant species in one of Sri Lanka's premier botanical institutions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Skills Developed:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;