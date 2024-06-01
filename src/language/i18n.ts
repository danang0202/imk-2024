import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const storedLang = localStorage.getItem('lang') || 'id';

i18n.use(initReactI18next).init({
    lng: storedLang,
    fallbackLng: "id",
    interpolation: {
        escapeValue: false,
    },
    resources: {
        id: {
            translation: {
                title: 'Hai, Selamat Datang',
            }
        },
        en: {
            translation: {
                title: 'Hello, Welcome',
            }
        },
    },
    initImmediate: false,
}, () => {
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'id');
    }
});

export default i18n;
