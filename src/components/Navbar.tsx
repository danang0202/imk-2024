import { useState } from "react";
import { IonIcon } from "@ionic/react";
import ButtonPrimary from "./ButtonPrimary";

interface MenuItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const menuItems: MenuItem[] = [
    { label: "Beranda", href: "#" },
    { label: "Data UMKM", href: "#" },
    { label: "Statistik", href: "#" },
    { label: "Galeri Produk", href: "#" },
    { label: "Info Modal", href: "#" },
  ];
  const [open, setOpen] = useState(false);

  const logInOnClick = () => {
    console.log("test");
  };

  return (
    <div className="shadow w-full top-0 left-0 xl:px-8 bg-white py-4">
      <div className="xl:flex items-center justify-between xl:px-10 px-7">
        {/* logo */}
        <div className="font-bold cursor-pointer flex items-center">
          <img
            src={`/logo/logo.png`}
            alt="Logo e-UMKM"
            className="pr-3"
            style={{ height: "50px" }}
          />
          <div className="flex flex-col">
            <h1>PEMKAB</h1>
            <h1>KULON PROGO</h1>
          </div>
        </div>

        {/* logo */}

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer xl:hidden"
        >
          <IonIcon name={open ? "close" : "menu"}></IonIcon>
        </div>

        <ul
          className={`gap-x-7 xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static bg-white xl:z-auto z-[-1] left-0 w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {menuItems.map((link) => (
            <li key={link.label} className="xl:ml-8 xl:my-0 my-7">
              <a
                href={link.href}
                className="text-black hover:text-primary hover:font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <div className="">
            <ButtonPrimary text="Log In" size="base" onClick={logInOnClick} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
