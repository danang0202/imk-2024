import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import { FilterDetailUMKM } from "../../types/detail-umkm.types";
import { updateKeywordFilterDetailUMKM } from "../../helper/detail-product.helper";
import { productType } from "../../types/common.types";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownVariants, rowVariants } from "../../helper/motion.helper";

interface MinimalisSearchProps {
  filter: FilterDetailUMKM;
  setFilter: Dispatch<SetStateAction<FilterDetailUMKM>>;
  produk: productType[];
}

const MinimalisSearch: FC<MinimalisSearchProps> = ({ filter, setFilter, produk }) => {
  const [recommendationsName, setRecommendationsName] = useState<productType[]>([]);
  const ref = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setRecommendationsName([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleSearchChange = (keyword: string) => {
    updateKeywordFilterDetailUMKM(setFilter, keyword);
    if (keyword) {
      const filteredRecommendationsName = produk
        .filter((product) =>
          product.nama.toLowerCase().includes(keyword.toLowerCase())
        )
        .sort((a, b) => {
          if (a.nama.toLowerCase().startsWith(keyword.toLowerCase()) && !b.nama.toLowerCase().startsWith(keyword.toLowerCase())) {
            return -1;
          }
          if (!a.nama.toLowerCase().startsWith(keyword.toLowerCase()) && b.nama.toLowerCase().startsWith(keyword.toLowerCase())) {
            return 1;
          }
          return a.nama.toLowerCase().localeCompare(b.nama.toLowerCase());
        })
        .slice(0, 5);
      setRecommendationsName(filteredRecommendationsName);
    } else {
      setRecommendationsName([]);
    }
  };

  return (
    <div className="relative">
      <form className="flex items-center">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-3 h-3 md:w-4 md:h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            value={filter.keyword}
            onChange={(e) => {
              handleSearchChange(e.target.value);
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-secondary focus:ring-secondary w-full ps-10 p-2.5 py-2 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  text-xs md:text-sm"
            placeholder="Ketikkan nama product.."
            required
          />
        </div>
      </form>
      <AnimatePresence>
        {recommendationsName.length > 0 && (
          <motion.ul
            ref={ref}
            id="dropdown"
            className="absolute bg-white dark:bg-gray-800 w-full border dark:border-gray-700 rounded shadow-lg mt-1"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
          >
            {recommendationsName.length > 0 && (
              <ul className="text-xs md:text-sm">
                <p className="font-semibold text-sm px-2 mt-2">Produk</p>
                <AnimatePresence>
                  {recommendationsName.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={rowVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ duration: 0.3 }}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-white dark:hover:bg-black"
                      onClick={() => {
                        setRecommendationsName([]);
                        setFilter((prev) => ({ ...prev, keyword: item.nama }))
                      }}
                      dangerouslySetInnerHTML={{
                        __html: item.nama.replace(
                          new RegExp(`(${filter.keyword})`, "gi"),
                          (match: string) =>
                            `<span class="font-semibold text-secondary">${match}</span>`
                        ),
                      }}
                    />
                  ))}
                </AnimatePresence>
              </ul>
            )}
          </motion.ul>
        )}

      </AnimatePresence>
    </div>
  );
};

export default MinimalisSearch;
