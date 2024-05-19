import { ChevronDown } from "lucide-react";
import Layout from "../../components/Layout";
import SearchBar from "../../components/table/SearchBar";
import Selection from "../../components/table/Selection";
import TableUMKM from "../../components/table/TableUMKM";
import { useState } from "react";
import ButtonWarning from "../../components/Button/ButtonWarning";

const DataUmkm = () => {
  const [showFilter, setShowFilter] = useState(true);

  const onClickShowFilter = () => {
    setShowFilter(true);
  };
  return (
    <>
      <Layout pageTitle="DATA UMKM">
        <div className="flex justify-center w-full px-6xl py-8 bg-silver flex flex-col justify-center items-center gap-4">
          {showFilter ? (
            <div className="relative box-filter w-full bg-white shadow p-8 rounded-lg flex flex-row justify-between items-center gap-4">
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
              <div className="item-filter flex flex-col gap-4">
                <h1 className="font-semibold">Masukkan kata kunci</h1>
                <SearchBar />
              </div>
              <div className="item-filter flex flex-col gap-4">
                <h1 className="font-semibold">Bidang Usaha</h1>
                <Selection />
              </div>
              <div className="item-filter flex flex-col gap-4">
                <h1 className="font-semibold">Dinas Pengampu</h1>
                <Selection />
              </div>
              <div className="item-filter flex flex-col gap-4">
                <h1 className="font-semibold">Badan Hukum</h1>
                <Selection />
              </div>
              <div className="item-filter flex flex-col gap-4">
                <h1 className="font-semibold">Kecamatan</h1>
                <Selection />
              </div>
            </div>
          ) : (
            <div className="w-full flex justify-end">
              <ButtonWarning
                text="Show Filter"
                size="sm"
                onClick={onClickShowFilter}
              />
            </div>
          )}

          <div className="py-4 w-full table-container bg-white rounded-lg shadow-lg xl:overflow-x-hidden">
            <div className="box flex flex-row justify-between px-8 py-4 items-center">
              <h1 className="font-bold text-lg text-black">
                Data UMKM Kabupaten Kulon Progo Tahun 2024
              </h1>
              <div className="">donwload</div>
            </div>
            <TableUMKM />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DataUmkm;
