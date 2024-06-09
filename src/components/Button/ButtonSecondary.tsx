import React from "react";
import { IconArrowRight } from "@tabler/icons-react";

interface ButtonProps {
  text: string;
  size: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional click handler
  icon?: string;
  hoverStyle?: string;
}

const ButtonSecondary: React.FC<ButtonProps> = ({
  text,
  size,
  onClick,
  icon,
  hoverStyle,
}) => {
  return (
    <button
      className={`flex flex-row p items-center x-5 py-2 lg:px-5 rounded bg-secondary text-white hover:bg-secondaryHover text-${size} hover:${
        hoverStyle ? hoverStyle : ""
      } transition duration-300`}
      onClick={onClick}
    >
      {text}
      {icon && <IconArrowRight size={30} className="pl-2"/>}
    </button>
  );
};

export default ButtonSecondary;
