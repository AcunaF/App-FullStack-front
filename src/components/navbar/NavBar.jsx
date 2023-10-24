import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons"; // Importa el icono de inicio desde Font Awesome

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li>
              <Link to="/" className="nav-item">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <i className="fas fa-user">Iniciar Sesión</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/users-api" className="nav-link">
                <i className="fas fa-users"> Users API</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
