import React, { useEffect, useState } from "react";
import ArrowSorting from "./ArrowSorting";
import { UMKMProperties } from "../../DataBuilder";
import Pagination from "./Pagination";
import { fetchDataByPagination } from "../../utils";
import { getBadanUsahaColor, getSkalaUsahaColor } from "../../utils/utils";
import DataEmpty from "../commons/DataEmpty";
import { AnimatePresence, motion } from "framer-motion";
import { rowVariants } from "../../helper/motion.helper";
import { IconBuilding, IconBuildingStore, IconMapPins } from "@tabler/icons-react";

interface Props {
  dataUmkm: UMKMProperties[];
}

const MinimalisTableUMKM: React.FC<Props> = ({ dataUmkm }) => {
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
    <div className="">
      {paginatedUMKM?.length > 0 ? (
        <>
          <div className={`table-container overflow-x-auto w-full relative`}>
            <table className="w-full text-left border-separate border-spacing-y-2 lg:border-spacing-y-3 font-inter transform -translate-y-3">
              <thead className="rounded-lg text-black text-xs md:text-sm lg:text-base">
                <tr className="">
                  <th
                    className={`bg-white py-3 lg:py-6 text-black  justify-start whitespace-nowraprounded-bl dark:text-white px-2 pl-4  dark:bg-black`}
                  >
                    <div className="bg-white flex items-center justify-start dark:bg-black">
                      <ArrowSorting
                        activeColumn={activeColumn}
                        sortingColumn={sortingColumn}
                        includes={"name"}
                        onClickFunction={sortByColumn}
                      />
                      <span
                        className="cursor-pointer pl-1"
                        onClick={() => sortByColumn("name")}
                      >
                        UMKM{" "}
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base">
                <AnimatePresence>
                  {paginatedUMKM.map((data, index) => (
                    <motion.tr
                      key={index}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={rowVariants}
                      transition={{ duration: 0.3 }}
                      className="bg-white dark:bg-black text-sm lg:text-base"
                    >
                      <td className="py-4 relative whitespace-nowrap px-2 pl-4 dark:border-slate-700 rounded-tl rounded-bl text-center">
                        <div className="flex w-full flex-col items-start gap-1 font-normal">
                          <div className="flex flex-row gap-4 items-center mb-1">
                            <div className="img-container">
                              <img src={data.avatar} alt={data.name} className="rounded-full h-11 w-11 con dark:bg-white object-cover" />
                            </div>
                            <div className="flex flex-col items-start gap-1">
                              <p className="font-semibold text-sm">{data.name}</p>
                              <div className="flex flex-row gap-2">
                                <span
                                  className={`${getSkalaUsahaColor(data?.skala).bg
                                    } ${getSkalaUsahaColor(data?.skala).text
                                    } text-xs font-medium me-2 px-2.5 py-0.5 rounded`}
                                >
                                  {data?.skala}
                                </span>
                                <span
                                  className={`${getBadanUsahaColor(data?.badanHukum).bg
                                    } ${getBadanUsahaColor(data?.badanHukum).text
                                    } text-xs font-medium me-2 px-2.5 py-0.5 rounded`}
                                >
                                  {data?.badanHukum}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-1 items-center">
                            <IconBuildingStore size={12} />
                            <p>{data.bidang}</p>
                          </div>
                          <div className="flex flex-row gap-1 items-center">
                            <IconBuilding size={12} />
                            <p>{data.pengampu}</p>
                          </div>
                          <div className="flex flex-row gap-1 items-center  w-10/12">
                            <IconMapPins size={12} />
                            <p className="whitespace-normal text-left">{data.alamat}</p>
                          </div>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <a href="/data-umkm/detail">
                            <button className="flex flex-row gap-2 items-center text-xs lg:text-sm bg-primary hover:bg-primary/75 px-2 py-1 rounded text-white transition duration-300">
                              Detail
                            </button>
                          </a>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded px-4 lg:px-8 xl:px-3xl py-6 flex flex-col lg:flex-row items-center md:items-end gap-y-4 lg:justify-between lg:items-center dark:bg-black">
            <p className="text-xs md:text-sm lg:text-base">
              Menampilkan{" "}
              <span className="font-semibold">{page * limit - limit + 1}</span>{" "}
              -<span className="font-semibold"> {page * limit} </span> dari {""}
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
        </>
      ) : (
        <div className="w-full bg-white dark:bg-black rounded pb-8">
          <DataEmpty />
        </div>
      )}
    </div>
  );
};
export default MinimalisTableUMKM;
