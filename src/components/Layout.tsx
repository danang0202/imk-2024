import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AOS from "aos";
import TopBarProgress from "react-topbar-progress-indicator";
import { useThemeContext } from "../layout/ThemeContext";

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

  // useEffect(() => {
  //   setPrevLoc(location.pathname);
  //   setIsLoaded(false);
  //   if (location.pathname === prevLoc) {
  //     setPrevLoc("");
  //   }
  // }, [location]);

  // useEffect(() => {
  //   setIsLoaded(true);
  // }, [prevLoc]);

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
  return (
    <>
      <Helmet>
        <title>UMKM | {pageTitle}</title>
      </Helmet>
      <div
        className={`flex flex-col justify-between min-h-screen ${
          pageTitle == "DASHBOARD" ? "bg-white" : "bg-silver"
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
          </>
        )}
      </div>
    </>
  );
};

export default Layout;
