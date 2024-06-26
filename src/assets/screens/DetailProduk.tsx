import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/commons/BreadCrumb';
import { IconBuildingStore, IconHeart, IconHeartFilled, IconPhoneCall, IconTruck } from '@tabler/icons-react';
import { useThemeContext } from '../../layout/ThemeContext';
import { EXTENDED_WINDOW } from '../../DataBuilder';
import { AnimatePresence, motion } from 'framer-motion';
import { dropdownVariants } from '../../helper/motion.helper';
import { handleToggleLike } from '../../helper/detail-product.helper';
import { productType } from '../../types/common.types';
import ProductCard from '../../components/detail-umkm-page/ProductCard';
// import ProductCard from '../../components/detail-umkm-page/ProductCard';

const DetailProduk = () => {
  const itemData = {
    nama: 'Bucket Kado Ulang Tahun dan Wisuda',
    harga: '130.000',
    kategori: 'Kerajinan',
    lokasi: 'RT 10, RW 00, Gentan, Sidorejo, Lendah, Kulon Progo',
    umkm: 'Safiira Hampers',
    like: 3025,
    isLiked: false,
    gambar: 'product-1-safiira.png',
    thumbnails: ['product-1-safiira.png', 'product-2-safiira.png', 'product-3-safiira.png'],
  };

  const [item, setItem] = useState(itemData);
  const { common: c, lang } = useThemeContext();
  const [content, setContent] = useState<contentType>();

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const [selectedImage, setSelectedImage] = useState(item.gambar);
  const { windowWidth } = useThemeContext();

  const handleThumbnailClick = (thumbnail: string) => {
    setSelectedImage(thumbnail);
  };

  const handlePesan = () => {
    const nomorWhatsApp = '085000000000';
    const url = `https://wa.me/${nomorWhatsApp}`;
    window.open(url, '_blank');
  };

  const ButtonLihatDeskripsiOnClick = () => {
    const element = document.getElementById("desc");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLike = () => {
    if (item.isLiked) {
      setItem((prev) => ({ ...prev, like: item.like - 1, isLiked: false }))
    } else {
      setItem((prev) => ({ ...prev, like: item.like + 1, isLiked: true }))
    }
  }

  useEffect(() => {
    if (lang == "id") {
      setContent(desc[0])
    } else {
      setContent(desc[1])
    }
  }, [lang])

  const [product, setProduct] = useState<productType[]>(produkSafiira);


  const handleLikePlus = (id: number) => {
    handleToggleLike(id, setProduct);
  };

  return (
    <Layout pageTitle="Detail Produk">
      <div className="box w-full pt-5xl bg-silver dark:bg-slate-800 flex justify-center mb-8">
        <div className="w-11/12 xl:w-8/12 ">
          <Breadcrumb />
          <div className="px-4 w-full bg-white dark:bg-black text-black dark:text-white shadow-sm p-8 my-4 rounded">
            <div className="flex flex-col lg:flex-row gap-4 xl:gap-8 items-center">
              {/* Sisi kiri: Gambar Produk */}
              <div className="w-full lg:w-5/12 xl:1/2">
                <div className='flex items-center justify-center'>
                  <img
                    src={`/logo-umkm/${selectedImage}`}
                    className="w-auto h-[10rem] md:h-[13rem] xl:h-[16rem]"
                    alt={item.nama}
                  />
                </div>
                {/* Thumbnail buttons */}
                <div className="flex justify-center mt-8 xl:space-x-8">
                  {item.thumbnails.map((thumbnail, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(thumbnail)}
                      className={`rounded-sm ${selectedImage == thumbnail && 'border'} `}
                    >
                      <img
                        src={`/logo-umkm/${thumbnail}`}
                        className="w-14 h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 object-cover"
                        alt={`Thumbnail ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
                <div className="w-full md:px-8 mt-8 flex items-center gap-2">
                  <p className='text-sm'>Bagikan: </p>
                  {socialMedia.map((media, index) => (
                    <a href={media.href} target='_blank'>
                      <img key={index} src={media.src} alt={media.alt} className="cursor-pointer w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
              {/* Sisi kanan: Deskripsi Produk */}
              <div className="w-full lg:w-7/12 xl:w-1/2 text-black dark:text-white md:px-8 lg:px-0">
                <div className="text-left text-base font-medium">{item.nama}</div>
                <div className="text-left text-sm flex items-center gap-8 mb-2">
                  <div className="box px-1 bg-secondary rounded-sm w-fit text-white">
                    <p className='ttext-sm'>{c(item.kategori)}</p>
                  </div>
                  <p className='text-grey'>|</p>
                  <div className="w-full flex flex-row gap-1 items-center justify-start py-2 cursor-pointer hover:opacity-75 transition-all duration-300" onClick={() => handleLike()}>
                    {item.isLiked ? (
                      <IconHeartFilled color="red" size={20} />
                    ) : (
                      <IconHeart color="red" size={20} />
                    )}
                    <p className="text-left">Favorit ( {item.like} )</p>
                  </div>
                </div>
                <div className="bg-silver dark:bg-slate-800 rounded-sm p-4">
                  <div className="w-full text-left text-black dark:text-white text-lg md:text-2xl lg:text-2xl font-semibold">Rp{item.harga}</div>
                </div>
                <div className="flex items-center gap-1 mt-4 justify-end ">
                  <IconTruck size={windowWidth < EXTENDED_WINDOW.md ? 20 : 20} className='text-primary ' />
                  <p className='font-semibold text-xs md:text-sm'>{c("Pengiriman ke seluruh wilayah DI. Yogyakarta")}</p>
                </div>

                <div className="spesifikasi text-sm">
                  <p className='font-semibold pt-4 md:pt-2 pb-2'>{c("Spesifikasi Produk")}</p>
                  <table className='w-full border-separate border-spacing-1'>
                    <tr>
                      <td className='text-grey dark:text-gray-300'>{c("Kategori")}</td>
                      <td >{c("Kerajinan")}</td>
                    </tr>
                    <tr>
                      <td className='text-grey dark:text-gray-300'>{c("Dikirim Dari")}</td>
                      <td >Lendah, Kulon Progo</td>
                    </tr>
                    <tr>
                      <td className='text-grey dark:text-gray-300'>{c("Stok")}</td>
                      <td ><p>20</p></td>
                    </tr>
                    <tr>
                      <td className='text-grey dark:text-gray-300'>{c("Tipe Pemesanan")}</td>
                      <td>
                        <div className="w-full flex justify-start">
                          <div className="bg-blue-100 px-2 py-1 rounded-sm">
                            <p className='text-xs text-info font-semibold'>Pre Order</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>

                <div className="spesifikasi text-sm">
                  <p className='font-semibold pt-4 pb-2'>{c("Tipe Produk")}</p>
                  <div className="w-full flex flex-wrap gap-4">
                    {productTypes.map((type, index) => (
                      <div key={index} className={`border border-primary p-1.5 md:p-2 cursor-pointer rounded-sm  transition-colors duration-300 ${selectedImage == item.thumbnails[index] ? 'bg-primary text-white' : 'bg-white dark:bg-black hover:bg-gray-200'}`} onClick={() => { handleThumbnailClick(item.thumbnails[index]) }}>
                        <p className="text-xs font-semibold">{type}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-fll flex justify-between mt-4 items-end">
                  <p className='text-xs text-grey dark:text-gray-300 hover:text-black cursor-pointer' onClick={() => ButtonLihatDeskripsiOnClick()}>{c("Lihat Deskripsi")}</p>
                  <div className="bg-primary text-white p-2 rounded-sm flex gap-2 items-center cursor-pointer hover:bg-primary/75 transition-colors duration-300" onClick={() => handlePesan()}>
                    <p className='text-xs'>{c("Hubungi Penjual")}</p>
                    <IconPhoneCall className='text-white' size={17} />
                  </div>

                </div>

              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-black text-black dark:text-white shadow-sm my-4 w-full flex flex-col lg:flex-row justify-between gap-0 md:gap-4 px-4 xl:px-6 py-6">
            <div className="flex gap-4 xl:min-w-[18rem]">
              <div className="flex items-center">
                <img src={`/logo-umkm/logo-umkm-1.png`} alt="Logo UMKM" className='h-12 md:h-14 md:w-16' />
              </div>
              <div className="flex flex-col items-start justify-center gap-2 border-r border-gray-200 pr-4">
                <div className="">
                  <p className='font-semibold text-sm'>Safiira Hampers</p >
                  <p className='text-xs text-gray-500 dark:text-gray-400'>{c("Dinas Koperasi dan UKM")}</p>
                </div>
              </div>
            </div>
            {windowWidth < EXTENDED_WINDOW.md ? (
              <div className="w-full">
                <table className='border-separate border-spacing-1 min-w-[18rem] text-sm md:text-base'>
                  <tr>
                    <td className='text-grey dark:text-gray-300'>{c("Produk")}</td>
                    <td className=' text-orange-600'>35</td>
                  </tr>
                  <tr>
                    <td className='text-grey dark:text-gray-300'>Favorit</td>
                    <td className=' text-orange-600'>3RB  {c('Suka').toLowerCase()}</td>
                  </tr>
                  <tr>
                    <td className='text-grey dark:text-gray-300'>{c("Bergabung")}</td>
                    <td className='text-orange-600'>2 {c("Years Ago")}</td>
                  </tr>
                  <tr>
                    <td className='text-grey dark:text-gray-300'>Favorit</td>
                    <td className='text-orange-600'>35 kali</td>
                  </tr>
                </table>
                <div className="flex items-end justify-end xl:justify-start">
                  <a href="/data-umkm/detail">
                    <div className="border rounded-sm p-2 flex gap-2 items-center cursor-pointer transition-colors duration-300 hover:bg-inactive">
                      <IconBuildingStore className='text-black dark:text-white' size={windowWidth < EXTENDED_WINDOW.md ? 15 : 17} />
                      <p className='text-xs md:text-sm'>Kunjungi UMKM</p>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              <div className='flex justify-between w-full'>
                <div className="">
                  <table className='border-separate border-spacing-1 text-sm'>
                    <tr>
                      <td className='text-grey dark:text-gray-300'>{c("Produk")}</td>
                      <td className=' text-orange-600 dark:text-gray-300'>35</td>
                    </tr>
                    <tr>
                      <td className='text-grey dark:text-gray-300'>Favorit</td>
                      <td className=' text-orange-600 dark:text-gray-300'>3RB {c('Suka').toLowerCase()}</td>
                    </tr>
                  </table>
                </div>
                <div className="">
                  <table className='border-separate border-spacing-1 text-sm'>
                    <tr>
                      <td className='text-grey dark:text-gray-300'>{c("Bergabung")}</td>
                      <td className='text-orange-600'>2 {c("Years Ago")}</td>
                    </tr>
                    <tr>
                      <td className='text-grey dark:text-gray-300'>Favorit</td>
                      <td className='text-orange-600'>35 kali</td>
                    </tr>
                  </table>
                </div>
                <div className="flex items-end justify-end xl:justify-start">
                  <a href="/data-umkm/detail">
                    <div className="border rounded-sm p-2 flex gap-2 items-center cursor-pointer transition-colors duration-300 hover:bg-inactive">
                      <IconBuildingStore className='text-black dark:text-white' size={windowWidth < EXTENDED_WINDOW.md ? 15 : 17} />
                      <p className='text-xs'>{c("Kunjungi UMKM")}</p>
                    </div>
                  </a>
                </div>
              </div>
            )}

          </div>

          <div className="desc-section w-full bg-white dark:bg-black px-4 lg:px-8 py-6 shadow-sm text-black dark:text-white" id='desc'>
            <div className="bg-silver dark:bg-slate-800 p-4 mb-4">
              <p className='font-semibold text-base'>{c("Deskripsi Produk")}</p>
            </div>
            <div className="ps-4 text-sm">
              <p>{content?.note}</p>
              <p>{content?.schedule}</p>
              <br />
              <p>{content?.bouquet}</p>
              <p>{content?.freshFlowers}</p>
              <br />
              <p>{content?.request}</p>
              {content?.flowers.slice(0, 2).map((flower, index) => (
                <p key={index}>{index + 1}. {flower}</p>
              ))}
              <AnimatePresence>
                {showMore && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    {content?.flowers.slice(2).map((flower, index) => (
                      <p key={index}>{index + 3}. {flower}</p>
                    ))}
                    <br />
                    <p>{content?.paper}</p>
                    {content?.papers.map((paper, index) => (
                      <p key={index}>{index + 1}. {paper}</p>
                    ))}
                    <br />
                    <p>{content?.thankYou}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                className="text-primary hover:underline text-sm"
                onClick={toggleShowMore}
              >
                {showMore ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'}
              </button>
            </div>
          </div>
          <div className="produk-lainnnya">
            <p className='font-semibold my-4'>Produk lain dari UMKM ini</p>
            <div className="flex flex-row flex-wrap justify-center xl:justify-between gap-4 items-center">
              {product?.map((item, index) => (
                <ProductCard item={item} handleLike={handleLikePlus} key={index} noBorder={true} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailProduk;

const socialMedia = [
  { src: "/logo/whatsapp.png", alt: "wa", href: "https://wa.me/6285868130401" },
  { src: "/logo/messenger.png", alt: "mes", href: "https://messenger.com" },
  { src: "/logo/twitter.png", alt: "x", href: "https://x.com" },
  { src: "/logo/facebook.png", alt: "fb", href: "https://facebook.com" },
];

const productTypes = ["Campuran", "Mawar Merah", "Mawar Putih"];

type contentType = {
  note: string;
  schedule: string;
  bouquet: string;
  freshFlowers: string;
  request: string;
  flowers: string[];
  paper: string;
  papers: string[];
  thankYou: string;
}

const desc = [
  {
    note: "Untuk Request warna bunga, kreb dan ucapan serta tanggal pengirimannya di tulis di catatan penjual ya kak, terimakasih",
    schedule: "Jadwal Pengiriman dari jam 07:00 - 15:00 WIB",
    bouquet: "Buket bunga mawar fresh isi 5 tangkai + Kartu ucapan",
    freshFlowers: "Bunga yang Kami Sediakan Bunga Segar",
    request: "Untuk request Bunga Tersedia Warna :",
    flowers: [
      "Bunga mawar Merah",
      "Bunga mawar Putih",
      "Bunga mawar Pink Tua",
      "Bunga mawar Pink Muda",
      "Bunga mawar Peach",
      "Bunga mawar Biru Muda"
    ],
    paper: "Warna Kertas Krab Bisa di ganti dgn warna yg tersedia :",
    papers: [
      "Warna Putih",
      "Warna Pink",
      "Warna Merah",
      "Warna Peach",
      "Warna Ungu Tua",
      "Warna Biru Muda",
      "Warna Biru Tua",
      "Warna Gold",
      "Warna Kuning",
      "Warna Orens",
      "Warna Hitam"
    ],
    thankYou: "Terimakasih telah berbelanja di toko bunga kami."
  },
  {
    note: "For flower color requests, crepe paper, and greeting cards, as well as the delivery date, please write in the seller's notes, thank you",
    schedule: "Delivery Schedule from 07:00 - 15:00 WIB",
    bouquet: "Fresh rose bouquet contains 5 stems + Greeting card",
    freshFlowers: "We Provide Fresh Flowers",
    request: "For flower requests, available colors are:",
    flowers: [
      "Red Rose",
      "White Rose",
      "Dark Pink Rose",
      "Light Pink Rose",
      "Peach Rose",
      "Light Blue Rose"
    ],
    paper: "Crepe paper colors can be replaced with available colors:",
    papers: [
      "White",
      "Pink",
      "Red",
      "Peach",
      "Dark Purple",
      "Light Blue",
      "Dark Blue",
      "Gold",
      "Yellow",
      "Orange",
      "Black"
    ],
    thankYou: "Thank you for shopping at our flower shop."
  }
]


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
    kecamatan: "Lendah",
    date: new Date("2024-01-01"),
  },
  {
    id: 2,
    gambar: "product-4-safiira.png",
    nama: "Bucket Natal",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 180000,
    umkm: "Safiira Hampers",
    like: 95,
    isLiked: false,
    kecamatan: "Lendah",
    date: new Date("2024-01-01"),
  },
  {
    id: 3,
    gambar: "product-5-safiira.png",
    nama: "Bucket Ulang Tahun",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 130000,
    umkm: "Safiira Hampers",
    like: 110,
    kecamatan: "Lendah",
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 4,
    gambar: "product-6-safiira.png",
    nama: "Bucket Pernikahan",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 200000,
    umkm: "Safiira Hampers",
    like: 150,
    kecamatan: "Lendah",
    isLiked: false,
    date: new Date("2024-01-01"),
  },
  {
    id: 5,
    gambar: "product-3-safiira.png",
    nama: "Bucket Baby Shower",
    kategori: "Kerajinan",
    lokasi: "Lendah",
    harga: 160000,
    umkm: "Safiira Hampers",
    kecamatan: "Lendah",
    like: 130,
    isLiked: false,
    date: new Date("2024-01-01"),
  },
]