import { useState } from 'react'
import Popup from './Popup'
import '../../styles/UpdateEditPopup.css'
import { useAuth } from '../../hooks/AuthContext'
import PropTypes from 'prop-types'

const UpdatePostPopup = ({ posts, onSave, onCancel }) => {
  const [selectedPost, setSelectedPost] = useState(null)
  const { authToken } = useAuth()

  const handleSelectPost = (post) => {
    const editedPost = {
      ...post,
      tags: post.tags
    }
    setSelectedPost(editedPost)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'tags') {
      setSelectedPost((prev) => ({ ...prev, [name]: value }))
    } else {
      setSelectedPost((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { id } = selectedPost
    const updatedPost = {
      title: selectedPost.title,
      warframe: selectedPost.warframe,
      content: selectedPost.content,
      tags: selectedPost.tags,
      image: selectedPost.image
    }

    try {
      const response = await fetch(`https://api-fashion-frame.vercel.app/post/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(updatedPost)
      })

      if (!response.ok) {
        throw new Error('Failed to update post')
      }

      const data = await response.json()
      console.log('Updated post:', data)
      onSave(updatedPost)
    } catch (error) {
      console.error('Error updating post:', error)
    }
  }

  return (
    <Popup onClose={onCancel}>
      {selectedPost
        ? (
        <form onSubmit={handleSubmit}>
          <h2>Edit Post</h2>
          <label>Title:</label>
          <input name="title" value={selectedPost.title} onChange={handleChange} />
          <label>Content:</label>
          <textarea name="content" value={selectedPost.content} onChange={handleChange} />
          <label>Category:</label>
          <input name="warframe" value={selectedPost.warframe} onChange={handleChange} />
          <label>Tags (comma-separated):</label>
          <input name="tags" value={selectedPost.tags} onChange={handleChange} />
          <label>Image Link:</label>
          <input name="image" value={selectedPost.image} onChange={handleChange} />
          <button type="submit">Save Changes</button>
        </form>
          )
        : (
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
  )
}

UpdatePostPopup.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      warframe: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default UpdatePostPopup
