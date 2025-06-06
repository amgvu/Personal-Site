import { motion } from "framer-motion";
import React from "react";

export default function AmbientBackground() {
  const beatDuration = 60 / 140;

  return (
    <div
      className="animate__fadeIn animate__delay-0.5s animate__animated fixed inset-0 overflow-hidden blur-3xl"
      style={{ zIndex: -1 }}
    >
      <svg className="h-0 w-0">
        <defs></defs>
      </svg>

      <div className="absolute inset-0">
        <motion.div
          className="absolute h-96 w-96 rounded-full bg-slate-700/50"
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
            left: "37%",
            top: "40%",
            filter: "url(#glow)",
          }}
        />

        <motion.div
          className="w-160 h-160 absolute rounded-full bg-slate-500/50"
          animate={{
            scale: [6, 4.7, 6],
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
          className="w-144 h-144 absolute rounded-full bg-slate-500/20"
          animate={{
            scale: [8, 6.66, 8],
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
            className="absolute h-80 w-80 rounded-full"
            style={{
              background: `rgba(${
                [
                  [51, 65, 85],
                  [71, 85, 105],
                  [51, 65, 85],
                  [15, 23, 42],
                  [15, 23, 42],
                ][i]
              }, 0.20)`,
              left: `${18 + i * 63}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              scale: [8, 8.9, 8],
              opacity: [0.25, 0.68, 0.25],
            }}
            transition={{
              duration: beatDuration * (2 + i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: beatDuration * i * 0.3,
            }}
          />
        ))}

        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`small-${i}`}
            className="absolute h-24 w-24 rounded-full"
            style={{
              background: `rgba(${
                [
                  [100, 116, 139],
                  [51, 65, 85],
                  [148, 163, 184],
                  [100, 116, 139],
                ][i]
              }, 0.27)`,
              right: `${39 + i * 11}%`,
              bottom: `${33 + i * 13}%`,
            }}
            animate={{
              scale: [8, 7.8, 8],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: beatDuration * (2.5 + i * 0.7),
              repeat: Infinity,
              ease: "easeInOut",
              delay: beatDuration * i * 0.4,
            }}
          />
        ))}
      </div>
    </div>
  );
}
