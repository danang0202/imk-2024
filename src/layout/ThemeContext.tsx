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
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<string>("light");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") ?? "light"; 
    setTheme(storedTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
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
