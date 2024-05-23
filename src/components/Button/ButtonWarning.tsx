import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  text: string;
  size: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional click handler
  icon?: string;
  hoverStyle?: string;
}

const ButtonWarning: React.FC<ButtonProps> = ({
  text,
  size,
  onClick,
  icon,
  hoverStyle,
}) => {
  return (
    <button
      className={`px-5 py-2 lg:px-5 py-2 rounded bg-warning text-white hover:bg-warningHover text-${size} hover:${hoverStyle ? hoverStyle : ""}`}
      onClick={onClick}
    >
      {text}
      {icon && <FontAwesomeIcon icon={faArrowRight} className="ps-2" />}
    </button>
  );
};

export default ButtonWarning;
