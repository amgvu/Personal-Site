import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollingBannerProps {
  text: string;
}

const ScrollingBanner: React.FC<ScrollingBannerProps> = ({ text }) => {
  return (
    <motion.div
      style={{
        whiteSpace: "nowrap",
        position: "fixed",
        top: 0,
        left: 0,
        width: "30%",
        backgroundColor: "transparent",
        color: "#fff",
        padding: "10px",
        overflow: "hidden",
      }}
      animate={{
        x: ["-35%", "100%"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.div>
  );
};

export default ScrollingBanner;
