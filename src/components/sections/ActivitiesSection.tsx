import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Waves, 
  Music, 
  Coffee, 
  Camera, 
  Crown, 
  Gift 
} from 'lucide-react';
import Card from '../ui/Card';

const ActivitiesSection: React.FC = () => {
  const activities = [
    {
      icon: Zap,
      title: 'Tomato War Zone',
      description: 'The main event! Join the epic tomato battle with eco-friendly alternatives in our designated war zone.',
      color: 'from-tomato-500 to-red-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      icon: Waves,
      title: 'Foam Splash & Slides',
      description: 'Cool off in our massive foam zones and enjoy thrilling water slides for the ultimate splash experience.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: Music,
      title: 'Live DJs & Music Stage',
      description: 'Dance to the beats of top DJs and live performances on our main stage throughout the day.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Coffee,
      title: 'Tomato Bars & Food Stalls',
      description: 'Enjoy themed bars and delicious food stalls offering a variety of cuisines and refreshing drinks.',
      color: 'from-orange-500 to-yellow-500',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      icon: Camera,
      title: 'Selfie & Instagram Zones',
      description: 'Capture perfect moments at our specially designed photo zones with props and backdrops.',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      icon: Crown,
      title: 'VIP Lounge Experience',
      description: 'Exclusive VIP area with premium amenities, private bars, and the best views of all the action.',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
    },
    {
      icon: Gift,
      title: 'Exclusive Hampers & Giveaways',
      description: 'Win amazing prizes, exclusive merchandise, and special hampers throughout the event.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
    },
  ];

  return (
    <section id="activities" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            What to <span className="gradient-text">Expect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tomato-500 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get ready for an action-packed day filled with incredible activities, entertainment, and unforgettable experiences
          </p>
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full group cursor-pointer overflow-hidden relative">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 ${activity.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <activity.icon className={`w-8 h-8 ${activity.iconColor}`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-xl mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {activity.description}
                  </p>

                  {/* Hover Effect Arrow */}
                  <motion.div
                    className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className={`text-sm font-medium ${activity.iconColor}`}>
                      Learn more →
                    </span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Activity Highlight */}
        <motion.div
          className="bg-gradient-to-r from-tomato-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-6xl">🍅</div>
            <div className="absolute top-8 right-8 text-4xl">🎵</div>
            <div className="absolute bottom-4 left-8 text-5xl">💃</div>
            <div className="absolute bottom-8 right-4 text-3xl">🎉</div>
          </div>

          <div className="relative z-10">
            <motion.h3
              className="font-display font-bold text-3xl md:text-4xl mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              The Ultimate Festival Experience Awaits!
            </motion.h3>
            <motion.p
              className="text-xl mb-8 max-w-3xl mx-auto opacity-90"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              From epic tomato battles to foam parties, live music to gourmet food - 
              every moment is designed to create memories that will last a lifetime.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-2xl"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              >
                🍅
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >
                💦
              </motion.span>
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              >
                🎵
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              >
                🎉
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
              >
                🍻
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
