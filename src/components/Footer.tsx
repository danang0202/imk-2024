import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuItemsData, socialMediaData } from "../DataBuilder";
import LogoSocialMedia from "./Social/LogoSocialMedia";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

interface socialsMedia {
  path: string;
  url: string;
}

const Footer: React.FC = () => {
  const socials: socialsMedia[] = socialMediaData;
  const menuItems = menuItemsData;

  return (
    <>
      <div className="bg-black py-8 px-8 xl:p-3xl xl:px-6xl text-white flex  flex-col md:flex-row justify-between gap-8">
        <div className="flex flex-col gap-y-8">
          {/* logo */}
          <div className="flex flex-row gap-3">
            <img
              src={`/logo/logo_footer.png`}
              alt="Logo e-UMKM"
              className="pr-3"
              style={{ height: "100px" }}
            />
            <div className="flex flex-col text-white font-bold justify-center gap-4">
              <h1 className="text-xl">PEMERINTAH KABUPATEN</h1>
              <h1 className="text-xl">KULON PROGO</h1>
            </div>
          </div>
          {/* logo end */}
          <div className="copyright text-center md:text-left">
            <p>Copyright @ 2024 | Kelompok 4 IMK 3SI2.</p>
            <p>Ilustrasi oleh Freepik</p>
            <p>All rights reserved</p>
          </div>
          {/* Social Media */}
          <div className="flex flex-row gap-4 items-center justify-center md:justify-start transform">
            {socials.map((social) => (
              <LogoSocialMedia path={social.path} url={social.url} />
            ))}
          </div>
        </div>
        <div className="flex flex-row hidden lg:block">
          <div className="flex flex-col gap-y-3">
            <h1 className="font-bold pb-4 text-xl">Tautan</h1>
            {menuItems.map((item) => (
              <>
                <a href={item.href} className="hover:text-warning">
                  {item.label}
                </a>
              </>
            ))}
          </div>
          <div className="flex flex-col"></div>
        </div>

        <div className="flex flex-row gap-8">
          <div className="peta-container hidden xl:block">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252978.511181693!2d109.97932918814458!3d-7.812121861634743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7ae554b4872e5d%3A0x3027a76e352bbf0!2sKulon%20Progo%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1715950357428!5m2!1sen!2sid"
              width="400"
              height="250"
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex flex-col gap-y-5">
            <h1 className="font-bold pb-4 text-xl text-center md:text-left">
              Hubungi Kami
            </h1>
            <div className="flex flex-row items-center">
              <FontAwesomeIcon icon={faLocationDot} className="pr-3" />
              <div className="box">
                <p>Jl. Sugiman ,Margosari, Pengasih, Kulon Progo,</p>
                <p>Yogyakarta 55652</p>
              </div>
            </div>
            <p>
              <FontAwesomeIcon icon={faPhone} className="pr-3" />
              (0274) 773095
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="pr-3" />
              dinpar@kulonprogokab.go.id
            </p>
          </div>
          <div className="flex flex-col"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
