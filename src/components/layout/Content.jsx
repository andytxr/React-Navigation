import "./Content.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
 
import Home from "../../views/examples/Home";
import Params from "../../views/examples/Params";
import About from "../../views/examples/About";
import NotFound from "../../views/examples/NotFound";
 
const Content = props => (
  <main className="content">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/params/:id" element={<Params />} />
      <Route path="/" exact element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
);
 
export default Content;