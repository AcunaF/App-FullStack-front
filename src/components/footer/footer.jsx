import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Facundo G. Acuña</h2>
        <p>
          Desarrollo de una Aplicación Fullstack con React, Node y PostgreSQL
        </p>
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
    </footer>
  );
};

export default Footer;
