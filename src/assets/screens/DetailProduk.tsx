import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/commons/BreadCrumb';
import { IconHeartFilled, IconMapPin } from '@tabler/icons-react';

const DetailProduk = () => {
  const item = {
    nama: 'Bucket Ulang Tahun',
    harga: '130.000',
    kategori: 'kerajinan',
    lokasi: 'RT 10, RW 00, Gentan, Sidorejo, Lendah, Kulon Progo',
    umkm: 'Safiira Hampers',
    like: 10,
    gambar: 'product-1-safiira.png',
    thumbnails: ['product-1-safiira.png', 'product-2-safiira.png', 'product-3-safiira.png'],
  };

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const [selectedImage, setSelectedImage] = useState(item.gambar);

  const handleThumbnailClick = (thumbnail) => {
    setSelectedImage(thumbnail);
  };

  const handlePesan = () => {
    const nomorWhatsApp = '085000000000';
    const url = `https://wa.me/${nomorWhatsApp}`;
    window.open(url, '_blank');
  };

  return (
    <Layout pageTitle="Detail Produk">
      <div className="box w-full xl:pt-5xl bg-silver dark:bg-slate-800">

        <div className="px-4 lg:px-8 xl:px-3xl">
          <Breadcrumb />
        </div>

        <div className="px-4 lg:mx-auto lg:max-w-7xl lg:w-2/3">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sisi kiri: Gambar Produk */}
            <div className="w-full lg:w-1/2 sticky top-16 max-h-[500px]">
              <div className="overflow-hidden" style={{ height: '400px', maxWidth: '60%', margin: 'auto' }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <img
                    src={`/logo-umkm/${selectedImage}`}
                    className="w-full h-auto mx-auto"
                    alt={item.nama}
                  />
                </div>
              </div>

              {/* Thumbnail buttons */}
              <div className="flex justify-center mt-4 space-x-4">
                {item.thumbnails.map((thumbnail, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(thumbnail)}
                    className="border border-gray-200 rounded-md overflow-hidden focus:outline-none"
                  >
                    <img
                      src={`/logo-umkm/${thumbnail}`}
                      className="w-16 h-16 object-cover"
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
            </div>
            {/* Sisi kanan: Deskripsi Produk */}
            <div className="w-full lg:w-1/2">
              <div className="w-full text-left rtl:text-right text-gray-600 dark:text-gray-400 text-sm lg:text-4xl font-medium">{item.nama}</div>
              <div className="w-fit text-left rtl:text-right text-gray-400 dark:text-gray-400 text-sm lg:text-lg flex items-center gap-2">Kategori:
                <div className="box px-1 bg-secondary rounded-sm w-fit text-white">
                  <p>{item.kategori.toLowerCase()}</p>
                </div>
              </div>
              <div className="w-full flex flex-row gap-1 items-center justify-start py-2">
                <p className="text-left">{item.like}</p>
                <IconHeartFilled color="red" size={15} />
              </div>
              <hr className="border-t-2 border-gray-200 dark:border-gray-600" />
              <div className="w-full text-left rtl:text-right text-gray-800 dark:text-gray-400 text-sm lg:text-5xl font-bold">Rp{item.harga}</div>
              <div className="w-full text-left rtl:text-right text-gray-600 dark:text-gray-400 text-sm lg:text-lg py-2">
                <p>Deskripsi:</p>
                <p>Untuk Request warna bunga, kreb dan ucapan serta tanggal pengirimannya di tulis di catatan penjual ya kak, terimakasih</p>
                <p>Jadwal Pengiriman dari jam 07:00 - 15:00 Wib</p>
                <br />
                <p>Buket bunga mawar fresh isi 5 tangkai + Kartu ucapan</p>
                <p>Bunga yang Kami Sediakan Bunga Segar</p>
                <br />
                <p>Untuk request Bunga Tersedia Warna :</p>
                <p>1.Bunga mawar Merah</p>
                <p>2.Bunga mawar Putih</p>
                {showMore && (
                  <>
                    <p>3.Bunga mawar Pink Tua</p>
                    <p>4.Bunga mawar Pink Muda</p>
                    <p>5. Bunga mawar Peac</p>
                    <p>6. Bunga mawar Biru Muda</p>
                    <br />
                    <p>Warna Kertas Krab Bisa di ganti dgn warna yg tersedia :</p>
                    <p>1. Warna Putih</p>
                    <p>2. Warna Pink</p>
                    <p>3. Warna Merah</p>
                    <p>4. Warna Peach</p>
                    <p>5. Warna Ungu Tua</p>
                    <p>6. Warna Biru Muda</p>
                    <p>7. Warna Biru Tua</p>
                    <p>8. Warna Gold</p>
                    <p>9. Warna Kuning</p>
                    <p>10. Warna Orens</p>
                    <p>11. Warna Hitam</p>
                    <br />
                    <p>Terimakasih telah berbelanja di toko bunga kami.</p>
                  </>
                )}
                <button
                  className="text-blue-500 hover:underline"
                  onClick={toggleShowMore}
                >
                  {showMore ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'}
                </button>
              </div>

              {/* image dan info nama di kiri, tombol di kanan pojok gap between*/}
              <div className="w-full bg-gray-50 dark:bg-black rounded-lg border border-gray-200 dark:border-gray-600 p-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src='/logo-umkm/logo-umkm-1.png'
                    className="w-8 h-8"
                    alt={item.nama}
                  />
                  <div className="flex flex-col">
                    {/* nama umkm dibold */}
                    <div className="w-full text-left rtl:text-right text-gray-600 dark:text-gray-400 text-sm lg:text-lg font-bold">{item.umkm}</div>
                    {/* alamat umkm */}
                    <div className="w-full text-left rtl:text-right text-gray-400 dark:text-gray-400 text-sm lg:text-lg flex items-center gap-2">
                      <IconMapPin size={15} />
                      <p>Lendah</p>
                    </div>
                  </div>
                </div>

                <a href="/data-umkm/detail"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded-lg focus:outline-none">
                  Lihat Toko
                </a>


              </div>


            </div>
          </div>

          {/* Sticky Bottom Section width fit content terus berada di tengah*/}
          <div className="sticky bottom-0 w-full flex justify-center my-4">
            <div className="bg-white p-4 flex items-center rounded-lg w-fit gap-16">
              <div className="flex items-center">
                <img
                  src={`/logo-umkm/${item.gambar}`}
                  className="w-16 h-16"
                  alt={item.nama}
                />
                <p className="ml-4">{item.nama}</p>
              </div>
              <div className="flex flex-col">
                {/* total harga: */}
                <p className="text-sm">Total Harga:</p>
                <p className="text-xl font-bold">Rp {item.harga}</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none"
                  onClick={handlePesan}
                >
                  Pesan sekarang
                </button>
              </div>
            </div>
          </div>


        </div>
      </div>


    </Layout>
  );
};

export default DetailProduk;
