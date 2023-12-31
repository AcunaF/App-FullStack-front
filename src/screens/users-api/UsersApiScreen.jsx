import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./UsersApiScreen.css";

function UsersApiScreen() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsersAndPosts = async () => {
      try {
        const usersResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const postsResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setUsers(usersResponse.data);
        setPosts(postsResponse.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchUsersAndPosts();
  }, []);

  const handleEdit = (userId) => {
    if (window.confirm("¿Estás seguro de que deseas editar este usuario?")) {
      // Lógica de edición (puedes mostrar un formulario, etc.)

      console.log("Editando usuario con ID:", userId);
    }
  };

  const handleDelete = (userId) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
      // Lógica de borrado (puedes enviar una solicitud DELETE a la API)
      console.log("Borrando usuario con ID:", userId);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">Lista de Usuarios y sus Publicaciones</h1>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Correo Electrónico</th>
            <th>Publicaciones</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <ul>
                  {posts
                    .filter((post) => post.userId === user.id)
                    .map((post) => (
                      <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(user.id)}
                >
                  <FontAwesomeIcon icon={faEdit} /> Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user.id)}
                >
                  <FontAwesomeIcon icon={faTrash} /> Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersApiScreen;
