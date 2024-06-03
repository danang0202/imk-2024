import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  text: string;
  size: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional click handler
  icon?: string;
}

const ButtonBlack: React.FC<ButtonProps> = ({ text, size, onClick, icon }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg bg-black text-white hover:bg-black/75 text-${size} transition duration-300 shadow-lg`}
      onClick={onClick}
    >
      {text}
      {icon && <FontAwesomeIcon icon={faArrowRight} className="ps-2" />}
    </button>
  );
};

export default ButtonBlack;
