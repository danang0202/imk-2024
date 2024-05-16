import React from "react";

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; // Optional click handler
}

const ButtonPrimary: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className={`px-5 py-2 lg:px-5 py-2 rounded bg-primary text-white hover:bg-hoverPrimary`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
