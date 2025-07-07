import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Music, Users } from 'lucide-react';
import Card from '../ui/Card';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Globe,
      title: 'Spanish Heritage',
      description: 'Inspired by the legendary La Tomatina festival from Buñol, Spain',
      color: 'text-tomato-500',
    },
    {
      icon: Heart,
      title: 'Desi Twist',
      description: 'Infused with Indian culture, music, and the spirit of celebration',
      color: 'text-orange-500',
    },
    {
      icon: Music,
      title: 'Music & Entertainment',
      description: 'Live DJs, themed bars, and non-stop entertainment throughout the day',
      color: 'text-green-500',
    },
    {
      icon: Users,
      title: 'Community Fun',
      description: 'Bringing people together for an unforgettable shared experience',
      color: 'text-purple-500',
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-white"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/Event"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="about-heading"
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6"
            itemProp="name"
          >
            About La Tomatina <span className="gradient-text">Fest India</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tomato-500 to-orange-500 mx-auto mb-6" aria-hidden="true"></div>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            itemProp="description"
          >
            India's premier tomato festival bringing Spain's legendary La Tomatina celebration to Pune with authentic cultural fusion, live entertainment, and eco-friendly fun
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-6 text-gray-800">
              Spain's La Tomatina Meets India's Celebration Spirit in Pune
            </h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Inspired by Spain's world-famous La Tomatina tomato-throwing festival from Buñol, <strong className="text-tomato-600">La Tomatina Fest India 2025</strong> brings
                the authentic Spanish festival experience to Pune with a vibrant Indian cultural fusion that celebrates Maharashtra's festive spirit.
              </p>
              <p>
                Join thousands of festival-goers for an epic day featuring eco-friendly tomato fights, massive foam zones,
                live DJ performances, themed bars, Instagram-worthy photo zones, traditional Indian music fusion,
                and authentic Spanish-inspired entertainment — all in one spectacular tomato festival celebration.
              </p>
              <p>
                La Tomatina Fest India isn't just Pune's biggest tomato festival; it's a groundbreaking cultural event
                that unites people from across Maharashtra and India to experience the joy of Spain's most famous festival
                with authentic Indian hospitality and celebration traditions.
              </p>
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
            <div className="relative bg-gradient-to-br from-tomato-100 to-orange-100 rounded-2xl p-8 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 text-6xl opacity-20">🍅</div>
              <div className="absolute bottom-4 left-4 text-4xl opacity-20">🎉</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-10">🎵</div>
              
              <div className="relative z-10 text-center">
                <h4 className="font-display font-bold text-2xl text-gray-800 mb-4">
                  The Perfect Blend
                </h4>
                <p className="text-gray-700 mb-6">
                  Traditional Spanish festival spirit meets Indian celebration culture
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <span className="text-3xl">🇪🇸</span>
                  <span className="text-2xl text-tomato-500">+</span>
                  <span className="text-3xl">🇮🇳</span>
                  <span className="text-2xl text-orange-500">=</span>
                  <span className="text-3xl">🎊</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {features.map((feature, index) => (
            <Card key={index} delay={index * 0.1} className="p-6 text-center">
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center ${feature.color}`}
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
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-tomato-50 to-orange-50 rounded-2xl p-8 border border-tomato-100">
            <h4 className="font-display font-bold text-2xl md:text-3xl mb-4 text-gray-800">
              Ready to Join the Madness?
            </h4>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of India's most exciting tomato festival and create memories that will last a lifetime!
            </p>
            <motion.div
              className="text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🍅🎉🎵
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
