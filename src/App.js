import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Webinars from "./components/Webinars";
import Conference from "./components/Conference";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/webinars" element={<Webinars />}  />
      <Route path="/conference" element={<Conference />}  />
      <Route path="/home" element={<Home />}  />
      <Route path="/about" element={<About />}  />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
