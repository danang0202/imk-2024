import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ChevronDown } from "lucide-react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/table/SearchBar";
import Selection, { TypeData } from "../../components/table/Selection";
import {
  EXTENDED_WINDOW,
  ProdukProperties,
  kecamatanSlug,
  kategoriProduk,
  produkData,
} from "../../DataBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import AdvancedFilter from "../../components/table/AdvancedFilter";
// import { filterDataUMKM } from "../../utils/utils";
import { filterDataProduk } from "../../utils/utils";
import BadgeFilter from "../../components/commons/BadgeFilter";
import { IconDownload, IconFilterSearch } from "@tabler/icons-react";
import ClearBadge from "../../components/commons/ClearBadge";
import Breadcrumb from "../../components/commons/BreadCrumb";
import { useThemeContext } from "../../layout/ThemeContext";
import DownloadConfirmationModal from "../../components/commons/DownloadConfirmationModal";
import NormalFilterBadge from "../../components/commons/NormalFilterBadge";
import AdvancedFilter2 from "../../components/table/AdvancedFilter2";
import SearchBar2 from "../../components/table/SearchBar2";
import DetailProdukContent from "../../components/detail-umkm-page/DetailProdukContent";

const GaleriProduk = () => {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false);
  const [searchColumn, setSearchColumn] = useState<string>("name");
  const [keyword, setKeyword] = useState<string>("");
  const [kecamatanFilter, setKecamatanFilter] =
    useState<TypeData[]>(kecamatanSlug);
  // kategoriProdukFilter
  const [kategoriProdukFilter, setKategoriProdukFilter] =
    useState<TypeData[]>(kategoriProduk);
  // const data = umkmData;
  const data = produkData;
  // const [filteredData, setFilteredData] = useState<UMKMProperties[]>([]);
  const [filteredData, setFilteredData] = useState<ProdukProperties[]>([]);
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

  // ini buat kecamatan dan kategori produk
  useEffect(() => {
    setFilteredData(
      filterDataProduk(
        searchColumn,
        keyword,
        kecamatanFilter,
        kategoriProdukFilter,
        data
      )
    );
  }, [searchColumn, keyword, kecamatanFilter, kategoriProdukFilter, data]);

  // kecamatan
  const handleDeleteKecamatanFilter = (item: TypeData) => {
    if (kecamatanFilter.length == 1) {
      setKecamatanFilter(kecamatanSlug);
    } else {
      setKecamatanFilter(
        kecamatanFilter.filter((selectedItem) => selectedItem !== item)
      );
    }
  }

  // kategori produk
  const handleDeleteKategoriProdukFilter = (item: TypeData) => {
    if (kategoriProdukFilter.length == 1) {
      setKategoriProdukFilter(kategoriProduk);
    } else {
      setKategoriProdukFilter(
        kategoriProdukFilter.filter((selectedItem) => selectedItem !== item)
      );
    }
  }

  const handleClearKeyword = () => {
    setKeyword("");
  };

  const handleDeleteAllFilter = () => {
    setKeyword("");
    setKecamatanFilter(kecamatanSlug);
    setKategoriProdukFilter(kategoriProduk);
  };

  return (
    <Layout pageTitle="Galeri Produk">
      <div className="px-4 w-full pt-5xl xl:hidden bg-silver dark:bg-slate-800">
        <Breadcrumb />
      </div>
      <div className="flex items-stretch flex-row w-full pb-8 xl:pt-5.5xl  xl:pb-3xl xl:gap-10 xl:px-36 bg-silver dark:bg-slate-800 dark:text-white gap-2">
        <CSSTransition
          in={showAdvancedFilter}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="fixed xl:relative z-20 flex flex-col bg-white rounded px-8 py-4 shadow-lg xl:shadow-sm dark:bg-black max-h-[80vh] overflow-y-scroll xl:max-h-fit xl:overflow-y-hidden min-w-[19rem] xl:min-w-[18rem]">
            <div className="box absolute top-0 right-0 transform -translate-x-3 translate-y-2">
              <ChevronDown
                className={`w-7 h-7 xl:w-8 xl:h-8 p-1 bg-silver text-black dark:bg-black dark:border dark:text-white transform hover:bg-inactive hover:text-accent5 rounded-full cursor-pointer transition duration-300 ${showAdvancedFilter ? "transform rotate-90" : ""
                  }`}
                onClick={() => setShowAdvancedFilter(false)}
              />
            </div>
            <div className="">
              <AdvancedFilter2
                kecamatanFilter={kecamatanFilter}
                setKecamatanFilter={setKecamatanFilter}
                kategoriFilter={kategoriProdukFilter}
                setKategoriFilter={setKategoriProdukFilter}
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
                className={`xl:hidden absolute w-7 h-7 xl:w-8 xl:h-8 p-1 bbg-silver text-black dark:bg-black dark:border dark:text-white transition-transform hover:bg-inactive hover:text-accent5 rounded-full cursor-pointer top-0 right-0 ${showFilter ? "transform rotate-90" : ""
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
                    <h1 className="font-semibold">{c("thead_produk_kecamatan")}</h1>
                    <Selection
                      selectionData={kecamatanSlug}
                      selectedData={kecamatanFilter}
                      setSelectedData={setKecamatanFilter}
                    />
                  </div>
                  <div className="item-filter flex flex-col gap-4">
                    <h1 className="font-semibold">{c("thead_produk_kategori")}</h1>
                    <Selection
                      selectionData={kategoriProduk}
                      selectedData={kategoriProdukFilter}
                      setSelectedData={setKategoriProdukFilter}
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
          <div className="pt-4 xl:pt-8 box flex flex-col gap-4 xl:flex-row xl:gap-0 py-4 rounded-t dark:bg-black">
            <div className="md:flex flex-row md:justify-between gap-8 md:w-full xl:w-fit pt-2 xl:pt-0">
              <SearchBar2
                width={windowWidth < EXTENDED_WINDOW.md ? "12.5rem" : "20rem"}
                searchColumn={searchColumn}
                setSearchColumn={setSearchColumn}
                keyword={keyword}
                setKeyword={setKeyword}
              />
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
          <div className="badge-filter px-4 lg:px-8 xl:px-3xl pb-2 flex flex-grow flex-wrap gap-2 lg:gap-4 dark:bg-black">
            {keyword && (
              <NormalFilterBadge
                text={`${c("keyword")}: ${keyword}`}
                handleClick={handleClearKeyword}
              />
            )}
            {kecamatanFilter.length != kecamatanSlug.length &&
              kecamatanFilter.map((item, index) => (
                <BadgeFilter
                  item={item}
                  handleClick={handleDeleteKecamatanFilter}
                  key={index}
                />
              ))}

            {kategoriProdukFilter.length != kategoriProduk.length &&
              kategoriProdukFilter.map((item, index) => (
                <BadgeFilter
                  item={item}
                  handleClick={handleDeleteKategoriProdukFilter}
                  key={index}
                />
              ))}
          </div>
          {/* {filteredData.length != data.length && (
            <div className="px-4 lg:px-8 xl:px-3xl bg-white dark:bg-black flex justify-between items-center pb-3 xl:pb-0">
            <p className="text-grey dark:text-white text-xs lg:text-sm">
            Mendapatkan {filteredData.length} data
            </p>
            <div className="flex flex-row items-center text-accent5 hover:text-accent5a cursor-pointer transition duration-300">
            <ClearBadge handleClick={handleDeleteAllFilter} />
            </div>
            </div>
            )} */}
          <DetailProdukContent />
        </div>

      </div>
    </Layout>
  );
};

export default GaleriProduk;
