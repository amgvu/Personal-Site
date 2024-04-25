import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import ReactPlayer from "react-player";

interface RadioComponentProps {
  text: string;
  url: string;
}

const RadioComponent: React.FC<RadioComponentProps> = ({ text, url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackPosition, setPlaybackPosition] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = ( progress: { playedSeconds: number }) => {
    setPlaybackPosition( progress.playedSeconds );
  };

  return (
    <div>
      <div className="absolute top-[43px] font-sans transform bg-transparent p-2 rounded-xl border border-white flex items-center">
        <div style={{ 
            position: "absolute",
            right: "-32px",
            overflow: "visible",
            top: "8px"
                   }}>
        <div style={{ marginLeft: "20px" }} className="cursor-pointer"onClick={handlePlayPause}>
          {isPlaying ? (
            <FaPause style={{ color: "#FFFFFF", fontSize: "24px" }} />
          ) : (
            <FaPlay style={{ color: "#FFFFFF", fontSize: "24px" }} />
          )}
        </div>
      </div>
      <div className="overflow-hidden">
      <motion.div
        style={{
          whiteSpace: "nowrap",
          color: "#fff",
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
      <div className="absolute top-[43px] font-sans overflow-hidden transform bg-transparent p-2 rounded-xl flex items-center">
      </div>

      {isPlaying && (
        <ReactPlayer
          url={url}
          playing={true}
          controls={false}
          volume={0.5}
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
    </div>
  );
};

export default RadioComponent;






