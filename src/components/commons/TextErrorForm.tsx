import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  variantsOpacity,
} from "../../helper/motion.helper";

interface TextErrorFormProps {
  text: string;
}
const TextErrorForm: FC<TextErrorFormProps> = ({ text }) => {
  return (
    <AnimatePresence>
      <motion.p
        variants={variantsOpacity}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="text-red-500 text-xs mt-1"
      >
        {text}
      </motion.p>
    </AnimatePresence>
  );
};

export default TextErrorForm;
