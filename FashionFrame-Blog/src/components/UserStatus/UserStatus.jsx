import React from 'react';
import '../../styles/UserStatus.css'; // Ensure to create and link the CSS file

const UserStatus = ({ username, onLogout }) => {
  return (
    <div className="user-status">
      <span>
        User: <strong>{username}</strong>
      </span>
      <button onClick={onLogout}>Log Out</button>
    </div>
  );
};

export default UserStatus;
