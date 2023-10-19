import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <a href="/">
            <img
              src="https://cabanias.wordpress.com/files/2009/10/tandil-1.jpg"
              alt=""
            />
          </a>
        </div>

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
            <Link to="/body2" className="navbar-link">
              Principal
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
