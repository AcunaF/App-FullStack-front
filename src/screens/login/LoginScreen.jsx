import React from "react";
import "./LoginScreen.css";
import LoginForm from "../../components/login/LoginForm";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <LoginForm />

      <p className="login-options">
        ¿No tienes una cuenta?
        <Link to="/signup" className="login-link">
          Crear cuenta
        </Link>
      </p>
    </div>
  );
};

export default LoginScreen;
