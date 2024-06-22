import { IconMail, IconMapPins, IconMoneybag } from "@tabler/icons-react";
import { FC, useEffect, useState } from "react";
import ArrowSorting from "../table/ArrowSorting";
import {
    InfoModalType,
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

const MinimalisTableModal: FC<TableModalProps> = ({ dataModal }) => {
    const [activeColumn, setActiveColumn] = useState<string>("name");
    const [sortingColumn, setSortingColumn] = useState<string | null>("name");
    const [sortingData, setSortingData] = useState<InfoModalType[]>([]);
    const [paginatedDataModal, setPaginatedDataModal] = useState<InfoModalType[]>(
        []
    );
    const [limit, setLimit] = useState(12);
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
                            <thead className="rounded-lg text-black  text-xs">
                                <tr>
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
                                                Info Modal
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody className="text-sm bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                                {paginatedDataModal.map((data, index) => (
                                    <tr
                                        key={index}
                                        className="bg-white dark:bg-black text-sm lg:text-base"
                                    >
                                        <td className="py-4 whitespace-nowrap px-2 pl-4 dark:border-slate-700 rounded-tl rounded-bl text-center">
                                            <div className="flex w-full flex-col items-start gap-1 font-normal relative">
                                                <div className="flex flex-row gap-4 items-center mb-1">
                                                    <div className="img-container">
                                                        <img src={data.avatar} alt={data.name} className="rounded-full h-11 w-11 con dark:bg-white object-cover" />
                                                    </div>
                                                    <div className="flex flex-col gap-1 items-start">
                                                        <p className="font-semibold text-sm">{data.name}</p>
                                                        <div className="flex flex-row gap-2">
                                                            <span
                                                                className={`${getInstitusionColorInfoModal(data?.lembaga).bg
                                                                    } ${getInstitusionColorInfoModal(data?.lembaga).text
                                                                    } text-xs font-medium me-2 px-2.5 py-0.5 rounded`}
                                                            >
                                                                {data?.lembaga}
                                                            </span>
                                                            <span
                                                                className={`${getNominalModalColor(data?.nominal).bg
                                                                    } ${getNominalModalColor(data?.nominal).text
                                                                    } text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
                                                            >
                                                                <div className="flex gap-1 items-center">
                                                                    <IconMoneybag size={12} />
                                                                    <span className="text-xs md:text-sm font-semibold">Rp </span>
                                                                    {formatRupiah(data?.nominal)}
                                                                </div>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-row gap-1 items-center">
                                                    <IconMail size={12} />
                                                    <p>{data.email}</p>
                                                </div>
                                                <div className="flex flex-row gap-1 items-center">
                                                    <IconMapPins size={12} />
                                                    <p className="whitespace-normal text-left">{data.alamat}</p>
                                                </div>
                                                <div className="absolute bottom-0 right-2">
                                                    <a href="/info-modal/detail">
                                                        <button className="flex flex-row gap-2 items-center text-xs lg:text-sm bg-primary hover:bg-primary/75 px-2 py-1 rounded text-white transition duration-300">
                                                            Detail
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td className="dark:border-slate-700 rounded-tr rounded-br">
                                            <a href="/info-modal/detail">
                                                <button className="flex flex-row gap-2 items-center text-xs lg:text-sm bg-primary hover:bg-primary/75 px-2 py-1 rounded text-white transition duration-300">
                                                    Detail
                                                </button>
                                            </a>
                                        </td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white rounded px-4 lg:px-8 xl:px-3xl py-6 flex flex-col lg:flex-row items-center md:items-end gap-y-4 lg:justify-between lg:items-center dark:bg-black">
                        <p className="text-xs md:text-sm lg:text-base">
                            Menampilkan{" "}
                            <span className="font-semibold">{page * limit - limit + 1}</span>{" "}
                            -<span className="font-semibold"> {page * limit} </span> dari {""}
                            <span className="font-bold"> {dataModal.length} </span> data
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

export default MinimalisTableModal;
