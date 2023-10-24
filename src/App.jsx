import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import SignupScreen from "./screens/signup/SignupScreen";
import HomeScreen from "./screens/home/HomeScreen";

import PrivateScreen from "./screens/private/PrivateScreen";
import NoMatchScreen from "./screens/no-match/NoMatchScreen";

import Navbar from "./components/navbar/NavBar";

import "./App.css";
import UsersApiFake from "./components/fake/fakeuser";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className="nav-nav" />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/users-api" element={<UsersApiFake />} />
          <Route path="/private" element={<PrivateScreen />} />
          <Route path="*" element={<NoMatchScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
