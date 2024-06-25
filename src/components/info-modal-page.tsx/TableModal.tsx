import { titleSlugType } from "../../types/common.types";
import { FC, useEffect, useState } from "react";
import ArrowSorting from "../table/ArrowSorting";
import {
  InfoModalType,
  columnTabelInfoModal,
} from "../../static/InfoModalDataBuilder";
import {
  fetchDataInfoModalPagination,
  formatRupiah,
  getInstitusionColorInfoModal,
  getNominalModalColor,
} from "../../helper/info-modal.helper";
import Pagination from "../table/Pagination";
import DataEmpty from "../commons/DataEmpty";

interface TableModalProps {
  dataModal: InfoModalType[];
}

const TableModal: FC<TableModalProps> = ({ dataModal }) => {
  const headerDataTable: titleSlugType[] = columnTabelInfoModal;
  const [activeColumn, setActiveColumn] = useState<string>("index");
  const [sortingColumn, setSortingColumn] = useState<string | null>("index");
  const [sortingData, setSortingData] = useState<InfoModalType[]>([]);
  const [paginatedDataModal, setPaginatedDataModal] = useState<InfoModalType[]>(
    []
  );
  const [limit, setLimit] = useState(10);
  const [totalPage, setTotalpage] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    setSortingData(dataModal);
  }, [dataModal]);

  const sortByColumn = (column: string) => {
    const isCurrentlySorted = sortingColumn === column;
    let sortData = [];
    if (column == "index") {
      sortData = dataModal
        .slice()
        .sort((a, b) =>
          isCurrentlySorted ? b.index - a.index : a.index - b.index
        );
    } else {
      sortData = dataModal
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
      const paginatedData: InfoModalType[] = fetchDataInfoModalPagination(
        sortingData,
        page,
        limit
      );
      setPaginatedDataModal(paginatedData);
      setTotalpage(Math.ceil(sortingData.length / limit));
    } else {
      setPaginatedDataModal([]);
    }
  }, [sortingData, limit, page]);


  return (
    <div>
      {paginatedDataModal.length > 0 ? (
        <>
          <div className="rounded-lg  overflow-x-auto w-full relative">
            <table className="w-full text-left border-separate border-spacing-y-2 lg:border-spacing-y-3 font-inter transform -translate-y-3">
              {/* Table header */}
              <thead className="rounded-lg text-black text-xs md:text-sm ">
                <tr>
                  {headerDataTable?.map((item, index) => (
                    <th
                      className={`bg-white py-3 lg:py-6 text-black  justify-start whitespace-nowrap ${item.slug == "index" && "px-4 lg:px-8 xl:pl-8 "
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
                          {item?.title}
                        </span>
                      </div>
                    </th>
                  ))}
                  <th className="bg-white py-3 pr-4x font-semibold lg:pr-8x xl:pr-8 justify-center text-black  dark:text-white rounded-br dark:bg-black">
                    Tindakan
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                {paginatedDataModal.map((data, index) => (
                  <tr
                    key={index}
                    className="bg-white dark:bg-black text-sm"
                  >
                    <td className="py-4 whitespace-nowrap px-2 lg:px-4 xl:pl-8 font-bold dark:border-slate-700 rounded-tl rounded-bl text-center">
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
                        className={`${getInstitusionColorInfoModal(data?.lembaga).bg
                          } ${getInstitusionColorInfoModal(data?.lembaga).text
                          } text-xs me-2 px-1.5 py-0.5 rounded`}
                      >
                        {data?.lembaga}
                      </span>
                    </td>
                    <td className="px-2 lg:px-2 whitespace-normal font-normal dark:border-slate-700">
                      {data?.email}
                    </td>
                    <td className="px-2 lg:px-2 whitespace-normal font-normal dark:border-slate-700">

                      <span
                        className={`${getNominalModalColor(data?.nominal).bg
                          } ${getNominalModalColor(data?.nominal).text
                          } text-xs me-2 px-1.5 py-0.5 rounded`}
                      >
                        <span className="text-xs">
                          Rp{" "}
                        </span>
                        {formatRupiah(data?.nominal)}
                      </span>
                    </td>
                    <td className="py-2 px-3 font-normal min-w-[15rem]  dark:border-slate-700">
                      {data?.alamat}
                    </td>
                    <td className="pr-4 lg:pr-8 xl:pr-8 dark:border-slate-700 rounded-tr rounded-br">
                      <div className="flex justify-center">
                        <a href="/info-modal/detail" className="button-link">
                          <button className="flex flex-row gap-2 items-center text-xs bg-primary hover:bg-primary/75 px-2 py-1 rounded text-white transition duration-300">
                            Detail
                          </button>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white rounded px-4 lg:px-8 xl:px-3xl py-6 flex flex-col lg:flex-row items-center md:items-end gap-y-4 lg:justify-between lg:items-center dark:bg-black">
            <p className="text-xs md:text-sm ">
              Menampilkan{" "}
              <span className="">{page * limit - limit + 1}</span>{" "}
              -<span className=""> {page * limit} </span> dari {""}
              <span className=""> {dataModal.length} </span> data
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

export default TableModal;
