import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonPrimary from "./Button/ButtonPrimary";
import { EXTENDED_WINDOW, menuItemsData } from "../DataBuilder";
import ToggleTheme from "./ToggleTheme";
import { useThemeContext } from "../layout/ThemeContext";
import DropDownLang from "./commons/DropDownLang";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { dropdownVariants, menuItemVariants } from "../helper/motion.helper";

export interface MenuItem {
  label: string;
  href: string;
  slug: string;
}

const Navbar = () => {
  const menuItems: MenuItem[] = menuItemsData;
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { isMobile } = useThemeContext();
  const [navBg, setNavBg] = useState(
    `${open || isMobile
      ? "bg-silver dark:bg-slate-800"
      : "bg-transparent dark:bg-slate-800"
    }`
  );
  const [navBgItem, setNavBgItem] = useState(
    `${open || isMobile
      ? "bg-silver dark:bg-slate-800"
      : "bg-transparent dark:bg-slate-800"
    }`
  );
  const [logoUrl, setLogoUrl] = useState("/logo/logo.png");
  const { theme, common, windowWidth } = useThemeContext();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname == "/beranda") {
        const scrollY = window.scrollY;

        if (scrollY > 100) {
          setNavBg("bg-white shadow-sm dark:bg-black");
          setNavBgItem("bg-white dark:bg-black");
        } else {
          setNavBg(
            `${open || isMobile
              ? "bg-silver dark:bg-slate-800"
              : "bg-transparent dark:bg-slate-800"
            }`
          );
          setNavBgItem(
            `${open || isMobile
              ? "bg-silver dark:bg-slate-800"
              : "bg-transparent dark:bg-slate-800"
            }`
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
    navigate("/login");
  };
  return (
    <div
      className={`w-full top-0 left-0 xl:px-8 py-3 ${location.pathname == "/beranda"
        ? navBg
        : "bg-white shadow-sm dark:bg-black border-b dark:border-b-gray-700"
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
        {windowWidth < EXTENDED_WINDOW.xl ? (

          <AnimatePresence>
            {open && (
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={dropdownVariants}
                className={`${location.pathname == "/beranda" ? `${navBgItem} shadow-lg`  : "bg-white shadow-lg dark:bg-black"
                  } gap-x-6 xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static xl:z-auto z-[-1] left-0 w-full xl:w-auto xl:pl-0 pl-9`}
              >
                {menuItems.map((link) => (
                  <motion.li
                    key={link.label}
                    variants={menuItemVariants}
                    className="xl:ml-8 xl:my-0 my-7 text-sm md:text-base"
                  >
                    <a
                      href={link.href}
                      className={`hover:text-black/75 dark:hover:text-white/75 font-semibold transition-colors duration-300 ${location.pathname.includes(link.href)
                        ? "text-black border-b-2 pb-1 border-black dark:border-white dark:text-white"
                        : "text-[#000] dark:text-white"
                        }`}
                    >
                      {common(link.slug)}
                    </a>
                  </motion.li>
                ))}
                <motion.div variants={menuItemVariants} className="hidden xl:inline">
                  <ToggleTheme />
                </motion.div>
                <motion.div variants={menuItemVariants} >
                  <DropDownLang />
                </motion.div>
                <motion.div variants={menuItemVariants} >
                  <ButtonPrimary
                    text="Log In"
                    size="sm md:base"
                    onClick={logInOnClick}
                  />
                </motion.div>
              </motion.ul>
            )}
          </AnimatePresence>
        ) : (
          <ul
            className={`${location.pathname == "/beranda" ? navBgItem : "bg-white dark:bg-black"
              } gap-x-6 xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static xl:z-auto z-[-1] left-0 w-full xl:w-auto xl:pl-0 pl-9`}
          >
            {menuItems.map((link) => (
              <li
                key={link.label}
                className="xl:ml-8 xl:my-0 my-7 text-sm md:text-base"
              >
                <a
                  href={link.href}
                  className={`hover:text-black/75 dark:hover:text-white/75 font-semibold transition-colors duration-300 ${location.pathname.includes(link.href)
                    ? "text-black border-b-2 pb-1 border-black dark:border-white dark:text-white"
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
            <div>
              <ButtonPrimary
                text="Log In"
                size="sm md:base"
                onClick={logInOnClick}
              />
            </div>
          </ul>
        )}
      </div>
    </div >
  );
};

export default Navbar;
