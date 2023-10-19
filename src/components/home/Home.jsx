import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCheck,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

function Home() {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUser, setEditedUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setIsEditing(true);
    setEditedUser({ ...user });
    setEditingUserId(user.id);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditingUserId(null);
    setEditedUser({});
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:3000/users/${editingUserId}`, editedUser)
      .then(() => {
        setIsEditing(false);
        setEditingUserId(null);
        setEditedUser({});
      })
      .catch((error) => {
        console.error(
          `Error al guardar los cambios del usuario con ID ${editingUserId}:`,
          error
        );
      });
  };

  const handleDelete = (userId) => {
    axios
      .delete(`http://localhost:3000/users/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error(`Error al eliminar usuario con ID ${userId}:`, error);
      });
  };

  return (
    <div className="container">
      <h1>Lista de Usuarios Registrados</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo Electrónico</th>
            <th>Nombre de Usuario</th>
            <th>Contraseña</th>
            <th>Rol ID</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {isEditing && user.id === editingUserId ? (
                  <input
                    type="text"
                    value={editedUser.nombre}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, nombre: e.target.value })
                    }
                  />
                ) : (
                  user.nombre
                )}
              </td>
              <td>
                {isEditing && user.id === editingUserId ? (
                  <input
                    type="text"
                    value={editedUser.apellido}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, apellido: e.target.value })
                    }
                  />
                ) : (
                  user.apellido
                )}
              </td>
              <td>
                {isEditing && user.id === editingUserId ? (
                  <input
                    type="text"
                    value={editedUser.correo_electronico}
                    onChange={(e) =>
                      setEditedUser({
                        ...editedUser,
                        correo_electronico: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.correo_electronico
                )}
              </td>
              <td>
                {isEditing && user.id === editingUserId ? (
                  <input
                    type="text"
                    value={editedUser.nombre_usuario}
                    onChange={(e) =>
                      setEditedUser({
                        ...editedUser,
                        nombre_usuario: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.nombre_usuario
                )}
              </td>
              <td>
                {isEditing && user.id === editingUserId ? (
                  <input
                    type="text"
                    value={editedUser.contrasena}
                    onChange={(e) =>
                      setEditedUser({
                        ...editedUser,
                        contrasena: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.contrasena
                )}
              </td>
              <td>
                {isEditing && user.id === editingUserId ? (
                  <input
                    type="text"
                    value={editedUser.rol_id}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, rol_id: e.target.value })
                    }
                  />
                ) : (
                  user.rol_id
                )}
              </td>
              <td>
                {isEditing && user.id === editingUserId ? (
                  <>
                    <button className="save-button" onClick={handleSave}>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button
                      className="cancel-button"
                      onClick={handleCancelEdit}
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(user)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
