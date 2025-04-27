// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./ui/Layout";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import { NavBarProvider } from "./context/NavBarFirst";
import AboutPage from "./pages/AboutPage";
import PerlengkapanPage from "./pages/PerlengkapanPage";
import ZiarahPage from "./pages/ZiarahPage";
import HotelPage from "./pages/HotelPage";
import TransportasiPage from "./pages/TransportasiPage";
import MuthawwifPage from "./pages/MuthawwifPage";
import PaketUmrahPage from "./pages/PaketUmrahPage";
import PaketHajiPage from "./pages/PaketHajiPage";
import PaketWisataPlusPage from "./pages/PaketWisataPlusPage";
import ScrollToTop from "./ui/ScrollToTop";

function App() {
  return (
    <NavBarProvider>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/hotel" element={<HotelPage />} />
              <Route path="/transportasi" element={<TransportasiPage />} />
              <Route path="/perlengkapan" element={<PerlengkapanPage />} />
              <Route path="/ziarah" element={<ZiarahPage />} />
              <Route path="/muthawwif" element={<MuthawwifPage />} />
              <Route path="/umrah" element={<PaketUmrahPage />} />
              <Route path="wisata-plus" element={<PaketWisataPlusPage />} />
              <Route path="/haji" element={<PaketHajiPage />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </NavBarProvider>
  );
}

export default App;
