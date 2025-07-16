import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Eye, Building, TreePine } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-white">
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
              <BookOpen className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Research
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
            <div className="flex items-center mb-8">
              <div className="bg-emerald-100 p-3 rounded-full mr-4">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Current Research</h3>
                <p className="text-emerald-600 font-semibold">Academic Study</p>
              </div>
            </div>

            <div className="border-l-4 border-emerald-500 pl-6 mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                "Impact of Visual Pollution on the Heritage Landscape – A Case Study in Kandy Grid City"
              </h4>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                This research examines the critical relationship between visual pollution and heritage landscape preservation 
                in Kandy's historic grid city. The study focuses on identifying sources of visual disruption, analyzing their 
                impact on the cultural and aesthetic value of the heritage landscape, and proposing sustainable design solutions 
                to mitigate these effects while preserving the city's historical character.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-emerald-600 mr-3" />
                  <h5 className="font-semibold text-gray-800">Visual Analysis</h5>
                </div>
                <p className="text-gray-600 text-sm">
                  Comprehensive assessment of visual pollution sources and their impact on heritage landscapes
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-emerald-600 mr-3" />
                  <h5 className="font-semibold text-gray-800">Heritage Focus</h5>
                </div>
                <p className="text-gray-600 text-sm">
                  Specialized study on Kandy's historic grid city and its cultural significance
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <TreePine className="h-6 w-6 text-emerald-600 mr-3" />
                  <h5 className="font-semibold text-gray-800">Sustainable Solutions</h5>
                </div>
                <p className="text-gray-600 text-sm">
                  Proposing environmentally conscious design interventions for heritage preservation
                </p>
              </motion.div>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-200">
              <div className="flex flex-wrap gap-2">
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  Heritage Landscape
                </span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  Visual Pollution
                </span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  Urban Planning
                </span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  Kandy City
                </span>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  Cultural Preservation
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;