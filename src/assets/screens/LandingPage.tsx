import { FaqsData, serviceItemsData } from "../../DataBuilder";
import ServiceCard from "../../components/Card/ServiceCard";
import Faq from "../../components/FAQ/Faq";
import FaqForm from "../../components/FAQ/FaqForm";
import Layout from "../../components/Layout";
import { useThemeContext } from "../../layout/ThemeContext";
import ButtonSecondary from "../../components/Button/ButtonSecondary";
import { useTranslation } from "react-i18next";

interface ServiceItem {
  title: string;
  desc: string;
  image: string;
}

interface FaqProps {
  title: string;
  content: string;
}

const LandingPage: React.FC = () => {
  const { i18n, t } = useTranslation();
  const serviceItems: ServiceItem[] = serviceItemsData;
  const Faqs: FaqProps[] = FaqsData;
  const { theme } = useThemeContext();

  const registerNowOnClick = () => {
    console.log("test");
  };

  return (
    <Layout pageTitle="DASHBOARD">
      <div
        className={`px-4 md:px-3xl xl:px-6xl ${
          theme == "light"
            ? "bg-gradient-to-br from-silver via-silver to-greyBlue"
            : "bg-gradient-to-b from-black to-slate-800"
        } flex flex-row justify-between items-center gap-2 min-h-screen pb-3xl`}
      >
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          className="home-title py-8 md:py-8 xl:py-0 md:w-3/4"
        >
          <h1 className="text-black font-semibold text-xl md:text-2xl lg:text-3xl xl:text-5xl text-center md:text-left dark:text-white">
            {t("title")} di e-UMKM
          </h1>
          <h1 className="text-primary font-semibold text-2xl md:text-2xl  lg:text-3xl xl:text-5xl text-center md:text-left">
            Kabupaten Kulon Progo
          </h1>
          {/* Gambar hanya tampil di layar kecil */}
          <div className="flex justify-center block md:hidden">
            <img
              src={`/image/dataTrends.png`}
              alt="Your image description"
              style={{ height: "250px" }}
              data-aos="flip-right"
              data-aos-duration="800"
            />
          </div>
          <div className="desc py-4 md:py-8 text-center md:text-left dark:text-white">
            <p>
              Aplikasi ini merupakan aplikasi pengelolaan UMKM di Kabupaten
              Kulon Progo.
            </p>
            <p>
              Dapatkan informasi data UMKM seluruh Kulon Progo, GIS UMKM,
              Statistik UMKM serta produk - produk UMKM.
            </p>
          </div>
          <div className="py-4 text-center md:text-left">
            <ButtonSecondary
              text="Daftar Sekarang"
              size="xl"
              onClick={registerNowOnClick}
              icon="faArrowRight"
              hoverStyle="scale-110"
            />
          </div>
        </div>
        <div className="hidden md:block  lg:hidden img-home-container w-1/2">
          {/* Gambar hanya tampil di layar sedang */}
          <img
            src={`/image/dataTrends.png`}
            alt="Your image description"
            style={{ height: "300px", objectFit: "contain" }}
            data-aos="flip-right"
            data-aos-duration="800"
          />
        </div>
        {/* Gambar hanya tampil di layar besar */}
        <div className="hidden lg:block img-home-container w-1/2">
          <img
            src={`/image/dataTrends.png`}
            alt="Your image description"
            style={{ height: "600px", objectFit: "contain" }}
            data-aos="flip-right"
            data-aos-duration="800"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center py-20 dark:bg-slate-800">
        <div className="title my-8 flex flex-row items-center justify-center gap-4">
          <img
            src={`/image/layanan-logo.svg`}
            alt="Your image description"
            data-aos="fade-up"
            data-aos-duration="800"
          />
          <h1
            className="text-2xl md:text-3xl font-bold dark:text-white"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Layanan Utama <span className="text-primary">Kami</span>
          </h1>
        </div>

        <div className="bg-white flex flex-col lg:flex-row lg:gap-4 xl:gap-10 items-center justify-center px-4 xl:px-8 dark:bg-slate-800">
          {serviceItems.map((serviceItem, index) => (
            <ServiceCard
              key={index}
              title={serviceItem.title}
              image={serviceItem.image}
              desc={serviceItem.desc}
            />
          ))}
        </div>
      </div>
      {/* FAQ */}
      <div
        className={`${
          theme == "light"
            ? "bg-gradient-to-tl from-silver via-silver to-primaryTint2"
            : "bg-slate-800"
        } flex flex-col items-center gap-12 p-8 py-16`}
      >
        <div
          className="title pt-4 flex flex-row items-center gap-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src={`/image/faq-logo.svg`} alt="Your image description" />
          <h1 className="text-2xl md:text-3xl font-bold dark:text-white">
            Frequntly Asked <span className="text-primary">Question</span>
          </h1>
        </div>
        <div className="w-full  flex flex-col xl:flex-row gap-8 justify-center items-center">
          <div data-aos="fade-up" className="flex flex-col gap-4">
            <div className="mb-2 text-left">
              <p
                className="text-center xl:text-left text-gray-600 font-semibold dark:text-white"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Tidak menemukan jawaban? Hubungi kami.
              </p>
            </div>
            <div className="form-container hidden xl:block">
              <FaqForm />
            </div>
          </div>
          <div
            className="faq-container w-full xl:w-1/2 md:px-8 lg:px-6xl"
            style={{ minWidth: "50%" }}
          >
            <Faq items={Faqs} />
          </div>
          <div className="block xl:hidden w-full md:px-8 lg:px-6xl">
            <FaqForm />
          </div>
        </div>
      </div>
      {/* Company */}
      <div
        className={`w-full ${
          theme == "light"
            ? "bg-gradient-to-t from-white from-60% to-silver to-90%"
            : "bg-gradient-to-b from-slate-800 to-black"
        }  p-8 py-16 flex flex-col items-center`}
      >
        <h1
          className="text-grey text-xl md:text-2xl font-semibold dark:text-white"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Diselenggarakan oleh:
        </h1>
        {/* layar sedang ke atas */}
        <div
          className="hidden border dark:bg-white shadow-lg  border-2 border-gray-200 px-3xl py-4 rounded-3xl md:flex flex-row gap-8 mt-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src="/logo/logo.png" alt="" style={{ height: "80px" }} />
          <div className="kp flex flex-row items-center">
            <img src="/logo/logo_kp.png" alt="" style={{ height: "70px" }} />
            <div className="flex flex-col font-bold pl-4">
              <h1>PEMKAB</h1>
              <h1>KULON PROGO</h1>
            </div>
          </div>
          <img src="/logo/kerisku.jpeg" alt="" style={{ height: "80px" }} />
        </div>
        {/* Layar kecil */}
        {/*layar kecil */}
        <div
          className="md:hidden border shadow-lg border-2 border-gray-200 px-8 py-4 rounded-2xl flex flex-row gap-8 mt-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img src="/logo/logo.png" alt="" style={{ height: "60px" }} />
          <img src="/logo/logo_kp.png" alt="" style={{ height: "60px" }} />
          <img src="/logo/kerisku.jpeg" alt="" style={{ height: "60px" }} />
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
