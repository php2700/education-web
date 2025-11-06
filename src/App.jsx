import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {  HeaderBanner } from "./component/common/header";
import  Footer  from "./component/common/footer";
import { Home } from "./component/home";

function App() {
      return (
            <>
                  <BrowserRouter>
                        <HeaderBanner />
                        <Routes>
                              <Route path="/" index element={<Home />} />
                        </Routes>
                        <Footer />
                  </BrowserRouter>
            </>
      );
}

export default App;

