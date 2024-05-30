import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { ChevronDown } from "lucide-react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/table/SearchBar";
import Selection, { TypeData } from "../../components/table/Selection";
import TableUMKM from "../../components/table/TableUMKM";
import ButtonWarning from "../../components/Button/ButtonWarning";
import {
  UMKMProperties,
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
  umkmData,
} from "../../DataBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import AdvancedFilter from "../../components/table/AdvancedFilter";
import { filterDataUMKM } from "../../utils/utils";

const DataUmkm = () => {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false);
  const [searchColumn, setSearchColumn] = useState<string>("all");
  const [keyword, setKeyword] = useState<string>("");
  const [skalaUsahaFilter, setSkalaUsahaFilter] = useState<TypeData[]>([]);
  const [dinasPengampuFilter, setDinasPengampuFilter] = useState<TypeData[]>(
    []
  );
  const [badanHukumFilter, setBadanHukumFilter] = useState<TypeData[]>([]);
  const [bidangUsahaFilter, setBidangUsahaFilter] = useState<TypeData[]>([]);
  const data = umkmData;
  const [filteredData, setFilteredData] = useState<UMKMProperties[]>([]);

  const onClickShowFilter = () => {
    setShowFilter(true);
  };

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

  return (
    <Layout pageTitle="DATA UMKM">
      <div className="flex flex-row w-full pt-6xl pb-4 xl:gap-8 xl:px-8 items-start dark:bg-slate-800">
        <CSSTransition
          in={showAdvancedFilter}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="w-1/4 z-10 flex flex-col bg-white shadow rounded-lg px-5 py-4 relative dark:bg-black">
            <div className="box absolute top-0 right-0 transform -translate-x-3 translate-y-2">
              <ChevronDown
                className={`w-9 h-9 p-1 bg-silver text-black transition-transform hover:bg-inactive rounded-full cursor-pointer ${
                  showAdvancedFilter ? "transform rotate-90" : ""
                }`}
                onClick={() => setShowAdvancedFilter(false)}
              />
            </div>
            <div className="w-full">
              <AdvancedFilter />
            </div>
          </div>
        </CSSTransition>

        <div
          className={`${
            showAdvancedFilter ? "gap-0" : "w-full gap-4 px-4 lg:px-8 xl:px-3xl"
          } flex justify-center bg-silver flex flex-col justify-center items-center dark:bg-slate-800`}
        >
          {!showAdvancedFilter && !showFilter ? (
            <div className="w-full flex justify-end">
              <ButtonWarning
                text="Show Filter"
                size="sm"
                onClick={onClickShowFilter}
              />
            </div>
          ) : (
            <div className="box"></div>
          )}

          <CSSTransition
            in={showFilter && !showAdvancedFilter}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="relative box-filter w-full bg-white flex flex-col shadow p-8 rounded-lg text-sm md:text-base dark:bg-black">
              <div className="box absolute top-0 right-0 transform -translate-x-5 translate-y-2">
                <ChevronDown
                  className={`w-9 h-9 p-1 bg-silver text-black  hover:bg-inactive rounded-full cursor-pointer ${
                    showFilter ? "transform rotate-180" : ""
                  }`}
                  onClick={() => setShowFilter(false)}
                />
              </div>
              <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 w-full">
                <div className="item-filter flex flex-col gap-4">
                  <h1 className="font-semibold">Masukkan kata kunci</h1>
                  <div className="hidden md:inline">
                    <SearchBar
                      width="25rem"
                      searchColumn={searchColumn}
                      setSearchColumn={setSearchColumn}
                      keyword={keyword}
                      setKeyword={setKeyword}
                    />
                  </div>
                  <div className="md:hidden">
                    <SearchBar
                      width="auto"
                      searchColumn={searchColumn}
                      setSearchColumn={setSearchColumn}
                      keyword={keyword}
                      setKeyword={setKeyword}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 xl:gap-8 ">
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
              <div className="w-full flex justify-end lg:justify-start pt-6">
                <p
                  onClick={() => setShowAdvancedFilter(true)}
                  className="text-grey hover:text-black cursor-pointer"
                >
                  <FontAwesomeIcon icon={faFilter} className="pr-2" /> Advanced
                  filter
                </p>
              </div>
            </div>
          </CSSTransition>

          <div className="py-4 table-container bg-white rounded-lg shadow-lg w-full dark:bg-black">
            <div className="box flex flex-row justify-between px-4 lg:px-8 py-4 items-center">
              <h1 className="font-bold lg:text-lg text-black">
                Data UMKM Kabupaten Kulon Progo Tahun 2024
              </h1>
              <div className="bg-warning flex flex-row gap-2 items-center px-2 py-2 rounded hover:bg-warningHover cursor-pointer text-white">
                <p>Download</p>
                <FontAwesomeIcon icon={faCircleDown} />
              </div>
            </div>
            <TableUMKM
              showAdvancedFilter={showAdvancedFilter}
              dataUmkm={filteredData}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DataUmkm;
