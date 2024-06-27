import Selection, { TypeData } from "./Selection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
} from "../../DataBuilder";
import { IconFilterSearch } from "@tabler/icons-react";
import { variantsFilterDataUMKM } from "../../helper/motion.helper";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "../../layout/ThemeContext";
import { KecamatanGisType } from "../../utils/gis-utils";
import { handleKecamatanChange } from "../../helper/gis.helper";
import { SetStateAction } from "react";
interface FitlerProps {
  skalaUsahaFilter: TypeData[];
  setSkalaUsahaFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  dinasPengampuFilter: TypeData[];
  setDinasPengampuFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  badanHukumFilter: TypeData[];
  setBadanHukumFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  bidangUsahaFilter: TypeData[];
  setBidangUsahaFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  showFilter: boolean;
  setShowFilter: (column: boolean) => void;
  setDelayFilter: (column: boolean) => void;
  setShowAdvancedFilter: (column: boolean) => void;
  selectedKecamatan?: KecamatanGisType | null;
  setSelectedkecamatan?: React.Dispatch<SetStateAction<KecamatanGisType | null>>;
  kecamatanList?: KecamatanGisType[];
}
const NormalFilter: React.FC<FitlerProps> = ({
  skalaUsahaFilter,
  setSkalaUsahaFilter,
  dinasPengampuFilter,
  setDinasPengampuFilter,
  badanHukumFilter,
  setBadanHukumFilter,
  bidangUsahaFilter,
  setBidangUsahaFilter,
  showFilter,
  setShowFilter,
  setDelayFilter,
  setShowAdvancedFilter,
  selectedKecamatan,
  setSelectedkecamatan,
  kecamatanList,
}) => {
  const { common: c } = useThemeContext();
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variantsFilterDataUMKM}
        transition={{ duration: 0.3 }}
        className="fixed xl:relative box-filter bg-white flex flex-col shadow-lg xl:shadow-none p-6 rounded-e-sm xl:rounded-sm text-sm  dark:bg-black z-40 border border-gray-300 xl:border-none xl:max-w-[16rem] top-20 xl:top-0"
      >
        <div className="relative">
          <div className="box absolute top-0 right-0 transform translate-x-3 -translate-y-3">
            <ChevronDown
              className={`w-7 h-7 p-1 bg-silver text-black dark:bg-black dark:border dark:text-white transform hover:bg-inactive hover:text-accent5 rounded-full cursor-pointer transition duration-300 ${showFilter ? "transform rotate-90" : ""
                }`}
              onClick={() => {
                setShowFilter(false), setDelayFilter(false);
              }} />
          </div>
          <div className="flex flex-col justify-start gap-4">
            <div className="border-b border-grey pb-4">
              <h1 className="font-semibold text-center xl:text-base">
                <FontAwesomeIcon icon={faList} className="pr-3" />
                {c("filterTitle")}
              </h1>
            </div>
            <div className="flex flex-col gap-4">
              {kecamatanList && setSelectedkecamatan && (
                <div className="box flex flex-col gap-2">
                  <div className="flex flex-row gap-2 items-center dark:text-white">
                    <h1 className="font-semibold whitespace-nowrap">
                      Kecamatan
                    </h1>
                  </div>
                  <form className="">
                    <select
                      value={selectedKecamatan ? selectedKecamatan.name : ""}
                      onChange={(e) => handleKecamatanChange(e, setSelectedkecamatan)}
                      className="whitespace-nowrap bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded focus:ring-primary focus:border-primary block w-full p-2 cursor-pointer dark:bg-slate-800 dark:border-grey dark:text-white"
                    >
                      <option value="">{c("all")}</option>
                      {kecamatanList.map((item, index) => (
                        <option key={index} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              )}
              <div className="item-filter flex flex-col gap-2">
                <h1 className="font-semibold">{c("thead_umkm_skala")}</h1>
                <Selection
                  selectionData={skalaUsaha}
                  selectedData={skalaUsahaFilter}
                  setSelectedData={setSkalaUsahaFilter}
                />
              </div>
              <div className="item-filter flex flex-col gap-2">
                <h1 className="font-semibold">{c("thead_umkm_pengampu")}</h1>
                <Selection
                  selectionData={dinasPengampu}
                  selectedData={dinasPengampuFilter}
                  setSelectedData={setDinasPengampuFilter}
                />
              </div>
              <div className="item-filter flex flex-col gap-2">
                <h1 className="font-semibold">{c("thead_umkm_badanHukum")}</h1>
                <Selection
                  selectionData={badanHukumUsaha}
                  selectedData={badanHukumFilter}
                  setSelectedData={setBadanHukumFilter}
                />
              </div>
              <div className="item-filter flex flex-col gap-2">
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
              className="text-xs md:text-xs "
            >
              {c("openAdvFilter")}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NormalFilter;
