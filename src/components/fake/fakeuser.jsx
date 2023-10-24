import React, { useState, useEffect } from "react";
import axios from "axios";

function UsersApiFake() {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersApiFake;
