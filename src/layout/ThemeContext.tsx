import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useTranslation } from "react-i18next";
import loadNamespaces from "../language/load-lang";
import i18next, { TFunction } from "i18next";
interface ThemeContextType {
  theme: string;
  setTheme: (column: string) => void;
  lang: string;
  setLang: (column: string) => void;
  windowWidth: number;
  setWindowWidth: (column: number) => void;
  isMobile: boolean;
  setIsMobile: (column: boolean) => void;
  isLoaded: boolean;
  setIsLoaded: (column: boolean) => void;
  landingLang: TFunction<"landing-page", undefined>;
  dataLang: TFunction<"data-page", undefined>;
  common: TFunction<"commoon", undefined>;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("light");
  const [lang, setLang] = useState<string>("id");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") ?? "light";
    setTheme(storedTheme);
    const lang = localStorage.getItem("lang") ?? "id";
    setLang(lang);
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth < 800) {
      setIsMobile(true);
    }
  }, [windowWidth]);
  useEffect(() => {
    const load = async () => {
      setIsLoaded(false);
      await loadNameSpaceByPathUrl(location.pathname);
      setIsLoaded(true);
    };
    load();
  }, [location]);
  const { t: dataLang } = useTranslation("data-page");
  const { t: landingLang } = useTranslation("landing-page");
  const { t: common } = useTranslation("common");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        lang,
        setLang,
        windowWidth,
        setWindowWidth,
        isMobile,
        setIsMobile,
        isLoaded,
        setIsLoaded,
        dataLang,
        landingLang,
        common,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

const loadNameSpaceByPathUrl = async (pathName: string) => {
  {
    await loadNamespaces("common");
    if (pathName == "/beranda") {
      await loadNamespaces("landing-page");
    } else if (pathName == "/data-umkm") {
      await loadNamespaces("data-page");
    }
    i18next.reloadResources();
  }
};
