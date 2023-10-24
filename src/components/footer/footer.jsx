import React from "react";
import "bootstrap/dist/js/bootstrap.min";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <h2>Facundo G. Acuña</h2>
            <p>
              Desarrollo de una Aplicación Fullstack con React, Node y
              PostgreSQL
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <a
              href="https://github.com/AcunaF/AppFullstackReactNodePostgreSQL"
              className="github-link"
            >
              <img
                src="https://www.svgviewer.dev/static-svgs/432997/whats-app-whatsapp-whatsapp-icon.svg"
                alt="GitHub"
                className="github-logo"
              />
              <img
                src="https://www.svgrepo.com/download/361181/github.svg"
                alt="GitHub"
                className="github-logo"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
