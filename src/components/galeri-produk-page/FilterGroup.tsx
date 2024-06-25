import { FC, useState } from "react";
import { dropdownItemVariants, dropdownVariants } from "../../helper/motion.helper";
import { AnimatePresence, motion } from "framer-motion";
import { TypeData } from "../table/Selection";
import { IconFilterSearch } from "@tabler/icons-react";
import { useThemeContext } from "../../layout/ThemeContext";
import { EXTENDEDCOLORS } from "../../DataBuilder";
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
    const { theme, common: c, product: p } = useThemeContext();
    const [showFilter, setShowFilter] = useState(true);
    return (
        <>
            <div className="box flex flex-col gap-2 py-2 border-b border-greyBlue my-4 text-black dark:text-white">
                <div
                    className="flex flex-row gap-4 items-center justify-between cursor-pointer hover:text-primary"
                    onClick={() => {
                        setShowFilter(!showFilter);
                    }}
                >
                    <div className="flex gap-4 items-center">
                        <IconFilterSearch
                            size={15}
                        />
                        <h1 className="font-semibold whitespace-nowrap text-sm">{title}</h1>
                    </div>
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        className={`hover:text-grey text-xs transform transition-transform duration-300 ${!showFilter && "rotate-180"}`}
                    />
                </div>
                <AnimatePresence>
                    {showFilter && (
                        <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit={"exit"} className="box w-full">
                            <>
                                <div className="flex flex-row justify-between py-1">
                                    <p
                                        className="text-xs text-grey hover:text-black transition duration-300 cursor-pointer dark:text-white dark:hover:text-grey"
                                        onClick={handleClickAll}
                                    >
                                        {c("selectAll")}
                                    </p>
                                    <p className="text-grey text-xs lg:text-sm">|</p>
                                    <p
                                        className="text-xs text-accent5 hover:text-accent5a transition duration-300 cursor-pointer"
                                        onClick={handleClearAll}
                                    >
                                        {c("unselectAll")}
                                    </p>
                                </div>
                                <ul className="w-full grid grid-cols-2 text-xs md:text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-black">
                                    <AnimatePresence>
                                        {data.map((item, index) => (
                                            <motion.li variants={dropdownItemVariants} transition={{ duration: .3 }} className="" key={index}>
                                                <div className="flex items-center ps-1">

                                                    <Checkbox
                                                        checked={selectedData.includes(item)}
                                                        label={p(item.name)}
                                                        c={theme == "dark" ? "white" : EXTENDEDCOLORS.black}
                                                        fw={"normal"}
                                                        color={EXTENDEDCOLORS.primary}
                                                        py={".5rem"}
                                                        onClick={() => handleClick(item)}
                                                        size={"xs"}
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