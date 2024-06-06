import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ChevronDown } from "lucide-react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/table/SearchBar";
import Selection, { TypeData } from "../../components/table/Selection";
import TableUMKM from "../../components/table/TableUMKM";
import {
  UMKMProperties,
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
  umkmData,
} from "../../DataBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faList } from "@fortawesome/free-solid-svg-icons";
import AdvancedFilter from "../../components/table/AdvancedFilter";
import { filterDataUMKM } from "../../utils/utils";
import BadgeFilter from "../../components/commons/BadgeFilter";
import { IconFilterSearch, IconX } from "@tabler/icons-react";

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
    if (windowWidth < 800) {
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

  const handleDeleteAllFilter = () => {
    setKeyword("");
    setDinasPengampuFilter(dinasPengampu);
    setSkalaUsahaFilter(skalaUsaha);
    setBadanHukumFilter(badanHukumUsaha);
    setBidangUsahaFilter(bidangUsaha);
  };

  return (
    <Layout pageTitle="DATA UMKM">
      <div className="flex items-stretch flex-row w-full pt-5.5xl pb-3xl xl:gap-4 xl:px-8 bg-silver items-start dark:bg-slate-800 dark:text-white">
        <CSSTransition
          in={showAdvancedFilter}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="z-10 flex flex-col bg-white rounded px-8 py-4 relative shadow-sm dark:bg-black">
            <div className="box absolute top-0 right-0 transform -translate-x-3 translate-y-2">
              <ChevronDown
                className={`w-8 h-8 p-1 bg-silver text-black transition-transform hover:bg-inactive rounded-full cursor-pointer ${showAdvancedFilter ? "transform rotate-90" : ""
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
          <div className="relative box-filter bg-white flex flex-col shadow-sm py-8 px-6 rounded-lg text-sm md:text-base dark:bg-black">
            <div className="flex flex-col justify-start gap-8">
              <div className="border-b border-grey pt-2 pb-4">
                <h1 className="font-bold text- tlgext-center">
                  {" "}
                  <FontAwesomeIcon icon={faList} className="pr-3" />
                  Penyaringan Data
                </h1>
              </div>
              <div className="flex flex-col gap-4 xl:gap-8 ">
                <div className="item-filter flex flex-col gap-4">
                  <h1 className="font-semibold">Skala Usaha</h1>
                  <Selection
                    selectionData={skalaUsaha}
                    selectedData={skalaUsahaFilter}
                    setSelectedData={setSkalaUsahaFilter}
                  />
                </div>
                <div className="item-filter flex flex-col gap-4">
                  <h1 className="font-semibold">Dinas Pengampu</h1>
                  <Selection
                    selectionData={dinasPengampu}
                    selectedData={dinasPengampuFilter}
                    setSelectedData={setDinasPengampuFilter}
                  />
                </div>
                <div className="item-filter flex flex-col gap-4">
                  <h1 className="font-semibold">Badan Hukum</h1>
                  <Selection
                    selectionData={badanHukumUsaha}
                    selectedData={badanHukumFilter}
                    setSelectedData={setBadanHukumFilter}
                  />
                </div>
                <div className="item-filter flex flex-col gap-4">
                  <h1 className="font-semibold">Bidang Usaha</h1>
                  <Selection
                    selectionData={bidangUsaha}
                    selectedData={bidangUsahaFilter}
                    setSelectedData={setBidangUsahaFilter}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 text-grey hover:text-black justify-end lg:justify-end pt-6 cursor-pointer">
              <IconFilterSearch size={18} />
              <p
                onClick={() => setShowAdvancedFilter(true)}
                className="text-sm dark:text-white dark:hover:text-grey"
              >
                Buka Filter Lanjutan
              </p>
            </div>
          </div>
        </CSSTransition>

        <div className="table-container rounded-lg shadow-sm w-full grow">
          <div className="pt-8 bg-white box flex flex-row justify-between px-4 lg:px-8 py-4 items-center rounded-t dark:bg-black">
            <h1 className="font-bold lg:text-lg text-black dark:text-white">
              Data UMKM Kabupaten Kulon Progo Tahun 2024
            </h1>
            <div className="flex flex-row gap-8">
              <SearchBar
                width="20rem"
                searchColumn={searchColumn}
                setSearchColumn={setSearchColumn}
                keyword={keyword}
                setKeyword={setKeyword}
              />
              <div className="bg-secondary flex flex-row gap-2 items-center px-4 py-2 rounded hover:bg-secondaryHover cursor-pointer text-white transition duration-300">
                <p>Unduh Data</p>
                <FontAwesomeIcon icon={faCircleDown} />
              </div>
            </div>
          </div>
          <div className="bg-white badge-filter px-3xl pb-4 flex flex-grow flex-wrap gap-4 dark:bg-black">
            {keyword && (
              <CSSTransition
                in={true}
                timeout={300}
                classNames="fade"
                unmountOnExit
              >
                <span
                  id="badge-dismiss-default"
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-grey bg-silver rounded-sm"
                >
                  Kata kunci: {keyword}
                  <button
                    type="button"
                    className="inline-flex items-center p-1 ms-2 text-sm text-grey bg-transparent rounded-sm hover:text-white hover:bg-grey transition duration-300 "
                    data-dismiss-target="#badge-dismiss-default"
                    aria-label="Remove"
                    onClick={() => setKeyword("")}
                  >
                    <svg
                      className="w-2 h-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Remove badge</span>
                  </button>
                </span>
              </CSSTransition>
            )}
            {skalaUsahaFilter.length != skalaUsaha.length &&
              skalaUsahaFilter.map((item) => (
                <BadgeFilter
                  item={item}
                  handleClick={handleDeleteSkalaUsahaFilter}
                />
              ))}
            {badanHukumFilter &&
              badanHukumFilter.length != badanHukumUsaha.length &&
              badanHukumFilter.map((item) => (
                <BadgeFilter
                  item={item}
                  handleClick={handleDeleteBadanHukumFilter}
                />
              ))}
            {dinasPengampuFilter.length != dinasPengampu.length &&
              dinasPengampuFilter.map((item) => (
                <BadgeFilter
                  item={item}
                  handleClick={handleDinasPengampuFilter}
                />
              ))}
            {bidangUsahaFilter.length != bidangUsaha.length &&
              bidangUsahaFilter.map((item) => (
                <BadgeFilter
                  item={item}
                  handleClick={handleDeleteBidangUsahaFilter}
                />
              ))}
          </div>
          {filteredData.length != data.length && (
            <div className="px-3xl bg-white flex justify-between items-center">
              <p className="text-grey text-sm">
                Mendapatkan {filteredData.length} data
              </p>
              <div
                className="flex flex-row  items-center text-accent5 hover:text-accent5a cursor-pointer transition duration-300"
                onClick={() => handleDeleteAllFilter()}
              >
                <IconX size={18} />
                <p className="">Bersihkan</p>
              </div>
            </div>
          )}
          <TableUMKM dataUmkm={filteredData} />
        </div>
      </div>
    </Layout>
  );
};

export default DataUmkm;
