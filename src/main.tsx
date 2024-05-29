import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "./layout/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <React.StrictMode>
      <ThemeProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </ThemeProvider>
    </React.StrictMode>
    ,
  </HelmetProvider>
);
