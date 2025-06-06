import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

interface VisualizerButtonProps {
  isVisible: boolean;
  onToggle: () => void;
}

export default function VisualizerButton({
  isVisible,
  onToggle,
}: VisualizerButtonProps) {
  return (
    <div className="invisible fixed bottom-0 right-0 z-50 sm:visible">
      <div className="animate__fadeIn animate__delay-1s animate__animated fixed bottom-9 right-20 z-50 flex items-end gap-4">
        <div className="mb-1 flex flex-col">
          <span className="text-sm text-white/80">Toggle Background</span>
          <span className="text-xs text-blue-300">Photosensitive Warning</span>
        </div>
        <div className="group relative">
          <button
            onClick={onToggle}
            className="cursor-pointer rounded-full border border-white/20 bg-white/10 p-3 transition-colors duration-100 hover:bg-white/20"
          >
            {!isVisible ? (
              <BsFillPlayFill className="h-4 w-4 text-white" />
            ) : (
              <BsPauseFill className="h-4 w-4 text-white" />
            )}
          </button>

          <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-b-black/80 border-l-transparent border-r-transparent"></div>
        </div>
      </div>
    </div>
  );
}
