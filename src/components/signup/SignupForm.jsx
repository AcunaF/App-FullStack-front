import React, { useState } from "react";
import "./SignupForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo_electronico, setEmail] = useState("");
  const [nombre_usuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [rol_id, setRol] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/signup", {
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
        toast.success("Usuario registrado exitosamente");
        navigate("/login");
      } else {
        console.error("Registro fallido");
        toast.error("Hubo un error al registrar el usuario");
      }
    } catch (error) {
      console.error("Error de registro:", error);
      toast.error("Ups, hubo un error. Intente nuevamente");
    }
  };

  return (
    <div className="register-form">
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
      <ToastContainer />
    </div>
  );
}

export default SignupForm;
