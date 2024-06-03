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

  return (
    <ThemeContext.Provider value={{ theme, setTheme, lang, setLang }}>
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
