import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
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
        <div className="fixed w-screen top-0 z-40">
          <Navbar />
        </div>
        <main className="flex-grow">{children}</main>
        <div className="box">
          <Footer />
        </div>
        </div>
    </>
  );
};

export default Layout;
