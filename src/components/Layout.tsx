import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";

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
      <div className="flex flex-col min-h-screen relative">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <main className="flex-grow z-0">{children}</main>
      </div>
    </>
  );
};

export default Layout;
