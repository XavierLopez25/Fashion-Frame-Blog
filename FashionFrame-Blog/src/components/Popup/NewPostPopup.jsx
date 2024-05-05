import React, { useState } from 'react';
import Popup from './Popup';

const NewPostPopup = ({ onSave, onCancel }) => {
  const [post, setPost] = useState({ title: '', content: '', category: '', tags: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(post);
  };

  return (
    <Popup onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <h2>Create New Post</h2>
        <label>Title:</label>
        <input name="title" value={post.title} onChange={handleChange} />
        <label>Content:</label>
        <textarea name="content" value={post.content} onChange={handleChange} />
        <label>Category:</label>
        <input name="category" value={post.category} onChange={handleChange} />
        <label>Tags (comma-separated):</label>
        <input name="tags" value={post.tags} onChange={handleChange} />
        <button type="submit">Create Post</button>
      </form>
    </Popup>
  );
};

export default NewPostPopup;
