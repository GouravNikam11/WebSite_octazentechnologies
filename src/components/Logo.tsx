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
      {/* SVG Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`${sizeClasses[size]} relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 230 202"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0,202) scale(0.1,-0.1)"
            fill="#004676"
            stroke="none"
          >
            <path d="M511 1645 l-251 -256 0 -372 0 -372 253 -258 252 -257 380 0 380 0
              253 253 252 252 0 380 0 380 -257 252 -258 252 -376 0 -376 1 -252 -255z
              m1142 -122 l207 -207 0 -301 -1 -300 -207 -213 -207 -213 -301 1 -302 0 -206
              211 -206 210 0 302 0 302 207 207 208 208 300 0 300 0 208 -207z"/>
            <path d="M715 1359 l-75 -72 0 -273 0 -274 156 -160 157 -160 211 0 211 0 118
              118 118 118 -3 109 -3 109 -153 -142 c-110 -101 -161 -142 -178 -142 l-24 0 0
              330 0 330 175 0 175 0 0 90 0 90 -405 0 -405 0 -75 -71z m355 -439 l0 -330
              -22 0 c-15 0 -59 36 -135 112 l-113 113 0 211 c0 116 3 214 7 217 3 4 64 7
              135 7 l128 0 0 -330z"/>
          </g>
        </svg>
      </motion.div>

      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-bold text-octazen-800 ${companyNameSizes[size]} leading-tight tracking-wide`}
          >
            OCTAZEN
          </span>
          <span
            className={`font-medium text-octazen-800 ${textSizes[size]} leading-tight tracking-wide`}
          >
            TECHNOLOGIES LLP
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
