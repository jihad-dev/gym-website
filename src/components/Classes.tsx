import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Flame, Heart } from 'lucide-react';

const Classes = () => {
  const classes = [
    {
      title: 'Strength Training',
      icon: Dumbbell,
      description: 'Build muscle and increase strength with our comprehensive weight training programs.',
      level: 'Intermediate',
      duration: '60 min',
      intensity: 'High'
    },
    {
      title: 'HIIT',
      icon: Flame,
      description: 'High-intensity interval training for maximum calorie burn and cardiovascular fitness.',
      level: 'Advanced',
      duration: '45 min',
      intensity: 'Very High'
    },
    {
      title: 'Yoga Flow',
      icon: Heart,
      description: 'Find balance and flexibility through dynamic yoga sequences and mindful movement.',
      level: 'All Levels',
      duration: '75 min',
      intensity: 'Low'
    },
    {
      title: 'Group Training',
      icon: Users,
      description: 'Join our energetic group sessions for motivation and community-driven fitness.',
      level: 'All Levels',
      duration: '60 min',
      intensity: 'Medium'
    }
  ];

  return (
    <section id="classes" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Classes</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our diverse range of classes designed to help you achieve your fitness goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((classItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <classItem.icon className="w-12 h-12 text-red-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{classItem.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{classItem.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Level:</span>
                    <span className="ml-2">{classItem.level}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Duration:</span>
                    <span className="ml-2">{classItem.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <span className="font-medium">Intensity:</span>
                    <span className="ml-2">{classItem.intensity}</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
                <button className="w-full bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;