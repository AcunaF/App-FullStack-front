import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/userRegist";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/NavBar";
import Boody from "./components/user-api/boody";
import BodyWithList from "./components/body/BodyWithList";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" style={{ flex: "1" }}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/boody" element={<Boody />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/BodyWithList" element={<BodyWithList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
