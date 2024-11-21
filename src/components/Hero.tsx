import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Transform Your Body,
          <span className="block text-red-600">Transform Your Life</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join Elite Gym and experience world-class facilities, expert trainers, and a supportive community dedicated to helping you achieve your fitness goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-red-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition-colors w-full sm:w-auto">
            Join Now
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto">
            <Play className="h-5 w-5" />
            Watch Video
          </button>
        </div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          {[
            { title: 'Expert Trainers', desc: 'Certified professionals dedicated to your success' },
            { title: '24/7 Access', desc: 'Train on your schedule, any time day or night' },
            { title: 'Modern Equipment', desc: 'State-of-the-art facilities for optimal results' }
          ].map((item, index) => (
            <div key={index} className="bg-black/60 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;