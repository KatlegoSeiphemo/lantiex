import React from 'react';

const WaveDivider = ({ flip = false }) => {
  return (
    <div className={`wave-divider ${flip ? 'flip' : ''}`}>
      <svg 
        viewBox="0 0 1440 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ transform: flip ? 'scaleY(-1)' : 'none' }}
      >
        {/* Main wave with glow effect */}
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7525ff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#7525ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7525ff" stopOpacity="0.3" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Background wave */}
        <path
          d="M0,32 C160,64 320,0 480,32 C640,64 800,0 960,32 C1120,64 1280,0 1440,32 L1440,80 L0,80 Z"
          fill="url(#waveGradient)"
          opacity="0.3"
        />
        
        {/* Foreground glowing wave */}
        <path
          d="M0,40 C160,10 320,70 480,40 C640,10 800,70 960,40 C1120,10 1280,70 1440,40 L1440,80 L0,80 Z"
          stroke="#7525ff"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
          opacity="0.8"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,40 C160,10 320,70 480,40 C640,10 800,70 960,40 C1120,10 1280,70 1440,40 L1440,80 L0,80 Z;
              M0,50 C160,70 320,20 480,50 C640,70 800,20 960,50 C1120,70 1280,20 1440,50 L1440,80 L0,80 Z;
              M0,40 C160,10 320,70 480,40 C640,10 800,70 960,40 C1120,10 1280,70 1440,40 L1440,80 L0,80 Z
            "
          />
        </path>
        
        {/* Additional accent line */}
        <path
          d="M0,50 C200,20 400,60 600,35 C800,20 1000,60 1200,35 C1300,25 1400,55 1440,45"
          stroke="#7525ff"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,50 C200,20 400,60 600,35 C800,20 1000,60 1200,35 C1300,25 1400,55 1440,45;
              M0,45 C200,60 400,25 600,50 C800,60 1000,25 1200,50 C1300,55 1400,30 1440,50;
              M0,50 C200,20 400,60 600,35 C800,20 1000,60 1200,35 C1300,25 1400,55 1440,45
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveDivider;
