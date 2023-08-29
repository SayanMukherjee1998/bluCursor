import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RenderImg from "../Components/RenderImg";
import Home from "../Components/Home";

const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RenderImg />} />
        {/* <Route path="/" element={<Home/>} /> */}
      </Routes>
    </Router>
  );
};

export default MainRoute;