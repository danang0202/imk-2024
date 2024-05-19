import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./assets/screens/LandingPage";
import DataUmkm from "./assets/screens/DataUmkm";
import Statistics from "./assets/screens/Statistics";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/data-umkm" element={<DataUmkm />}></Route>
          <Route path="/statistics" element={<Statistics />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
