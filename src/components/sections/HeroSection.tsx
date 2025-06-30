import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Sparkles, Ticket, BookOpen } from 'lucide-react';
import Button from '../ui/Button';
import EnhancedButton from '../ui/EnhancedButton';

const HeroSection: React.FC = () => {
  const floatingTomatoes = Array.from({ length: 12 }, (_, i) => i);
  const sparkles = Array.from({ length: 20 }, (_, i) => i);
  const particles = Array.from({ length: 15 }, (_, i) => i);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-100 via-orange-50 to-yellow-100">
      {/* Enhanced Animated Background Pattern */}
      <div className="absolute inset-0 bg-tomato-pattern opacity-10 animate-float-slow"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-red-50/30 to-orange-100/50"></div>

      {/* Enhanced Floating Tomatoes */}
      <div className="absolute inset-0">
        {floatingTomatoes.map((index) => (
          <motion.div
            key={index}
            className="absolute text-3xl md:text-5xl lg:text-6xl opacity-15"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0.5,
              rotate: 0,
            }}
            animate={{
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              ],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              ],
              rotate: [0, 180, 360],
              scale: [0.5, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
            style={{
              filter: `hue-rotate(${index * 30}deg) brightness(${0.8 + Math.random() * 0.4})`,
            }}
          >
            🍅
          </motion.div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-red-400 to-orange-400 rounded-full opacity-30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0,
            }}
            animate={{
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              ],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              ],
              scale: [0, 1, 0.5, 1, 0],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Sparkles */}
      <div className="absolute inset-0">
        {sparkles.map((index) => (
          <motion.div
            key={`sparkle-${index}`}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0,
              opacity: 0,
            }}
            animate={{
              x: [
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              ],
              y: [
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              ],
              scale: [0, 1.5, 0.5, 1, 0],
              opacity: [0, 1, 0.7, 1, 0],
              rotate: [0, 180, 360, 540],
            }}
            transition={{
              duration: 10 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 8,
            }}
          >
            <Sparkles
              className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 ${
                index % 3 === 0 ? 'text-yellow-400' :
                index % 3 === 1 ? 'text-orange-400' : 'text-red-400'
              } opacity-70`}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Event Title with Enhanced Typography */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            {/* La Tomatina - Main Title */}
            <motion.h1
              className="font-title font-black text-6xl md:text-8xl lg:text-9xl mb-4 mt-16 leading-none"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.span
                className="inline-block gradient-text-animated text-glow relative"
                animate={{
                  scale: [1, 1.03, 1],
                  rotate: [0, 0.5, -0.5, 0],
                  textShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.5)",
                    "0 0 40px rgba(239, 68, 68, 0.8)",
                    "0 0 60px rgba(239, 68, 68, 0.6)",
                    "0 0 20px rgba(239, 68, 68, 0.5)"
                  ]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                La Tomatina
                {/* Decorative underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"
                  animate={{
                    scaleX: [0.8, 1.2, 0.8],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.span>
            </motion.h1>

            {/* Fest India 2025 - Secondary Title */}
            <motion.h2
              className="font-display font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-800 mb-6 tracking-tight relative"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block text-glow-orange relative"
                animate={{
                  scale: [1, 1.02, 1],
                  y: [0, -3, 0],
                  textShadow: [
                    "0 0 15px rgba(249, 115, 22, 0.4)",
                    "0 0 25px rgba(249, 115, 22, 0.6)",
                    "0 0 15px rgba(249, 115, 22, 0.4)"
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                Fest India 2025
                {/* Decorative dots */}
                <motion.div
                  className="absolute -right-8 top-1/2 transform -translate-y-1/2 flex space-x-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </motion.div>
              </motion.span>
            </motion.h2>

            {/* Pune Edition - Subtitle */}
            <motion.h3
              className="font-fancy font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-orange-600 mb-8 relative"
              variants={itemVariants}
            >
              <motion.span
                className="inline-block gradient-text-animated relative px-6 py-2"
                animate={{
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: "linear-gradient(-45deg, #f97316, #ea580c, #dc2626, #ef4444, #fbbf24)",
                  backgroundSize: "500% 500%",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                (Pune Edition)
                {/* Decorative brackets */}
                <motion.div
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-red-400 text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  〈
                </motion.div>
                <motion.div
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-red-400 text-3xl"
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  〉
                </motion.div>
              </motion.span>
            </motion.h3>
          </motion.div>

          {/* Enhanced Tagline */}
          <motion.div
            className="mb-16 relative"
            variants={itemVariants}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-100/50 via-orange-100/50 to-yellow-100/50 rounded-3xl blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div className="relative glass-effect rounded-3xl p-8 md:p-12 border-2 border-white/30">
              <motion.p
                className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 mb-8 max-w-6xl mx-auto leading-relaxed font-medium"
                variants={itemVariants}
              >
                <motion.span
                  className="text-red-600 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl relative inline-block"
                  animate={{
                    color: ["#dc2626", "#ea580c", "#f97316", "#dc2626"],
                    textShadow: [
                      "0 0 10px rgba(220, 38, 38, 0.5)",
                      "0 0 20px rgba(234, 88, 12, 0.7)",
                      "0 0 15px rgba(249, 115, 22, 0.6)",
                      "0 0 10px rgba(220, 38, 38, 0.5)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  Namaste, Pune!
                  <motion.div
                    className="absolute -top-2 -right-2 text-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    🙏
                  </motion.div>
                </motion.span>{' '}
                Get ready for a splash of{' '}
                <motion.span
                  className="text-red-600 font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl relative inline-block"
                  animate={{
                    scale: [1, 1.15, 1],
                    color: ["#dc2626", "#f97316", "#ea580c", "#dc2626"],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  madness
                  <motion.div
                    className="absolute -top-1 -right-1 text-xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💥
                  </motion.div>
                </motion.span>{' '}
                like never before!
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-5xl mx-auto font-light leading-relaxed"
                variants={itemVariants}
                animate={{
                  y: [0, -2, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Presenting the wildest, juiciest celebration of the year — where music, masti, and
                a whole lot of tomato fun await you.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Hero Images Section */}
          <motion.div
            className="mb-12 flex justify-center items-center space-x-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {/* Tomato Splash Illustration */}
            <motion.div
              className="relative"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-red-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-6xl md:text-7xl lg:text-8xl animate-bounce-slow">🍅</span>
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: 360
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              >
                <span className="text-lg">💥</span>
              </motion.div>
            </motion.div>

            {/* Music Note */}
            <motion.div
              className="hidden md:block"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl lg:text-4xl">🎵</span>
              </div>
            </motion.div>

            {/* Festival Icon */}
            <motion.div
              className="hidden lg:block"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -5, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">🎉</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Event Details Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="glass-effect-strong rounded-2xl p-8 shadow-2xl border-2 border-white/40 hover:border-red-300 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)"
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Calendar className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:text-red-600 transition-colors" />
              </motion.div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-red-700 transition-colors">Date</h3>
              <p className="text-lg text-gray-600 font-medium">Saturday, 23rd August 2025</p>
            </motion.div>

            <motion.div
              className="glass-effect-strong rounded-2xl p-8 shadow-2xl border-2 border-white/40 hover:border-orange-300 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)"
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Clock className="w-12 h-12 text-orange-500 mx-auto mb-4 group-hover:text-orange-600 transition-colors" />
              </motion.div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-orange-700 transition-colors">Time</h3>
              <p className="text-lg text-gray-600 font-medium">12:30 PM onwards</p>
            </motion.div>

            <motion.div
              className="glass-effect-strong rounded-2xl p-8 shadow-2xl border-2 border-white/40 hover:border-green-300 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)"
              }}
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:text-green-600 transition-colors" />
              </motion.div>
              <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-green-700 transition-colors">Venue</h3>
              <p className="text-lg text-gray-600 font-medium">TBA - Pune, Maharashtra</p>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-8"
            variants={itemVariants}
          >
            <EnhancedButton
              variant="primary"
              size="xl"
              glowEffect={true}
              icon={<Ticket className="w-6 h-6" />}
              onClick={() => document.querySelector('#tickets')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[280px] text-2xl font-black tracking-wide"
            >
              Get Tickets Now!
            </EnhancedButton>

            <EnhancedButton
              variant="glass"
              size="xl"
              icon={<BookOpen className="w-6 h-6" />}
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="min-w-[280px] text-2xl font-bold tracking-wide border-2 border-red-300 text-red-700 hover:text-white hover:bg-red-500"
            >
              Learn More
            </EnhancedButton>
          </motion.div>

          {/* Enhanced Announcement */}
          <motion.div
            className="mt-10 p-6 bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-2xl border-2 border-red-200 max-w-3xl mx-auto shadow-xl backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <motion.p
              className="text-red-700 font-bold text-lg md:text-xl"
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="inline-block mr-2"
              >
                🎉
              </motion.span>
              Stay tuned - we're revealing something AMAZING!
              <motion.span
                animate={{
                  rotate: [0, -10, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
                className="inline-block ml-2"
              >
                🎉
              </motion.span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
