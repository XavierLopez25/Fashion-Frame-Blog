import React from 'react';
import '../../styles/AdminDashBoard.css';

const AdminDashboard = ({ onNewPost, onUpdatePosts, onDeletePosts }) => {
  return (
    <div className="admin-dashboard">
      <button onClick={onNewPost}>New Post</button>
      <button onClick={onUpdatePosts}>Update Posts</button>
      <button onClick={onDeletePosts}>Delete Posts</button>
    </div>
  );
};

export default AdminDashboard;
