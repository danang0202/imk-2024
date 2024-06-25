import { ChevronDown } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
}) => {
  const isActive = activeIndex.includes(index);

  return (
    <div
      onClick={() => toggleFaq(index)}
      className="border border-gray-300 mb-3 rounded-xl p-4 hover:bg-slate-50 dark:hover:bg-black w-full cursor-pointer"
    >
      <button className="flex justify-between w-full items-center focus:outline-none">
        <h4
          className={`flex-1 text-sm text-left font-semibold hover:text-primary ${
            isActive ? "text-primary" : "text-black dark:text-white"
          }`}
        >
          {title}
        </h4>
        <ChevronDown
          className={`w-6 h-6 text-primary transition-transform ${
            isActive ? "transform rotate-180" : ""
          } hover:text-primary`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-3"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, }}
              className="text-sm dark:text-white"
            >
              {content}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FaqQuestion;
