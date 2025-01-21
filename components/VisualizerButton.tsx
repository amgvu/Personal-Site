import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

interface VisualizerButtonProps {
  isVisible: boolean;
  onToggle: () => void;
}

const VisualizerButton: React.FC<VisualizerButtonProps> = ({ isVisible, onToggle }) => {
  return (
    <div className="fixed bottom-9 right-12 flex items-end gap-4 z-50 animate__fadeIn animate__delay-1s animate__animated">
      <div className="flex mb-2 flex-col">
        <span className="text-white/80 text-sm">Enable Visualizer</span>
        <span className="text-red-400 text-xs">Photosensitive Visuals</span>
      </div>
      <button 
        onClick={onToggle}
        className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-300 cursor-pointer"
      >
        {!isVisible ? 
          <BsFillPlayFill className="w-6 h-6 text-white" /> : 
          <BsPauseFill className="w-6 h-6 text-white" />
        }
      </button>
    </div>
  );
};

export default VisualizerButton;