import React from "react";
import { Helmet } from "react-helmet-async";

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
      <div className="flex flex-col min-h-screen">
        <header className="bg-white shadow text-white p-4">
          <h1 className="text-2xl text-black">My App</h1>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="bg-primary text-white p-4 text-center">
          &copy; 2024 My App. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Layout;
