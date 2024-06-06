import { useState } from "react";
import { LANGUAGES } from "../../DataBuilder";
import { useThemeContext } from "../../layout/ThemeContext";
import i18n from "../../language/i18n";

const DropDownLang = () => {
  const [show, setShow] = useState(false);
  const { lang, setIsLoaded } = useThemeContext();

  const onChangeLang = (e: string) => {
    setIsLoaded(false);
    window.location.reload();
    i18n.changeLanguage(e);
    localStorage.setItem("lang", e);
  };

  return (
    <>
      <div className="relative">
        <button
          type="button"
          data-dropdown-toggle="language-dropdown-menu"
          className="inline-flex items-center font-medium justify-center px-1 pb-8 xl:py-0 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:scale-110 dark:hover:bg-gray-700 dark:hover:text-white transition duration-300"
          onClick={() => setShow(!show)}
        >
          {lang == "id" ? (
            <>
              <img
                src="/logo/indonesia.png"
                alt="English"
                className="pr-2 h-5"
              />
              Indonesia
            </>
          ) : (
            <>
              <img src="/logo/uk.png" alt="English" className="pr-2 h-5" />
              English (UK)
            </>
          )}
        </button>
        <div
          className={`z-50 absolute my-4 text-base list-none bg-white px-4 min-w-[7rem] divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
        id="language-dropdown-menu ${!show && "hidden"} dark:bg-black shadow`}
        >
          <ul className="py-2 font-medium" role="none">
            {LANGUAGES.map((item) => (
              <li
                onClick={() => {
                  onChangeLang(item.code);
                  setShow(false);
                }}
                className="dark:hover:bg-slate-800"
              >
                <a
                  href="#"
                  className="block py-2 text-sm text-gray-700  dark:text-gray-400 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <img
                      src={item.link}
                      alt={item.label}
                      className="pr-2 h-4"
                    />
                    {item.label}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropDownLang;
