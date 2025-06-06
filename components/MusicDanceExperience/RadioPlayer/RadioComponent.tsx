import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause } from "react-icons/fa";
import ReactPlayer from "react-player";
import MusicLoader from "./MusicLoader";
import VolumeSlider from "./VolumeSlider";

interface RadioComponentProps {
  text: string;
  url: string;
}

export default function RadioComponent({ text, url }: RadioComponentProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [volume, setVolume] = useState(0.2);

  const handlePlayPause = () => {
    if (!isPlaying) {
      setIsLoading(true);
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (progress: { playedSeconds: number }) => {
    setPlaybackPosition(progress.playedSeconds);
    if (isLoading && progress.playedSeconds > 0) {
      setIsLoading(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="relative">
      <div className="absolute top-[43px] w-2/12 transform rounded-lg border border-zinc-700 bg-white bg-opacity-[.04] p-2">
        {isLoading && isPlaying && (
          <MusicLoader className="fixed left-60 mt-12" />
        )}
        <div className="flex items-center">
          <div className="absolute right-[-32px] top-[8px] overflow-visible">
            <div className="ml-5 cursor-pointer" onClick={handlePlayPause}>
              <motion.div
                key={isPlaying ? "pause" : "play"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                {isPlaying ? (
                  <FaPause className="text-2xl text-gray-100" />
                ) : (
                  <FaPlay className="text-2xl text-gray-100" />
                )}
              </motion.div>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <motion.div
              className="whitespace-nowrap text-gray-300"
              animate={{
                x: ["100%", "-248%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {text}
            </motion.div>
          </div>
        </div>
      </div>

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

      {isPlaying && (
        <VolumeSlider volume={volume} onVolumeChange={handleVolumeChange} />
      )}
    </div>
  );
}
