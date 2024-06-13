import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Layout from "../../components/Layout";
import SearchBar from "../../components/table/SearchBar";
import ArrowHanun from "../../components/table/ArrowHanun";
import ChexboxGroup from "../../components/table/ChexboxGroup";
//import TableInfoModal from "../../components/table/TableInfoModal";
import { EXTENDED_WINDOW, UMKMProperties, umkmData } from "../../DataBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { filterDataUMKM } from "../../utils/utils";
import {
  IconDownload,
  IconFilterSearch,
  IconInfoCircle,
} from "@tabler/icons-react";
import Breadcrumb from "../../components/commons/BreadCrumb";
import { useThemeContext } from "../../layout/ThemeContext";
import DownloadConfirmationModal from "../../components/commons/DownloadConfirmationModal";
//import MinimalisTableUMKM from "../../components/table/MinimalisTableUMKM";
import Slider from "@mui/material/Slider";

const InfoModal = () => {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [searchColumn, setSearchColumn] = useState<string>("name");
  const [keyword, setKeyword] = useState<string>("");
  const data = umkmData;
  const [filteredData, setFilteredData] = useState<UMKMProperties[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { dataLang: t, common: c } = useThemeContext();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [nominalModal, setNominalModal] = useState<number[]>([0, 1000000]); // Slider values
  const [institutionType, setInstitutionType] = useState<string[]>([]); // Institution types

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < EXTENDED_WINDOW.xl) {
      setShowFilter(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    setFilteredData(
      filterDataUMKM(
        searchColumn,
        keyword,
        [], // empty filter arrays since we removed the previous filters
        [], // empty filter arrays since we removed the previous filters
        [], // empty filter arrays since we removed the previous filters
        [], // empty filter arrays since we removed the previous filters
        data
      )
    );
  }, [searchColumn, keyword, data]);

  // const handleClearKeyword = () => {
  //   setKeyword("");
  // };

  // const handleDeleteAllFilter = () => {
  //   setKeyword("");
  //   setNominalModal([0, 1000000]);
  //   setInstitutionType([]);
  // };

  return (
    <Layout pageTitle="Info Modal">
      <div className="px-4 w-full pt-5xl xl:hidden bg-silver dark:bg-slate-800">
        <Breadcrumb />
      </div>
      {showModal && (
        <DownloadConfirmationModal
          setShow={setShowModal}
          chartTitle="Info ModalUMKM Kabupaten Kulon Progo Tahun 2024"
          isData={true}
        />
      )}
      <div className="flex items-stretch flex-row w-full pb-8 xl:pt-5.5xl  xl:pb-3xl xl:gap-4 xl:px-8 bg-silver dark:bg-slate-800 dark:text-white">
        <CSSTransition
          in={showFilter}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="fixed xl:relative box-filter bg-white flex flex-col shadow-lg xl:shadow-sm py-8 px-6 rounded-lg text-sm md:text-base dark:bg-black z-30 min-w-[17rem]">
            <div className="flex flex-col justify-start gap-2">
              <div className="border-b border-grey pt-2 pb-4">
                <h1 className="font-bold text-center">
                  {" "}
                  <FontAwesomeIcon icon={faList} className="pr-3" />
                  {c("filterTitle")}
                </h1>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="pt-4 flex items-center hover:text-primary">
                  <IconFilterSearch
                    size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
                    style={{ marginRight: "0.8rem" }}
                  />
                  <h1 className="font-semibold">Nominal Modal</h1>
                </div>
                <div style={{ padding: "0 1rem" }}>
                  <Slider
                    value={nominalModal}
                    onChange={(e, newValue) =>
                      setNominalModal(newValue as number[])
                    }
                    valueLabelDisplay="auto"
                    min={0}
                    max={1000000}
                    color="grey"
                  />
                  {/* Display selected range */}
                  <div className="flex justify-between color: #333; font-normal">
                    <span style={{ borderBottom: "1px solid black" }}>
                      {nominalModal[0]}
                    </span>
                    <span style={{ borderBottom: "1px solid black" }}>
                      {nominalModal[1]}
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="hover:text-primary">
                    <div className="pt-4 flex items-center">
                      <IconFilterSearch
                        size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
                        style={{ marginRight: "0.8rem" }}
                      />
                      <h1 className="font-semibold">Jenis Lembaga</h1>
                    </div>
                  </div>
                  <div className="box w-full mt-2">
                    <div className="flex flex-row justify-between py-1">
                      <p className="text-xs lg:text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey">
                        Pilih semua
                      </p>
                      <p className="text-grey text-xs lg:text-sm">|</p>
                      <p className="text-xs lg:text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer">
                        Bersihkan
                      </p>
                    </div>
                  </div>
                  <ChexboxGroup
                    data={[
                      { name: "Pemerintah" },
                      { name: "PT" },
                      { name: "CV" },
                      { name: "Firma" },
                      { name: "Koperasi" },
                      { name: "Yayasan" },
                      { name: "Perseorangan" },
                    ]}
                    selectedData={institutionType} // Pass the selectedData state
                    setSelectedData={setInstitutionType} // Pass the setSelectedData function
                  />
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>

        <div className="table-container rounded-lg shadow-sm w-full grow px-4 xl:px-0">
          <div className="pt-4 xl:pt-8 bg-white box flex flex-col gap-4 xl:flex-row xl:gap-0 justify-between px-4 lg:px-8 py-4 items-center rounded-t dark:bg-black">
            <h1 className="font-semibold d text-base text-center border-b border-grey pb-2 lg:text-lg xl:font-bol xl:text-left  xl:border-0 xl:pb-0 text-black dark:text-white">
              {t("Info Modal UMKM Kulonprogo Tahun 2024")}
            </h1>
            <div className="md:flex flex-row md:justify-between gap-8 md:w-full xl:w-fit pt-2 xl:pt-0">
              <SearchBar
                width={windowWidth < EXTENDED_WINDOW.md ? "12.5rem" : "20rem"}
                searchColumn={searchColumn}
                setSearchColumn={setSearchColumn}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <div
                className="hidden md:flex text-xs lg:text-sm bg-secondary flex-row gap-2 items-center px-2 lg:px-3 py-2 rounded hover:bg-secondaryHover cursor-pointer text-white transition duration-300"
                onClick={() => setShowModal(true)}
              >
                <p>{t("Unduh")}</p>
                <IconDownload />
              </div>
            </div>
            <div className="xl:hidden w-full flex flex-row gap-2 text-grey hover:text-black justify-start cursor-pointer dark:text-white dark:hover:text-grey">
              <IconFilterSearch size={17} />
              <p
                onClick={() => setShowFilter(true)}
                className="text-xs md:text-sm"
              >
                {c("openFilter")}
              </p>
            </div>
          </div>
          {/* {windowWidth < EXTENDED_WINDOW.md ? (
            <MinimalisTableUMKM dataUmkm={filteredData} />
          ) : (
            <TableInfoModal dataUmkm={filteredData} />
          )} */}

          <div className="rounded-lg bg-white overflow-x-auto w-full relative">
            <table className="w-full text-left border-separate border-spacing-y-2 lg:border-spacing-y-3 font-inter transform -translate-y-3">
              {/* Table header */}
              <thead className="rounded-lg text-black text-xs md:text-sm lg:text-base">
                <tr>
                  <th className="bg-white py-3 lg:py-6 text-black  justify-start whitespace-nowrap px-4 lg:px-8 xl:pl-8">
                    <div className="flex items-center">
                      <ArrowHanun active={true} />
                      <span>ID</span>
                    </div>
                  </th>
                  <th className="bg-white py-3 lg:py-6 text-black  justify-start whitespace-nowrap px-4 lg:px-8 xl:pl-8">
                    <div className="flex items-center">
                      <ArrowHanun active={true} />
                      <span>Nama Lembaga</span>
                    </div>
                  </th>
                  <th className="bg-white py-3 lg:py-6 text-black  justify-start whitespace-nowrap px-4 lg:px-8 xl:pl-8">
                    <div className="flex items-center">
                      <ArrowHanun active={true} />
                      <span>Nominal Modal</span>
                    </div>
                  </th>
                  <th className="bg-white py-3 lg:py-6 text-black  justify-start whitespace-nowrap px-4 lg:px-8 xl:pl-8">
                    <div className="flex items-center">
                      <ArrowHanun active={true} />
                      <span>Kontak</span>
                    </div>
                  </th>
                  <th className="bg-white py-3 lg:py-6 text-black  justify-start whitespace-nowrap px-4 lg:px-8 xl:pl-8">
                    <div className="flex items-center">
                      <ArrowHanun active={true} />
                      <span>Email</span>
                    </div>
                  </th>
                  <th className="bg-white py-3 lg:py-6 text-black  justify-start whitespace-nowrap px-4 lg:px-8 xl:pl-8">
                    <div className="flex items-center">
                      <ArrowHanun active={true} />
                      <span>Alamat</span>
                    </div>
                  </th>
                  <th className="bg-white py-3 lg:py-6 text-black  justify-start whitespace-nowrap px-4 lg:px-8 xl:pl-8">
                    <div className="flex items-center">
                      <span> Tindakan</span>
                    </div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                <tr className="bg-white dark:bg-gray-900">
                  <td className="py-4 lg:py-5 whitespace-nowrap px-2 lg:px-4 xl:pl-xl font-bold dark:border-slate-700 rounded-tl rounded-bl text-center">
                    1
                  </td>

                  <td className="px-2 lg:px-3 whitespace-nowrap font-normal  dark:border-slate-700">
                    <div className="flex flex-row items-center w-full gap-2 lg:gap-3 item-center  ">
                      <img
                        src="https://i0.wp.com/umsu.ac.id/berita/wp-content/uploads/2023/09/Cara-dan-Syarat-Membuka-Rekening-BRI-2023.jpg?fit=1920%2C1080&ssl=1"
                        alt="BRI"
                        className="rounded-full max-w-12 dark:bg-white"
                      />
                      <span className="mr-2 text-center lg:text-base ">
                        BRI
                      </span>
                    </div>
                  </td>
                  <td className=" text-center px-2 lg:px-3 whitespace-nowrap font-normal lg:text-base dark:border-slate-700">
                    10.000.000
                  </td>
                  <td className="text-center px-2 lg:px-3 whitespace-nowrap font-normal lg:text-base dark:border-slate-700">
                    081224563737
                  </td>
                  <td className="text-center px-2 lg:px-3 whitespace-nowrap font-normal lg:text-base dark:border-slate-700">
                    BRI@gmail.com
                  </td>
                  <td className="text-center px-2 lg:px-3 whitespace-nowrap font-normal lg:text-base dark:border-slate-700">
                    Jl. Kolonel Sugiono No.2, Gadingan, Wates
                  </td>
                  <td className="pr-4x lg:pr-8x xl:pr-8 dark:border-slate-700 rounded-tr rounded-br">
                    <div className="flex justify-center">
                      <a href="/info-modal/detail" className="button-link">
                        <button className="flex flex-row gap-2 items-center text-xs lg:text-sm bg-primary hover:bg-secondaryHover px-2 py-1 rounded text-white transition duration-300">
                          Detail
                          <IconInfoCircle size={17} />
                        </button>
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InfoModal;
