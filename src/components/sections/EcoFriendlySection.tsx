import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Heart, Shield, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';

const EcoFriendlySection: React.FC = () => {
  const ecoFeatures = [
    {
      icon: Leaf,
      title: '100% Biodegradable',
      description: 'All materials used break down naturally without harming the environment',
    },
    {
      icon: Recycle,
      title: 'Zero Food Waste',
      description: 'No real tomatoes are wasted - we use eco-friendly alternatives only',
    },
    {
      icon: Shield,
      title: 'Safe & Non-Toxic',
      description: 'All substances are completely safe for skin contact and the environment',
    },
    {
      icon: Heart,
      title: 'Planet Conscious',
      description: 'Every decision is made with environmental responsibility in mind',
    },
  ];

  const promises = [
    'No real tomatoes will be wasted in our celebration',
    'All tomato pulp alternatives are 100% biodegradable',
    'Safe for participants and the environment',
    'Sustainable celebration practices throughout the event',
    'Proper waste management and cleanup protocols',
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <Leaf className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Eco-Friendly</span> Promise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We care for our planet. That's why we're committed to celebrating responsibly with zero food waste.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Main Promise */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-gray-800">No Food Wastage Promise</h3>
                  <p className="text-green-600 font-medium">100% Guilt-Free Celebration</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We're <strong>not using real tomatoes</strong>. All the fun will happen with 
                <strong className="text-green-600"> eco-friendly, non-edible tomato pulp alternatives</strong> that are 
                completely safe, biodegradable, and food waste-free.
              </p>
              
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Celebrate Guilt-Free!
                </h4>
                <p className="text-green-700">
                  Enjoy all the excitement of a tomato festival while knowing that no food has been wasted 
                  and no harm has been done to our environment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 text-6xl opacity-20">🌱</div>
              <div className="absolute bottom-4 left-4 text-4xl opacity-20">♻️</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10">🌍</div>
              
              <div className="relative z-10 text-center">
                <h4 className="font-display font-bold text-2xl text-gray-800 mb-6">
                  Sustainable Celebration
                </h4>
                <div className="space-y-4">
                  {promises.map((promise, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-3 text-left"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{promise}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {ecoFeatures.map((feature, index) => (
            <Card key={index} delay={index * 0.1} className="p-6 text-center bg-white/80 backdrop-blur-sm">
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center text-green-600"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>
              <h4 className="font-display font-semibold text-xl mb-3 text-gray-800">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 max-w-4xl mx-auto">
            <h4 className="font-display font-bold text-2xl md:text-3xl mb-4 text-gray-800">
              Join the Responsible Revolution
            </h4>
            <p className="text-lg text-gray-600 mb-6">
              Be part of a celebration that proves you can have incredible fun while caring for our planet
            </p>
            <motion.div
              className="flex justify-center items-center space-x-4 text-3xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span>🌍</span>
              <span className="text-green-500">💚</span>
              <span>🍅</span>
              <span className="text-green-500">♻️</span>
              <span>🎉</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EcoFriendlySection;
