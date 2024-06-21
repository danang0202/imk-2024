import { useEffect, useState } from "react";
import { fetchDataSafiiraByPagination } from "../../utils";
import MinimalisPagination from "./MinimalisPagination";
import MinimalisSearch from "./MinimalisSearch";
import { useThemeContext } from "../../layout/ThemeContext";
import { EXTENDED_WINDOW, ProdukProperties, kategoriProduk, kecamatanSlug, produkData } from "../../DataBuilder";
import SortingSelection from "./SortingSelection";
import { FilterDetailUMKM } from "../../types/detail-umkm.types";
import {
  AnimatePresence,
  motion
} from "framer-motion";
import { dropdownItemVariants } from "../../helper/motion.helper";
import { productType } from "../../types/common.types";
import {
  filterAndSortProducts,
  handleToggleLike
} from "../../helper/detail-product.helper";
import ProductCard from "./ProductCard";
import { filterDataProduk } from "../../utils/utils";
import { TypeData } from "../table/Selection";
import ProductCard2 from "./ProductCard2";

const DetailProdukContent = () => {
  const [product, setProduct] = useState<ProdukProperties[]>(produkData);
  const [showFilter, setShowFilter] = useState<boolean>(true);
  const [paginatedData, setPaginatedData] = useState<ProdukProperties[]>([]);
  const { windowWidth } = useThemeContext();
  const limit =
    windowWidth < EXTENDED_WINDOW.md
      ? 15
      : windowWidth < EXTENDED_WINDOW.lg
        ? 15
        : 12;
  const [totalPage, setTotalpage] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (product) {
      const paginatedData: ProdukProperties[] = fetchDataSafiiraByPagination(
        product,
        page,
        limit
      );
      setPaginatedData(paginatedData);
      setTotalpage(Math.ceil(product.length / limit));
    }
  }, [page, product]);


  const handleLike = (id: number) => {
    handleToggleLike(id, setProduct);
  };

  const [filter, setFilter] = useState<FilterDetailUMKM>({
    keyword: "",
    sortedColumn: "nama",
    sortOrder: "asc",
  });

  useEffect(() => {
    setProduct(filterAndSortProducts(produkData, filter));
  }, [filter]);

  useEffect(() => {
    if (windowWidth < EXTENDED_WINDOW.xl) {
      setShowFilter(false);
    }
  }, [windowWidth]);

  return (
    <div
      className="w-full flex flex-col items-center justify-between"
      id="list-product"
    >
      <div className="box w-full flex flex-col xl:-translate-y-1">
        <div className="title w-full my-4 flex flex-col md:flex-row justify-center xl:justify-start gap-4 dark:border-gray-500">
          <MinimalisSearch filter={filter} setFilter={setFilter} />
          <SortingSelection filter={filter} setFilter={setFilter} />
        </div>

        <AnimatePresence>
          {filter.keyword !== "" && (
            <motion.div
              variants={dropdownItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="search-result w-full text-left pb-2 md:pb-4"
            >
              <p className="text-xs md:text-sm text-grey dark:text-white">
                {`Mendapatkan ${product.length} hasil untuk kata kunci '${filter.keyword}'`}
              </p>
            </motion.div>
          )}
        </AnimatePresence>


        <div className="">
          {/* <div className="galeri-container w-fit grid grid-cols-2 md:grid-cols-4 md+200px:grid-cols-5 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row gap-4 lg:gap-6"> */}
          <div className="galeri-container w-full justify-center xl:w-fit flex flex-wrap grid-cols-2 md:grid-cols-5 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row gap-4 lg:gap-6 xl:justify-start">
            {paginatedData.map((item, index) => (
              <ProductCard2 item={item} handleLike={handleLike} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="py-6 flex flex-col md:flex-row justify-between items-center w-full gap-4">
        <p className="text-xs md:text-sm ">
          Menampilkan{" "}
          <span className="font-semibold">{page * limit - limit + 1}</span> -
          <span className="font-semibold"> {page * limit} </span> dari {""}
          <span className="font-bold"> {produkData.length} </span> produk
        </p>
        <MinimalisPagination
          page={page}
          setPage={setPage}
          totalPage={totalPage}
        />
      </div>
    </div>
  );
};

export default DetailProdukContent;
