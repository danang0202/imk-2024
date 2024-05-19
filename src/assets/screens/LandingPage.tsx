import { FaqsData, serviceItemsData } from "../../DataBuilder";
import ServiceCard from "../../components/Card/ServiceCard";
import Faq from "../../components/FAQ/Faq";
import FaqForm from "../../components/FAQ/FaqForm";
import Layout from "../../components/Layout";
import Reveal from "../../components/Reveal/Reveal";
import RevealFromLeft from "../../components/Reveal/RevealFromLeft";
import RevealFromRight from "../../components/Reveal/RevealFromRight";
import ButtonWarning from "../../components/Button/ButtonWarning";

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
  const serviceItems: ServiceItem[] = serviceItemsData;
  const Faqs: FaqProps[] = FaqsData;

  const registerNowOnClick = () => {
    console.log("test");
  };

  return (
    <Layout pageTitle="DASHBOARD">
      <div
        className="px-4 md:px-3xl xl:px-6xl bg-gradient-to-br from-silver via-silver to-primaryTint2 flex flex-row justify-between items-center gap-2"
        style={{ borderRadius: "0 0 6rem 0" }}
      >
        <div className="home-title py-8 md:py-8 xl:py-0 md:w-3/4">
          <RevealFromLeft>
            <h1 className="text-black font-semibold text-xl md:text-2xl lg:text-3xl xl:text-5xl text-center md:text-left">
              Hai, Selamat datang di e-UMKM
            </h1>
          </RevealFromLeft>
          <RevealFromLeft>
            <h1 className="text-primary font-semibold text-2xl md:text-2xl  lg:text-3xl xl:text-5xl text-center md:text-left">
              Kabupaten Kulon Progo
            </h1>
          </RevealFromLeft>
          {/* Gambar hanya tampil di layar kecil */}
          <RevealFromLeft>
            <div className="flex justify-center block md:hidden">
              <img
                src={`/image/dataTrends.png`}
                alt="Your image description"
                style={{ height: "250px" }}
              />
            </div>
          </RevealFromLeft>
          <RevealFromLeft>
            <div className="desc py-4 md:py-8 text-center md:text-left">
              <p>
                Aplikasi ini merupakan aplikasi pengelolaan UMKM di Kabupaten
                Kulon Progo.
              </p>
              <p>
                Dapatkan informasi data UMKM seluruh Kulon Progo, GIS UMKM,
                Statistik UMKM serta produk - produk UMKM.
              </p>
            </div>
          </RevealFromLeft>
          <RevealFromLeft>
            <div className="py-4 text-center md:text-left">
              <ButtonWarning
                text="Daftar Sekarang"
                size="xl"
                onClick={registerNowOnClick}
                icon="faArrowRight"
              />
            </div>
          </RevealFromLeft>
        </div>
        <div className="hidden md:block  lg:hidden img-home-container w-1/2">
          {/* Gambar hanya tampil di layar sedang */}
          <RevealFromRight>
            <img
              src={`/image/dataTrends.png`}
              alt="Your image description"
              style={{ height: "300px", objectFit: "contain" }}
            />
          </RevealFromRight>
        </div>
        {/* Gambar hanya tampil di layar besar */}
        <div className="hidden lg:block img-home-container w-1/2">
          <RevealFromRight>
            <img
              src={`/image/dataTrends.png`}
              alt="Your image description"
              style={{ height: "600px", objectFit: "contain" }}
            />
          </RevealFromRight>
        </div>
      </div>
      <Reveal>
        <div className="title my-8 pt-4 flex flex-row items-center justify-center gap-4">
          <img src={`/image/layanan-logo.svg`} alt="Your image description" />
          <h1 className="text-2xl md:text-3xl font-bold">
            Layanan Utama <span className="text-primary">Kami</span>
          </h1>
        </div>
      </Reveal>

      <div className="bg-white flex flex-col lg:flex-row lg:gap-4 xl:gap-8 items-center justify-center px-4 xl:px-8">
        {serviceItems.map((serviceItem, index) => (
          <ServiceCard
            key={index}
            title={serviceItem.title}
            image={serviceItem.image}
            desc={serviceItem.desc}
          />
        ))}
      </div>
      {/* FAQ */}
      <div
        className="bg-silver p-8 mt-2 flex flex-col xl:flex-row gap-8 justify-center items-center"
        style={{ borderRadius: "6rem 0 0rem 0" }}
      >
        <div className="flex flex-col gap-4">
          <RevealFromLeft>
            <div className="title pt-4 flex flex-row items-center gap-4">
              <img src={`/image/faq-logo.svg`} alt="Your image description" />
              <h1 className="text-2xl md:text-3xl font-bold">
                Frequntly Asked <span className="text-primary">Question</span>
              </h1>
            </div>
          </RevealFromLeft>
          <div className="mb-2 text-left">
            <RevealFromRight>
              <p className="text-center xl:text-left text-gray-600 font-semibold">
                Tidak menemukan jawaban? Hubungi kami.
              </p>
            </RevealFromRight>
          </div>
          <div className="form-container hidden xl:block">
            <RevealFromLeft>
              <FaqForm />
            </RevealFromLeft>
          </div>
        </div>
        <div
          className="faq-container w-full xl:w-1/2 md:px-8 lg:px-6xl"
          style={{ minWidth: "50%" }}
        >
          <Faq items={Faqs} />
        </div>
        <div className="block xl:hidden w-full md:px-8 lg:px-6xl">
          <RevealFromLeft>
            <FaqForm />
          </RevealFromLeft>
        </div>
      </div>
      {/* Company */}
      <div className="bg-gradient-to-t from-white from-60% to-silver to-90% p-8 flex flex-col items-center">
        <Reveal>
          <h1 className="text-grey text-xl md:text-2xl font-semibold">
            Diselenggarakan oleh:
          </h1>
        </Reveal>
        {/* layar sedang ke atas */}
        <Reveal>
          <div className="hidden border shadow-lg  border-2 border-gray-200 px-3xl py-4 rounded-3xl md:flex flex-row gap-8 mt-6">
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
        </Reveal>
        {/* Layar kecil */}
        {/*layar kecil */}
        <Reveal>
          <div className="md:hidden border shadow-lg border-2 border-gray-200 px-8 py-4 rounded-2xl flex flex-row gap-8 mt-6">
            <img src="/logo/logo.png" alt="" style={{ height: "60px" }} />
            <img src="/logo/logo_kp.png" alt="" style={{ height: "60px" }} />
            <img src="/logo/kerisku.jpeg" alt="" style={{ height: "60px" }} />
          </div>
        </Reveal>
      </div>
    </Layout>
  );
};

export default LandingPage;
