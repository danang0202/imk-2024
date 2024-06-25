import React from "react";
import { paginationUtils } from "../../utils";

interface Props {
  page: number;
  setPage: (column: number) => void;
  totalPage: number;
  limit: number;
  setLimit: (column: number) => void;
}

const Pagination: React.FC<Props> = ({
  page,
  setPage,
  totalPage,
  limit,
  setLimit,
}) => {
  const siblings = 1;
  const array = paginationUtils(totalPage, page, siblings);
  const onPageChange = (value: string | number) => {
    if (typeof value === "string") {
      if (value === "&laquo" || value === "..." || value === " ...") {
        setPage(1);
      } else if (value === "&lsaquo") {
        if (page !== 1) {
          setPage(page - 1);
        }
      } else if (value === "&rsaquo") {
        if (page !== totalPage) {
          setPage(page + 1);
        }
      } else if (value === "&raquo") {
        setPage(totalPage);
      }
    } else {
      setPage(value);
    }
  };
  return (
    <div className="pagination w-full md:w-fit text-xs md:text-sm">
      <div className="flex flex-col md:flex-row justify-between i items-center gap-4 md:gap-8 w-full md:w-auto">
        <div className="box flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-row gap-2 items-center">
            <label htmlFor="show-number">Tampilkan : </label>
            <select
              id="show-number"
              value={limit}
              onChange={(e) => {
                setLimit(parseInt(e.target.value));
                setPage(1);
              }}
              className="bg-gray-50  shadow-sm text-gray-900 rounded-lg p-2 font-semibold dark:bg-slate-800 dark:border dark:border-gray-600 dark:text-white text-xs"
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>

        <ul className="flex flex-row items-center bg-silver rounded-lg px-2 shadow-sm gap-x-1 dark:bg-slate-800 dark:border dark:border-gray-600">
          <li
            className="text-black py-1 lg:py-1 px-2 md:px-3 lg:px-2.5 font-semibold hover:bg-inactive rounded cursor-pointer dark:text-white"
            onClick={() => onPageChange("&laquo")}
          >
            <button className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li
            className="hidden md:block text-black py-1 lg:py-1 px-2 md:px-3 lg:px-2.5  font-semibold hover:bg-inactive rounded cursor-pointer dark:text-white"
            onClick={() => onPageChange("&lsaquo")}
          >
            <button className="page-link">&lsaquo;</button>
          </li>
          {array.map((value, index) => (
            <li
              className="page-item cursor-pointer"
              key={index}
              onClick={() => onPageChange(value)}
            >
              <button
                className={` text-black py-1 lg:py-1 px-2 md:px-3 lg:px-2.5  font-semibold ${
                  page === value
                    ? "bg-primary text-white rounded "
                    : "text-black hover:bg-inactive rounded  "
                } dark:text-white`}
              >
                {value}
              </button>
            </li>
          ))}
          <li
            className="hidden md:block text-black py-1 lg:py-1 px-2 md:px-3 lg:px-2.5  font-semibold hover:bg-inactive ronded-sm md:rounded hover:cursor-pointer dark:text-white"
            onClick={() => onPageChange("&rsaquo")}
          >
            <button className="page-link">&rsaquo;</button>
          </li>
          <li
            className="text-black py-1 lg:py-1 px-2 md:px-3 lg:px-2.5  font-semibold hover:bg-inactive rounded hover:cursor-pointer dark:text-white"
            onClick={() => onPageChange("&raquo")}
          >
            <button className="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
