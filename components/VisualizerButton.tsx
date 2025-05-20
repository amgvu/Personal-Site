import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

interface VisualizerButtonProps {
  isVisible: boolean;
  onToggle: () => void;
}

const VisualizerButton: React.FC<VisualizerButtonProps> = ({ isVisible, onToggle }) => {
  return (
    <div className="fixed bottom-9 right-20 flex items-end gap-4 z-50 animate__fadeIn animate__delay-1s animate__animated">
      <div className="flex mb-1 flex-col">
        <span className="text-white/80 text-sm">Toggle Background</span>
        <span className="text-blue-300 text-xs">Photosensitive Warning</span>
      </div>
      <div className="relative group">
        <button 
          onClick={onToggle}
          className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-100 cursor-pointer"
        >
          {!isVisible ? 
            <BsFillPlayFill className="w-4 h-4 text-white" /> : 
            <BsPauseFill className="w-4 h-4 text-white" />
          }
        </button>
        
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-black/80"></div>
        </div>
      </div>
  );
};

export default VisualizerButton;