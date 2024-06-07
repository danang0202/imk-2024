import i18n from 'i18next';

const loadNamespaces = async (namespace:string) => {
    const lang = localStorage.getItem('lang') || 'id';
    try {
        const translations = await import(`../locales/${lang}/${namespace}.json`);
        i18n.addResources(lang, namespace, translations.default);
    } catch (error) {
        console.error(`Error loading ${namespace} namespace for ${lang} language`, error);
    }
};

export default loadNamespaces;
