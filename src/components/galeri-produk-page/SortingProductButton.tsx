import { IconChevronDown } from "@tabler/icons-react";
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from "react";
import { updateSortOrderFilterProduct, updateSortedColumnFilterProduct } from "../../helper/galeri-produk.helper";
import { FilterProduct } from "../../types/geleri-produk.types";
import { nameSlugType } from "../../DataBuilder";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownItemVariants, dropdownVariants } from "../../helper/motion.helper";
import { useThemeContext } from "../../layout/ThemeContext";

interface SortingProductButtonProps {
    item: nameSlugType;
    filter: FilterProduct;
    setFilter: Dispatch<SetStateAction<FilterProduct>>
}
const SortingProductButton: FC<SortingProductButtonProps> = ({ item, filter, setFilter }) => {
    const [showList, setShowList] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const { product: p } = useThemeContext();

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setShowList(false)
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handlelFilterChange = (slug: string, order?: string) => {
        updateSortedColumnFilterProduct(setFilter, slug)
        if (slug != "harga") {
            updateSortOrderFilterProduct(setFilter, "desc")
        } else {
            if (order) {
                updateSortOrderFilterProduct(setFilter, order)
            }
            setShowList(false);
        }
    }

    if (item.slug.toLocaleLowerCase() != "harga") {
        return (
            <div className={`${item.slug.toLowerCase() != filter.sortedColumn.toLowerCase() ? 'bg-white text-dark dark:bg-black' : 'bg-primary text-white'} text-xs md:text-sm rounded-sm dark:text-white  p-1.5 lg:min-w-[5rem] flex justify-center cursor-pointer transition-colors duration-300`} onClick={() => handlelFilterChange(item.slug)}>
                <p>{p(`sort${item.name}`)}</p>
            </div>

        )
    } else {
        return (
            <div className="relative" ref={ref}>
                <div className={`rounded-xs text-dark ${filter.sortedColumn == item.slug ? 'text-white bg-primary font-semibold' : 'text-black dark:text-white bg-white dark:bg-black'} p-1.5 md:px-4 min-w-[12.5rem] lg:min-w-[14rem] flex justify-between cursor-pointer text-xs md:text-sm`} onClick={() => setShowList(!showList)}>
                    <p>{p(`sort${item.name}`)}: {p(`sortHarga_${filter.sortOrder}`)}</p>
                    <IconChevronDown className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <AnimatePresence>
                    {showList && (
                        <motion.div variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="z-10 dropdown-list text-xs md:text-sm  absolute transition-colors duration-300 dark:text-white bg-white rounded-sm dark:bg-black whitespace-nowrap shadow-lg  min-w-[12.5rem] lg:min-w-[14rem]">
                            <motion.div variants={dropdownItemVariants} transition={{ duration: .3 }} className="w-full p-2 px-2 md:px-4 flex cursor-pointer text-black dark:text-white  hover:text-success dark:hover:text-white/75" onClick={() => handlelFilterChange(item.slug, "asc")}>
                                <p>{p(`sort${item.name}`)}: {p(`sortHarga_asc`)}</p>
                            </motion.div>
                            <motion.div variants={dropdownItemVariants} transition={{ duration: .3 }} className="p-2 w-full px-2 md:px-4 flex cursor-pointer text-black dark:text-white  hover:text-success dark:hover:text-white/75" onClick={() => handlelFilterChange(item.slug, "desc")}>
                                <p>{p(`sort${item.name}`)}: {p(`sortHarga_desc`)}</p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        )
    }

}

export default SortingProductButton