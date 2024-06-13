import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  size: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional click handler
  icon?: string;
}

const ButtonBlack: React.FC<ButtonProps> = ({ text, size, onClick, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={isHovered ? { scale: [1, 1.1, 1] } : { scale: 1 }}
      transition={
        isHovered ? { duration: 0.6, repeat: Infinity } : { duration: 0.2 }
      }
      whileTap={{ scale: 0.9 }}
      className={`px-4 py-2 rounded-lg bg-black text-white text-${size} hover:bg-black/90`}
      onClick={onClick}
    >
      {text}
      {icon && <FontAwesomeIcon icon={faArrowRight} className="ps-2" />}
    </motion.button>
  );
};

export default ButtonBlack;
