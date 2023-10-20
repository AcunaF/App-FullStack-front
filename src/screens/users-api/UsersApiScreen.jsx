import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Corrige esta línea
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./UsersApiScreen.css";

function UsersApiScreen() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUsersAndPosts = async () => {
      try {
        // Obtener datos de usuarios y publicaciones desde las API jsonplaceholder
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
    // lógica de edición que  no me sale
    console.log(`Editar usuario con ID: ${userId}`);
  };

  const handleDelete = (userId) => {
    //lógica de borrado que tampoco me sale
    console.log(`Borrar usuario con ID: ${userId}`);
  };

  return (
    <div className="body">
      <h1>Lista de Usuarios y sus Publicaciones</h1>
      <table>
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
                  className="edit-button"
                  onClick={() => handleEdit(user.id)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(user.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
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
