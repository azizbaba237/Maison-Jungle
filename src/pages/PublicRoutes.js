import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Layout from "./Layout";
import AuthGuard from "../auth/AuthGuard";
import Login from "../auth/Login";
import DashBoard from "./admin/DashBoard";

function PublicRoutes() {
  return (
    <div>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<AuthGuard><DashBoard /></AuthGuard>} />
        </Route>
      </Routes>
    </div>
  );
}

export default PublicRoutes;
