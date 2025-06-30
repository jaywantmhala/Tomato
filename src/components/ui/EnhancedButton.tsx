import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  glowEffect?: boolean;
}

const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  icon,
  glowEffect = false
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-opacity-50 overflow-hidden group';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-red-500 via-orange-500 to-red-600 text-white hover:from-red-600 hover:via-orange-600 hover:to-red-700 focus:ring-red-300 shadow-xl hover:shadow-2xl',
    secondary: 'bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 text-white hover:from-orange-500 hover:via-yellow-600 hover:to-orange-700 focus:ring-orange-300 shadow-xl hover:shadow-2xl',
    outline: 'border-3 border-red-500 text-red-600 bg-white/90 backdrop-blur-sm hover:bg-red-500 hover:text-white focus:ring-red-300 shadow-lg hover:shadow-xl',
    glass: 'bg-white/20 backdrop-blur-md border border-white/30 text-gray-800 hover:bg-white/30 focus:ring-white/50 shadow-lg hover:shadow-xl'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-12 py-6 text-xl'
  };

  const glowClasses = glowEffect ? 'neon-glow' : '';

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${glowClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.05,
        y: -2
      }}
      whileTap={{ 
        scale: 0.95,
        y: 0
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      {/* Animated background overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Sparkle effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && (
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {icon}
          </motion.span>
        )}
        <motion.span
          animate={{
            textShadow: glowEffect ? [
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 20px rgba(255,255,255,0.8)",
              "0 0 10px rgba(255,255,255,0.5)"
            ] : undefined
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {children}
        </motion.span>
      </span>
    </motion.button>
  );
};

export default EnhancedButton;
