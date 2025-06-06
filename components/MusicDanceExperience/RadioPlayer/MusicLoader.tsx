import { motion } from "framer-motion";

interface MusicLoaderProps {
  className?: string;
}

export default function MusicLoader({ className }: MusicLoaderProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className="mx-0.5 h-1.5 w-1.5 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          backgroundColor: [
            "rgb(255, 255, 255)",
            "rgb(156, 163, 175)",
            "rgb(255, 255, 255)",
          ],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      />
      <motion.div
        className="mx-0.5 h-1.5 w-1.5 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          backgroundColor: [
            "rgb(255, 255, 255)",
            "rgb(156, 163, 175)",
            "rgb(255, 255, 255)",
          ],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
          times: [0, 0.5, 1],
        }}
      />
      <motion.div
        className="mx-0.5 h-1.5 w-1.5 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          backgroundColor: [
            "rgb(255, 255, 255)",
            "rgb(156, 163, 175)",
            "rgb(255, 255, 255)",
          ],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
          times: [0, 0.5, 1],
        }}
      />
    </div>
  );
}
