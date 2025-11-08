import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderBanner } from "./component/common/header";
import Footer from "./component/common/footer";
import { Home } from "./component/home";
import PricingPage from "./component/pricing/pricing";
import Courses from "./component/courses/math";
import { EnglishCourse } from "./component/courses/english";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderBanner />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/courses/maths" element={<Courses />} />
          <Route path="/courses/english" element={<EnglishCourse />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
