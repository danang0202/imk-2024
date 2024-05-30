import { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { useLocation } from "react-router-dom";
import ButtonPrimary from "./Button/ButtonPrimary";
import { menuItemsData } from "../DataBuilder";
import ToggleTheme from "./ToggleTheme";
import { useThemeContext } from "../layout/ThemeContext";

interface MenuItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const menuItems: MenuItem[] = menuItemsData;
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [navBg, setNavBg] = useState("bg-silver dark:bg-black");
  const [navBgItem, setNavBgItem] = useState("bg-silver dark:bg-black");
  const [logoUrl, setLogoUrl] = useState("/logo/logo.png");
  const { theme } = useThemeContext();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname == "/") {
        const scrollY = window.scrollY;

        if (scrollY > 500) {
          setNavBg("bg-white shadow-lg dark:bg-slate-800");
          setNavBgItem("bg-white dark:bg-slate-800");
        } else {
          setNavBg("bg-silver dark:bg-black");
          setNavBgItem("bg-silver dark:bg-black");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme == "dark") {
      setLogoUrl("/logo/logo_white.png");
    } else {
      setLogoUrl("/logo/logo.png");
    }
  }, [theme]);

  const logInOnClick = () => {
    console.log("test");
  };

  return (
    <div
      className={`w-full top-0 left-0 xl:px-8 py-4 ${
        location.pathname == "/"
          ? navBg
          : "bg-white shadow-lg dark:bg-black"
      }`}
    >
      <div className="xl:flex items-center justify-between xl:px-10 px-7">
        {/* logo */}
        <div className="font-bold cursor-pointer flex items-center">
          <img
            src={logoUrl}
            alt="Logo e-UMKM"
            className="pr-3"
            style={{ height: "50px" }}
          />
          <div className="flex flex-col dark:text-white">
            <h1>PEMKAB</h1>
            <h1>KULON PROGO</h1>
          </div>
        </div>

        {/* logo */}

        <div className="text-3xl absolute right-8 top-6 cursor-pointer xl:hidden flex align-center gap-4">
          <ToggleTheme />
          <IonIcon
            onClick={() => setOpen(!open)}
            name={open ? "close" : "menu"}
            className="text-black dark:text-white"
          ></IonIcon>
        </div>

        <ul
          className={`${
            location.pathname == "/" ? navBgItem : "bg-white dark:bg-black"
          } gap-x-7 xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static xl:z-auto z-[-1] left-0 w-full xl:w-auto xl:pl-0 pl-9 ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {menuItems.map((link) => (
            <li
              key={link.label}
              className="xl:ml-8 xl:my-0 my-7 hover:scale-110"
            >
              <a
                href={link.href}
                className="text-black hover:text-primary font-semibold dark:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          {!open && <ToggleTheme />}
          <div className="">
            <ButtonPrimary text="Log In" size="base" onClick={logInOnClick} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
