import ButtonPrimary from "../../components/ButtonPrimary";
import Layout from "../../components/Layout";
import RevealFromLeft from "../../components/RevealFromLeft";
import RevealFromRight from "../../components/RevealFromRight";

const LandingPage: React.FC = () => {
  const registerNowOnClick = () => {
    console.log("test");
  };

  return (
    <Layout pageTitle="DASHBOARD">
      <div className="px-4 md:px-3xl xl:px-6xl bg-silver flex flex-row justify-between items-center gap-2">
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
              <ButtonPrimary
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
        {/* Gambar anya tampil di layar besar */}
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
    </Layout>
  );
};

export default LandingPage;
