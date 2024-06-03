import React, { useEffect, useState } from "react";
import ArrowSorting from "./ArrowSorting";
import {
  UMKMProperties,
  dataColumnUMKMBuilder,
  titleSlugType,
} from "../../DataBuilder";
import Pagination from "./Pagination";
import { fetchDataByPagination } from "../../utils";
import { getBadanUsahaColor, getSkalaUsahaColor } from "../../utils/utils";
import { IconInfoCircle } from "@tabler/icons-react";

interface Props {
  dataUmkm: UMKMProperties[];
}

const TableUMKM: React.FC<Props> = ({ dataUmkm }) => {
  const headerDataTable: titleSlugType[] = dataColumnUMKMBuilder;
  const [activeColumn, setActiveColumn] = useState<string>("Price");
  const [sortingColumn, setSortingColumn] = useState<string | null>("Price");
  const [sortingData, setSortingData] = useState<UMKMProperties[]>([]);
  const [paginatedUMKM, setPaginatedUMKM] = useState<UMKMProperties[]>([]);
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalpage] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    setSortingData(dataUmkm);
  }, [dataUmkm]);

  const sortByColumn = (column: string) => {
    const isCurrentlySorted = sortingColumn === column;
    let sortData = [];
    if (column == "index") {
      sortData = dataUmkm
        .slice()
        .sort((a, b) =>
          isCurrentlySorted ? b.index - a.index : a.index - b.index
        );
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
    if (sortingData) {
      const paginatedData: UMKMProperties[] = fetchDataByPagination(
        sortingData,
        page,
        limit
      );
      setPaginatedUMKM(paginatedData);
      setTotalpage(Math.ceil(sortingData.length / limit));
    }
  }, [sortingData, limit, page]);

  return (
    <div>
      <div className={`table-container overflow-x-auto w-full relative`}>
        <table className="w-full text-left border-separate border-spacing-y-3 font-inter transform -translate-y-3">
          <thead className="rounded-lg text-black font-semibold text-sm md:text-base">
            <tr className="">
              {headerDataTable?.map((item) => (
                <th
                  className={`bg-white py-6 text-black justify-start font-bold whitespace-nowrap ${
                    item.slug == "index" && "pl-3xl "
                  } rounded-bl dark:text-white px-2 dark:bg-black`}
                >
                  <div className="bg-white flex items-center justify-start dark:bg-black">
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
              <th className="bg-white py-3 pr-3xl justify-center text-black sm:text-base font-bold dark:text-white rounded-br dark:bg-black">
                Tindakan
              </th>
            </tr>
          </thead>
          <tbody className="text-sm md:text-base">
            {paginatedUMKM?.map((data, index) => (
              <tr key={index} className="bg-white dark:bg-black">
                <td className=" py-5 whitespace-nowrap pl-3xl font-bold dark:border-slate-700 rounded-tl rounded-bl">
                  {data?.index}
                </td>
                <td className=" px-3 whitespace-nowrap font-normal  dark:border-slate-700">
                  <div className="flex flex-row items-center w-full gap-3">
                    <img
                      src={data.avatar}
                      alt={data.name}
                      className="rounded-full max-w-10 "
                    />
                    {data?.name}
                  </div>
                </td>
                <td className=" px-4 whitespace-nowrap font-normal  dark:border-slate-700">
                  <span
                    className={`${getSkalaUsahaColor(data?.skala).bg} ${
                      getSkalaUsahaColor(data?.skala).text
                    } text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
                  >
                    {data?.skala}
                  </span>
                </td>
                <td className=" px-4  whitespace-nowrap font-normal dark:border-slate-700">
                  {data?.bidang}
                </td>
                <td className=" px-4 whitespace-nowrap font-normal dark:border-slate-700">
                  <span
                    className={`${getBadanUsahaColor(data?.badanHukum).bg} ${
                      getBadanUsahaColor(data?.badanHukum).text
                    } text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
                  >
                    {data?.badanHukum}
                  </span>
                </td>
                <td className=" px-4 whitespace-nowrap font-normal dark:border-slate-700">
                  {data?.pengampu}
                </td>
                <td className=" py-2 px-4 font-normal min-w-[15rem] dark:border-slate-700">
                  {data?.alamat}
                </td>
                <td className=" pr-3xl  dark:border-slate-700 rounded-tr rounded-br">
                  <button className="flex flex-row gap-2 items-center text-sm bg-primary hover:bg-secondaryHover px-2 py-1 rounded text-white transition duration-300">
                    Detail
                    <IconInfoCircle size={17} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=" bg-white rounded px-4 lg:px-3xl py-6 flex flex-col md:flex-row items-end gap-y-4 md:justify-between md:items-center dark:bg-black">
        <p className="text-sm md:text-base">
          Menampilkan{" "}
          <span className="font-semibold">{page * limit - limit + 1}</span> -
          <span className="font-semibold"> {page * limit} </span> dari {""}
          <span className="font-bold"> {dataUmkm.length} </span> data
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
