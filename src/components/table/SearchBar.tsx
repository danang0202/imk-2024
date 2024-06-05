import { useEffect, useRef, useState } from "react";
import {
  UMKMProperties,
  dataColumnUMKMBuilder,
  titleSlugType,
  umkmData,
} from "../../DataBuilder";
import { getTitleNameFromSlug } from "../../function";
import { CSSTransition } from "react-transition-group";

interface Props {
  width: string;
  searchColumn: string;
  setSearchColumn: (column: string) => void;
  keyword: string;
  setKeyword: (column: string) => void;
  data?: UMKMProperties[];
}

const SearchBar: React.FC<Props> = ({
  width,
  searchColumn,
  setSearchColumn,
  keyword,
  setKeyword,
  data,
}) => {
  const [showFilfterColumn, setShowsearchColumn] = useState(false);
  const columns: titleSlugType[] = dataColumnUMKMBuilder;
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const ref = useRef<HTMLFormElement>(null);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    const dataFix = data ? data : umkmData;

    if (value.length > 0) {
      const filteredRecommendations = dataFix
        .filter((umkm) =>
          umkm[searchColumn]?.toLowerCase().includes(value.toLowerCase())
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
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setRecommendations([]);
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
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Your Email
        </label>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex flex-row-0 z-10 items-center py-2.5 px-1 pl-2  md:px-4 text-xs lg:text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 w-[7rem] md:w-[8rem] lg:w-[10rem] dark:bg-slate-800 dark:border-grey  dark:text-white dark:hover:bg-black"
          type="button"
          onClick={() => setShowsearchColumn(!showFilfterColumn)}
        >
          {getTitleNameFromSlug(columns, searchColumn)}
          <svg
            className="w-2 h-2  md:w-2.5 md:h-2.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {showFilfterColumn && (
          <div
            id="dropdown"
            className="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-44 transform translate-y-12 dark:bg-slate-800"
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
                  Semua
                </button>
              </li>
              {columns.map((item) => (
                <li>
                  <button
                    onClick={() => {
                      setSearchColumn(item.slug);
                      setShowsearchColumn(false);
                    }}
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100  dark:hover:bg-black dark:text-white text-xs md:text-sm"
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="relative">
          <input
            value={keyword}
            onChange={(e) => handleKeywordChange(e)}
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-xs lg:text-sm text-gray-900 bg-gray-50 ruonded-s-none rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:bg-primaryTint2 dark:bg-slate-800 dark:border-grey dark:focus:bg-black"
            placeholder="Kata kunci..."
            style={{ width: width }}
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 py-2.5 px-3 md:px-4 text-sm font-medium h-full text-white bg-primary rounded-e-lg hover:bg-primaryHover"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
          {recommendations.length > 0 && (
            <CSSTransition
              in={true}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <ul className="absolute z-20 bg-white w-full border rounded shadow-lg mt-1">
                {recommendations.length > 0 && (
                  <ul className="absolute z-10 bg-white w-full border rounded shadow-lg mt-1 text-xs md:text-sm">
                    {recommendations.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
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
                  </ul>
                )}
              </ul>
            </CSSTransition>
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
