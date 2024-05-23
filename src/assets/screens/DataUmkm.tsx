import { ChevronDown } from "lucide-react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/table/SearchBar";
import Selection from "../../components/table/Selection";
import TableUMKM from "../../components/table/TableUMKM";
import { useEffect, useState } from "react";
import ButtonWarning from "../../components/Button/ButtonWarning";
import {
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
} from "../../DataBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import AdvancedFilter from "../../components/table/AdvancedFilter";

const DataUmkm = () => {
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [showAdvancedFilter, setShowAdvancedFilter] = useState<boolean>(false);

  const onClickShowFilter = () => {
    setShowFilter(true);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Fungsi untuk mengupdate lebar layar
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

  return (
    <>
      <Layout pageTitle="DATA UMKM">
        <div className="flex flex-row w-full pt-6xl pb-4 xl:gap-8 xl:px-8 items-start">
          {/* Filter advance */}
          {showAdvancedFilter ? (
            <div className="w-1/4 z-10 flex flex-col bg-white shadow rounded-lg px-5 py-4  relative">
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
          ) : (
            <div className="box"></div>
          )}
          {/* filter advance end */}
          <div
            className={`${
              showAdvancedFilter
                ? "gap-0"
                : "w-full gap-4 px-4 lg:px-8 xl:px-3xl"
            } flex justify-center  bg-silver flex flex-col justify-center items-center`}
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

            {showFilter && !showAdvancedFilter ? (
              <div className="relative box-filter w-full bg-white flex flex-col shadow p-8 rounded-lg text-sm md:text-base">
                {/* hidden filter button */}
                <div className="box absolute top-0 right-0 transform -translate-x-5 translate-y-2">
                  <ChevronDown
                    className={`w-9 h-9 p-1 bg-silver text-black transition-transform hover:bg-inactive rounded-full cursor-pointer ${
                      showFilter ? "transform rotate-180" : ""
                    }`}
                    onClick={() => setShowFilter(false)}
                  />
                </div>
                {/* end */}
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 w-full">
                  <div className="item-filter flex flex-col gap-4">
                    <h1 className="font-semibold">Masukkan kata kunci</h1>
                    <div className="hidden md:inline">
                      <SearchBar width="25rem" />
                    </div>
                    <div className="md:hidden">
                      <SearchBar width="auto" />
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-4 xl:gap-8 ">
                    <div className="item-filter flex flex-col gap-4">
                      <h1 className="font-semibold">Skala Usaha</h1>
                      <Selection selectionData={skalaUsaha} />
                    </div>
                    <div className="item-filter flex flex-col gap-4">
                      <h1 className="font-semibold">Dinas Pengampu</h1>
                      <Selection selectionData={dinasPengampu} />
                    </div>
                    <div className="item-filter flex flex-col gap-4">
                      <h1 className="font-semibold">Badan Hukum</h1>
                      <Selection selectionData={badanHukumUsaha} />
                    </div>
                    <div className="item-filter flex flex-col gap-4">
                      <h1 className="font-semibold">Bidang Usaha</h1>
                      <Selection selectionData={bidangUsaha} />
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end lg:justify-start pt-6">
                  <p
                    onClick={() => setShowAdvancedFilter(true)}
                    className="transition-transform text-grey hover:text-black cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faFilter} className="pr-2" />{" "}
                    Advanced filter
                  </p>
                </div>
              </div>
            ) : (
              <div className="box"></div>
            )}

            <div className="py-4 table-container bg-white rounded-lg shadow-lg w-full">
              <div className="box flex flex-row justify-between px-4 lg:px-8 py-4 items-center">
                <h1 className="font-bold lg:text-lg text-black">
                  Data UMKM Kabupaten Kulon Progo Tahun 2024
                </h1>
                <div className="bg-warning flex flex-row gap-2 items-center px-2 py-2 rounded hover:bg-warningHover cursor-pointer text-white">
                  <p>Download</p>
                  <FontAwesomeIcon icon={faCircleDown} />
                </div>
              </div>
              <TableUMKM showAdvancedFilter={showAdvancedFilter} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DataUmkm;
