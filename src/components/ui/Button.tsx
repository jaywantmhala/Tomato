import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50';
  
  const variantClasses = {
    primary: 'bg-tomato-500 hover:bg-tomato-600 text-white shadow-lg hover:shadow-xl focus:ring-tomato-300',
    secondary: 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl focus:ring-orange-300',
    outline: 'border-2 border-tomato-500 text-tomato-500 hover:bg-tomato-500 hover:text-white focus:ring-tomato-300',
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
