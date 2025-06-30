import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeUnit {
  value: number;
  label: string;
}

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([
    { value: 0, label: 'Days' },
    { value: 0, label: 'Hours' },
    { value: 0, label: 'Minutes' },
    { value: 0, label: 'Seconds' }
  ]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft([
          { value: days, label: 'Days' },
          { value: hours, label: 'Hours' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Seconds' }
        ]);
      } else {
        setTimeLeft([
          { value: 0, label: 'Days' },
          { value: 0, label: 'Hours' },
          { value: 0, label: 'Minutes' },
          { value: 0, label: 'Seconds' }
        ]);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className={`flex flex-wrap justify-center gap-4 md:gap-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {timeLeft.map((unit, index) => (
        <motion.div
          key={unit.label}
          variants={itemVariants}
          className="relative group"
          whileHover={{ scale: 1.05, y: -5 }}
        >
          {/* Background glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2
            }}
          />
          
          {/* Timer card */}
          <motion.div
            className="relative glass-effect-strong rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-white/40 min-w-[80px] md:min-w-[100px] lg:min-w-[120px]"
            animate={{
              borderColor: [
                "rgba(255, 255, 255, 0.4)",
                "rgba(239, 68, 68, 0.6)",
                "rgba(249, 115, 22, 0.6)",
                "rgba(255, 255, 255, 0.4)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.3
            }}
          >
            {/* Number */}
            <motion.div
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center mb-2"
              animate={{
                scale: unit.label === 'Seconds' ? [1, 1.1, 1] : [1, 1.02, 1],
                color: [
                  "#dc2626",
                  "#ea580c", 
                  "#f97316",
                  "#dc2626"
                ]
              }}
              transition={{
                duration: unit.label === 'Seconds' ? 1 : 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: "linear-gradient(-45deg, #dc2626, #ea580c, #f97316, #fbbf24)",
                backgroundSize: "400% 400%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 20px rgba(239, 68, 68, 0.5)"
              }}
            >
              {unit.value.toString().padStart(2, '0')}
            </motion.div>
            
            {/* Label */}
            <motion.div
              className="text-sm md:text-base lg:text-lg font-bold text-gray-700 text-center uppercase tracking-wider"
              animate={{
                y: [0, -2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.1
              }}
            >
              {unit.label}
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-red-400 to-orange-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                rotate: 360
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            />
            
            {/* Pulse effect for seconds */}
            {unit.label === 'Seconds' && (
              <motion.div
                className="absolute inset-0 border-2 border-red-400 rounded-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.5, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity
                }}
              />
            )}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
