import React, { useState } from "react";
import "./userRegist.css";

function Register() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo_electronico, setEmail] = useState("");
  const [nombre_usuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [rol_id, setRol] = useState(""); // ¿estado para el rol?

  const handleRegister = async () => {
    try {
      // Lógica para enviar una solicitud POST al servidor para el registro ok
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correo_electronico,
          nombre_usuario,
          contrasena,
          rol_id,
        }),
      });

      if (response.ok) {
        console.log("Registro exitoso");
      } else {
        console.error("Registro fallido");
      }
    } catch (error) {
      console.error("Error de registro:", error);
    }
  };

  return (
    <div className="register-form">
      <h2>Registro</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo_electronico">Correo Electrónico</label>
          <input
            type="email"
            id="correo_electronico"
            value={correo_electronico}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombre_usuario">Nombre de Usuario</label>
          <input
            type="text"
            id="nombre_usuario"
            value={nombre_usuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rol_id">Rol</label>
          <input
            type="text"
            id="rol_id"
            value={rol_id}
            onChange={(e) => setRol(e.target.value)}
            className="input-field"
          />
        </div>
        <button
          type="button"
          onClick={handleRegister}
          className="register-button"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}

export default Register;
