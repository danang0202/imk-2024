import { useState } from "react";
import { LANGUAGES } from "../../DataBuilder";
import { useThemeContext } from "../../layout/ThemeContext";
import i18n from "../../language/i18n";
import { AnimatePresence, motion } from "framer-motion";
import {
  dropdownItemVariants,
  dropdownVariants,
} from "../../helper/motion.helper";

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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          data-dropdown-toggle="language-dropdown-menu"
          className="inline-flex items-center font-medium justify-center px-1 pb-8 xl:py-0 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer  dark:hover:bg-gray-700 dark:hover:text-white"
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
        </motion.button>
        <AnimatePresence>
          {show && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              className="z-50 absolute my-4 text-base list-none bg-white px-4 min-w-[7rem] divide-y divide-gray-100 rounded-lg  dark:bg-slate-800 shadow border"
            >
              <ul className="py-2 font-medium" role="none">
                <AnimatePresence>
                  {LANGUAGES.map((item) => (
                    <motion.li
                      onClick={() => {
                        onChangeLang(item.code);
                        setShow(false);
                      }}
                      className="dark:hover:bg-slate-800"
                      key={item.code}
                      variants={dropdownItemVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href="#"
                        className="block py-2 text-sm text-gray-700  dark:text-white dark:hover:text-white/75"
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
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default DropDownLang;
