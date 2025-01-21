import { motion } from "framer-motion";
import React from "react";

const AmbientBackground = () => {
  const beatDuration = 60 / 140;

  return (
    <div className="fixed inset-0 overflow-hidden animate__fadeIn animate__delay-2s animate__animated blur-3xl" style={{ zIndex: -1 }}>
      <svg className="w-0 h-0">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="80" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-slate-700/30"
          animate={{
            scale: [2, 2.2, 2],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: beatDuration * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: "40%",
            top: "40%",
            filter: "url(#glow)",
          }}
        />

        <motion.div
          className="absolute w-80 h-80 rounded-full bg-slate-400/25"
          animate={{
            scale: [3, 2.35, 3],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{
            duration: beatDuration * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: beatDuration,
          }}
          style={{
            right: "35%",
            top: "30%",
            filter: "url(#glow)",
          }}
        />

        <motion.div
          className="absolute w-72 h-72 rounded-full bg-slate-500/20"
          animate={{
            scale: [4, 3.33, 4],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: beatDuration * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: beatDuration * 2,
          }}
          style={{
            left: "35%",
            bottom: "40%",
            filter: "url(#glow)",
          }}
        />

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-40 h-40 rounded-full"
            style={{
              background: `rgba(${
                [
                  [148, 163, 184], 
                  [100, 116, 139], 
                  [255, 255, 255],  
                  [100, 116, 139], 
                  [100, 116, 139],  
                ][i]
              }, 0.25)`,
              left: `${66 + i * 43}%`,
              top: `${30 + i * 15}%`,
              filter: "url(#glow)",
            }}
            animate={{
              scale: [4, 4.35, 4],
              opacity: [0.25, 0.35, 0.25],
            }}
            transition={{
              duration: beatDuration * (0.01 + i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: beatDuration * i * 0.3,
            }}
          />
        ))}

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute w-24 h-24 rounded-full"
            style={{
              background: `rgba(${
                [
                  [100, 116, 139],
                  [51, 65, 85],
                  [148, 163, 184],
                  [100, 116, 139],
                ][i]
              }, 0.9)`,
              right: `${31 + i * 11}%`,
              bottom: `${33 + i * 13}%`,
              filter: "url(#glow)",
            }}
            animate={{
              scale: [4, 4.4, 4],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: beatDuration * (0.01 + i * 0.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: beatDuration * i * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AmbientBackground;