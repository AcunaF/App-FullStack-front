import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Por favor, complete ambos campos.");
      return;
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("El correo electrónico no es válido.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo_electronico: email,
          contrasena: password,
        }),
      });

      if (response.ok) {
        //setLoggedIn(true);
        navigate("/private");
      } else {
        setErrorMessage("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      setErrorMessage("Error de inicio de sesión. Inténtalo más tarde.");
    }
  };

  return (
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
      <button type="button" onClick={handleLogin} className="login-button">
        Iniciar Sesión
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default LoginForm;
