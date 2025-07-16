import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Settings, Users, Brain, Clock, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Design Skills',
      icon: Palette,
      skills: ['Landscape Design', 'Concept Development', 'Project Detailing'],
      color: 'emerald'
    },
    {
      title: 'Technical Tools',
      icon: Settings,
      skills: ['AutoCAD', 'Adobe Photoshop', 'MS Office'],
      color: 'green'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Teamwork', 'Time Management', 'Fast Learner', 'Reliable'],
      color: 'lime'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-600 border-emerald-500',
      green: 'bg-green-100 text-green-600 border-green-500',
      lime: 'bg-lime-100 text-lime-600 border-lime-500'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
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
              <Brain className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Skills & Expertise
          </h2>
          
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 ${getColorClasses(category.color)}`}>
                  <category.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 text-center mb-6">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className={`border-l-4 ${getColorClasses(category.color)} pl-4 py-2 bg-gray-50 rounded-r-lg`}
                    >
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-100 p-4 rounded-full">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Core Strengths
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">6+</div>
                <div className="text-gray-600">Months Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">3+</div>
                <div className="text-gray-600">Design Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-gray-600">Dedication</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">∞</div>
                <div className="text-gray-600">Creativity</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;