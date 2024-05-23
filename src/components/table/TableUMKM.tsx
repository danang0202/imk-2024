import React, { useEffect, useState } from "react";
import ArrowSorting from "./ArrowSorting";
import {
  UMKMProperties,
  dataColumnUMKMBuilder,
  titleSlugType,
  umkmData,
} from "../../DataBuilder";
import LinkText from "../LinkText";
import Pagination from "./Pagination";
import { fetchDataByPagination } from "../../utils";

interface Props {
  showAdvancedFilter: boolean;
}

const TableUMKM: React.FC<Props> = ({ showAdvancedFilter }) => {
  const dataUmkm: UMKMProperties[] = umkmData;
  const headerDataTable: titleSlugType[] = dataColumnUMKMBuilder;
  const [activeColumn, setActiveColumn] = useState<string>("Price");
  const [sortingColumn, setSortingColumn] = useState<string | null>("Price");
  const [sortingData, setSortingData] = useState<UMKMProperties[]>([]);
  const [limit, setLimit] = useState(2);
  const [totalPage, setTotalpage] = useState(1);
  const [page, setPage] = useState(1);

  const sortByColumn = (column: string) => {
    const isCurrentlySorted = sortingColumn === column;
    let sortData = [];
    if (column == "id") {
      sortData = dataUmkm
        .slice()
        .sort((a, b) => (isCurrentlySorted ? b.id - a.id : a.id - b.id));
    } else {
      sortData = dataUmkm
        .slice()
        .sort((a, b) =>
          isCurrentlySorted
            ? b[column].toString().localeCompare(a[column].toString())
            : a[column].toString().localeCompare(b[column].toString())
        );
    }

    setSortingData(sortData);
    setSortingColumn(isCurrentlySorted ? null : column);
    setActiveColumn(column);
  };

  useEffect(() => {
    const paginatedData = fetchDataByPagination(dataUmkm, page, limit);
    setSortingData(paginatedData);
    setTotalpage(Math.ceil(dataUmkm.length / limit));
  }, [dataUmkm, limit, page]);

  return (
    <div className={`mt-2 w-full ${showAdvancedFilter ? "px-4" : "px-0"}`}>
      <div
        className={`table-container overflow-x-auto ${
          showAdvancedFilter ? "w-[85rem]" : "w-full"
        } relative`}
      >
        <table className="w-full text-left font-inter border-separate border-spacing-y-0">
          <thead className="bg-white rounded-lg text-black font-semibold text-sm md:text-base">
            <tr className="">
              {headerDataTable?.map((item) => (
                <th
                  className={`py-3 text-black justify-center font-bold bg-silver ${
                    item.slug == "index" && "pl-3xl"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <ArrowSorting
                      activeColumn={activeColumn}
                      sortingColumn={sortingColumn}
                      includes={item?.slug}
                      onClickFunction={sortByColumn}
                    />
                    <span
                      className="cursor-pointer pl-1"
                      onClick={() => sortByColumn(item?.slug)}
                    >
                      {item?.title}
                    </span>
                  </div>
                </th>
              ))}
              <th className="py-3 pr-3xl justify-center text-black sm:text-base font-bold bg-silver">
                Tindakan
              </th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            {sortingData?.map((data, index) => (
              <tr key={index}>
                <td className="py-6 whitespace-nowrap pl-3xl text-center border-t font-bold">
                  {data?.index}
                </td>
                <td className="px-3 whitespace-nowrap font-normal text-center border-t">
                  <div className="flex flex-row items-center w-full gap-3">
                    <img
                      src={data.avatar}
                      alt={data.name}
                      className="rounded-full max-w-10 "
                    />
                    {data?.name}
                  </div>
                </td>
                <td className="px-4 whitespace-nowrap font-normal text-center  border-t">
                  {data?.skala}
                </td>
                <td className="px-4  whitespace-nowrap font-normal text-center border-t">
                  {data?.bidang}
                </td>
                <td className="px-4 whitespace-nowrap font-normal text-center border-t">
                  {data?.badanHukum}
                </td>
                <td className="px-4 whitespace-nowrap font-normal text-center border-t">
                  {data?.pengampu}
                </td>
                <td className="py-2 px-4 font-normal text-center border-t min-w-[15rem]">
                  {data?.alamat}
                </td>
                <td className="text-center pr-3xl border-t">
                  <LinkText text="Detail" branding="warning" url="#" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 lg:px-3xl py-4 flex flex-col md:flex-row items-end gap-y-4 md:justify-between md:items-center">
        <p className="text-sm md:text-base">
          Menampilkan <span className="font-semibold">1</span> -
          <span className="font-semibold"> 10 </span> dari {""}
          <span className="font-bold"> 100 </span> data
        </p>
        <div className="pagination w-full md:w-fit">
          <Pagination
            page={page}
            setPage={setPage}
            totalPage={totalPage}
            limit={limit}
            setLimit={setLimit}
          />
        </div>
      </div>
    </div>
  );
};
export default TableUMKM;
