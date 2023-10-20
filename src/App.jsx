import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import SignupScreen from "./screens/signup/SignupScreen";
import HomeScreen from "./screens/home/HomeScreen";
import UsersScreen from "./screens/users/UsersScreen";
import PrivateScreen from "./screens/private/PrivateScreen";
import NoMatchScreen from "./screens/no-match/NoMatchScreen";
import UsersApiScreen from "./screens/users-api/UsersApiScreen";
import Navbar from "./components/navbar/NavBar";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" style={{ flex: "1" }}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route path="/users-api" element={<UsersApiScreen />} />
          <Route path="/users" element={<UsersScreen />} />
          <Route path="/private" element={<PrivateScreen />} />
          <Route path="*" element={<NoMatchScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
