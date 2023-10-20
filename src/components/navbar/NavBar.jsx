import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">
              Iniciar Sesión
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/home" className="navbar-link">
              Usuarios Registrados
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/boody" className="navbar-link">
              Users Api
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/BodyWithList" className="navbar-link">
              Principal
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
