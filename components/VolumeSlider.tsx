
import { motion } from "framer-motion";
import React from "react";
import { FaVolumeUp } from "react-icons/fa";

interface VolumeSliderProps {
  volume: number;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({ volume, onVolumeChange }) => {
  return (
    <motion.div
      className="absolute top-2 flex items-center space-x-2 p-2 rounded-sm shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <FaVolumeUp className="text-gray-300 text-lg" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={onVolumeChange}
        className="bg-white/10 rounded-lg appearance-none h-2"
      />
    </motion.div>
  );
};

export default VolumeSlider;