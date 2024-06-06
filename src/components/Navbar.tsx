import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ButtonPrimary from "./Button/ButtonPrimary";
import { menuItemsData } from "../DataBuilder";
import ToggleTheme from "./ToggleTheme";
import { useThemeContext } from "../layout/ThemeContext";
import DropDownLang from "./commons/DropDownLang";
import { IconMenu2, IconX } from "@tabler/icons-react";

export interface MenuItem {
  label: string;
  href: string;
  slug: string;
}

const Navbar = () => {
  const menuItems: MenuItem[] = menuItemsData;
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [navBg, setNavBg] = useState(
    `${open ? "bg-silver" : "bg-transparent"} dark:bg-black`
  );
  const [navBgItem, setNavBgItem] = useState(
    `${open ? "bg-silver" : "bg-transparent"} dark:bg-black`
  );
  const [logoUrl, setLogoUrl] = useState("/logo/logo.png");
  const { theme, common } = useThemeContext();

  const { isMobile } = useThemeContext();
  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname == "/beranda") {
        const scrollY = window.scrollY;

        if (scrollY > 100) {
          setNavBg("bg-white shadow-sm dark:bg-slate-800");
          setNavBgItem("bg-white dark:bg-slate-800");
        } else {
          setNavBg(
            `${open || isMobile ? "bg-silver" : "bg-transparent"} dark:bg-black`
          );
          setNavBgItem(
            `${open || isMobile ? "bg-silver" : "bg-transparent"} dark:bg-black`
          );
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open, isMobile]);

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
      className={`w-full top-0 left-0 xl:px-8 py-3 ${
        location.pathname == "/beranda"
          ? navBg
          : "bg-white shadow-sm dark:bg-black border-b"
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
          <div className="flex flex-col dark:text-white text-sm md:text-base">
            <h1>PEMKAB</h1>
            <h1>KULON PROGO</h1>
          </div>
        </div>

        {/* logo */}
        <div className="text-3xl absolute right-8 top-6 cursor-pointer xl:hidden flex align-center gap-4">
          <ToggleTheme />
          {!open ? (
            <IconMenu2
              onClick={() => setOpen(!open)}
              className="text-black dark:text-white"
            />
          ) : (
            <IconX
              onClick={() => setOpen(!open)}
              className="text-black dark:text-white"
            />
          )}
        </div>

        <ul
          className={`${
            location.pathname == "/beranda"
              ? navBgItem
              : "bg-white dark:bg-black"
          } gap-x-6 xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static xl:z-auto z-[-1] left-0 w-full xl:w-auto xl:pl-0 pl-9 ${
            open ? "top-15 " : "top-[-490px]"
          }`}
        >
          {menuItems.map((link) => (
            <li
              key={link.label}
              className="xl:ml-8 xl:my-0 my-7 hover:scale-110 transition duration-300 text-sm md:text-base"
            >
              <a
                href={link.href}
                className={`hover:text-black/75 font-semibold ${
                  location.pathname.includes(link.href)
                    ? "text-black border-b-2 pb-1 border-black dark:border-white"
                    : "text-[#000] dark:text-white"
                }`}
              >
                {common(link.slug)}
              </a>
            </li>
          ))}
          <div className="hidden xl:inline">
            <ToggleTheme />
          </div>
          <DropDownLang />
          <div className="">
            <ButtonPrimary
              text="Log In"
              size="sm md:base"
              onClick={logInOnClick}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
