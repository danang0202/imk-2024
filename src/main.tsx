import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "./layout/ThemeContext.tsx";
import { Notifications } from "@mantine/notifications";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <React.StrictMode>
      <MantineProvider>
        <Notifications />
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MantineProvider>
    </React.StrictMode>
  </HelmetProvider>
);
