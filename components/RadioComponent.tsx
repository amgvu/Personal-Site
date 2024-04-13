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

  const handleProgress = (progress: { playedSeconds: number }) => {
    setPlaybackPosition(progress.playedSeconds);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "2.1%",
        left: "10%",
        transform: "translateX(-50%)",
        backgroundColor: "#101010",
        padding: "10px",
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          whiteSpace: "nowrap",
          color: "#fff",
        }}
        animate={{
          x: ["-106%", "106%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {text}
      </motion.div>

      <div style={{ position: "absolute", right: "10px" }}>
        <div style={{ marginLeft: "10px" }} onClick={handlePlayPause}>
          {isPlaying ? (
            <FaPause style={{ color: "#FFFFFF", fontSize: "24px" }} />
          ) : (
            <FaPlay style={{ color: "#FFFFFF", fontSize: "24px" }} />
          )}
        </div>
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






