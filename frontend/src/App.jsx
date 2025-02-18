import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashbord from "./pages/Dashbord/Dashbord.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/dashbord"
        element={<Dashbord />}
      />
    </Routes>
  );
}

export default App;

