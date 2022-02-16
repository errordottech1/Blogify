import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Create from "./components/Create";
import Home from "./containers/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/default" element={<Home />} />
      <Route path="/" element={<Navigate from="/" to="/default" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default App;
