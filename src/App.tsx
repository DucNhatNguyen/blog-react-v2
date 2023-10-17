import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import Home from "./pages/home";
import Detail from "./pages/detail-post";
import Contact from "./pages/contact";
import About from "./pages/about";
import Category from "./pages/category";
import http from "./common/http-common";
import { RequestType } from "./type/PostType";
import { HashLoader } from "react-spinners";

function App() {
  const [data, setData] = useState<RequestType>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      http
        .get<RequestType>("https://blog-nodejs.onrender.com/api/web/home-page")
        .then(({ data }) => {
          console.log(data);
          setData(data);
          setLoading(false);
        })
        .catch((e: Error) => {
          console.log(e);
          setLoading(false);
        });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div
          className="fixed"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <HashLoader size={40} color="#0284c7" />
        </div>
      ) : (
        <div className={!loading ? "show" : "hide"}>
          <Header />
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="/chuyen-muc/:cateId" element={<Category />} />
            <Route path="/lien-he" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/bai-viet/:postId" element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
