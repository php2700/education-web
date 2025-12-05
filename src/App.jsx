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
import { Blog } from "./component/blog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { About } from "./component/about";
import { Testimonial } from "./component/testimonial";
import { Faqs } from "./component/faq";
import ScrollToTop from "./component/scroll";
import { Contact } from "./component/contact";
import { HelpCenterPage } from "./component/privacy/help";
import { Management } from "./component/management";
import { Test } from "./component/courses/test";
import { ContactSupport } from "./component/support";
import {PrivacyPolicy} from "./component/privacy/term"
import {TermCondition} from "./component/privacy/index"


function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <ScrollToTop />
        <HeaderBanner />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/courses/maths" element={<Courses />} />
          <Route path="/courses/test" element={<Test />} />
          <Route path="/courses/english" element={<EnglishCourse />} />
          <Route path="/management" element={<Management />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}  />
          <Route path="/term-condition" element={<TermCondition />} />
          <Route path="/help" element={<HelpCenterPage />} />
          <Route path="/contact-support" element={<ContactSupport />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
