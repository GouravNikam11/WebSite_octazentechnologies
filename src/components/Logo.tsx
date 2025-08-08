import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  const companyNameSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* PNG Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={` relative`}
      >
        <img
          src="/ot1.png"
          width={"200px"}
          alt="Octazen Logo"
          className="w-fulls h-full object-contain"
        />
      </motion.div>

      {/* Company Name */}
    
    </div>
  );
};

export default Logo;
