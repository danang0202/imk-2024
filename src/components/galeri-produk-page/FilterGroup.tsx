import { FC, useState } from "react";
import { dropdownItemVariants, dropdownVariants } from "../../helper/motion.helper";
import { AnimatePresence, motion } from "framer-motion";
import { TypeData } from "../table/Selection";
import { IconFilterSearch } from "@tabler/icons-react";
import { useThemeContext } from "../../layout/ThemeContext";
import { EXTENDEDCOLORS, EXTENDED_WINDOW } from "../../DataBuilder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "@mantine/core";

interface Props {
    title: string,
    data: TypeData[];
    selectedData: TypeData[];
    handleClickAll: () => void;
    handleClearAll: () => void;
    handleClick: (item: TypeData) => void;
}
const FilterGroup: FC<Props> = ({ title, data, selectedData, handleClick, handleClickAll, handleClearAll }) => {
    const { windowWidth, theme } = useThemeContext();
    const [showFilter, setShowFilter] = useState(true);
    return (
        <>
            <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue mb-4 mt-6 text-black dark:text-white">
                <div
                    className="flex flex-row gap-4 items-center justify-between cursor-pointer hover:text-primary"
                    onClick={() => {
                        setShowFilter(!showFilter);
                    }}
                >
                    <div className="flex gap-4">
                        <IconFilterSearch
                            size={windowWidth < EXTENDED_WINDOW.lg ? 17 : 20}
                        />
                        <h1 className="font-semibold whitespace-nowrap">{title}</h1>
                    </div>
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className={`hover:text-grey transform transition-transform duration-300 ${!showFilter && "rotate-180"}`}
                    />
                </div>
                <AnimatePresence>
                    {showFilter && (
                        <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit={"exit"} className="box w-full">
                            <>
                                <div className="flex flex-row justify-between py-1">
                                    <p
                                        className="text-xs lg:text-sm text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                                        onClick={handleClickAll}
                                    >
                                        Pilih semua
                                    </p>
                                    <p className="text-grey text-xs lg:text-sm">|</p>
                                    <p
                                        className="text-xs lg:text-sm text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                                        onClick={handleClearAll}
                                    >
                                        Bersihkan
                                    </p>
                                </div>
                                <ul className="w-full grid grid-cols-2 text-xs md:text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-black">
                                    <AnimatePresence>
                                        {data.map((item, index) => (
                                            <motion.li variants={dropdownItemVariants} transition={{ duration: .3 }} className="" key={index}>
                                                <div className="flex items-center ps-1">

                                                    <Checkbox
                                                        checked={selectedData.includes(item)}
                                                        label={item.name}
                                                        c={theme == "dark" ? "white" : EXTENDEDCOLORS.black}
                                                        fw={"normal"}
                                                        color={EXTENDEDCOLORS.primary}
                                                        py={".5rem"}
                                                        onClick={() => handleClick(item)}
                                                        size={windowWidth < EXTENDED_WINDOW.lg ? "xs" : "sm"}
                                                    />
                                                </div>
                                            </motion.li>
                                        ))}
                                    </AnimatePresence>
                                </ul>
                            </>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default FilterGroup