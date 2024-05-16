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
    <div className="shadow w-full top-0 left-0 lg:px-8">
      <div className="lg:flex items-center justify-between bg-white py-4 lg:px-10 px-7">
        {/* logo */}
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <IonIcon name="logo-ionic"></IonIcon>
          </span>
          Designer
        </div>

        {/* logo */}

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <IonIcon name={open ? "close" : "menu"}></IonIcon>
        </div>

        <ul
          className={`gap-x-7 lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {menuItems.map((link) => (
            <li key={link.label} className="lg:ml-8 lg:my-0 my-7">
              <a
                href={link.href}
                className="text-black hover:text-primary hover:font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <div className="">
            <ButtonPrimary text="Log In" onClick={logInOnClick} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
