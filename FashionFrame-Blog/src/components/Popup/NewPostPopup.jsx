import React, { useState } from 'react'
import Popup from './Popup'
import { useAuth } from '../../hooks/AuthContext'

const NewPostPopup = ({ onSave, onCancel }) => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    warframe: '',
    tags: '',
    image: ''
  })
  const { user } = useAuth()

  const handleChange = (e) => {
    const { name, value } = e.target
    setPost((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await onSave({
        title: post.title,
        content: post.content,
        warframe: post.warframe,
        tags: post.tags,
        image: post.image,
        user_id: user.id
      })
      onCancel()
    } catch (error) {
      console.error('Failed to save the post:', error)
    }
  }

  return (
    <Popup onClose={onCancel}>
      <form onSubmit={handleSubmit}>
        <h2>Create New Post</h2>
        <label>Title:</label>
        <input name="title" value={post.title} onChange={handleChange} />
        <label>Content:</label>
        <textarea name="content" value={post.content} onChange={handleChange} />
        <label>Warframe:</label>
        <input name="warframe" value={post.warframe} onChange={handleChange} />
        <label>Tags (comma-separated):</label>
        <input name="tags" value={post.tags} onChange={handleChange} />
        <label>Image Link:</label>
        <input name="image" value={post.image} onChange={handleChange} />
        <button type="submit">Create Post</button>
      </form>
    </Popup>
  )
}

export default NewPostPopup
