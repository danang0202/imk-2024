import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  EXTENDED_WINDOW,
  ProdukProperties,
  kategoriProduk,
  kecamatanSlug,
  produkData,
} from "../../DataBuilder";
import Layout from "../../components/Layout";
import Selection, { TypeData } from "../../components/table/Selection";
// import { filterDataUMKM } from "../../utils/utils";
import { IconFilterSearch } from "@tabler/icons-react";
import Breadcrumb from "../../components/commons/BreadCrumb";
import DetailProdukContent from "../../components/detail-umkm-page/DetailProdukContent";
import AdvancedFilter2 from "../../components/table/AdvancedFilter2";
import { useThemeContext } from "../../layout/ThemeContext";
import { filterDataProduk } from "../../utils/utils";
import DoubleSlider from "../../components/commons/DoubleSlider";
import MultiRangeSlider from "../../components/multiRangeSlider/multiRangeSlider";

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


  return (
    <Layout pageTitle="Galeri Produk">
      <div className="px-4 w-full pt-5xl xl:hidden bg-silver dark:bg-slate-800">
        <Breadcrumb />
      </div>

      <div className="flex items-stretch flex-row 2xl:w-5/6 pb-8 xl:pt-5.5xl xl:pb-3xl xl:gap-10 xl:mx-auto xl:w-fit bg-silver dark:bg-slate-800 dark:text-white gap-2">
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
              {/* harga */}
              <div className="item-filter flex flex-col gap-4 pb-10">
                <h1 className="font-semibold">{c("thead_produk_harga")}</h1>
                <MultiRangeSlider min={0} max={1000} />
              </div>
            </div>
          </div>
        </CSSTransition>

        {/* Faceted Search */}
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
                  {/* harga */}
                  <div className="item-filter flex flex-col gap-4 pb-10">
                    <h1 className="font-semibold">{c("thead_produk_harga")}</h1>
                    <MultiRangeSlider min={0} max={1000} />
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

        {/* Card Produk */}
        <div className="table-container rounded-lg shadow-sm w-full grow px-4 xl:px-0">
          <DetailProdukContent />
        </div>

      </div>
    </Layout >
  );
};

export default GaleriProduk;
