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
    <div className="pagination text-sm md:text-base w-full md:w-fit">
      <div className="flex flex-row justify-between md:gap-8 w-full md:w-auto">
        <div className="box flex flex-col md:flex-row items-center gap-4">
          <label htmlFor="show-number" className="hidden lg:inline">
            Tampilkan :{" "}
          </label>
          <select
            id="show-number"
            value={limit}
            onChange={(e) => {
              setLimit(parseInt(e.target.value));
              setPage(1);
            }}
            className="bg-gray-50  shadow-sm text-gray-900 text-sm rounded-lg p-2.5 font-semibold"
          >
            <option value="2">2</option>
            <option value="8">8</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <ul className="flex flex-row items-center bg-silver rounded-lg px-2 shadow-sm gap-x-1">
          <li
            className="text-black py-1 px-3.5 font-semibold hover:bg-inactive rounded cursor-pointer"
            onClick={() => onPageChange("&laquo")}
          >
            <button className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          <li
            className="text-black py-1 px-3.5 font-semibold hover:bg-inactive rounded cursor-pointer"
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
                className={` text-black py-1 px-3 font-semibold ${
                  page === value
                    ? "bg-primary text-white rounded "
                    : "text-black hover:bg-inactive rounded  "
                }`}
              >
                {value}
              </button>
            </li>
          ))}
          <li
            className="text-black py-1 px-3.5 font-semibold hover:bg-inactive rounded hover:cursor-pointer"
            onClick={() => onPageChange("&rsaquo")}
          >
            <button className="page-link">&rsaquo;</button>
          </li>
          <li
            className="text-black py-1 px-3.5 font-semibold hover:bg-inactive rounded hover:cursor-pointer"
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
