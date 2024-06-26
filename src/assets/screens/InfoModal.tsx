import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/table/SearchBar";
import { EXTENDED_WINDOW } from "../../DataBuilder";
import { IconDownload, IconFilterSearch } from "@tabler/icons-react";
import Breadcrumb from "../../components/commons/BreadCrumb";
import { useThemeContext } from "../../layout/ThemeContext";
import DownloadConfirmationModal from "../../components/commons/DownloadConfirmationModal";
import { AnimatePresence, motion } from "framer-motion";
import TableModalFilter from "../../components/info-modal-page.tsx/TableModalFilter";
import { TypeData } from "../../components/table/Selection";
import TableModal from "../../components/info-modal-page.tsx/TableModal";
import {
  InfoModalType,
  infoModalData,
  institusionTypeData,
} from "../../static/InfoModalDataBuilder";
import AllFilterInfoModal from "../../components/info-modal-page.tsx/AllFilterInfoModal";
import { filterDataInfoModal } from "../../helper/info-modal.helper";
import { variantsOpacity } from "../../helper/motion.helper";
import MinimalisTableModal from "../../components/info-modal-page.tsx/MinimalisTableModal";

const InfoModal = () => {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [searchColumn, setSearchColumn] = useState<string>("name");
  const [keyword, setKeyword] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const { common: c } = useThemeContext();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [nominalFilter, setNominalFilter] = useState<number[]>([0, 10000]);
  const [institutionFilter, setInstitutionFilter] =
    useState<TypeData[]>(institusionTypeData);
  const data = infoModalData;
  const [filteredData, setFilteredData] = useState<InfoModalType[]>([]);

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
      filterDataInfoModal(
        searchColumn,
        keyword,
        nominalFilter,
        institutionFilter,
        data
      )
    );
  }, [searchColumn, keyword, nominalFilter, institutionFilter, data]);

  return (
    <Layout pageTitle="Info Modal">
      <div className="px-4 xl:px-8 w-full pt-5xl  bg-silver dark:bg-slate-800">
        <Breadcrumb />
      </div>
      {showModal && (
        <DownloadConfirmationModal
          setShow={setShowModal}
          chartTitle="Info Modal UMKM Kabupaten Kulon Progo Tahun 2024"
          isData={true}
        />
      )}
      <div className="flex items-stretch flex-row w-full pb-8 xl:pt-4  xl:pb-3xl xl:gap-4 xl:px-8 bg-silver dark:bg-slate-800 dark:text-white">
        <AnimatePresence>
          {showFilter && (
            <TableModalFilter
              nominal={nominalFilter}
              setNominal={setNominalFilter}
              institusionFilter={institutionFilter}
              setInstitusionFilter={setInstitutionFilter}
              showFilter={showFilter}
              setShowFilter={setShowFilter}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!showFilter && (
            <motion.div variants={variantsOpacity} transition={{ duration: .3 }} initial="hidden" animate="visible" exit={"exit"} className="hidden xl:inline box bg-white dark:bg-black h-fit p-4 rounded hover:bg-inactive cursor-pointer transition-colors duration-300" onClick={() => setShowFilter(true)}>
              <IconFilterSearch size={20} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className="table-container rounded-lg shadow-sm w-full grow px-4 xl:px-0"
        >
          <div className="pt-4 xl:pt-8 bg-white box flex flex-col gap-4 xl:flex-row xl:gap-0 justify-between px-4 lg:px-8 py-4 items-center rounded-t dark:bg-black">
            <h1 className="font-semibold text-base text-center border-b border-grey pb-2 xl:text-left  xl:border-0 xl:pb-0 text-black dark:text-white">
              {c("Info Modal UMKM Kulon Progo Tahun 2024")}
            </h1>
            <div className="md:flex flex-row md:justify-between  md:w-full xl:w-fit pt-2 xl:pt-0 z-40">
              <SearchBar
                width={windowWidth < EXTENDED_WINDOW.md ? "12.5rem" : "20rem"}
                searchColumn={searchColumn}
                setSearchColumn={setSearchColumn}
                keyword={keyword}
                setKeyword={setKeyword}
                isInfoModal={true}
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:flex text-xs lg:text-sm bg-secondary flex-row gap-2 items-center px-2 py-1 rounded hover:bg-secondary/90 cursor-pointer text-white"
                onClick={() => setShowModal(true)}
              >
                <IconDownload />
              </motion.div>
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
          <div className="px-4 lg:px-8 xl:px-3xl bg-white dark:bg-black">
            <AllFilterInfoModal
              keyword={keyword}
              setKeyword={setKeyword} 
              nominalFilter={nominalFilter}
              setNominalFilter={setNominalFilter}
              institutionFilter={institutionFilter}
              setInstitutionFilter={setInstitutionFilter} />
          </div>
          {filteredData.length !== data.length && (
            <div className="px-4 lg:px-8 xl:px-3xl bg-white dark:bg-black pb-3 xl:pb-0 text-grey dark:text-white text-xs">
              Mendapatkan {filteredData.length} data
            </div>
          )}
          {windowWidth < EXTENDED_WINDOW.md ? (
            <MinimalisTableModal dataModal={filteredData} />
          ) : (
            <TableModal dataModal={filteredData} />
          )}
        </motion.div>
      </div>
    </Layout>
  );
};

export default InfoModal;
