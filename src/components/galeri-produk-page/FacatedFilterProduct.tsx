import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faList } from "@fortawesome/free-solid-svg-icons";
import { EXTENDED_WINDOW, kategoriProduk, kecamatanSlug } from "../../DataBuilder";
import FilterGroup from "./FilterGroup";
import { FilterProduct } from "../../types/geleri-produk.types";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { handleClearFilterProductPerGroup, handleClickAllFilterProductPerGroup, handleFilterProductToggle } from "../../helper/galeri-produk.helper";
import { TypeData } from "../table/Selection";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownVariants, variantsFilterInfoModal } from "../../helper/motion.helper";
import { Slider } from "@mui/material";
import { IconFilterSearch, IconLineDashed } from "@tabler/icons-react";
import { useThemeContext } from "../../layout/ThemeContext";
import { ChevronDown } from "lucide-react";

interface FacatedFilterProductProps {
    showFilter: boolean,
    setShowFilter: Dispatch<SetStateAction<boolean>>
    filter: FilterProduct;
    setFilter: Dispatch<SetStateAction<FilterProduct>>
}

const marks = [
    { value: 0, label: "0" },
    { value: 250000, label: "250K" },
    { value: 500000, label: "500K" },
    { value: 750000, label: "750K" },
];

const FacatedFilterProduct: FC<FacatedFilterProductProps> = ({ filter, setFilter, showFilter, setShowFilter }) => {
    const [showNominalFilter, setShowNominalFilter] = useState(true);
    const { windowWidth } = useThemeContext();

    const handleKategoriClick = (item: TypeData) => {
        handleFilterProductToggle(item, filter.kategori, (updatedKategori) =>
            setFilter((prevState) => ({ ...prevState, kategori: updatedKategori }))
        );
    };

    const handleKecamatanClick = (item: TypeData) => {
        handleFilterProductToggle(item, filter.kecamatan, (updatedKecamatan) =>
            setFilter((prevState) => ({ ...prevState, kecamatan: updatedKecamatan }))
        );
    };

    const handleInputChange = (index: number, value: string) => {
        const newNominal = [...filter.harga];
        newNominal[index] = value === "" ? 0 : parseInt(value, 10);
        setFilter((prev) => ({ ...prev, harga: newNominal }));
    };

    const handleInputBlur = (index: number) => {
        const newNominal = [...filter.harga];
        if (newNominal[index] < 0) newNominal[index] = 0;
        setFilter((prev) => ({ ...prev, harga: newNominal }));
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variantsFilterInfoModal}
            transition={{ duration: 0.3 }}
            className="fixed xl:relative box-filter bg-white flex flex-col shadow-lg xl:shadow-none py-8 xl:py-4 px-6 rounded-lg text-sm md:text-base dark:bg-black z-40 border border-gray-300 xl:border-none xl:my-4 md:min-w-[20rem]  overflow-y-auto xl:overflow-y-hidden max-h-[80vh] xl:max-h-fit"
        >
            <div className="filter rounded relative">
                <ChevronDown
                    className={`xl:hidden absolute top-0 right-0 w-7 h-7 xl:w-8 xl:h-8 p-1 bg-silver text-black dark:bg-black dark:border dark:text-white transition-transform hover:bg-inactive hover:text-accent5 rounded-full cursor-pointer ${showFilter ? "transform rotate-90" : ""
                        }`}
                    onClick={() => {
                        setShowFilter(false)
                    }}
                />
                <div className="pb-4 border-b border-grey">
                    <h1 className="font-bold text-center text-black dark:text-white">
                        <FontAwesomeIcon icon={faList} className="pr-3" />
                        Filter Produk
                    </h1>
                </div>
                <FilterGroup title="Kategori" data={kategoriProduk} selectedData={filter.kategori} handleClick={handleKategoriClick} handleClickAll={() => handleClickAllFilterProductPerGroup(kategoriProduk, setFilter, 'kategori')} handleClearAll={() => handleClearFilterProductPerGroup(setFilter, 'kategori')}
                />
                <FilterGroup title="Kecamatan" data={kecamatanSlug} selectedData={filter.kecamatan} handleClick={handleKecamatanClick} handleClickAll={() => handleClickAllFilterProductPerGroup(kecamatanSlug, setFilter, 'kecamatan')} handleClearAll={() => handleClearFilterProductPerGroup(setFilter, 'kecamatan')}
                />
                <div className="flex flex-col gap-4 text-black dark:text-white ">
                    <div
                        className="pt-4 flex items-center hover:text-primary justify-between cursor-pointer"
                        onClick={() => setShowNominalFilter(!showNominalFilter)}
                    >
                        <div className="flex">
                            <IconFilterSearch
                                size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
                                style={{ marginRight: "0.8rem" }}
                            />
                            <h1 className="font-semibold">Harga</h1>
                        </div>
                        <FontAwesomeIcon
                            icon={faChevronUp}
                            className={`hover:text-grey transform transition-transform duration-300 ${!showNominalFilter && "rotate-180"
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
                                className="group"
                            >
                                <div className="px-2">
                                    <Slider
                                        value={filter.harga}
                                        onChange={(_, newValue) => setFilter((prev) => ({ ...prev, harga: newValue as number[] }))}
                                        valueLabelDisplay="auto"
                                        min={0}
                                        max={1000000}
                                        marks={marks}
                                        color="black"
                                    />
                                </div>
                                <p className="text-xs lg:text-sm text-grey dark:text-gray-200 mt-2 mb-3">
                                    <span className="font-semibold">Catatan: </span>Harga dalam satuan rupiah
                                </p>
                                <div className="flex flex-row justify-between gap-4 items-center">
                                    <input
                                        type="text"
                                        id="slider-lower"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        value={filter.harga[0]}
                                        onChange={(e) => handleInputChange(0, e.target.value)}
                                        onBlur={() => handleInputBlur(0)}
                                    />
                                    <IconLineDashed />
                                    <input
                                        type="text"
                                        id="slider-upper"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded  w-1/2 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                        value={filter.harga[1] || ""}
                                        onChange={(e) => handleInputChange(1, e.target.value)}
                                        onBlur={() => handleInputBlur(1)}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    )
}

export default FacatedFilterProduct