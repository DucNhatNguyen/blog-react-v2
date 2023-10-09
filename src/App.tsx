import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Home from "./pages/home";
import Detail from "./pages/detail-post";
import Contact from "./pages/contact";
import About from "./pages/about";
import Category from "./pages/category";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chuyen-muc/:cateId" element={<Category />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/bai-viet/:postId" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
