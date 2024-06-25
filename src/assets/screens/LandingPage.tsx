import { FaqsData, serviceItemsData, socialMediaData } from "../../DataBuilder";
import ServiceCard from "../../components/Card/ServiceCard";
import Faq from "../../components/FAQ/Faq";
import FaqForm from "../../components/FAQ/FaqForm";
import Layout from "../../components/Layout";
import { useThemeContext } from "../../layout/ThemeContext";
import { IconDotsVertical, IconHeadset } from "@tabler/icons-react";
import LogoSocialMedia from "../../components/Social/LogoSocialMedia";
import ButtonBlack from "../../components/Button/ButtonBlack";
import ActionConfirmationModal from "../../components/commons/ActionConfirmationModal";
import { useState } from "react";
import { handleNotifSuccess } from "../../utils/natif";

export interface ServiceItem {
  title: string;
  desc: string;
  image: string;
  href: string;
}

interface FaqProps {
  title: string;
  content: string;
}

const LandingPage: React.FC = () => {
  const serviceItems: ServiceItem[] = serviceItemsData;
  const Faqs: FaqProps[] = FaqsData;
  const { theme } = useThemeContext();

  const ButtonHeroOnclick = () => {
    const element = document.getElementById("service");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { landingLang } = useThemeContext();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    question: "",
  });
  const clearFormData = () => {
    setFormData({
      email: "",
      name: "",
      question: "",
    });
  };

  const handleSubmitFaqForm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
      clearFormData();
      handleNotifSuccess(
        "Pertanyaan berhasil dikirim",
        "Selamat pertanyaan anda telah berhasil di kirim"
      );
    }, 2000);
  };

  return (
    <Layout pageTitle="BERANDA">
      <div
        className={`flex flex-row justify-between items-center min-h-screen w-screen pt-4xl xl:pt-0`}
      >
        <div className="flex flex-col justify-center bg-silver xl:bg-white h-screen xl:justify-between items-start w-full xl:w-1/2 xl:pt-4xl  pb-4xl pl-4 pr-4 xl:pl-5xl xl:pr-4xl dark:bg-slate-800">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="home-title bg-silver xl:bg-white w-full flex items-start flex-col justify-start pt-8 xl:pt-4xl dark:bg-slate-800"
          >
            <div className="flex flex-row justify-center xl:justify-between gap-4 w-full">
              <h1 className="text-black font-semibold text-2xl md:text-3xl lg:text-5xl xl:text-5xl text-center md:text-left dark:text-white">
                {landingLang("welcome")}
              </h1>
            </div>
            <h1 className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl text-center xl:text-left dark:text-white w-full">
              <span className="font-bold text-primary drop-shadow-lg">
                e-UMKM
              </span>{" "}
              Kabupaten
            </h1>
            <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center w-full">
              <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-5xl dark:text-white">
                Kulon Progo
              </h1>
            </div>

            <div className="xl:hidden img-home-container bg-silver flex flex-col justify-center w-full dark:bg-slate-800">
              <img
                src={`/logo/hero-4.png`}
                alt="Your image description"
                data-aos="flip-right"
                data-aos-duration="800"
                className="h-[200px] md:h-[350px] lg:h-[500px] object-contain drop-shadow-lg"
              />
              <div className="flex flex-row justify-center gap-4 text-grey dark:text-white">
                <IconDotsVertical className="transform rotate-90" size={30} />
                <IconDotsVertical className="transform rotate-90" size={30} />
              </div>
            </div>

            <div className="desc py-4 text-sm md:text-base lg:text-base md:py-8 text-center xl:text-left dark:text-white px-2 md:px-4 lg:px-8 xl:px-0">
              <p>{landingLang("descHeroTop")}</p>
              <p>{landingLang("descHeroBottom")}</p>
            </div>
            <div className="py-4 md:py-4 flex justify-center w-full xl:justify-start">
              <ButtonBlack
                text={landingLang("serviceBtnText")}
                size="xs md:text-base lg:text-base xl:text-base"
                onClick={ButtonHeroOnclick}
              />
            </div>
          </div>
          <div className="box flex justify-center xl:justify-between gap-4 items-center w-full py-8 xl:py-0 xl:translate-y-0">
            <div className="hidden md:inline bg-black p-2 xl:p-2 rounded-full text-white hover:bg-black/75 hover:scale-110 transition duration-300 cursor-pointer shadow-lg dark:text-black dark:bg-white">
              <IconHeadset />
            </div>
            <div className="flex flex-row gap-4">
              {socialMediaData.map((social, index) => (
                <LogoSocialMedia
                  path={social.path}
                  url={social.url}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Gambar hanya tampil di layar besar */}
        <div className="hidden xl:block img-home-container bg-silver xl:bg-white w-1/2 h-screen pr-3xl dark:bg-slate-800">
          <div
            className="box-hero-img-container bg-silver h-[92vh] flex justify-center items-center dark:bg-slate-800"
            style={{ borderRadius: "0rem 0rem 5.5rem 5.5rem" }}
          >
            <img
              src={`/logo/hero-4.png`}
              alt="Your image description"
              data-aos="flip-right"
              data-aos-duration="800"
              className="h-[500px] object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
      <div
        id="service"
        className="bg-white flex flex-col gap-8 items-center justify-center py-10 xl:py-20 dark:bg-slate-800"
      >
        <div className="title my-8 flex flex-row items-center justify-center gap-2 lg:gap-4">
          <img
            src={`/image/layanan-logo.svg`}
            alt="Your image description"
            data-aos="fade-up"
            data-aos-duration="800"
            className="h-6"
          />
          <h1
            className="text-xl md:text-2xl font-bold dark:text-white"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {landingLang("serviceTitle")}{" "}
            <span className="text-primary">
              {" "}
              {landingLang("serviceTitleSpan")}
            </span>
          </h1>
        </div>

        <div className="flex flex-row flex-wrap gap-0 md:gap-8 items-center justify-center px-4 xl:px-8 dark:bg-slate-800">
          {serviceItems.map((serviceItem, index) => (
            <ServiceCard
              key={index}
              title={landingLang(serviceItem.title)}
              image={serviceItem.image}
              desc={landingLang(serviceItem.desc)}
              href={serviceItem.href}
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
        } flex flex-col items-center justify-center py-10 xl:py-20`}
      >
        <div
          className="title my-8 flex flex-row items-center justify-center gap-2 lg:gap-4 pb-10"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img
            src={`/image/faq-logo.svg`}
            alt="Your image description"
            className="h-6"
          />
          <h1 className="text-xl md:text-2xl font-bold dark:text-white">
            Frequntly Asked <span className="text-primary">Question</span>
          </h1>
        </div>
        <div className="w-full  flex flex-col xl:flex-row gap-8 justify-center items-center">
          <div data-aos="fade-up" className="flex flex-col gap-4">
            <div className="xl:mb-2 text-left">
              <p
                className="text-center text-xs md:text-sm  lg:text-sm xl:text-left text-gray-600 font-semibold dark:text-white"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                {landingLang("faqNotFound")}
              </p>
            </div>
            <div className="form-container hidden xl:block">
              <FaqForm
                setIsModalOpen={setIsModalOpen}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          </div>
          <ActionConfirmationModal
            text="Apakah anda yakin untuk mengirimkan pertanyaan ini ? "
            handleYes={handleSubmitFaqForm}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            loading={loading}
          />
          <div
            className="faq-container w-full xl:w-1/2 px-6 md:px-8 lg:px-6xl"
            style={{ minWidth: "50%" }}
          >
            <Faq items={Faqs} />
          </div>
          <div className="block xl:hidden w-full px-6 md:px-8 lg:px-6xl">
            <FaqForm
              setIsModalOpen={setIsModalOpen}
              formData={formData}
              setFormData={setFormData}
            />
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
          className="text-grey text-base md:text-xl lg:text-lg font-semibold dark:text-white"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {landingLang("supportedTitle")}
        </h1>
        <div
          className="dark:bg-white shadow-lg  border-2 border-gray-200 px-4  md:px-8 xl:px-3xl py-4 rounded-3xl flex flex-row gap-4 md:gap-8 xl:gap-8 mt-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <img
            src="/logo/logo.png"
            alt=""
            className="h-[40px] md:h-[60px]"
          />
          <div className="kp flex flex-row items-center">
            <img
              src="/logo/logo_kp.png"
              alt=""
              className=" h-[40px] md:h-[60px]"
            />
            <div className="flex flex-col font-semibold xl:font-bold pl-4 text-xs md:text-sm">
              <h1>PEMKAB</h1>
              <h1>KULON PROGO</h1>
            </div>
          </div>
          <img
            src="/logo/kerisku.jpeg"
            alt=""
            className="h-[40px] md:h-[60px]"
          />
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
