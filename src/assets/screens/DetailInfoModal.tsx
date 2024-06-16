// import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
//import TableInfoModal from "../../components/table/TableInfoModal";
// import { EXTENDED_WINDOW, UMKMProperties, umkmData } from "../../DataBuilder";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faList } from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "../../components/commons/BreadCrumb";
// import { useThemeContext } from "../../layout/ThemeContext";
// import { IconDownload } from "@tabler/icons-react";
import { IconMail, IconPhone, IconArrowNarrowLeft } from "@tabler/icons-react";
//import MinimalisTableUMKM from "../../components/table/MinimalisTableUMKM";

const DetailInfoModal = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [nominalModal, setNominalModal] = useState<number[]>([0, 1000000]); // Slider values
  // const [institutionType, setInstitutionType] = useState<string[]>([]); // Institution types

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <Layout pageTitle="Detail Info Modal">
      <div className="px-4 w-full pt-5xl xl:hidden bg-silver dark:bg-slate-800">
        <Breadcrumb />
      </div>

      <div className="container mx-auto px-10">
        <div className="rounded-lg bg-white pt-1 mt-24 ml-7 mr-7 pb-1 pt-1">
          <div className="flex items-center justify-between pl-4 pr-4">
            <h2 className="text-regular font-semibold m-0">
              Profil Lengkap Pemberi Info Modal
            </h2>
            <div
              className="hidden md:flex text-xs lg:text-sm bg-secondary flex-row gap-2 items-center px-2 lg:px-3 py-2 rounded hover:bg-secondaryHover cursor-pointer text-white transition duration-300"
              onClick={() => (window.location.href = "/info-modal")}
            >
              <p className="m-0">Kembali</p>
              <IconArrowNarrowLeft />
            </div>
          </div>
        </div>

        <div className="flex items-stretch flex-row w-full pb-4 mb-8 xl:pt-4 xl:pb-2 xl:gap-4 xl:px-8 bg-silver dark:bg-slate-800 dark:text-white">
          <div className="flex-[1_1_30%] rounded-lg bg-white p-4 flex flex-col items-center justify-center">
            <img
              src="https://jasalogocepat.com/wp-content/uploads/2023/09/logo-bri-png-transparan-jasalogocepat-01.png"
              alt="Logo BRI"
              className="w-full h-auto max-w-[8rem] mb-10 mt-10"
            />
            <table
              className="border-transparent w-full mt-4  flex-col items-center justify-center mx-auto ml-4 px-2 lg:px-3 whitespace-nowrap font-normal lg:text-base dark:border-slate-700"
              style={{ width: "130%" }}
            >
              <tbody>
                <tr>
                  <td>Nama Lembaga</td>
                  <td>Bank Rakyat Indonesia</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>bri@gmail.com</td>
                </tr>
                <tr>
                  <td>Kontak</td>
                  <td>+621234567890</td>
                </tr>
                <tr>
                  <td>Jenis Lembaga</td>
                  <td>Pemerintah</td>
                </tr>
                <tr>
                  <td>Nominal Modal</td>
                  <td>Rp 10.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-[1_1_70%] rounded-lg bg-white overflow-x-auto relative p-4">
            <div className="flex justify-between items-start">
              <div
                className="w-1/4 p-1 rounded-lg mr-2"
                style={{ backgroundColor: "#F3F4F5" }}
              >
                <h2 className="font-normal ml-2 ">Alamat</h2>
              </div>
              <div
                className="w-3/4 p-4 rounded-lg ml-2"
                style={{ backgroundColor: "rgba(243, 244, 245, 0.7)" }}
              >
                <p>
                  Jl. Kolonel Sugiono No.2, Gadingan, Wates, Kec. Wates,
                  Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta 55651
                </p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-start">
              <div
                className="w-1/4 p-1 rounded-lg mr-2"
                style={{ backgroundColor: "#F3F4F5" }}
              >
                <h2 className="font-normal ml-2">Syarat dan Ketentuan</h2>
              </div>
              <div
                className="w-3/4 p-4 rounded-lg ml-2"
                style={{ backgroundColor: "rgba(243, 244, 245, 0.7)" }}
              >
                <ul className="list-disc pl-5">
                  <li>Isian Syarat 1</li>
                  <li>Isian Syarat 2</li>
                  <li>Isian Syarat 3</li>
                </ul>
              </div>
            </div>
            {/* Penempatan div "Hubungi pemberi modal" di dalam card */}
            <div className="absolute bottom-0 right-5 p-4 flex items-center space-x-2">
              <span className="font-normal">Hubungi pemberi modal:</span>
              <a href="#">
                <IconMail className="w-6 h-6" />
              </a>
              <a href="#">
                <IconPhone className="w-6 h-6" />
              </a>
            </div>
            {/* Akhir dari div "Hubungi pemberi modal" */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailInfoModal;
