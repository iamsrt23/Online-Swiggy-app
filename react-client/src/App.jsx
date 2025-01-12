import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./swiggy/pages/LandingPage";
import "./App.css";
import ProductMenu from "./swiggy/components/ProductMenu";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />
      </Routes>
    </div>
  );
};

export default App;
