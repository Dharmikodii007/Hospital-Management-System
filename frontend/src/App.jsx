import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sidebar from "./pages/Dashbord/index";
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
        element={<Sidebar />}
      />
    </Routes>
  );
}

export default App;

