import { useEffect, useState } from "react";
import { dataColumnUMKMBuilder, titleSlugType } from "../../DataBuilder";
import { getTitleNameFromSlug } from "../../function";

interface Props {
  width: string;
  searchColumn: string;
  setSearchColumn: (column: string) => void;
  keyword: string;
  setKeyword: (column: string) => void;
}

const SearchBar: React.FC<Props> = ({
  width,
  searchColumn,
  setSearchColumn,
  keyword,
  setKeyword,
}) => {
  const [showFilfterColumn, setShowsearchColumn] = useState(false);
  const columns: titleSlugType[] = dataColumnUMKMBuilder;

  useEffect(() => {
    console.log(searchColumn);
  }, [searchColumn]);
  return (
    <form className="">
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
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 w-[10rem]"
          type="button"
          onClick={() => setShowsearchColumn(!showFilfterColumn)}
        >
          {getTitleNameFromSlug(columns, searchColumn)}
          <svg
            className="w-2.5 h-2.5 ms-2.5"
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
            className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 transform translate-y-12"
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
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
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
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 "
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
            onChange={(e) => setKeyword(e.target.value)}
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:bg-primaryTint2"
            placeholder="Kata kunci..."
            required
            style={{ width: width }}
          />
          <button
            type="submit"
            className="absolute top-0 end-0 py-2.5 px-4 text-sm font-medium h-full text-white bg-primary rounded-e-lg hover:bg-primaryHover"
          >
            <svg
              className="w-4 h-4"
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
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
