import { IconBuildingStore, IconHeart, IconMapPin } from "@tabler/icons-react";
import { getBadanUsahaColor, getSkalaUsahaColor } from "../../utils/utils";
import { useEffect, useState } from "react";
import { fetchDataSafiiraByPagination } from "../../utils";
import MinimalisPagination from "./MinimalisPagination";
import MinimalisSearch from "./MinimalisSearch";
import { useThemeContext } from "../../layout/ThemeContext";
import { EXTENDED_WINDOW } from "../../DataBuilder";

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
  { label: "Jumlah tenaga kerja", value: "L : 5 orang, P : 3 orang" },
  { label: "Aset", value: "Rp. 50.000.000,00" },
  { label: "Omzet", value: "Rp. 100.000.000,00" },
  { label: "No NPWP", value: "01.234.567.8-901.000" },
  { label: "Bahan Baku", value: "Kayu, Bambu" },
  { label: "Sumber Bahan Baku", value: "Lokal" },
  { label: "Negara Tujuan Ekspor", value: "Jepang, Amerika" },
  { label: "Produksi per bulan", value: "1000 unit" },
  { label: "Luas Lahan", value: "500 m2" },
  { label: "Status Kepemilikan Tanah", value: "Milik Pribadi" },
  { label: "Kepemilikan KMS", value: "Ya" },
  {
    value: "RT 10, RW 00, Gentan, Sidorejo, Lendah, Kulon Progo",
    label: "Alamat",
  },
];

export type productType = {
  gambar: string;
  nama: string;
  kategori: string;
  lokasi: string;
  harga: number;
  umkm: string;
  like: number;
};

const DetailUmkmContent = () => {
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

  return (
    <div className="px-4 lg:px-8 xl:px-3xl flex flex-col xl:flex-row items-stretch w-full gap-8">
      <div className="w-full xl:w-1/2 flex flex-col items-center">
        <div className="title w-full pb-2 my-4 flex justify-between border-b-2 border-gray-300">
          <p className=" text-base lg:text-lg font-semibold">
            Informasi Dasar UMKM
          </p>{" "}
        </div>
        <div className="main-content flex flex-col  md:flex-row gap-4 bg-white p-4 xl:p-8 rounded items-center justify-between w-full">
          <div className="logo">
            <img
              src="/logo-umkm/logo-umkm-1.png"
              alt="Logo UMKM"
              className="w-44"
            />
          </div>
          <div className="main-information flex flex-col md:flex-row md:gap-4 items-stretch w-full">
            <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 text-sm lg:text-base">
              <tbody>
                {umkmData.slice(0, 4).map((item, index) => (
                  <tr key={index} className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-4 py-2 font-medium text-gray-900 dark:text-white"
                    >
                      {item.label}
                    </th>
                    {item.label != "Skala Usaha" ? (
                      <td className="">{item.value}</td>
                    ) : (
                      <td className="whitespace-nowrap font-normal  dark:border-slate-700">
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
            <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 text-sm lg:text-base">
              <tbody>
                {umkmData.slice(4, 8).map((item, index) => (
                  <tr key={index} className="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      className="px-4 py-2 font-medium text-gray-900  dark:text-white"
                    >
                      {item.label}
                    </th>
                    {item.label != "Badan Hukum" ? (
                      <td className={``}>{item.value}</td>
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
        <div className="title w-full py-2 my-4 flex justify-between border-b-2 border-gray-300">
          <p className="text-base lg:text-lg  font-semibold">
            Informasi Lanjutan UMKM
          </p>{" "}
        </div>
        <div className="flex flex-col md:flex-row md:gap-4 w-full bg-white p-4 xl:p-8 rounded">
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 text-sm lg:text-base">
            <tbody>
              {umkmData.slice(8, 17).map((item, index) => (
                <tr key={index} className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-4 py-2 font-medium text-gray-900 whitespace-normal dark:text-white"
                  >
                    {item.label}
                  </th>
                  {item.label != "Skala Usaha" ? (
                    <td className="whitespace-nowrap">{item.value}</td>
                  ) : (
                    <td className="whitespace-nowrap font-normal  dark:border-slate-700">
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
          <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 text-sm lg:text-base">
            <tbody>
              {umkmData.slice(17).map((item, index) => (
                <tr key={index} className="bg-white dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-4 py-2 font-medium text-gray-900 whitespace-normal dark:text-white"
                  >
                    {item.label}
                  </th>
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
      </div>
      <div className="w-full xl:w-1/2 flex flex-col items-center justify-between">
        <div className="box w-full flex flex-col items-center">
          <div className="title w-full my-4 pb-2 flex justify-between border-b-2 border-gray-300">
            <p className="text-base lg:text-lg  font-semibold">Galeri Produk</p>
          </div>
          <div className="">
            <div className="box pb-3 flex justify-between w-full">
              <MinimalisSearch />
            </div>
            <div className="galeri-container w-fit grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-4 lg:gap-6">
              {paginatedData.map((item) => (
                <div className="pt-4 px-2 md:px-3 pb-3 bg-white rounded-xs flex flex-col gap-1 w-40 md:w-48 xl:w-52">
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
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-6">
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
    gambar: "product-1-safiira.png",
    nama: "Bucket Lebaran",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 150000,
    umkm: "Safiira Hampers",
    like: 120,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Natal",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 180000,
    umkm: "Safiira Hampers",
    like: 95,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Ulang Tahun",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 130000,
    umkm: "Safiira Hampers",
    like: 110,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Pernikahan",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 200000,
    umkm: "Safiira Hampers",
    like: 150,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Baby Shower",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 160000,
    umkm: "Safiira Hampers",
    like: 130,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Graduation",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 170000,
    umkm: "Safiira Hampers",
    like: 140,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket New Year",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 190000,
    umkm: "Safiira Hampers",
    like: 115,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Anniversary",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 210000,
    umkm: "Safiira Hampers",
    like: 125,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Valentine",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 180000,
    umkm: "Safiira Hampers",
    like: 135,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Eid al-Adha",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 160000,
    umkm: "Safiira Hampers",
    like: 145,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Father's Day",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 150000,
    umkm: "Safiira Hampers",
    like: 155,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Mother's Day",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 170000,
    umkm: "Safiira Hampers",
    like: 165,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Teacher's Day",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 140000,
    umkm: "Safiira Hampers",
    like: 175,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Retirement",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 180000,
    umkm: "Safiira Hampers",
    like: 185,
  },
  {
    gambar: "product-1-safiira.png",
    nama: "Bucket Graduation",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 200000,
    umkm: "Safiira Hampers",
    like: 195,
  },
];
