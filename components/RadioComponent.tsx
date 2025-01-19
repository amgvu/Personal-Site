import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import ReactPlayer from "react-player";
import styled from "styled-components";

interface RadioComponentProps {
  text: string;
  url: string;
}

const Slider = styled.input`
  &::-webkit-slider-thumb {
    width: 12px;
    height: 12px;
    background: #09090b;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -5px;
    box-shadow: 0 0 0 0.3px white;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background: #09090b;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 0 0.3px white;
  }

  &::-ms-thumb {
    width: 12px;
    height: 12px;
    background: #09090b;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 0 0.3px white;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: #18181b;
    border-radius: 2px;
    box-shadow: 0 0 0 0.2px white;
  }

  &::-moz-range-track {
    width: 100%;
    height: 4px;
    background: #18181b;
    border-radius: 2px;
    box-shadow: 0 0 0 0.2px white;
  }

  &::-ms-track {
    width: 100%;
    height: 4px;
    background: #18181b;
    border-radius: 2px;
    box-shadow: 0 0 0 0.2px white;
  }
`;

const RadioComponent: React.FC<RadioComponentProps> = ({ text, url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [volume, setVolume] = useState(0.1);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (progress: { playedSeconds: number }) => {
    setPlaybackPosition(progress.playedSeconds);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="relative">
      <div className="absolute top-[43px] transform bg-white bg-opacity-[.04] p-2 rounded-xl border border-zinc-700 flex items-center">
        <div
          style={{
            position: "absolute",
            right: "-32px",
            overflow: "visible",
            top: "8px",
          }}
        >
          <div
            style={{ marginLeft: "20px" }}
            className="cursor-pointer"
            onClick={handlePlayPause}
          >
            <motion.div
              key={isPlaying ? "pause" : "play"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {isPlaying ? (
                <FaPause style={{ color: "#f3f4f6", fontSize: "24px" }} />
              ) : (
                <FaPlay style={{ color: "#f3f4f6", fontSize: "24px" }} />
              )}
            </motion.div>
          </div>
        </div>
        <div className="overflow-hidden">
          <motion.div
            style={{
              whiteSpace: "nowrap",
              color: "#d1d5db",
            }}
            animate={{
              x: ["103%", "-103%"],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {text}
          </motion.div>
        </div>
      </div>
      <div className="absolute top-[43px] overflow-hidden transform bg-transparent p-2 rounded-xl flex items-center"></div>

      {isPlaying && (
        <ReactPlayer
          url={url}
          playing={true}
          controls={false}
          volume={volume}
          width={0}
          height={0}
          progressInterval={1000}
          onProgress={handleProgress}
          config={{
            file: {
              attributes: {
                preload: "auto",
              },
            },
          }}
          playbackRate={1}
          playedSeconds={playbackPosition}
        />
      )}

      <AnimatePresence>
        {isPlaying ? (
          <motion.div
            className="absolute top-full mt-7 left-2 flex items-center justify-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Slider
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
            />
          </motion.div>
        ) : null}
        </AnimatePresence>

    </div>
  );
};

export default RadioComponent;

