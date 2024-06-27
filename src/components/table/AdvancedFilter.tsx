import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import { dropdownVariants, variantsFilterDataUMKM } from "../../helper/motion.helper";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useThemeContext } from "../../layout/ThemeContext";

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

  const { common: c } = useThemeContext();

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variantsFilterDataUMKM}
        transition={{ duration: 0.3 }}
        className="fixed xl:relative z-40 flex flex-col bg-white rounded-e-sm xl:rounded-sm p-6 shadow-lg xl:shadow-none dark:bg-black max-h-[80vh] overflow-y-scroll xl:max-h-fit xl:overflow-y-hidden border border-gray-300 xl:border-none xl:max-w-[16rem] top-20 xl:top-0"
      >
        <div className="box absolute top-0 right-0 transform -translate-x-3 translate-y-2">
          <ChevronDown
            className={`w-7 h-7 p-1 bg-silver text-black dark:bg-black dark:border dark:text-white transform hover:bg-inactive hover:text-accent5 rounded-full cursor-pointer transition duration-300 ${showAdvancedFilter ? "transform rotate-90" : ""
              }`}
            onClick={() => setShowAdvancedFilter(false)}
          />
        </div>
        <div className="text-xs md:text-sm">
          <div
            className={`border-b-2 border-grey pb-4`}
          >
            <h1 className="font-semibold text-sm lg:text-base text-center">
              {" "}
              <FontAwesomeIcon icon={faList} className="pr-3" /> {c('advancedTitle')}
            </h1>
          </div>
          {/* skala usaha filter */}
          <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue my-4">
            <div
              className="flex flex-row gap-4 items-center justify-between cursor-pointer hover:text-primary"
              onClick={() => {
                setAdvancedSkalaUsahaFilter(!showAdvancedSkalaUsahaFilter);
              }}
            >
              <div className="flex gap-2 items-center">
                <IconFilterSearch
                  size={15}
                />
                <h1 className="font-semibold whitespace-nowrap">{c("thead_umkm_skala")}</h1>
              </div>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`hover:text-grey transform transition-transform duration-300 ${!showAdvancedSkalaUsahaFilter && "rotate-180"
                  }`}
              />
            </div>
            <AnimatePresence>
              {showAdvancedSkalaUsahaFilter && (
                <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit={"exit"} className="box w-full">
                  <div className="flex flex-row justify-between py-1">
                    <p
                      className="text-xs text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                      onClick={() => setSkalaUsahaFilter(skalaUsaha)}
                    >
                      {c("selectAll")}
                    </p>
                    <p className="text-grey text-xs ">|</p>
                    <p
                      className="text-xs text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                      onClick={() => setSkalaUsahaFilter([])}
                    >
                      {c("unselectAll")}
                    </p>
                  </div>
                  <ChexboxGroup
                    data={skalaUsaha}
                    selectedData={skalaUsahaFilter}
                    setSelectedData={setSkalaUsahaFilter}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* skala usaha filter end */}

          {/* badan hukum filter */}
          <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue my-4">
            <div
              className="flex flex-row gap-4 items-center justify-between  cursor-pointer hover:text-primary"
              onClick={() => {
                setAdvancedBadanHukumFilter(!showAdvancedBadanHukumFilter);
              }}
            >
              <div className="flex gap-2 items-center">
                <IconFilterSearch
                  size={15}
                />{" "}
                <h1 className="font-semibold whitespace-nowrap">{c("thead_umkm_badanHukum")}</h1>
              </div>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`hover:text-grey cursor-pointer transform transition-transform duration-300 ${!showAdvancedBadanHukumFilter && "rotate-180"
                  }`}
              />
            </div>
            <AnimatePresence>
              {showAdvancedBadanHukumFilter && (
                <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit={"exit"} className="box w-full">
                  <div className="flex flex-row justify-between py-1">
                    <p
                      className="text-xs text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                      onClick={() => setBadanHukumFilter(badanHukumUsaha)}
                    >
                      {c("selectAll")}
                    </p>
                    <p className="text-grey text-xs ">|</p>
                    <p
                      className="text-xs text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                      onClick={() => setBadanHukumFilter([])}
                    >
                      {c("unselectAll")}
                    </p>
                  </div>
                  <ChexboxGroup
                    data={badanHukumUsaha}
                    selectedData={badanHukumFilter}
                    setSelectedData={setBadanHukumFilter}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* badan hukum filter end */}

          {/* dinas pangampu filter */}
          <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue my-4">
            <div
              className="flex flex-row gap-4 items-center justify-between cursor-pointer hover:text-primary"
              onClick={() => {
                setShowAdvancedDinasPengampuFilter(
                  !showAdvancedDinasPengampuFilter
                );
              }}
            >
              <div className="flex gap-2 items-center">
                <IconFilterSearch
                  size={15}
                />{" "}
                <h1 className="font-semibold whitespace-nowrap">
                  {c("thead_umkm_pengampu")}
                </h1>
              </div>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`hover:text-grey cursor-pointer transform transition-transform duration-300 ${!showAdvancedDinasPengampuFilter && "rotate-180"
                  }`}
              />
            </div>
            <AnimatePresence>
              {showAdvancedDinasPengampuFilter && (
                <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit={"exit"} className="box w-full">
                  <div className="flex flex-row justify-between py-1">
                    <p
                      className="text-xs text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                      onClick={() => setDinasPengampuFilter(dinasPengampu)}
                    >
                      {c("selectAll")}
                    </p>
                    <p className="text-grey text-xs ">|</p>
                    <p
                      className="text-xs text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                      onClick={() => setDinasPengampuFilter([])}
                    >
                      {c("unselectAll")}
                    </p>
                  </div>
                  <ChexboxGroup
                    data={dinasPengampu}
                    selectedData={dinasPengampuFilter}
                    setSelectedData={setDinasPengampuFilter}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* dinas pengampu end */}

          {/* bidang usaha filter */}
          <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue my-4">
            <div
              className="flex flex-row gap-4 items-center  justify-between cursor-pointer hover:text-primary"
              onClick={() => {
                setShowAdvancedBidangFilter(!showAdvancedBidangFilter);
              }}
            >
              <div className="flex gap-2 items-center">
                <IconFilterSearch
                  size={15}
                />{" "}
                <h1 className="font-semibold whitespace-nowrap">{c("thead_umkm_bidang")}</h1>
              </div>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`hover:text-grey cursor-pointer transform transition-transform duration-300 ${!showAdvancedBidangFilter && "rotate-180"
                  }`}
              />
            </div>
            <AnimatePresence>
              {showAdvancedBidangFilter && (
                <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit={"exit"} className="box w-full">
                  <div className="flex flex-row justify-between py-1">
                    <p
                      className="text-xs text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                      onClick={() => setBidangUsahaFilter(bidangUsaha)}
                    >
                      {c("selectAll")}
                    </p>
                    <p className="text-grey text-xs">|</p>
                    <p
                      className="text-xs  text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                      onClick={() => setBidangUsahaFilter([])}
                    >
                      {c("unselectAll")}
                    </p>
                  </div>
                  <ChexboxGroup
                    data={bidangUsaha}
                    selectedData={bidangUsahaFilter}
                    setSelectedData={setBidangUsahaFilter}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {/* bidang usadaha filter end */}
        </div>
      </motion.div>
    </>
  );
};

export default AdvancedFilter;
