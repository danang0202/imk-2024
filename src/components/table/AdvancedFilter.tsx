import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  EXTENDED_WINDOW,
  badanHukumUsaha,
  bidangUsaha,
  dinasPengampu,
  skalaUsaha,
} from "../../DataBuilder";
import ChexboxGroup from "./ChexboxGroup";
import { faChevronUp, faList } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { TypeData } from "./Selection";
import { IconFilterSearch } from "@tabler/icons-react";
import { useThemeContext } from "../../layout/ThemeContext";
import { variantsFadeInOutFormLeft } from "../../helper/motion.helper";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface AdvancedFilterProps {
  skalaUsahaFilter: TypeData[];
  setSkalaUsahaFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  dinasPengampuFilter: TypeData[];
  setDinasPengampuFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  badanHukumFilter: TypeData[];
  setBadanHukumFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  bidangUsahaFilter: TypeData[];
  setBidangUsahaFilter: React.Dispatch<React.SetStateAction<TypeData[]>>;
  showAdvancedFilter: boolean;
  setShowAdvancedFilter: (column: boolean) => void;
}

const AdvancedFilter: React.FC<AdvancedFilterProps> = ({
  skalaUsahaFilter,
  setSkalaUsahaFilter,
  dinasPengampuFilter,
  setDinasPengampuFilter,
  badanHukumFilter,
  setBadanHukumFilter,
  bidangUsahaFilter,
  setBidangUsahaFilter,
  showAdvancedFilter,
  setShowAdvancedFilter,
}) => {
  const [showAdvancedBidangFilter, setShowAdvancedBidangFilter] =
    useState<boolean>(false);

  const [showAdvancedSkalaUsahaFilter, setAdvancedSkalaUsahaFilter] =
    useState<boolean>(true);
  const [showAdvancedBadanHukumFilter, setAdvancedBadanHukumFilter] =
    useState<boolean>(true);

  const [showAdvancedDinasPengampuFilter, setShowAdvancedDinasPengampuFilter] =
    useState<boolean>(false);

  const { windowWidth } = useThemeContext();

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variantsFadeInOutFormLeft}
        transition={{ duration: 0.3 }}
        className="fixed xl:relative z-20 flex flex-col bg-white rounded px-8 py-4 shadow-lg xl:shadow-none dark:bg-black max-h-[80vh] overflow-y-scroll xl:max-h-fit xl:overflow-y-hidden w-[19rem] xl:w-[18rem]"
      >
        <div className="box absolute top-0 right-0 transform -translate-x-3 translate-y-2">
          <ChevronDown
            className={`w-7 h-7 xl:w-8 xl:h-8 p-1 bg-silver text-black dark:bg-black dark:border dark:text-white transform hover:bg-inactive hover:text-accent5 rounded-full cursor-pointer transition duration-300 ${
              showAdvancedFilter ? "transform rotate-90" : ""
            }`}
            onClick={() => setShowAdvancedFilter(false)}
          />
        </div>
        <div className="text-xs md:text-sm lg:text-base ">
          <div
            className={`border-b-2 border-grey py-4 ${
              location.pathname == "/gis" && "hidden"
            }`}
          >
            <h1 className="font-bold text-sm lg:text-base text-center">
              {" "}
              <FontAwesomeIcon icon={faList} className="pr-3" /> Advanced Filter
            </h1>
          </div>
          {/* skala usaha filter */}
          <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4 mt-6">
            <div
              className="flex flex-row gap-4 items-center cursor-pointer hover:text-primary"
              onClick={() => {
                setAdvancedSkalaUsahaFilter(!showAdvancedSkalaUsahaFilter);
              }}
            >
              <IconFilterSearch
                size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
              />
              <h1 className="font-semibold whitespace-nowrap">Skala Usaha</h1>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`hover:text-grey transform ${
                  !showAdvancedSkalaUsahaFilter && "rotate-180"
                }`}
              />
            </div>
            {showAdvancedSkalaUsahaFilter && (
              <div className="box w-full">
                <div className="flex flex-row justify-between py-1">
                  <p
                    className="text-xs lg:text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                    onClick={() => setSkalaUsahaFilter(skalaUsaha)}
                  >
                    Pilih semua
                  </p>
                  <p className="text-grey text-xs lg:text-sm">|</p>
                  <p
                    className="text-xs lg:text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                    onClick={() => setSkalaUsahaFilter([])}
                  >
                    Bersihkan
                  </p>
                </div>
                <ChexboxGroup
                  data={skalaUsaha}
                  selectedData={skalaUsahaFilter}
                  setSelectedData={setSkalaUsahaFilter}
                />
              </div>
            )}
          </div>
          {/* skala usaha filter end */}

          {/* badan hukum filter */}
          <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4">
            <div
              className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
              onClick={() => {
                setAdvancedBadanHukumFilter(!showAdvancedBadanHukumFilter);
              }}
            >
              <IconFilterSearch
                size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
              />{" "}
              <h1 className="font-semibold whitespace-nowrap">Badan Hukum</h1>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`hover:text-grey cursor-pointer transform ${
                  !showAdvancedBadanHukumFilter && "rotate-180"
                }`}
              />
            </div>
            {showAdvancedBadanHukumFilter && (
              <div className="box w-full">
                <div className="flex flex-row justify-between py-1">
                  <p
                    className="text-xs lg:text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                    onClick={() => setBadanHukumFilter(badanHukumUsaha)}
                  >
                    Pilih semua
                  </p>
                  <p className="text-grey text-xs lg:text-sm">|</p>
                  <p
                    className="text-xs lg:text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                    onClick={() => setBadanHukumFilter([])}
                  >
                    Bersihkan
                  </p>
                </div>
                <ChexboxGroup
                  data={badanHukumUsaha}
                  selectedData={badanHukumFilter}
                  setSelectedData={setBadanHukumFilter}
                />
              </div>
            )}
          </div>
          {/* badan hukum filter end */}

          {/* dinas pangampu filter */}
          <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4">
            <div
              className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
              onClick={() => {
                setShowAdvancedDinasPengampuFilter(
                  !showAdvancedDinasPengampuFilter
                );
              }}
            >
              <IconFilterSearch
                size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
              />{" "}
              <h1 className="font-semibold whitespace-nowrap">
                Dinas Pengampu
              </h1>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`hover:text-grey cursor-pointer transform ${
                  !showAdvancedDinasPengampuFilter && "rotate-180"
                }`}
              />
            </div>
            {showAdvancedDinasPengampuFilter ? (
              <div className="box w-full">
                <div className="flex flex-row justify-between py-1">
                  <p
                    className="text-xs lg:text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                    onClick={() => setDinasPengampuFilter(dinasPengampu)}
                  >
                    Pilih semua
                  </p>
                  <p className="text-grey text-xs lg:text-sm">|</p>
                  <p
                    className="text-xs lg:text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                    onClick={() => setDinasPengampuFilter([])}
                  >
                    Bersihkan
                  </p>
                </div>
                <ChexboxGroup
                  data={dinasPengampu}
                  selectedData={dinasPengampuFilter}
                  setSelectedData={setDinasPengampuFilter}
                />
              </div>
            ) : (
              <div className="box"></div>
            )}
          </div>
          {/* dinas pengampu end */}

          {/* bidang usaha filter */}
          <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4">
            <div
              className="flex flex-row gap-4 items-center  cursor-pointer hover:text-primary"
              onClick={() => {
                setShowAdvancedBidangFilter(!showAdvancedBidangFilter);
              }}
            >
              <IconFilterSearch
                size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
              />{" "}
              <h1 className="font-semibold whitespace-nowrap">Bidang Usaha</h1>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`hover:text-grey cursor-pointer transform ${
                  !showAdvancedBidangFilter && "rotate-180"
                }`}
              />
            </div>
            {showAdvancedBidangFilter ? (
              <div className="box w-full">
                <div className="flex flex-row justify-between py-1">
                  <p
                    className="text-xs lg:text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                    onClick={() => setBidangUsahaFilter(bidangUsaha)}
                  >
                    Pilih semua
                  </p>
                  <p className="text-grey text-xs lg:text-sm">|</p>
                  <p
                    className="text-xs lg:text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                    onClick={() => setBidangUsahaFilter([])}
                  >
                    Bersihkan
                  </p>
                </div>
                <ChexboxGroup
                  data={bidangUsaha}
                  selectedData={bidangUsahaFilter}
                  setSelectedData={setBidangUsahaFilter}
                />
              </div>
            ) : (
              <div className="box"></div>
            )}
          </div>
          {/* bidang usadaha filter end */}
        </div>
      </motion.div>
    </>
  );
};

export default AdvancedFilter;
