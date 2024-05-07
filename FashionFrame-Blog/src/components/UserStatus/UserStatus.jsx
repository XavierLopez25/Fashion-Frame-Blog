import React from 'react';
import '../../styles/UserStatus.css'; // Ensure to create and link the CSS file

const UserStatus = ({ username, onLogout, isAuthenticated }) => {
  return (
    <div className="user-status">
      <span>
        User: <strong>{isAuthenticated ? username : 'Guest'}</strong>
      </span>
      <button onClick={onLogout}>{isAuthenticated ? 'Log Out' : 'Log In'}</button>
    </div>
  );
};

export default UserStatus;
