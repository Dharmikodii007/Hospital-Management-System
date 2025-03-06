import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./layout/Dashbord";
import Home from "./pages/Home/Home";
import pages from "./constants/AdminPages";
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
        element={<Dashboard pages={pages} />}
      />
    </Routes>
  );
}

export default App;

