import React from "react";
import SignupForm from "../../components/signup/SignupForm";
import "./SignupScreen.css";
import { Link } from "react-router-dom";

const SignupScreen = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Registrarse</h2>
      <SignupForm />

      <p className="login-options">
        ¿Ya tienes una cuenta?
        <Link to="/login" className="login-link">
          Iniciar Sesión
        </Link>
      </p>
    </div>
  );
};

export default SignupScreen;
