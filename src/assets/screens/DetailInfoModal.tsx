import Layout from "../../components/Layout";
import Breadcrumb from "../../components/commons/BreadCrumb";
import { IconMail, IconPhone, IconBuildingBank, IconAt, IconPhoneCall } from "@tabler/icons-react";
import { formatRupiah, getInstitusionColorInfoModal, getNominalModalColor } from "../../helper/info-modal.helper";
import { useThemeContext } from "../../layout/ThemeContext";
import { EXTENDED_WINDOW } from "../../DataBuilder";

const infoData = [
  { label: 'Nama Lembaga', value: 'Bank Rakyat Indonesia', icon: <IconBuildingBank className="w-5 h-5 text-grey" /> },
  { label: 'Email', value: 'bri@gmail.com', icon: <IconAt className="w-5 h-5 text-grey" /> },
  { label: 'No Telepon', value: '+621234567890', icon: <IconPhoneCall className="w-5 h-5 text-grey" /> },
  { label: 'Jenis Lembaga', value: 'Pemerintah', icon: <IconAt className="w-5 h-5 text-grey" /> },
  { label: 'Nominal Modal', value: '1500000000', icon: <IconBuildingBank className="w-5 h-5 text-grey" /> },
];

const requirements = [
  "Fotokopi KTP (Kartu Tanda Penduduk) yang masih berlaku",
  "Fotokopi NPWP (Nomor Pokok Wajib Pajak)",
  "Surat Keterangan Usaha dari Kelurahan atau Kecamatan",
  "Proposal Usaha yang mencakup rencana bisnis, proyeksi keuangan, dan analisis pasar",
  "Laporan Keuangan Usaha (minimal 2 tahun terakhir) yang telah diaudit",
  "Rekening Koran Usaha (3 bulan terakhir)",
  "Fotokopi Surat Izin Usaha Perdagangan (SIUP) dan Tanda Daftar Perusahaan (TDP)",
  "Fotokopi Akta Pendirian dan perubahan (jika ada) yang telah disahkan oleh Kementerian Hukum dan HAM",
  "Fotokopi Sertifikat atau Surat Keterangan Kepemilikan Tempat Usaha",
  "Surat Rekomendasi dari asosiasi atau komunitas bisnis terkait (jika ada)",
  "Surat Pernyataan tidak sedang menerima bantuan modal dari lembaga lain",
  "Fotokopi sertifikat pelatihan atau workshop yang relevan dengan bidang usaha",
  "Pas Foto Berwarna terbaru ukuran 4x6 cm (3 lembar)",
  "Daftar Riwayat Hidup (Curriculum Vitae) pemilik usaha",
  "Fotokopi perjanjian kerja sama dengan mitra bisnis atau pemasok utama (jika ada)",
  "Fotokopi polis asuransi usaha (jika ada)",
  "Surat Keterangan Catatan Kepolisian (SKCK) yang masih berlaku",
  "Dokumen lain yang mendukung kelayakan usaha untuk menerima modal (jika ada)",
];

const DetailInfoModal = () => {
  const { windowWidth } = useThemeContext();
  return (
    <Layout pageTitle="Detail Info Modal">
      <div className="flex flex-col justify-center items-center w-full pt-5xl xl:pt-5.5xl bg-silver dark:bg-slate-800 text-sm md:text-base">
        <div className="w-11/12 xl:w-8/12 flex justify-start mb-2 xl:mb-4">
          <Breadcrumb />
        </div>
        <div className="img-container w-11/12 xl:w-8/12 rounded-lg">
          <img src="/logo-umkm/bri-bg-3.jpg" alt="BRI Background" className="w-full object-cover h-[20rem] xl:h-[25rem] rounded-xl shadow" />
        </div>
        <div className="relative w-10/12 xl:w-7/12 flex items-center flex-col bg-white shadow rounded-lg transform -translate-y-14 p-4 lg:p-8 pb-12 dark:bg-black dark:text-white">
          <div className="absolute top-4 lg:top-8 right-4 lg:right-8 flex items-center space-x-2 xl:space-x-4">
            <div className="box p-1 bg-accent5 rounded-lg">
              <a href="mailto:wisnudanang86@gmail.com">
                <IconMail className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-white" />
              </a>
            </div>
            <div className="box p-1 bg-accent4 rounded-lg">
              <a href="https://wa.me/62858868130401" target="_blank">
                <IconPhone className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6 text-white" />
              </a>
            </div>
          </div>
          <h2 className="font-bold text-base w-[10rem] md:w-fit text-center md:text-lg xl:text-xl">Informasi Lengkap Pemberi modal</h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full space-x-4 xl:space-x-8 mt-2 lg:mt-8">
            <img
              src="https://jasalogocepat.com/wp-content/uploads/2023/09/logo-bri-png-transparan-jasalogocepat-01.png"
              alt="Logo BRI"
              className="h-auto w-[9rem] xl:mr-8 bg-white p-4 rounded"
            />
            {windowWidth < EXTENDED_WINDOW.lg && (
              <table className="">
                <tbody>
                  {infoData.map((item, index) => (
                    <tr key={index}>
                      <td className="pr-8 py-2 font-semibold">{item.label}</td>
                      {item.label === "Jenis Lembaga" ? (
                        <td className="text-gray-800 dark:text-gray-200">
                          <span
                            className={`${getInstitusionColorInfoModal(item.value).bg} ${getInstitusionColorInfoModal(item.value).text} text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
                          >
                            {item.value}
                          </span>
                        </td>
                      ) : (
                        item.label === "Nominal Modal" ? (
                          <td className="text-gray-800 dark:text-gray-200">  <span
                            className={`${getNominalModalColor(parseInt(item?.value)).bg
                              } ${getNominalModalColor(parseInt(item?.value)).text
                              } text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
                          >
                            <span className="text-xs md:text-sm font-semibold">
                              Rp{" "}
                            </span>
                            {formatRupiah(parseInt(item.value))}
                          </span></td>
                        ) : (

                          <td className="text-gray-800 dark:text-gray-200 max-w-[15rem]">{item.value}</td>
                        )
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {windowWidth >= EXTENDED_WINDOW.lg && (
              <table className="">
                <tbody>
                  {infoData.slice(0, 3).map((item, index) => (
                    <tr key={index}>
                      <td className="pr-8 py-2 font-semibold">{item.label}</td>
                      <td className="text-gray-800 dark:text-gray-200">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {windowWidth >= EXTENDED_WINDOW.lg && (
              <table className="">
                <tbody>
                  {infoData.slice(3).map((item, index) => (
                    <tr key={index}>
                      <td className="pr-8 py-2 font-semibold">{item.label}</td>
                      {item.label === "Jenis Lembaga" ? (
                        <td className="text-gray-800 dark:text-gray-200">
                          <span
                            className={`${getInstitusionColorInfoModal(item.value).bg} ${getInstitusionColorInfoModal(item.value).text} text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
                          >
                            {item.value}
                          </span>
                        </td>
                      ) : (
                        <td className="text-gray-800 dark:text-gray-200">  <span
                          className={`${getNominalModalColor(parseInt(item?.value)).bg
                            } ${getNominalModalColor(parseInt(item?.value)).text
                            } text-xs lg:text-sm font-medium me-2 px-2.5 py-0.5 rounded`}
                        >
                          <span className="text-xs md:text-sm font-semibold">
                            Rp{" "}
                          </span>
                          {formatRupiah(parseInt(item.value))}
                        </span></td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="group my-8 w-full px-0 md:px-8">
            <h2 className="font-semibold xl:text-lg mb-2">Alamat</h2>
            <p>
              Jl. Kolonel Sugiono No.2, Gadingan, Wates, Kec. Wates,
              Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta 55651
            </p>
          </div>
          <div className="group w-full  px-0  md:px-8">
            <h2 className="font-semibold xl:text-lg mb-2">Syarat dan Ketentuan</h2>
            <ul className="list-disc list-inside pl-4 ">
              {requirements.map((requirement, index) => (
                <li className="my-1" key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailInfoModal;
