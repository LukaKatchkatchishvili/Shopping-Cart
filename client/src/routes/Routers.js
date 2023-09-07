import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ShoppingCart from "../pages/ShoppingCart";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
};

export default Routers;
