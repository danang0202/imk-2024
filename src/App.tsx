import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./assets/screens/LandingPage";
import DataUmkm from "./assets/screens/DataUmkm";
import Statistics from "./assets/screens/Statistics";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./assets/screens/Login";
import "react-toggle/style.css";
import Test from "./assets/screens/Test";
import Gis from "./assets/screens/Gis";
import GaleriProduk from "./assets/screens/GaleriProduk";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durasi animasi dalam milidetik
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/beranda" />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/beranda" element={<LandingPage />}></Route>
        <Route path="/galeri-produk" element={<GaleriProduk />}></Route>
        <Route path="/data-umkm" element={<DataUmkm />}></Route>
        <Route path="/statistics" element={<Statistics />}></Route>
        <Route path="/gis" element={<Gis />}></Route>
        <Route path="/statistics/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
