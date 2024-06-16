import React from "react";

interface ArrowHanunProps {
  active: boolean;
}

const ArrowHanun: React.FC<ArrowHanunProps> = ({ active }) => {
  console.log(active);
  return (
    <svg
      className="w-4 h-4 cursor-pointer text-inactive group-hover:text-black rotate-180 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
};

export default ArrowHanun;
