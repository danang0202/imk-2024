import { ChevronDown } from "lucide-react";
import React from "react";

interface Item {
  index: number;
  activeIndex: number[];
  title: string;
  content: string;
  toggleFaq: (index: number) => void;
  aos: string;
}
const FaqQuestion: React.FC<Item> = ({
  index,
  activeIndex,
  title,
  content,
  toggleFaq,
  aos,
}) => {
  return (
    <div
      onClick={() => toggleFaq(index)}
      className="border border-gray-300 mb-3 rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-black w-full cursor-pointer"
      data-aos={aos}
      data-aos-duration="800"
    >
      <button className="flex justify-between w-full items-center focus:outline-none">
        <h4
          className={`flex-1 text-lg text-left font-semibold hover:text-primary ${
            activeIndex.includes(index)
              ? "text-primary"
              : "text-black dark:text-white"
          }`}
        >
          {title}
        </h4>
        <ChevronDown
          className={`w-6 h-6 text-primary transition-transform ${
            activeIndex.includes(index) ? "transform rotate-180" : ""
          } hover:text-primary`}
        />
      </button>
      {activeIndex.includes(index) && (
        <div className="mt-3" data-aos="zoom-in" data-aos-duration="400">
          <p className="text-base dark:text-white">{content}</p>
        </div>
      )}
    </div>
  );
};

export default FaqQuestion;
