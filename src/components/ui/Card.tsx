import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  delay = 0,
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg border border-gray-100';
  const hoverClasses = hover ? 'hover:shadow-2xl hover:scale-105' : '';
  const cardClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { scale: 1.05 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;
