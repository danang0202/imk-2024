import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  text: string;
  size: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional click handler
  icon?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({text, size, onClick,icon,}) => {
  return (
    <button
      className={`px-5 py-2 lg:px-5 py-2 rounded bg-primary text-white hover:bg-hoverPrimary text-${size}`}
      onClick={onClick}
    >
      {text}
      {icon && <FontAwesomeIcon icon={faArrowRight} className="ps-2" />}
    </button>
  );
};

export default ButtonPrimary;
