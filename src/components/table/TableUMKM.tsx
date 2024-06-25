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
import DataEmpty from "../commons/DataEmpty";
import { AnimatePresence, motion } from "framer-motion";
import { rowVariants } from "../../helper/motion.helper";
import { useThemeContext } from "../../layout/ThemeContext";

interface Props {
  dataUmkm: UMKMProperties[];
}

const TableUMKM: React.FC<Props> = ({ dataUmkm }) => {
  const headerDataTable: titleSlugType[] = dataColumnUMKMBuilder;
  const [activeColumn, setActiveColumn] = useState<string>("index");
  const [sortingColumn, setSortingColumn] = useState<string | null>("index");
  const [sortingData, setSortingData] = useState<UMKMProperties[]>([]);
  const [paginatedUMKM, setPaginatedUMKM] = useState<UMKMProperties[]>([]);
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalpage] = useState(1);
  const [page, setPage] = useState(1);
  const { common: c } = useThemeContext();

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
    <div className="">
      {paginatedUMKM?.length > 0 ? (
        <>
          <div className={`table-container overflow-x-auto w-full relative `}>
            <table className="w-full text-left border-separate border-spacing-y-2 font-inter transform -translate-y-3">
              <thead className="rounded-lg text-black text-sm ">
                <tr className="">
                  {headerDataTable?.map((item, index) => (
                    <th
                      className={`bg-white py-3 lg:py-4 text-black  justify-start whitespace-nowrap ${item.slug == "index" && "px-4 lg:px-6 xl:pl-6"
                        } rounded-bl dark:text-white px-2 dark:bg-black font-semibold`}
                      key={index}
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
                          {c(`thead_umkm_${item.slug}`)}
                        </span>
                      </div>
                    </th>
                  ))}
                  <th className="bg-white py-3 pr-4x lg:pr-6 justify-center text-black dark:text-white rounded-br dark:bg-black font-semibold">
                    {c('action')}
                  </th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {paginatedUMKM.map((data, index) => (
                    <motion.tr
                      key={index}
                      className="bg-white dark:bg-black text-sm"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={rowVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <td className="py-4 whitespace-nowrap px-2 lg:px-4 xl:pl-8 font-semibold dark:border-slate-700 rounded-tl rounded-bl text-center">
                        {data?.index}
                      </td>
                      <td className="px-2 lg:px-2 whitespace-normal font-normal  dark:border-slate-700">
                        <div className="flex flex-row items-center w-full gap-2 lg:gap-3">
                          <img
                            src={data.avatar}
                            alt={data.name}
                            className="rounded-full max-w-9 dark:bg-white"
                          />
                          {data?.name}
                        </div>
                      </td>
                      <td className="px-2 lg:px-2 whitespace-nowrap font-normal dark:border-slate-700">
                        <span
                          className={`${getSkalaUsahaColor(data?.skala).bg} ${getSkalaUsahaColor(data?.skala).text
                            } text-xs  me-2 px-1.5 py-0.5 rounded`}
                        >
                          {c(data?.skala)}
                        </span>
                      </td>
                      <td className="px-2 lg:px-2 whitespace-normal font-normal dark:border-slate-700">
                        {c(data?.bidang)}
                      </td>
                      <td className="px-2 lg:px-2 whitespace-nowrap font-normal dark:border-slate-700">
                        <span
                          className={`${getBadanUsahaColor(data?.badanHukum).bg
                            } ${getBadanUsahaColor(data?.badanHukum).text
                            } text-xs  me-2 px-1.5 py-0.5 rounded`}
                        >
                          {c(data?.badanHukum)}
                        </span>
                      </td>
                      <td className="px-2 lg:px-2  whitespace-normal font-normal dark:border-slate-700">
                        {c(data?.pengampu)}
                      </td>
                      <td className="py-2 px-3  font-normal min-w-[15rem] dark:border-slate-700">
                        {data?.alamat}
                      </td>
                      <td className="pr-4x lg:pr-8x xl:pr-8 dark:border-slate-700 rounded-tr rounded-br">
                        <a href="/data-umkm/detail">
                          <button className="flex flex-row gap-2 items-center text-xs bg-primary hover:bg-primary/75 px-2 py-1 rounded text-white transition duration-300">
                            Detail
                          </button>
                        </a>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded px-4 lg:px-8 xl:px-3xl py-6 flex flex-col lg:flex-row items-center md:items-end gap-y-4 lg:justify-between lg:items-center dark:bg-black">
            <p className="text-sm">
              {c('show')}  <span className="">{page * limit - limit + 1}</span>{" "}
              -<span className=""> {page * limit} </span> {c("from")}
              <span className=""> {dataUmkm.length} </span> data
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
        </>
      ) : (
        <div className="w-full bg-white dark:bg-black rounded pb-8">
          <DataEmpty />
        </div>
      )}
    </div>
  );
};
export default TableUMKM;
