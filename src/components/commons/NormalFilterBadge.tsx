import { AnimatePresence, motion } from "framer-motion";
import { EXTENDEDCOLORS } from "../../DataBuilder";
import { variantsBadgeFilter } from "../../helper/motion.helper";

interface Props {
  text: string;
  handleClick: () => void;
}
const NormalFilterBadge: React.FC<Props> = ({ text, handleClick }) => {
  return (
    <AnimatePresence>
      <motion.span
        id="badge-dismiss-default"
        className="inline-flex items-center px-1 md:px-2 py-1 me-2 text-xs lg:text-sm font-base md:font-medium text-grey bg-silver rounded-sm Fhover:text-white cursor-pointer"
        onClick={handleClick}
        whileHover={{ backgroundColor: EXTENDEDCOLORS.inactive, scale: 1.05 }}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variantsBadgeFilter}
        transition={{ duration: 0.3 }}
      >
        {text}
        <button
          type="button"
          className="inline-flex items-center p-1 ms-1 md:ms-2 bg-transparent rounded-sm"
          data-dismiss-target="#badge-dismiss-default"
          aria-label="Remove"
        >
          <svg
            className="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Remove badge</span>
        </button>
      </motion.span>
    </AnimatePresence>
  );
};

export default NormalFilterBadge;
