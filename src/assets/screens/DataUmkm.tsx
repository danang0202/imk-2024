import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/table/SearchBar";
import { TypeData } from "../../components/table/Selection";
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
import AdvancedFilter from "../../components/table/AdvancedFilter";
import { filterDataUMKM } from "../../utils/utils";
import { IconDownload, IconFilterSearch } from "@tabler/icons-react";
import Breadcrumb from "../../components/commons/BreadCrumb";
import { useThemeContext } from "../../layout/ThemeContext";
import DownloadConfirmationModal from "../../components/commons/DownloadConfirmationModal";
import MinimalisTableUMKM from "../../components/table/MinimalisTableUMKM";
import { AnimatePresence, motion } from "framer-motion";
import NormalFilter from "../../components/table/NormalFilter";
import AllFilterBadge from "../../components/table/AllFilterBadge";
import { variantsOpacity } from "../../helper/motion.helper";

const DataUmkm = () => {
  const data = umkmData;
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
  const [filteredData, setFilteredData] = useState<UMKMProperties[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { dataLang: t, common: c } = useThemeContext();
  const { windowWidth } = useThemeContext();
  // const debouncedKeyword = useDebounce(keyword, 500);

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
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false);
  const [delayAdvancedFilter, setDelayAdvancedFilter] = useState(false);
  const [delayFilter, setDelayFilter] = useState(false);
  useEffect(() => {
    if (!(windowWidth < EXTENDED_WINDOW.xl)) {
      setShowFilter(true);
      setDelayFilter(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (showAdvancedFilter) {
      setDelayFilter(false);
      setTimeout(() => setDelayAdvancedFilter(true), 300);
    } else {
      setDelayAdvancedFilter(false);
      if (showFilter) {
        setTimeout(() => setDelayFilter(true), 300);
      }
    }
  }, [showAdvancedFilter, showFilter]);

  return (
    <Layout pageTitle="DATA UMKM">
      <div className="px-4 md:px-8 w-full pt-5xl bg-silver dark:bg-slate-800">
        <Breadcrumb />
      </div>
      {showModal && (
        <DownloadConfirmationModal
          setShow={setShowModal}
          chartTitle="Data UMKM Kabupaten Kulon Progo Tahun 2024"
          isData={true}
        />
      )}
      <div className="flex items-stretch flex-row w-full pb-8 xl:pt-4  xl:pb-3xl xl:gap-4 xl:px-8 bg-silver dark:bg-slate-800 dark:text-white">
        <div className="bg-white dark:bg-black xl:rounded-sm shadow-sm z-50">
          <AnimatePresence>
            {delayAdvancedFilter && (
              <AdvancedFilter
                skalaUsahaFilter={skalaUsahaFilter}
                setSkalaUsahaFilter={setSkalaUsahaFilter}
                dinasPengampuFilter={dinasPengampuFilter}
                setDinasPengampuFilter={setDinasPengampuFilter}
                badanHukumFilter={badanHukumFilter}
                setBadanHukumFilter={setBadanHukumFilter}
                bidangUsahaFilter={bidangUsahaFilter}
                setBidangUsahaFilter={setBidangUsahaFilter}
                showAdvancedFilter={showAdvancedFilter}
                setShowAdvancedFilter={setShowAdvancedFilter}
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {delayFilter && !delayAdvancedFilter && (
              <NormalFilter
                skalaUsahaFilter={skalaUsahaFilter}
                setSkalaUsahaFilter={setSkalaUsahaFilter}
                dinasPengampuFilter={dinasPengampuFilter}
                setDinasPengampuFilter={setDinasPengampuFilter}
                badanHukumFilter={badanHukumFilter}
                setBadanHukumFilter={setBadanHukumFilter}
                bidangUsahaFilter={bidangUsahaFilter}
                setBidangUsahaFilter={setBidangUsahaFilter}
                showFilter={showFilter}
                setShowFilter={setShowFilter}
                setDelayFilter={setDelayFilter}
                setShowAdvancedFilter={setShowAdvancedFilter}
              />
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {!showFilter && !showAdvancedFilter && (
            <motion.div variants={variantsOpacity} transition={{ duration: .3 }} initial="hidden" animate="visible" exit={"exit"} className="hidden xl:inline box bg-white dark:bg-black h-fit p-4 rounded hover:bg-inactive cursor-pointer transition-colors duration-300" onClick={() => { setShowFilter(true); setDelayFilter(true) }}>
              <IconFilterSearch size={20} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="table-container rounded-lg w-full grow px-4 xl:px-0"
          initial={{ width: "100%" }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4 xl:p-6 xl:pb-4 bg-white box flex flex-col gap-4 xl:flex-row xl:gap-0 justify-between items-center rounded-t dark:bg-black">
            <h1 className="font-bold d text-base text-center border-b border-grey pb-2 xl:font-semibolf xl:text-left xl:border-0 xl:pb-0 text-black dark:text-white">
              {t("dataTitle")}
            </h1>
            <div className="md:flex flex-row md:justify-between md:w-full xl:w-fit pt-2 xl:pt-0 z-40">
              <SearchBar
                width={windowWidth < EXTENDED_WINDOW.md ? "14rem" : "17rem"}
                searchColumn={searchColumn}
                setSearchColumn={setSearchColumn}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:flex text-xs lg:text-sm bg-secondary flex-row gap-2 items-center px-2.5 py-1 rounded hover:bg-secondary/90 cursor-pointer text-white "
                onClick={() => setShowModal(true)}
              >
                <IconDownload size={18} />
              </motion.div>
            </div>
            <div className="xl:hidden w-full flex flex-row gap-2 text-grey hover:text-black justify-start cursor-pointer dark:text-white dark:hover:text-grey">
              <IconFilterSearch size={17} />
              <p
                onClick={() => {
                  setShowFilter(true);
                  setDelayFilter(true);
                }}
                className="text-xs md:text-sm"
              >
                {c("openFilter")}
              </p>
            </div>
          </div>
          <div className="px-4 lg:px-6 bg-white dark:bg-black">
            <AllFilterBadge
              keyword={keyword}
              setKeyword={setKeyword}
              skalaUsahaFilter={skalaUsahaFilter}
              setSkalaUsahaFilter={setSkalaUsahaFilter}
              dinasPengampuFilter={dinasPengampuFilter}
              setDinasPengampuFilter={setDinasPengampuFilter}
              badanHukumFilter={badanHukumFilter}
              setBadanHukumFilter={setBadanHukumFilter}
              bidangUsahaFilter={bidangUsahaFilter}
              setBidangUsahaFilter={setBidangUsahaFilter}
              showClearBadge={filteredData.length !== data.length}
            />
          </div>
          {filteredData.length !== data.length && (
            <div className="px-4 lg:px-6 bg-white dark:bg-black pb-3 xl:pb-2 text-grey dark:text-white text-xs">
              {c("get")} {filteredData.length} data
            </div>
          )}
          {windowWidth < EXTENDED_WINDOW.md ? (
            <MinimalisTableUMKM dataUmkm={filteredData} />
          ) : (
            <TableUMKM dataUmkm={filteredData} />
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default DataUmkm;
