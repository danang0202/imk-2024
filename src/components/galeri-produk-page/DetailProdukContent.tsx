import { useEffect, useState } from "react";
import { fetchDataSafiiraByPagination } from "../../utils";
import MinimalisPagination from "../detail-umkm-page/MinimalisPagination";
import { EXTENDED_WINDOW, kategoriProduk, kecamatanSlug } from "../../DataBuilder";
import {
  AnimatePresence, motion
} from "framer-motion";
import {
  handleToggleLike
} from "../../helper/detail-product.helper";

import ProductCard2 from "./ProductCard2";
import SortingProductButton from "./SortingProductButton";
import SearchProduct from "./SearchProduc";
import { FilterProduct } from "../../types/geleri-produk.types";
import { buttonLabels, galeriProdukData } from "../../static/galeriProductDataBuilder";
import { filterProducts } from "../../helper/galeri-produk.helper";
import { productType } from "../../types/common.types";
import DataEmpty from "../commons/DataEmpty";
import FacatedFilterProduct from "./FacatedFilterProduct";
import AllFilterBadgeGaleriProduk from "./AllFilterBadgeGaleriProduk";
import { dropdownVariants } from "../../helper/motion.helper";
import { IconFilterSearch } from "@tabler/icons-react";
import { useThemeContext } from "../../layout/ThemeContext";
import Breadcrumb from "../commons/BreadCrumb";

const DetailProdukContent = () => {
  const [product, setProduct] = useState<productType[]>(galeriProdukData);
  const [paginatedData, setPaginatedData] = useState<productType[]>([]);
  const limit = 15;
  const [totalPage, setTotalpage] = useState(1);
  const [page, setPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const { windowWidth } = useThemeContext();

  useEffect(() => {
    if (!(windowWidth < EXTENDED_WINDOW.xl)) {
      setShowFilter(true);
    } else {
      setShowFilter(false);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (product) {
      const paginatedData: productType[] = fetchDataSafiiraByPagination(
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

  const [filter, setFilter] = useState<FilterProduct>({
    keyword: "",
    sortedColumn: "like",
    sortOrder: "desc",
    kategori: kategoriProduk,
    kecamatan: kecamatanSlug,
    harga: [0, 1000000]
  });

  useEffect(() => {
    setProduct(filterProducts(galeriProdukData, filter));
  }, [filter]);

  const { product: p, common: c } = useThemeContext();



  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-11/12 lg:w-10/12 xl:w-11/12">
        <Breadcrumb />
      </div>
      <div
        className="flex flex-row gap-8 items-stretch justify-center w-11/12 lg:w-10/12 xl:w-11/12"
        id="list-product"
      >
        {/* facated filter */}
        <div className="absolute xl:relative bg-white dark:bg-black xl:rounded-sm xl:my-4 w-full xl:w-fit">
          <AnimatePresence>
            {(showFilter) && (
              <FacatedFilterProduct filter={filter} setFilter={setFilter} showFilter={showFilter} setShowFilter={setShowFilter} />
            )}
          </AnimatePresence>
        </div>
        <div className="w-full">
          <div className="title xl:my-4 flex flex-col md:flex-row justify-center xl:justify-between gap-4 dark:border-gray-500 text-black dark:text-white">
            {/*  Tempat searching dan sorting */}
            <p className="text-sm md:hidden">{p("sorting")}</p>
            <div className="left flex flex-row  xl:flex-row gap-2 md:gap-4 items-center z-30">
              <div className="hidden md:inline">
                <p className="text-sm">{p("sorting")}: </p>
              </div>
              {buttonLabels.map((item, index) => (
                <SortingProductButton key={index} item={item} filter={filter} setFilter={setFilter} />
              ))}
            </div>
            <div className="z-20">
              <SearchProduct filter={filter} setFilter={setFilter} products={product} />
            </div>
          </div>
          {(!showFilter || windowWidth < EXTENDED_WINDOW.xl) && (
            <div className="my-2 xl:hidden">
              <div className=" flex flex-row gap-2 text-grey hover:text-black justify-start cursor-pointer dark:text-white dark:hover:text-grey">
                <IconFilterSearch size={17} />
                <p
                  onClick={() => {
                    setShowFilter(true);
                  }}
                  className="text-xs md:text-sm"
                >
                  {c("openFilter")}
                </p>
              </div>
            </div>
          )}


          <AnimatePresence>
            <motion.div initial="hidden" animate="visible" exit={"exit"} variants={dropdownVariants} transition={{ duration: .3 }} >
              <AllFilterBadgeGaleriProduk filter={filter} setFilter={setFilter} />
            </motion.div>
          </AnimatePresence>

          {product.length !== galeriProdukData.length && (
            <div className="bg-silver dark:bg-slate-800 pb-2 text-grey dark:text-white text-xs">
              {c("get")} {product.length} data
            </div>
          )}

          {paginatedData.length > 0 ? (
            <>
              <div className="galeri-container w-full flex justify-center xl:w-fit flex-wrap gap-4 md:gap-6 xl:justify-center">
                {paginatedData.map((item, index) => (
                  <ProductCard2 item={item} handleLike={handleLike} key={index} />
                ))}
              </div>
              <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-black dark:text-white">
                <p className="text-xs md:text-sm ">
                  {c("show")}
                  <span className=""> {page * limit - limit + 1} </span> -
                  <span className=""> {page * limit} </span> {c("from")}
                  <span className=""> {product.length} </span> {c("productString").toLowerCase()}
                </p>
                <MinimalisPagination
                  page={page}
                  setPage={setPage}
                  totalPage={totalPage}
                  bg="bg-white"
                />
              </div>
            </>
          ) : (
            <div className="min-w-[72rem]">
              <DataEmpty />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailProdukContent;
