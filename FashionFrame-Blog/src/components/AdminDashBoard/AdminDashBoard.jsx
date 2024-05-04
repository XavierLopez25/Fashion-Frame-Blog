import React from 'react';
import '../../styles/AdminDashBoard.css';

const AdminDashboard = ({ setCurrentSection }) => {
  return (
    <div className="admin-dashboard">
      <button onClick={() => setCurrentSection('NEW POST')}>Add New Post</button>
      <button onClick={() => setCurrentSection('UPDATE POST')}>Update Posts</button>
      <button onClick={() => setCurrentSection('DELETE POST')}>Delete Posts</button>
    </div>
  );
};

export default AdminDashboard;
