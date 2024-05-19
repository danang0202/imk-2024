import { ChevronDown } from "lucide-react";
import React from "react";
import RevealFaq from "../Reveal/RevealFaq";

interface Item {
  index: number;
  activeIndex: number[];
  title: string;
  content: string;
  toggleFaq: (index: number) => void;
}
const FaqQuestion: React.FC<Item> = ({
  index,
  activeIndex,
  title,
  content,
  toggleFaq,
}) => {
  return (
    <div className="border border-gray-300 mb-3 rounded-xl p-4 hover:bg-slate-50 w-full">
      <button
        onClick={() => toggleFaq(index)}
        className="flex justify-between w-full items-center focus:outline-none"
      >
        <h4
          className={`flex-1 text-lg text-left font-semibold hover:text-primary ${
            activeIndex.includes(index) ? "text-primary" : "text-black"
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
        <RevealFaq>
          <div className="mt-3">
            <p className="text-base">{content}</p>
          </div>
        </RevealFaq>
      )}
    </div>
  );
};

export default FaqQuestion;
