import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Monitor,
  BookOpenText,
  School,
  Calendar,
  MapPin
} from 'lucide-react';
import '../styles/edu.css'; // Custom styles for Education section

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Landscape Architecture (Hons)',
      institution: 'University of Moratuwa',
      period: '2021 – 2025',
      location: 'Sri Lanka',
      type: 'primary',
      icon: GraduationCap
    },
    {
      degree: 'Diploma in English & ICT',
      institution: 'ICBT Campus, Kandy',
      period: '2019',
      location: 'Kandy, Sri Lanka',
      type: 'secondary',
      icon: Monitor
    },
    {
      degree: 'Advanced Level (A/L)',
      institution: 'Girls High School Kandy',
      period: '2019',
      location: 'Kandy, Sri Lanka',
      type: 'secondary',
      icon: BookOpenText
    },
    {
      degree: 'Ordinary Level (O/L)',
      institution: 'Viharamahadevi Girls\' College',
      period: '2016',
      location: 'Kandy, Sri Lanka',
      type: 'secondary',
      icon: School
    }
  ];

  return (
    <section id="education">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-emerald-100 p-4 rounded-full">
              <GraduationCap className="h-8 w-8 text-emerald-600" />
            </div>
          </div>
          <h2>Education</h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Timeline + Cards */}
        <div className="max-w-4xl mx-auto relative">
          <div className="timeline-line hidden md:block"></div>

          {educationData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex mb-12 last:mb-0"
              >
                {/* Timeline Icon (Desktop) */}
                <div className="timeline-icon hidden md:flex">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>

                {/* Card Content */}
                <div className={`edu-card ${item.type === 'secondary' ? 'secondary' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3>{item.degree}</h3>
                    <div className="edu-meta">
                      <Calendar />
                      {item.period}
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium mb-2">{item.institution}</p>
                  <div className="edu-meta">
                    <MapPin />
                    {item.location}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
