import { useEffect, useRef } from "react";
import {
  dropdownItemVariants,
  dropdownVariants,
} from "../../helper/motion.helper";
import { TypeData } from "../table/Selection";
import { AnimatePresence, motion } from "framer-motion";
import { useThemeContext } from "../../layout/ThemeContext";

interface Props {
  show: boolean;
  setShow: (column: boolean) => void;
  filterList: TypeData[];
  selectedFilter: TypeData;
  setSelectedFilter: (column: TypeData) => void;
}

const FilterChartSelection: React.FC<Props> = ({
  show,
  setShow,
  filterList,
  selectedFilter,
  setSelectedFilter,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { common: c } = useThemeContext()
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <div>
        <button
          type="button"
          className="whitespace-nowrap inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-slate-800 dark:text-white py-1.5 px-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-slate-800 min-w-20"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setShow(!show)}
        >
          {c(selectedFilter?.name)}
          <svg
            className="-mr-1 h-4 w-4 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            className={`absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800`}
            role="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
          >
            <div className="" role="none">
              <AnimatePresence>
                {filterList.map((item: TypeData, index: number) => (
                  <motion.p
                    key={index}
                    className="text-gray-700 block px-4 py-1 text-xs hover:bg-silver cursor-pointer  dark:text-white dark:hover:bg-slate-700 transition-colors duration-300"
                    role="menuitem"
                    onClick={() => {
                      setSelectedFilter(item);
                      setShow(false);
                    }}
                    variants={dropdownItemVariants}
                    transition={{ duration: 0.3 }}
                  >
                    {c(item.name)}
                  </motion.p>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterChartSelection;
