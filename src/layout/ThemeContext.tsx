import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
interface ThemeContextType {
  theme: string;
  setTheme: (column: string) => void;
  lang: string;
  setLang: (column: string) => void;
  windowWidth: number;
  setWindowWidth: (column: number) => void;
  isMobile: boolean;
  setIsMobile: (column: boolean) => void;
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
