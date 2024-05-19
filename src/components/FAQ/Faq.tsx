import React, { useState } from "react";
import RevealFromRight from "../Reveal/RevealFromRight";
import RevealFromLeft from "../Reveal/RevealFromLeft";
import FaqQuestion from "./FaqQuestion";

interface Item {
  title: string;
  content: string;
}

interface FaqProps {
  items: Item[];
}

const Faq: React.FC<FaqProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setActiveIndex((prevActiveIndex) => {
      const indexExists = prevActiveIndex.includes(index);

      if (indexExists) {
        return prevActiveIndex.filter((activeIdx) => activeIdx !== index);
      }

      return [...prevActiveIndex, index];
    });
  };

  return (
    <section className="w-full">
      {items.map(({ title, content }, index) =>
        index % 2 == 0 ? (
          <RevealFromRight>
            <FaqQuestion
              index={index}
              activeIndex={activeIndex}
              title={title}
              content={content}
              toggleFaq={toggleFaq}
            />
          </RevealFromRight>
        ) : (
          <RevealFromLeft>
            <FaqQuestion
              index={index}
              activeIndex={activeIndex}
              title={title}
              content={content}
              toggleFaq={toggleFaq}
            />
          </RevealFromLeft>
        )
      )}
    </section>
  );
};

export default Faq;
