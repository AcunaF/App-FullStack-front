import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import "./UserList.css";

const UserList = ({ users, onDelete, onUpdate }) => {
  // Comprueba si 'users' es un array válido y no está vacío
  if (!users || users.length === 0) {
    return (
      <div className="user-list">
        <p>No hay usuarios para mostrar.</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <div className="user-actions">
              <button onClick={() => onDelete(user.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button onClick={() => onUpdate(user.id)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
