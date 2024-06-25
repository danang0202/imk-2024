import { AnimatePresence, motion } from "framer-motion";
import { EXTENDEDCOLORS } from "../../DataBuilder";
import { variantsBadgeFilter } from "../../helper/motion.helper";

interface Props {
  handleClick: () => void;
  bg?: string;
}

const ClearBadge: React.FC<Props> = ({ handleClick, bg }) => {
  return (
    <AnimatePresence>
      <motion.span
        whileHover={{ backgroundColor: EXTENDEDCOLORS.accent5, color: EXTENDEDCOLORS.white }}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variantsBadgeFilter}
        transition={{ duration: 0.3 }}
        id="badge-dismiss-red"
        className={`inline-flex cursor-pointer hover items-center px-2 py-1 me-2 text-xs text-accent5 ${bg ? bg : 'bg-silver'} font-base rounded-sm`}
        onClick={() => handleClick()}
      >
        Bersihkan
        <button
          type="button"
          className="inline-flex items-center p-1  ms-2"
          data-dismiss-target="#badge-dismiss-red"
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

export default ClearBadge;
