import React, { useState, useEffect } from "react";
import Register from "../register/userRegist";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [showRegisteredUsers, setShowRegisteredUsers] = useState(false);
  const [showUserAPI, setShowUserAPI] = useState(false);

  useEffect(() => {
    // verificar si el usuario ya está autenticado y establecer setLoggedIn(true) si lo está
  }, []);

  const handleLogin = async () => {
    try {
      // inicio de sesión
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // El inicio de sesión fue exitoso
        setLoggedIn(true); // Actualiza el estado para indicar que el usuario ha iniciado sesión
        setShowRegisteredUsers(true); // Muestra "Usuarios registrados"
        setShowUserAPI(true); // Muestra "User API"
      } else {
        // El inicio de sesión falló, muestra un mensaje
        setErrorMessage("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      setErrorMessage("Error de inicio de sesión. Inténtalo más tarde.");
    }
  };

  const handleToggleRegister = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <>
          <h2>Bienvenido, has iniciado sesión con éxito.</h2>
          {showRegisteredUsers && <p>Usuarios registrados</p>}
          {showUserAPI && <p>User API</p>}
        </>
      ) : (
        <>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  value={password}
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
            <span onClick={handleToggleRegister} className="login-link">
              {showRegisterForm ? "Iniciar Sesión" : "Registrarse"}
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
