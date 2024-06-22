import { IconArrowDown } from "@tabler/icons-react";
import { getBadanUsahaColor, getSkalaUsahaColor } from "../../utils/utils";
import { useEffect, useState } from "react";
import { fetchDataSafiiraByPagination } from "../../utils";
import MinimalisPagination from "./MinimalisPagination";
import MinimalisSearch from "./MinimalisSearch";
import { useThemeContext } from "../../layout/ThemeContext";
import { EXTENDED_WINDOW } from "../../DataBuilder";
import SortingSelection from "./SortingSelection";
import ProductCard from "./ProductCard";
import {
  filterAndSortProducts,
  handleToggleLike,
} from "../../helper/detail-product.helper";
import { FilterDetailUMKM } from "../../types/detail-umkm.types";
import { productType } from "../../types/common.types";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownItemVariants } from "../../helper/motion.helper";

const umkmData = [
  { label: "Nama UMKM", value: "Safiira Hampers" },
  { label: "Skala Usaha", value: "Usaha Mikro" },
  { label: "Bidang Usaha", value: "Perdagangan" },
  { label: "Dinas Pengampu", value: "Dinas Koperasi dan UKM" },
  { label: "Nama Pemilik", value: "Nining Ayuni, S.Ak." },
  { label: "Badan Hukum", value: "Perseorangan" },
  { label: "Produk", value: "Kerajinan Tangan" },
  { label: "No Telepon", value: "08123456789" },
  { label: "No Register", value: "123456" },
  { label: "No Ijin Usaha", value: "7891011" },
  { label: "Merk", value: "Safiira" },
  { label: "Website", value: "http://www.umkmsafiira.com" },
  { label: "Tenaga kerja", value: "L : 5 orang, P : 3 orang" },
  { label: "Aset", value: "Rp. 50.000.000,00" },
  { label: "Omzet", value: "Rp. 100.000.000,00" },
  { label: "No NPWP", value: "01.234.567.8-901.000" },
  { label: "Bahan Baku", value: "Kayu, Bambu" },
  { label: "Sumber Bahan", value: "Lokal" },
  { label: "Negara Ekspor", value: "Jepang, Amerika" },
  { label: "Produksi", value: "1000 unit / bulan" },
  { label: "Luas Lahan", value: "500 m2" },
  { label: "Kepemilikan Tanah", value: "Milik Pribadi" },
  { label: "Kepemilikan KMS", value: "Ya" },
  {
    value: "RT 10, RW 00, Gentan, Sidorejo, Lendah, Kulon Progo",
    label: "Alamat",
  },
];

const DetailUmkmContent = () => {
  const [product, setProduct] = useState<productType[]>(produkSafiira);
  const [paginatedData, setPaginatedData] = useState<productType[]>([]);
  const { windowWidth } = useThemeContext();
  const limit =
    windowWidth < EXTENDED_WINDOW.md
      ? 10
      : windowWidth < EXTENDED_WINDOW.lg
      ? 9
      : 8;
  const [totalPage, setTotalpage] = useState(1);
  const [page, setPage] = useState(1);

  const [filter, setFilter] = useState<FilterDetailUMKM>({
    keyword: "",
    sortedColumn: "nama",
    sortOrder: "asc",
  });

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

  const ButtonLihatProductOnClick = () => {
    const element = document.getElementById("list-product");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLike = (id: number) => {
    handleToggleLike(id, setProduct);
  };

  useEffect(() => {
    setProduct(filterAndSortProducts(produkSafiira, filter));
  }, [filter]);

  return (
    <div className="px-4 lg:px-8 xl:px-3xl flex flex-col xl:flex-row items-stretch w-full gap-8 dark:text-white">
      <div className="w-full xl:w-1/2 flex flex-col items-center">
        <div className="title w-full pb-2 my-4 flex justify-between  dark:border-gray-500">
          <p className=" text-base lg:text-lg font-semibold">
            Informasi Dasar UMKM
          </p>{" "}
        </div>
        <div className="main-content flex flex-col  md:flex-row gap-4 bg-white border border-gray-300 dark:border-gray-600 dark:bg-black p-4 xl:p-8 rounded items-center justify-between w-full">
          <div className="logo">
            <img
              src="/logo-umkm/logo-umkm-1.png"
              alt="Logo UMKM"
              className="w-44"
            />
          </div>
          <div className="main-information flex flex-col md:flex-row md:gap-4 items-stretch w-full">
            <table className="w-full text-left rtl:text-right text-black dark:text-white text-sm lg:text-base">
              <tbody>
                {umkmData.slice(0, 4).map((item, index) => (
                  <tr key={index}>
                    <td
                      scope="row"
                      className="w-40 px-4 py-2 text-grey dark:text-gray-300"
                    >
                      {item.label}
                    </td>
                    {item.label != "Skala Usaha" ? (
                      <td className="dark:text-white">{item.value}</td>
                    ) : (
                      <td className="whitespace-nowrap font-normal">
                        <span
                          className={`${getSkalaUsahaColor(item?.label).bg} ${
                            getSkalaUsahaColor(item?.label).text
                          } text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
                        >
                          {item.value}
                        </span>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="w-full text-left rtl:text-right text-black dark:text-white text-sm lg:text-base">
              <tbody>
                {umkmData.slice(4, 8).map((item, index) => (
                  <tr key={index}>
                    <td
                      scope="row"
                      className="w-40 px-4 py-2 text-grey dark:text-gray-300"
                    >
                      {item.label}
                    </td>
                    {item.label != "Badan Hukum" ? (
                      <td className={`dark:text-white`}>{item.value}</td>
                    ) : (
                      <td className="whitespace-nowrap font-normal  dark:border-slate-700">
                        <span
                          className={`${getBadanUsahaColor(item?.label).bg} ${
                            getBadanUsahaColor(item?.label).text
                          } text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
                        >
                          {item.value}
                        </span>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex xl:hidden justify-center w-full pt-4">
          <div
            className="bg-primary p-2 text-xs md:text-sm rounded flex flex-row gap-2 items-center text-white"
            onClick={() => ButtonLihatProductOnClick()}
          >
            <p>Lihat Produk</p>
            <IconArrowDown size={16} />
          </div>
        </div>
        <div className="title w-full py-2 my-4 flex justify-between  dark:border-gray-500">
          <p className="text-base lg:text-lg  font-semibold">
            Informasi Lanjutan UMKM
          </p>{" "}
        </div>
        {windowWidth < EXTENDED_WINDOW.md ? (
          <div className="flex flex-col md:flex-row md:gap-4 w-full bg-white border border-gray-300 dark:border-gray-600 dark:bg-black p-4 xl:p-8 rounded">
            <table className="w-full text-left rtl:text-right text-black dark:text-white text-sm lg:text-base">
              <tbody>
                {umkmData.slice(8).map((item, index) => (
                  <tr key={index}>
                    <td
                      scope="row"
                      className="px-4 py-2 text-grey whitespace-normal dark:text-gray-300"
                    >
                      {item.label}
                    </td>{" "}
                    <td className="dark:text-white">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:gap-4 w-full bg-white border border-gray-300 dark:border-gray-600 dark:bg-black p-4 xl:p-8 rounded">
            <table className="w-full text-left rtl:text-right text-black dark:text-white text-sm lg:text-base">
              <tbody>
                {umkmData.slice(8, 17).map((item, index) => (
                  <tr key={index}>
                    <td
                      scope="row"
                      className="px-4 py-2 text-grey whitespace-normal dark:text-gray-300"
                    >
                      {item.label}
                    </td>{" "}
                    <td className="whitespace-nowrap dark:text-white">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="w-full text-left rtl:text-right text-black dark:text-white text-sm lg:text-base">
              <tbody>
                {umkmData.slice(17).map((item, index) => (
                  <tr key={index}>
                    <td
                      scope="row"
                      className="px-4 py-2 text-grey whitespace-normal dark:text-gray-300"
                    >
                      {item.label}
                    </td>
                    <td
                      className={`${
                        item.label == "Alamat"
                          ? "whitespace-normal"
                          : "whitespace-nowrap"
                      }`}
                    >
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div
        className="w-full xl:w-1/2 flex flex-col items-center justify-between"
        id="list-product"
      >
        <div className="box w-full flex flex-col items-center xl:-translate-y-1">
          <div className="title w-full my-4 flex flex-col md:flex-row items-start gap-4 justify-between md:items-end dark:border-gray-500">
            <p className="text-base lg:text-lg  font-semibold">Galeri Produk</p>
            <div className="box flex w-full md:w-fit justify-between md:justify-normal gap-4">
              <SortingSelection filter={filter} setFilter={setFilter}  />
              <MinimalisSearch filter={filter} setFilter={setFilter} produk={produkSafiira} />
            </div>
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
            <div className="galeri-container w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4 lg:gap-6">
              {paginatedData.map((item, index) => (
                <ProductCard item={item} handleLike={handleLike} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="py-6 flex flex-col md:flex-row justify-between items-center w-full gap-4">
          <p className="text-xs md:text-sm ">
            Menampilkan{" "}
            <span className="font-semibold">{page * limit - limit + 1}</span> -
            <span className="font-semibold"> {page * limit} </span> dari {""}
            <span className="font-bold"> {produkSafiira.length} </span> produk
          </p>
          <MinimalisPagination
            page={page}
            setPage={setPage}
            totalPage={totalPage}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailUmkmContent;

const produkSafiira = [
  {
    id: 1,
    gambar: "product-1-safiira.png",
    nama: "Bucket Lebaran",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 150000,
    umkm: "Safiira Hampers",
    like: 120,
    isLiked: false,
    kecamatan:"Lendah",
    date: new Date("2024-01-01"),
  },
  {
    id: 2,
    gambar: "product-1-safiira.png",
    nama: "Bucket Natal",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 180000,
    umkm: "Safiira Hampers",
    like: 95,
    isLiked: false,
    kecamatan:"Lendah",
    date: new Date("2024-01-01"),
  },
  {
    id: 3,
    gambar: "product-1-safiira.png",
    nama: "Bucket Ulang Tahun",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 130000,
    umkm: "Safiira Hampers",
    like: 110,
    kecamatan:"Lendah",
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 4,
    gambar: "product-1-safiira.png",
    nama: "Bucket Pernikahan",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 200000,
    umkm: "Safiira Hampers",
    like: 150,
    kecamatan:"Lendah",
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 5,
    gambar: "product-1-safiira.png",
    nama: "Bucket Baby Shower",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 160000,
    umkm: "Safiira Hampers",
    kecamatan:"Lendah",
    like: 130,
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 6,
    gambar: "product-1-safiira.png",
    nama: "Bucket Graduation",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 170000,
    umkm: "Safiira Hampers",
    kecamatan:"Lendah",
    like: 140,
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 7,
    gambar: "product-1-safiira.png",
    nama: "Bucket New Year",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 190000,
    umkm: "Safiira Hampers",
    like: 115,
    kecamatan:"Lendah",
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 8,
    gambar: "product-1-safiira.png",
    nama: "Bucket Anniversary",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    kecamatan:"Lendah",
    harga: 210000,
    umkm: "Safiira Hampers",
    like: 125,
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 9,
    gambar: "product-1-safiira.png",
    nama: "Bucket Valentine",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 180000,
    umkm: "Safiira Hampers",
    kecamatan:"Lendah",
    like: 135,
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 10,
    gambar: "product-1-safiira.png",
    nama: "Bucket Eid al-Adha",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 160000,
    umkm: "Safiira Hampers",
    like: 145,
    kecamatan:"Lendah",
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 11,
    gambar: "product-1-safiira.png",
    nama: "Bucket Father's Day",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 150000,
    umkm: "Safiira Hampers",
    kecamatan:"Lendah",
    like: 155,
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 12,
    gambar: "product-1-safiira.png",
    nama: "Bucket Mother's Day",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    kecamatan:"Lendah",
    harga: 170000,
    umkm: "Safiira Hampers",
    like: 165,
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 13,
    gambar: "product-1-safiira.png",
    nama: "Bucket Teacher's Day",
    kategori: "Kerajinan",
    kecamatan:"Lendah",
    lokasi: "Lendah",
    harga: 140000,
    umkm: "Safiira Hampers",
    like: 175,
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 14,
    gambar: "product-1-safiira.png",
    nama: "Bucket Retirement",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 180000,
    kecamatan:"Lendah",
    umkm: "Safiira Hampers",
    like: 185,
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 15,
    gambar: "product-1-safiira.png",
    nama: "Bucket Graduation",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 200000,
    kecamatan:"Lendah",
    umkm: "Safiira Hampers",
    like: 195,
    isLiked: false,
    date: new Date("2024-01-01"),
  },
];
