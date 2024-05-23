import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./assets/screens/LandingPage";
import DataUmkm from "./assets/screens/DataUmkm";
import Statistics from "./assets/screens/Statistics";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Login from "./assets/screens/Login";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Durasi animasi dalam milidetik
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/data-umkm" element={<DataUmkm />}></Route>
          <Route path="/statistics" element={<Statistics />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
