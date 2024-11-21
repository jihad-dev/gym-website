import React from 'react';
import { Users, Award, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '2,000+' },
    { icon: Award, label: 'Expert Trainers', value: '50+' },
    { icon: Clock, label: 'Weekly Classes', value: '100+' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Elite Gym</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Where Fitness Meets Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Since 2010, Elite Gym has been at the forefront of fitness innovation, providing our members with state-of-the-art facilities and expert guidance to achieve their fitness goals.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Our mission is to create a welcoming and motivating environment where everyone, regardless of their fitness level, can thrive and transform their lives through health and wellness.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-lg">
                <stat.icon className="w-10 h-10 text-red-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;