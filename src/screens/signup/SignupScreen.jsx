import React from "react";
import SignupForm from "../../components/signup/SignupForm";
import "./SignupScreen.css";
import { Link } from "react-router-dom";

const SignupScreen = () => {
  return (
    <div className="container login-container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="login-title">Registrarse</h2>
          <SignupForm />
          <p className="login-options">
            ¿Ya tienes una cuenta?
            <Link to="/login" className="login-link">
              Iniciar Sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupScreen;
