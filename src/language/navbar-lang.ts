import NavbarLang from "i18next";
import { initReactI18next } from "react-i18next";

const storedLang = localStorage.getItem('lang') || 'id';

NavbarLang.use(initReactI18next).init({
    lng: storedLang,
    fallbackLng: "id",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        id: {
            translation: {
                beranda: 'Beranda',
            }
        },
        en: {
            translation: {
                beranda: 'Home',
            }
        },
    },
    initImmediate: false,
}, () => {
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'id');
    }
});

export default NavbarLang;
