import { motion } from "framer-motion";
import React from "react";
import { FaVolumeUp } from "react-icons/fa";
import styled from "styled-components";

interface VolumeSliderProps {
  volume: number;
  onVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  height: 8px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }

  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
`;

export default function VolumeSlider({
  volume,
  onVolumeChange,
}: VolumeSliderProps) {
  return (
    <motion.div
      className="absolute top-2 flex items-center space-x-2 p-2 shadow-lg"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <FaVolumeUp className="text-lg text-gray-300" />
      <StyledInput
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={onVolumeChange}
        className="h-2 appearance-none rounded-lg bg-white/10"
      />
    </motion.div>
  );
}
