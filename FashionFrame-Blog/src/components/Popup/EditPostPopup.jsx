import React, { useState } from 'react';
import Popup from './Popup';
import '../../styles/UpdateEditPopup.css';

const UpdatePostPopup = ({ posts, onSave, onCancel }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(selectedPost);
  };

  return (
    <Popup onClose={onCancel}>
      {selectedPost ? (
        <form onSubmit={handleSubmit}>
          <h2>Edit Post</h2>
          <label>Title:</label>
          <input name="title" value={selectedPost.title} onChange={handleChange} />
          <label>Content:</label>
          <textarea name="content" value={selectedPost.content} onChange={handleChange} />
          <label>Category:</label>
          <input name="category" value={selectedPost.category} onChange={handleChange} />
          <label>Tags (comma-separated):</label>
          <input
            name="tags"
            value={selectedPost.tags.join(',')}
            onChange={(e) =>
              handleChange({ ...e, target: { ...e.target, value: e.target.value.split(',') } })
            }
          />
          <button type="submit">Save Changes</button>
        </form>
      ) : (
        <div>
          <h2>Select a Post to Edit</h2>
          {posts.map((post) => (
            <div key={post.title} className="post-list-item" onClick={() => handleSelectPost(post)}>
              {post.title}
            </div>
          ))}
        </div>
      )}
    </Popup>
  );
};
export default UpdatePostPopup;
