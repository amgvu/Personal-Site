import { motion } from "framer-motion";

interface MusicLoaderProps {
  className?: string;
}

const MusicLoader: React.FC<MusicLoaderProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div 
        className="w-1.5 h-1.5 rounded-full mx-0.5"
        animate={{
          scale: [1, 1.5, 1],
          backgroundColor: ['rgb(255, 255, 255)', 'rgb(156, 163, 175)', 'rgb(255, 255, 255)']
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
      />
      <motion.div 
        className="w-1.5 h-1.5 rounded-full mx-0.5"
        animate={{
          scale: [1, 1.5, 1],
          backgroundColor: ['rgb(255, 255, 255)', 'rgb(156, 163, 175)', 'rgb(255, 255, 255)']
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
          times: [0, 0.5, 1]
        }}
      />
      <motion.div 
        className="w-1.5 h-1.5 rounded-full mx-0.5"
        animate={{
          scale: [1, 1.5, 1],
          backgroundColor: ['rgb(255, 255, 255)', 'rgb(156, 163, 175)', 'rgb(255, 255, 255)']
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
          times: [0, 0.5, 1]
        }}
      />
    </div>
  );
};

export default MusicLoader;