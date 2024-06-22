import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import TopBarProgress from "react-topbar-progress-indicator";
import { useThemeContext } from "../layout/ThemeContext";
import { IconArrowUp } from "@tabler/icons-react";
import { motion } from 'framer-motion'

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  const { isLoaded } = useThemeContext();
  const { theme } = useThemeContext();
  const [showGoTopButton, setShowGoTopButton] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (location.pathname == "/beranda") {
        const scrollY = window.scrollY;

        if (scrollY > 200) {
          setShowGoTopButton(true)
        } else {
          setShowGoTopButton(false)
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [])


  TopBarProgress.config({
    barThickness: 4,
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);


  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }
  return (
    <>
      <Helmet>
        <title>UMKM | {pageTitle}</title>
      </Helmet>
      <div
        className={`flex flex-col justify-between min-h-screen ${pageTitle == "DASHBOARD" ? "bg-white" : "bg-silver"
          }`}
      >
        {!isLoaded ? (
          <TopBarProgress />
        ) : (
          <>
            {pageTitle !== "LOGIN" && pageTitle !== "REGISTER" && (
              <div className="fixed w-screen top-0 z-[999]">
                <Navbar />
              </div>
            )}
            <main className="flex-grow">{children}</main>
            {pageTitle !== "LOGIN" && pageTitle !== "REGISTER" && (
              <div className="box">
                <Footer />
              </div>
            )}
            {showGoTopButton && (
              <motion.div transition={{ duration: .3 }} whileTap={{ scale: .8 }} whileHover={{ scale: 1.1 }} className="fixed bottom-10 right-4 bg-primary p-2 rounded shadow-lg dark:bg-white cursor-pointer" onClick={() => handleGoToTop()}>
                <IconArrowUp size={17} className="text-white dark:text-black" />
              </motion.div>
            )}
          </>
        )}
      </div >
    </>
  );
};

export default Layout;
