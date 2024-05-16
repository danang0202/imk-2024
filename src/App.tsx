import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./assets/screens/LandingPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
