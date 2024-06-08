import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ChevronDown } from "lucide-react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/table/SearchBar";
import Selection, { TypeData } from "../../components/table/Selection";
import TableUMKM from "../../components/table/TableUMKM";
import {
  EXTENDED_WINDOW,
  UMKMProperties,
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
  umkmData,
} from "../../DataBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import AdvancedFilter from "../../components/table/AdvancedFilter";
import { filterDataUMKM } from "../../utils/utils";
import BadgeFilter from "../../components/commons/BadgeFilter";
import { IconDownload, IconFilterSearch } from "@tabler/icons-react";
import ClearBadge from "../../components/commons/ClearBadge";
import Breadcrumb from "../../components/commons/BreadCrumb";
import { useThemeContext } from "../../layout/ThemeContext";
import DownloadConfirmationModal from "../../components/commons/DownloadConfirmationModal";
import NormalFilterBadge from "../../components/commons/NormalFilterBadge";
import MinimalisTableUMKM from "../../components/table/MinimalisTableUMKM";

const DataUmkm = () => {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false);
  const [searchColumn, setSearchColumn] = useState<string>("name");
  const [keyword, setKeyword] = useState<string>("");
  const [skalaUsahaFilter, setSkalaUsahaFilter] =
    useState<TypeData[]>(skalaUsaha);
  const [dinasPengampuFilter, setDinasPengampuFilter] =
    useState<TypeData[]>(dinasPengampu);
  const [badanHukumFilter, setBadanHukumFilter] =
    useState<TypeData[]>(badanHukumUsaha);
  const [bidangUsahaFilter, setBidangUsahaFilter] =
    useState<TypeData[]>(bidangUsaha);
  const data = umkmData;
  const [filteredData, setFilteredData] = useState<UMKMProperties[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { dataLang: t, common: c } = useThemeContext();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
        skalaUsahaFilter,
        dinasPengampuFilter,
        badanHukumFilter,
        bidangUsahaFilter,
        data
      )
    );
  }, [
    searchColumn,
    keyword,
    skalaUsahaFilter,
    dinasPengampuFilter,
    badanHukumFilter,
    bidangUsahaFilter,
    data,
  ]);

  const handleDeleteBidangUsahaFilter = (item: TypeData) => {
    if (bidangUsahaFilter.length == 1) {
      setBidangUsahaFilter(bidangUsaha);
    } else {
      setBidangUsahaFilter(
        bidangUsahaFilter.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  const handleDeleteBadanHukumFilter = (item: TypeData) => {
    if (badanHukumFilter.length == 1) {
      setBadanHukumFilter(badanHukumUsaha);
    } else {
      setBadanHukumFilter(
        badanHukumFilter.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  const handleDeleteSkalaUsahaFilter = (item: TypeData) => {
    if (skalaUsahaFilter.length == 1) {
      setSkalaUsahaFilter(skalaUsaha);
    } else {
      setSkalaUsahaFilter(
        skalaUsahaFilter.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  const handleDinasPengampuFilter = (item: TypeData) => {
    if (dinasPengampuFilter.length == 1) {
      setDinasPengampuFilter(dinasPengampu);
    } else {
      setDinasPengampuFilter(
        dinasPengampuFilter.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  const handleClearKeyword = () => {
    setKeyword("");
  };

  const handleDeleteAllFilter = () => {
    setKeyword("");
    setDinasPengampuFilter(dinasPengampu);
    setSkalaUsahaFilter(skalaUsaha);
    setBadanHukumFilter(badanHukumUsaha);
    setBidangUsahaFilter(bidangUsaha);
  };

  return (
    <Layout pageTitle="DATA UMKM">
      <div className="px-4 w-full pt-5xl xl:hidden bg-silver dark:bg-slate-800">
        <Breadcrumb />
      </div>
      {showModal && (
        <DownloadConfirmationModal
          setShow={setShowModal}
          chartTitle="Data UMKM Kabupaten Kulon Progo Tahun 2024"
          isData={true}
        />
      )}
      <div className="flex items-stretch flex-row w-full pb-8 xl:pt-5.5xl  xl:pb-3xl xl:gap-4 xl:px-8 bg-silver dark:bg-slate-800 dark:text-white">
        <CSSTransition
          in={showAdvancedFilter}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="fixed xl:relative z-20 flex flex-col bg-white rounded px-8 py-4 shadow-lg xl:shadow-sm dark:bg-black max-h-[80vh] overflow-y-scroll xl:max-h-fit xl:overflow-y-hidden min-w-[19rem] xl:min-w-[18rem]">
            <div className="box absolute top-0 right-0 transform -translate-x-3 translate-y-2">
              <ChevronDown
                className={`w-7 h-7 xl:w-8 xl:h-8 p-1 bg-silver text-black dark:bg-black dark:border dark:text-white transform hover:bg-inactive hover:text-accent5 rounded-full cursor-pointer transition duration-300 ${
                  showAdvancedFilter ? "transform rotate-90" : ""
                }`}
                onClick={() => setShowAdvancedFilter(false)}
              />
            </div>
            <div className="">
              <AdvancedFilter
                skalaUsahaFilter={skalaUsahaFilter}
                setSkalaUsahaFilter={setSkalaUsahaFilter}
                dinasPengampuFilter={dinasPengampuFilter}
                setDinasPengampuFilter={setDinasPengampuFilter}
                badanHukumFilter={badanHukumFilter}
                setBadanHukumFilter={setBadanHukumFilter}
                bidangUsahaFilter={bidangUsahaFilter}
                setBidangUsahaFilter={setBidangUsahaFilter}
              />
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={showFilter && !showAdvancedFilter}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="fixed xl:relative box-filter bg-white flex flex-col shadow-lg xl:shadow-sm py-8 px-6 rounded-lg text-sm md:text-base dark:bg-black z-30 min-w-[17rem]">
            <div className="relative">
              <ChevronDown
                className={`xl:hidden absolute w-7 h-7 xl:w-8 xl:h-8 p-1 bbg-silver text-black dark:bg-black dark:border dark:text-white transition-transform hover:bg-inactive hover:text-accent5 rounded-full cursor-pointer top-0 right-0 ${
                  showFilter ? "transform rotate-90" : ""
                }`}
                onClick={() => setShowFilter(false)}
              />
              <div className="flex flex-col justify-start gap-8">
                <div className="border-b border-grey pt-2 pb-4">
                  <h1 className="font-bold text-center">
                    {" "}
                    <FontAwesomeIcon icon={faList} className="pr-3" />
                    {c("filterTitle")}
                  </h1>
                </div>
                <div className="flex flex-col gap-4 xl:gap-8 ">
                  <div className="item-filter flex flex-col gap-4">
                    <h1 className="font-semibold">{c("thead_umkm_skala")}</h1>
                    <Selection
                      selectionData={skalaUsaha}
                      selectedData={skalaUsahaFilter}
                      setSelectedData={setSkalaUsahaFilter}
                    />
                  </div>
                  <div className="item-filter flex flex-col gap-4">
                    <h1 className="font-semibold">
                      {c("thead_umkm_pengampu")}
                    </h1>
                    <Selection
                      selectionData={dinasPengampu}
                      selectedData={dinasPengampuFilter}
                      setSelectedData={setDinasPengampuFilter}
                    />
                  </div>
                  <div className="item-filter flex flex-col gap-4">
                    <h1 className="font-semibold">
                      {c("thead_umkm_badanHukum")}
                    </h1>
                    <Selection
                      selectionData={badanHukumUsaha}
                      selectedData={badanHukumFilter}
                      setSelectedData={setBadanHukumFilter}
                    />
                  </div>
                  <div className="item-filter flex flex-col gap-4">
                    <h1 className="font-semibold">{c("thead_umkm_bidang")}</h1>
                    <Selection
                      selectionData={bidangUsaha}
                      selectedData={bidangUsahaFilter}
                      setSelectedData={setBidangUsahaFilter}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-2 text-grey hover:text-black dark:text-white dark:hover:text-grey justify-end lg:justify-end pt-6 cursor-pointer">
                <IconFilterSearch size={17} />
                <p
                  onClick={() => setShowAdvancedFilter(true)}
                  className="text-xs md:text-sm "
                >
                  {c("openAdvFilter")}
                </p>
              </div>
            </div>
          </div>
        </CSSTransition>

        <div className="table-container rounded-lg shadow-sm w-full grow px-4 xl:px-0">
          <div className="pt-4 xl:pt-8 bg-white box flex flex-col gap-4 xl:flex-row xl:gap-0 justify-between px-4 lg:px-8 py-4 items-center rounded-t dark:bg-black">
            <h1 className="font-semibold d text-base text-center border-b border-grey pb-2 lg:text-lg xl:font-bol xl:text-left  xl:border-0 xl:pb-0 text-black dark:text-white">
              {t("dataTitle")}
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
                <p>{t("downloadBtnText")}</p>
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
          <div className="bg-white badge-filter px-4 lg:px-8 xl:px-3xl pb-2 flex flex-grow flex-wrap gap-2 lg:gap-4 dark:bg-black">
            {keyword && (
              <NormalFilterBadge
                text={`${c("keyword")}: ${keyword}`}
                handleClick={handleClearKeyword}
              />
            )}
            {skalaUsahaFilter.length != skalaUsaha.length &&
              skalaUsahaFilter.map((item, index) => (
                <BadgeFilter
                  item={item}
                  handleClick={handleDeleteSkalaUsahaFilter}
                  key={index}
                />
              ))}
            {badanHukumFilter &&
              badanHukumFilter.length != badanHukumUsaha.length &&
              badanHukumFilter.map((item, index) => (
                <BadgeFilter
                  item={item}
                  handleClick={handleDeleteBadanHukumFilter}
                  key={index}
                />
              ))}
            {dinasPengampuFilter.length != dinasPengampu.length &&
              dinasPengampuFilter.map((item, index) => (
                <BadgeFilter
                  item={item}
                  handleClick={handleDinasPengampuFilter}
                  key={index}
                />
              ))}
            {bidangUsahaFilter.length != bidangUsaha.length &&
              bidangUsahaFilter.map((item, index) => (
                <BadgeFilter
                  item={item}
                  handleClick={handleDeleteBidangUsahaFilter}
                  key={index}
                />
              ))}
          </div>
          {filteredData.length != data.length && (
            <div className="px-4 lg:px-8 xl:px-3xl bg-white dark:bg-black flex justify-between items-center pb-3 xl:pb-0">
              <p className="text-grey dark:text-white text-xs lg:text-sm">
                Mendapatkan {filteredData.length} data
              </p>
              <div className="flex flex-row items-center text-accent5 hover:text-accent5a cursor-pointer transition duration-300">
                <ClearBadge handleClick={handleDeleteAllFilter} />
              </div>
            </div>
          )}
          {windowWidth < EXTENDED_WINDOW.md ? (
            <MinimalisTableUMKM dataUmkm={filteredData} />
          ) : (
            <TableUMKM dataUmkm={filteredData} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default DataUmkm;
