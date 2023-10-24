import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsersScreen from "../users/UsersScreen";
import UsersApiScreen from "../users-api/UsersApiScreen";

import "./PrivateScreen.css";

function PrivateScreen() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  // Estado para controlar la visibilidad del botón de "Volver arriba"
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Función para manejar el evento de desplazamiento
  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Mostrar el botón cuando el desplazamiento es mayor que 100px desde la parte superior
      setShowScrollButton(true);
    } else {
      // Ocultar el botón cuando el desplazamiento está cerca de la parte superior
      setShowScrollButton(false);
    }
  };

  // Agregar un event listener para el evento de desplazamiento cuando el componente se monta
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazamiento suave
  };

  return (
    <div>
      <div>
        <UsersScreen />
      </div>
      <div className="Btn-style">
        <button className="btn btn-custom" onClick={redirectToHome}>
          Home
        </button>
      </div>
      <UsersApiScreen />
      {showScrollButton && (
        <button className="btn btn-custom" onClick={scrollToTop}>
          Arriba
        </button>
      )}
    </div>
  );
}

export default PrivateScreen;
