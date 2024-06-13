import { Dispatch, FC, SetStateAction } from "react";
import { FilterDetailUMKM } from "../../types/detail-umkm.types";
import { updateKeywordFilterDetailUMKM } from "../../helper/detail-product.helper";

interface MinimalisSearchProps {
  filter: FilterDetailUMKM;
  setFilter: Dispatch<SetStateAction<FilterDetailUMKM>>;
}

const MinimalisSearch: FC<MinimalisSearchProps> = ({ filter, setFilter }) => {
  return (
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
            updateKeywordFilterDetailUMKM(setFilter, e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-secondary focus:ring-secondary w-full ps-10 p-2.5 py-2 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500  text-xs md:text-sm"
          placeholder="Ketikkan nama product.."
          required
        />
      </div>
    </form>
  );
};

export default MinimalisSearch;
