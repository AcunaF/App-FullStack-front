import React, { useState } from "react";
import Register from "../register/userRegist";
import "./Login.css";

const Login = () => {
  const [correo_electronico, setEmail] = useState("");
  const [contrasena, setPassword] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    if (!correo_electronico || !contrasena) {
      setErrorMessage("Por favor, complete ambos campos.");
      return;
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(correo_electronico)) {
      setErrorMessage("El correo electrónico no es válido.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo_electronico, contrasena }),
      });

      if (response.ok) {
        setLoggedIn(true);
      } else {
        setErrorMessage("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      setErrorMessage("Error de inicio de sesión. Inténtalo más tarde.");
    }
  };

  const toggleForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <div>
          <h2>Bienvenido, has iniciado sesión con éxito.</h2>
          <button className="login-button">Continuar</button>
        </div>
      ) : (
        <div>
          <h2 className="login-title">
            {showRegisterForm ? "Registrarse" : "Iniciar Sesión"}
          </h2>
          {showRegisterForm ? (
            <Register />
          ) : (
            <form>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  value={correo_electronico}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={contrasena}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                />
              </div>
              <button
                type="button"
                onClick={handleLogin}
                className="login-button"
              >
                Iniciar Sesión
              </button>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
            </form>
          )}

          <p className="login-options">
            {showRegisterForm
              ? "¿Ya tienes una cuenta? "
              : "¿No tienes una cuenta? "}
            <span onClick={toggleForm} className="login-link">
              {showRegisterForm ? "Iniciar Sesión" : "Registrarse"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
