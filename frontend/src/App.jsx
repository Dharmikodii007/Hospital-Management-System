import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AdminDashbord from "./pages/Dashbord/AdminDashbord/index";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/admin"
        element={<AdminDashbord />}
      />
    </Routes>
  );
}

export default App;

