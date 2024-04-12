import { ReactNode } from "react";
import { motion } from "framer-motion";
import ReactPlayer from 'react-player'

interface RadioComponentProps {
  text: string;
}

const RadioComponent: React.FC<RadioComponentProps> = ({ text }) => {
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
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {text}
      </motion.div>

    </div>
  );
};

export default RadioComponent;

