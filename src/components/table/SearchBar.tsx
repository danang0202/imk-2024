import { useEffect, useRef, useState } from "react";
import { dataColumnUMKMBuilder, titleSlugType, umkmData } from "../../DataBuilder";
import { useThemeContext } from "../../layout/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import {
  dropdownItemVariants,
  dropdownVariants,
  rowVariants,
} from "../../helper/motion.helper";
import {
  columnTabelInfoModal,
  infoModalData,
} from "../../static/InfoModalDataBuilder";

interface Props {
  width: string;
  searchColumn: string;
  setSearchColumn: (column: string) => void;
  keyword: string;
  setKeyword: (column: string) => void;
  hiddenReccommendation?: boolean;
  isInfoModal?: boolean;
}

const SearchBar: React.FC<Props> = ({
  width,
  searchColumn,
  setSearchColumn,
  keyword,
  setKeyword,
  hiddenReccommendation,
  isInfoModal,
}) => {
  const [showFilfterColumn, setShowsearchColumn] = useState(false);
  const columns: titleSlugType[] = isInfoModal
    ? columnTabelInfoModal
    : dataColumnUMKMBuilder;

  const [recommendations, setRecommendations] = useState<string[]>([]);
  const { common: c } = useThemeContext();
  const ref = useRef<HTMLFormElement>(null);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    const dataFix = isInfoModal ? infoModalData : umkmData;

    if (!hiddenReccommendation) {
      if (value.length > 0) {
        const filteredRecommendations = dataFix
          .filter((data) =>
            data[searchColumn]?.toLowerCase().includes(value.toLowerCase())
          )
          .sort((a, b) => {
            const aField = a[searchColumn]?.toLowerCase() || "";
            const bField = b[searchColumn]?.toLowerCase() || "";
            const aStartsWith = aField.startsWith(value.toLowerCase());
            const bStartsWith = bField.startsWith(value.toLowerCase());
            if (aStartsWith && !bStartsWith) return -1;
            if (!aStartsWith && bStartsWith) return 1;
            return (
              aField.indexOf(value.toLowerCase()) -
              bField.indexOf(value.toLowerCase())
            );
          })
          .slice(0, 10)
          .map((umkm) => umkm[searchColumn]);
        setRecommendations(filteredRecommendations);
      } else {
        setRecommendations([]);
      }
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setRecommendations([]);
      setShowsearchColumn(false)
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form className="" ref={ref}>
      <div className="flex relative">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="translate-x-1 flex flex-row-0 z-10 items-center py-2.5 px-1 pl-2  md:px-4 text-xs lg:text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 w-[7rem] md:w-[8rem] lg:w-[10rem] dark:bg-slate-800 dark:border-gray-600  dark:text-white dark:hover:bg-slate-800 whitespace-nowrap transition duration-300"
          type="button"
          onClick={() => setShowsearchColumn(!showFilfterColumn)}
        >
          {!isInfoModal
            ? searchColumn == "all"
              ? c("all")
              : c(`thead_umkm_${searchColumn}`)
            : searchColumn == "all"
              ? c("all")
              : columns.find((item) => item.slug == searchColumn)?.title}

          <svg
            className="w-2 h-2  md:w-2.5 md:h-2.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <AnimatePresence>
          {showFilfterColumn && (
            <motion.div
              id="dropdown"
              className="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-44 transform translate-y-12 dark:bg-slate-800"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
            >
              <ul
                className="py-2 text-sm text-gray-700 "
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    onClick={() => {
                      setSearchColumn("all");
                      setShowsearchColumn(false);
                    }}
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-black dark:text-white text-xs md:text-sm"
                  >
                    {c("all")}
                  </button>
                </li>
                {columns.map((item) => (
                  <motion.li
                    key={item.slug}
                    variants={dropdownItemVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <button
                      onClick={() => {
                        setSearchColumn(item.slug);
                        setShowsearchColumn(false);
                      }}
                      type="button"
                      className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-black dark:text-white text-xs md:text-sm"
                    >
                      {isInfoModal ? item.title : c(`thead_umkm_${item.slug}`)}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="relative transform -translate-x-5">
          <input
            value={keyword}
            onChange={(e) => handleKeywordChange(e)}
            type="search"
            id="search-dropdown"
            className="block p-2.5 pl-7 md:pl-7 w-full z-20 text-xs lg:text-sm text-gray-900 bg-gray-50 rounded-s-none rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 dark:bg-slate-800 dark:text-white dark:border-gray-600 dark:focus:bg-slate-800"
            placeholder="Kata kunci..."
            style={{ width: width }}
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 py-2.5 px-3 md:px-4 text-sm font-medium h-full text-white bg-primary rounded-e-lg hover:bg-primaryHover "
          >
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
            <span className="sr-only">Search</span>
          </button>

          <AnimatePresence>
            {recommendations.length > 0 && (
              <motion.ul
                id="dropdown"
                className="absolute bg-white dark:bg-gray-800 w-full border dark:border-gray-700 rounded shadow-lg mt-1"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
              >
                <ul className="absolute bg-white dark:bg-gray-800 w-full border  dark:border-gray-700 rounded shadow-lg mt-1 text-xs md:text-sm">
                  <AnimatePresence>
                    {recommendations.map((item, index) => (
                      <motion.li
                        key={index}
                        variants={rowVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-white dark:hover:bg-black"
                        onClick={() => {
                          setKeyword(item);
                          setRecommendations([]);
                        }}
                        dangerouslySetInnerHTML={{
                          __html: item.replace(
                            new RegExp(`(${keyword})`, "gi"),
                            (match) =>
                              `<span class="font-semibold text-secondary">${match}</span>`
                          ),
                        }}
                      />
                    ))}
                  </AnimatePresence>
                </ul>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
