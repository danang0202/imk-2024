import {
  IconArrowDown,
  IconBuildingStore,
  IconHeart,
  IconMapPin,
} from "@tabler/icons-react";
import { getBadanUsahaColor, getSkalaUsahaColor } from "../../utils/utils";
import { useEffect, useState } from "react";
import { fetchDataSafiiraByPagination } from "../../utils";
import MinimalisPagination from "./MinimalisPagination";
import MinimalisSearch from "./MinimalisSearch";
import { useThemeContext } from "../../layout/ThemeContext";
import { EXTENDED_WINDOW } from "../../DataBuilder";
import SortingSelection from "./SortingSelection";
import { IconSortAscending } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export type productType = {
  gambar: string;
  nama: string;
  kategori: string;
  lokasi: string;
  harga: number;
  umkm: string;
  like: number;
  isLiked: boolean;
};

const DetailProdukContent = () => {
  const [paginatedData, setPaginatedData] = useState<productType[]>([]);
  const { windowWidth } = useThemeContext();
  const limit =
    windowWidth < EXTENDED_WINDOW.md
      ? 15
      : windowWidth < EXTENDED_WINDOW.lg
        ? 9
        : 12;
  const [totalPage, setTotalpage] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPaginatedData(produkSafiira);
  }, []);

  useEffect(() => {
    if (produkSafiira) {
      const paginatedData: productType[] = fetchDataSafiiraByPagination(
        produkSafiira,
        page,
        limit
      );
      setPaginatedData(paginatedData);
      setTotalpage(Math.ceil(produkSafiira.length / limit));
    }
  }, [page]);

  const ButtonLihatProductOnClick = () => {
    const element = document.getElementById("list-product");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="w-full flex flex-col"
      id="list-product"
    >
      <div className="box w-full flex flex-col">
        <div className="">
          <div className="flex flex-row justify-between items-center w-full">
            {/* rata kanan */}
            <div className="flex flex-row items-center gap-2 mb-6">
              {/* h2: "urutkan berdasarkan :" */}
              <div className="text-sm md:text-base lg:text-base font-semibold">
                Urutkan berdasarkan :
              </div>
              <form className="max-w-sm mx-auto">
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:border-secondary  block w-full px-2.5 py-2 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                >
                  {/* harga, like, ditambahkan */}
                  <option value="harga">Harga</option>
                  <option value="like">Like</option>
                  <option value="add">Ditambahkan</option>

                </select>
              </form>
              <IconSortAscending className="text-grey dark:text-white" />
            </div>
          </div>
          <div className="galeri-container w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-flow-row gap-4 lg:gap-6">
            {paginatedData.map((item) => (
              <div className="pt-4 px-2 md:px-3 pb-3 bg-white dark:bg-black rounded-sm flex flex-col gap-1 w-40 md:w-48 xl:w-56 hover:shadow-lg transition duration-300 cursor-pointer hover:scale-105">
                {/* link to */}
                <Link to="/galeri-produk/detail">
                  <div className="w-full flex justify-center">
                    <img
                      src={`/logo-umkm/${item.gambar}`}
                      className="w-28 md:w-32 lg:w-36"
                      alt={item.nama}
                    />
                  </div>
                  <p className="text-sm lg:text-base">{item.nama}</p>
                  <p className="text-sm">
                    Rp{" "}
                    <span className="text-sm md:text-base lg:text-lg font-semibold">
                      {item.harga}
                    </span>
                  </p>
                  <div className="text-white flex justify-start text-xs lg:text-sm">
                    <div className="box px-1 bg-secondary rounded-sm">
                      <p>{item.kategori.toLowerCase()}</p>
                    </div>
                  </div>
                  <div className="hidden xl:flex flex-row gap-1 items-center">
                    <IconMapPin size={15} />
                    <p className="text-xs lg:text-sm">{item.lokasi}</p>
                  </div>
                  <div className="hidden xl:flex  flex-row gap-1 items-center">
                    <IconBuildingStore size={14} />
                    <p className="text-xs lg:text-sm">{item.umkm}</p>
                  </div>
                  <div className="flex flex-row gap-1 items-center w-full justify-end">
                    <p className="text-xs text-right">{item.like}</p>
                    {/* <IconHeartFilled color="red" size={15}  /> */}
                    <IconHeart size={15} />
                  </div>
                </Link>
              </div>
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
  );
};

export default DetailProdukContent;

const produkSafiira = [
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Lebaran",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 150000,
    umkm: "Safiira Hampers",
    like: 120,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Natal",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 180000,
    umkm: "Safiira Hampers",
    like: 95,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Ulang Tahun",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 130000,
    umkm: "Safiira Hampers",
    like: 110,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Pernikahan",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 200000,
    umkm: "Safiira Hampers",
    like: 150,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Baby Shower",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 160000,
    umkm: "Safiira Hampers",
    like: 130,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Graduation",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 170000,
    umkm: "Safiira Hampers",
    like: 140,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket New Year",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 190000,
    umkm: "Safiira Hampers",
    like: 115,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Anniversary",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 210000,
    umkm: "Safiira Hampers",
    like: 125,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Valentine",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 180000,
    umkm: "Safiira Hampers",
    like: 135,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Eid al-Adha",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 160000,
    umkm: "Safiira Hampers",
    like: 145,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Father's Day",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 150000,
    umkm: "Safiira Hampers",
    like: 155,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Mother's Day",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 170000,
    umkm: "Safiira Hampers",
    like: 165,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Teacher's Day",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 140000,
    umkm: "Safiira Hampers",
    like: 175,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Retirement",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 180000,
    umkm: "Safiira Hampers",
    like: 185,
    isLiked: false,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Graduation",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 200000,
    umkm: "Safiira Hampers",
    like: 195,
    isLiked: false,
  },
];
