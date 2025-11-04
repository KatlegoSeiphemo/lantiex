import React from 'react';

const WaveDivider = ({ flip = false }) => {
  return (
    <div className={`wave-divider ${flip ? 'flip' : ''}`}>
      <svg 
        viewBox="0 0 1440 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7525ff" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#7525ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7525ff" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Filled wave background */}
        <path
          d="M0,40 C240,60 480,20 720,40 C960,60 1200,20 1440,40 L1440,100 L0,100 Z"
          fill="rgba(255,255,255,0.02)"
        />
        
        {/* Animated glowing line */}
        <path
          d="M0,40 C240,60 480,20 720,40 C960,60 1200,20 1440,40"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          fill="none"
          filter="url(#glow)"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,40 C240,60 480,20 720,40 C960,60 1200,20 1440,40;
              M0,50 C240,30 480,70 720,50 C960,30 1200,70 1440,50;
              M0,40 C240,60 480,20 720,40 C960,60 1200,20 1440,40
            "
          />
        </path>
        
        {/* Secondary accent line */}
        <path
          d="M0,55 C300,35 600,65 900,45 C1200,35 1350,65 1440,50"
          stroke="#7525ff"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
        >
          <animate
            attributeName="d"
            dur="6s"
            repeatCount="indefinite"
            values="
              M0,55 C300,35 600,65 900,45 C1200,35 1350,65 1440,50;
              M0,45 C300,65 600,35 900,55 C1200,65 1350,35 1440,60;
              M0,55 C300,35 600,65 900,45 C1200,35 1350,65 1440,50
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default WaveDivider;
