import { faChevronUp, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "../../layout/ThemeContext";
import { IconFilterSearch, IconLineDashed } from "@tabler/icons-react";
import { Slider } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import ChexboxGroup from "../table/ChexboxGroup";
import { TypeData } from "../table/Selection";
import { institusionTypeData } from "../../static/InfoModalDataBuilder";
import { AnimatePresence, motion } from "framer-motion";
import {
  dropdownVariants,
  variantsFilterInfoModal,
} from "../../helper/motion.helper";
import { ChevronDown } from "lucide-react";

interface TableModalFilterProps {
  nominal: number[];
  setNominal: (column: number[]) => void;
  institusionFilter: TypeData[];
  setInstitusionFilter: Dispatch<SetStateAction<TypeData[]>>;
  showFilter: boolean,
  setShowFilter: Dispatch<SetStateAction<boolean>>
}

const TableModalFilter: FC<TableModalFilterProps> = ({
  nominal,
  setNominal,
  institusionFilter,
  setInstitusionFilter,
  showFilter,
  setShowFilter
}) => {
  const { common: c } = useThemeContext();
  const [showNominalFilter, setShowNominalFilter] = useState(true);
  const [showInstitutionFilter, setShowInstitutionFilter] = useState(true);

  const handleInputChange = (index: number, value: string) => {
    const newNominal = [...nominal];
    newNominal[index] = value === "" ? 0 : parseInt(value, 10);
    setNominal(newNominal);
  };

  const handleInputBlur = (index: number) => {
    const newNominal = [...nominal];
    if (newNominal[index] < 0) newNominal[index] = 0;
    setNominal(newNominal);
  };

  const marks = [
    { value: 0, label: "0" },
    { value: 2000, label: "2M" },
    { value: 4000, label: "4M" },
    { value: 6000, label: "6M" },
    { value: 8000, label: "8M" },
    { value: 10000, label: "10M" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variantsFilterInfoModal}
      transition={{ duration: 0.3 }}
      className="fixed xl:relative box-filter bg-white flex flex-col shadow-lg xl:shadow-sm p-6 rounded-e-sm xl:rounded-sm text-sm md:text-base dark:bg-black z-[60] w-[20rem] md:w-[25rem] max-h-[80vh] overflow-y-scroll xl:max-h-fit xl:overflow-y-hidden border xl:border-none"
    >
      <div className="box absolute top-0 right-0 transform -translate-x-3 translate-y-2">
        <ChevronDown
          className={`w-7 h-7 p-1 bg-silver text-black dark:bg-black dark:border dark:text-white transform hover:bg-inactive hover:text-accent5 rounded-full cursor-pointer transition duration-300 ${showFilter ? "transform rotate-90" : ""
            }`}
          onClick={() => setShowFilter(false)}
        />
      </div>
      <div className="flex flex-col justify-start gap-2">
        <div className="border-b border-grey pt-2 pb-4">
          <h1 className="font-bold text-center">
            {" "}
            <FontAwesomeIcon icon={faList} className="pr-3" />
            {c("filterTitle")}
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-sm">
          <div className="">
            <div
              className="pt-4 flex items-center hover:text-primary justify-between cursor-pointer"
              onClick={() => setShowInstitutionFilter(!showInstitutionFilter)}
            >
              <div className="flex items-center">
                <IconFilterSearch
                  size={15}
                  style={{ marginRight: "0.8rem" }}
                />
                <h1 className="font-semibold">Jenis Lembaga</h1>
              </div>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`hover:text-grey text-xs transform ${!showInstitutionFilter && "rotate-180"
                  }`}
              />
            </div>
            <AnimatePresence>
              {showInstitutionFilter && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                >
                  <div className="box w-full mt-2">
                    <div className="flex flex-row justify-between py-1">
                      <p className="text-xs text-grey hover:text-grey/50 transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey" onClick={() => setInstitusionFilter(institusionTypeData)
                      }>
                        Pilih semua
                      </p>
                      <p className="text-grey text-xs lg:text-sm">|</p>
                      <p
                        className="text-xs text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                        onClick={() => setInstitusionFilter([])
                        }
                      >
                        Bersihkan
                      </p>
                    </div>
                  </div>
                  <ChexboxGroup
                    data={institusionTypeData}
                    selectedData={institusionFilter}
                    setSelectedData={setInstitusionFilter}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div
              className="pt-4 flex items-center hover:text-primary justify-between cursor-pointer"
              onClick={() => setShowNominalFilter(!showNominalFilter)}
            >
              <div className="flex items-center">
                <IconFilterSearch
                  size={15}
                  style={{ marginRight: "0.8rem" }}
                />
                <h1 className="font-semibold">Nominal Modal</h1>
              </div>
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`hover:text-grey text-xs transform transition-transform duration-300 ${!showNominalFilter && "rotate-180"
                  }`}
              />
            </div>
            <AnimatePresence>
              {showNominalFilter && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit={"exit"}
                  className="group mt-2"
                >
                  <div className="px-2">
                    <Slider
                      aria-label="Small steps"
                      step={10}
                      value={nominal}
                      onChange={(_, newValue) => setNominal(newValue as number[])}
                      valueLabelDisplay="auto"
                      min={0}
                      max={10000}
                      marks={marks}
                      color="info"
                    />
                  </div>
                  <p className="text-xs text-grey dark:text-gray-200 mt-2 mb-3">
                    <span className="font-semibold">Catatan: </span>Filter nominal
                    modal dalam satuan juta rupiah
                  </p>
                  <div className="flex flex-row justify-between gap-4 items-center">
                    <input
                      type="text"
                      id="slider-lower"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded w-1/2 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      value={nominal[0]}
                      onChange={(e) => handleInputChange(0, e.target.value)}
                      onBlur={() => handleInputBlur(0)}
                    />
                    <IconLineDashed />
                    <input
                      type="text"
                      id="slider-upper"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded w-1/2 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                      value={nominal[1] || ""}
                      onChange={(e) => handleInputChange(1, e.target.value)}
                      onBlur={() => handleInputBlur(1)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 my-4">
                    <ButtonNominalFilter text="< 1M" setNominal={setNominal} nominal={nominal} min={0} max={1000} />
                    <ButtonNominalFilter text="1M - 2.5M" setNominal={setNominal} nominal={nominal} min={1000} max={2500} />
                    <ButtonNominalFilter text="2.5M - 5M" setNominal={setNominal} nominal={nominal} min={2500} max={5000} />
                    <ButtonNominalFilter text="5M - 7.5M" setNominal={setNominal} nominal={nominal} min={5000} max={7500} />
                    <ButtonNominalFilter text="> 7.5M" setNominal={setNominal} nominal={nominal} min={7500} max={10000} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TableModalFilter;

export type ButtonNominalFilterProps = {
  text: string
  nominal: number[]
  setNominal: (column: number[]) => void
  min: number
  max: number
}
const ButtonNominalFilter: FC<ButtonNominalFilterProps> = ({ text, nominal, min, max, setNominal }) => {
  return (
    <div className={`cursor-pointer ${nominal[0] == min && nominal[1] == max ? 'border-2 border-primary text-success' : 'bg-gray-100 hover:bg-gray-200 text-black dark:text-white dark:bg-slate-800 dark:hover:bg-slate-700'} p-2 rounded-sm  transition-colors duration-300`} onClick={() => setNominal([min, max])}>
      <p className="text-xs text-center">{text}</p>
    </div>
  )
}

