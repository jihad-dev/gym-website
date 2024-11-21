import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Membership = () => {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      features: [
        'Access to gym floor',
        'Basic equipment usage',
        'Locker room access',
        'Free parking'
      ]
    },
    {
      name: 'Premium',
      price: '59',
      features: [
        'All Basic features',
        'Group classes included',
        'Personal trainer consultation',
        'Nutrition guidance',
        'Access to spa facilities'
      ],
      popular: true
    },
    {
      name: 'Elite',
      price: '99',
      features: [
        'All Premium features',
        'Unlimited personal training',
        'Priority class booking',
        'Exclusive member events',
        'Guest passes',
        'Recovery zone access'
      ]
    }
  ];

  return (
    <section id="membership" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Membership Plans</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect membership plan that fits your fitness journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gray-800 rounded-lg overflow-hidden ${
                plan.popular ? 'ring-2 ring-red-600' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-medium">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-red-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;