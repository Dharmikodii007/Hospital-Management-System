import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashbord from "./layout/Dashbord/Dashbord";
import pages from "./component/AdminPages/AdminPages";
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
        element={<Dashbord pages={pages} />}
      />
    </Routes>
  );
}

export default App;

