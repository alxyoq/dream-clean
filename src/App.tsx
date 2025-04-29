// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ServiceAreas from "./pages/ServiceAreas";
import Services from "./pages/Services";
import GalleryPage from "./pages/gallery";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service-areas" element={<ServiceAreas />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
