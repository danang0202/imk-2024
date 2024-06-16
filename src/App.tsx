import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./assets/screens/LandingPage";
import DataUmkm from "./assets/screens/DataUmkm";
import Statistics from "./assets/screens/Statistics";
import "aos/dist/aos.css";
import Login from "./assets/screens/Login";
import Register from "./assets/screens/Register";
import "react-toggle/style.css";
import Gis from "./assets/screens/Gis";
import GaleriProduk from "./assets/screens/GaleriProduk";
import DetailUmkm from "./assets/screens/DetailUmkm";
import DetailProduk from "./assets/screens/DetailProduk";
import DetailInfoModal from "./assets/screens/DetailInfoModal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/beranda" />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/beranda" element={<LandingPage />}></Route>
        <Route path="/galeri-produk" element={<GaleriProduk />}></Route>
        <Route path="/galeri-produk/detail" element={<DetailProduk />}></Route>
        <Route path="/data-umkm" element={<DataUmkm />}></Route>
        <Route path="/statistics" element={<Statistics />}></Route>
        <Route path="/data-umkm/detail" element={<DetailUmkm />}></Route>
        <Route path="/gis" element={<Gis />}></Route>
        {/* <Route path="/info-modal" element={<InfoModal />}></Route> */}
        <Route path="/info-modal/detail" element={<DetailInfoModal />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
