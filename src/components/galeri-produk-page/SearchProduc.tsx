import { FC, useState, Dispatch, SetStateAction, useRef, useEffect } from "react";
import { IconSearch, IconTrendingUp } from "@tabler/icons-react";
import { FilterProduct } from "../../types/geleri-produk.types";
import { productType } from "../../types/common.types";
import { updateKeywordFilterProduct } from "../../helper/galeri-produk.helper";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownVariants, rowVariants } from "../../helper/motion.helper";

interface MinimalisSearchProps {
    filter: FilterProduct;
    setFilter: Dispatch<SetStateAction<FilterProduct>>;
    products: productType[];
}

const SearchProduct: FC<MinimalisSearchProps> = ({ filter, setFilter, products }) => {
    const [recommendationsName, setRecommendationsName] = useState<productType[]>([]);
    const [recommendationsUmkm, setRecommendationsUmkm] = useState<productType[]>([]);
    const ref = useRef<HTMLUListElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setRecommendationsName([]);
            setRecommendationsUmkm([])
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSearchChange = (keyword: string) => {
        updateKeywordFilterProduct(setFilter, keyword);
        if (keyword) {
            const filteredRecommendationsName = products
                .filter((product) =>
                    product.nama.toLowerCase().includes(keyword.toLowerCase())
                )
                .sort((a, b) => {
                    if (a.nama.toLowerCase().startsWith(keyword.toLowerCase()) && !b.nama.toLowerCase().startsWith(keyword.toLowerCase())) {
                        return -1;
                    }
                    if (!a.nama.toLowerCase().startsWith(keyword.toLowerCase()) && b.nama.toLowerCase().startsWith(keyword.toLowerCase())) {
                        return 1;
                    }
                    return a.nama.toLowerCase().localeCompare(b.nama.toLowerCase());
                })
                .slice(0, 5);
            const filteredRecommendationsUmkm = products
                .filter((product) =>
                    product.umkm.toLowerCase().includes(keyword.toLowerCase())
                )
                .sort((a, b) => {
                    if (a.umkm.toLowerCase().startsWith(keyword.toLowerCase()) && !b.umkm.toLowerCase().startsWith(keyword.toLowerCase())) {
                        return -1;
                    }
                    if (!a.umkm.toLowerCase().startsWith(keyword.toLowerCase()) && b.umkm.toLowerCase().startsWith(keyword.toLowerCase())) {
                        return 1;
                    }
                    return a.umkm.toLowerCase().localeCompare(b.umkm.toLowerCase());
                })
                .slice(0, 5);
            setRecommendationsName(filteredRecommendationsName);
            setRecommendationsUmkm(filteredRecommendationsUmkm);
        } else {
            setRecommendationsName([]);
            setRecommendationsUmkm([]);
        }
    };

    return (
        <div className="relative w-full">
            <form className="flex items-stretch relative">
                <div className="relative w-full bg-white dark:bg-black rounded-s">
                    <input
                        type="text"
                        id="simple-search"
                        value={filter.keyword}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="text-gray-900 w-full pe-4 p-2 dark:text-white text-xs rounded-s bg-white dark:bg-black lg:min-w-[13rem] xl:min-w-[15rem]"
                        placeholder="Ketikkan nama produk atau UMKM.."
                        required
                    />
                </div>
                <div className="y-0 right-0 flex items-center rounded-e bg-primary px-2 justify-center">
                    <IconSearch className="w-4 h-4 text-white" />
                </div>
            </form>
            <AnimatePresence>
                {(recommendationsName.length > 0 || recommendationsUmkm.length > 0) && (
                    <motion.ul
                        ref={ref}
                        id="dropdown"
                        className="absolute bg-white dark:bg-gray-800 w-full border dark:border-gray-700 rounded shadow-lg mt-1"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                    >
                        {recommendationsName.length > 0 && (
                            <ul className="text-xs md:text-sm">
                                <p className="font-semibold text-sm px-2 mt-2">Produk</p>
                                <AnimatePresence>
                                    {recommendationsName.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={rowVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-white dark:hover:bg-black flex flex-row justify-between items-center"
                                            onClick={() => {
                                                setRecommendationsName([]);
                                                setRecommendationsUmkm([]);
                                                setFilter((prev) => ({ ...prev, keyword: item.nama }))
                                            }}
                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: item.nama.replace(
                                                        new RegExp(`(${filter.keyword})`, "gi"),
                                                        (match) => `<span class="font-semibold text-secondary">${match}</span>`
                                                    ),
                                                }}
                                            />
                                            <span className="ml-2">
                                                <IconTrendingUp className="w-3 text-grey dark:text-gray-300" />
                                            </span>
                                        </motion.li>
                                    ))}
                                </AnimatePresence>
                            </ul>
                        )}
                        {recommendationsUmkm.length > 0 && (
                            <ul className="text-xs md:text-sm">
                                <p className="font-semibold text-sm px-2 mt-2">Nama UMKM</p>
                                <AnimatePresence>
                                    {recommendationsUmkm.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            variants={rowVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                            className="px-4 py-2 hover:bg-gray-200 cursor-pointer dark:text-white dark:hover:bg-black flex justify-between items-center flex-row"
                                            onClick={() => {
                                                setRecommendationsName([]);
                                                setRecommendationsUmkm([]);
                                                setFilter((prev) => ({ ...prev, keyword: item.umkm }))
                                            }}

                                        >
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: item.umkm.replace(
                                                        new RegExp(`(${filter.keyword})`, "gi"),
                                                        (match) => `<span class="font-semibold text-secondary">${match}</span>`
                                                    ),
                                                }}
                                            />
                                            <span className="ml-2">
                                                <IconTrendingUp className="w-3 text-grey dark:text-gray-300" />
                                            </span>
                                        </motion.li>
                                    ))}
                                </AnimatePresence>
                            </ul>
                        )}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SearchProduct;
