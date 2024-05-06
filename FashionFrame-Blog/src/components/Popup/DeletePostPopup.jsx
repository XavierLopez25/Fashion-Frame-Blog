import React, { useState } from 'react';
import Popup from './Popup';
import '../../styles/UpdateEditPopup.css';

const DeletePostPopup = ({ posts, onDelete, onCancel }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleConfirmDelete = () => {
    onDelete(selectedPost);
    setSelectedPost(null);
  };

  return (
    <Popup onClose={onCancel}>
      <h2>Delete Post</h2>
      {selectedPost ? (
        <>
          <p>Confirm deletion of "{selectedPost.title}"?</p>
          <button onClick={handleConfirmDelete}>Confirm Delete</button>
          <button onClick={() => setSelectedPost(null)}>Cancel</button>
        </>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.title} className="post-list-item" onClick={() => setSelectedPost(post)}>
              {post.title}
            </div>
          ))}
        </div>
      )}
    </Popup>
  );
};

export default DeletePostPopup;
