import { useState } from 'react'
import Popup from './Popup'
import '../../styles/UpdateEditPopup.css'
import PropTypes from 'prop-types'

const DeletePostPopup = ({ posts, onDelete, onCancel }) => {
  const [selectedPost, setSelectedPost] = useState(null)

  const handleConfirmDelete = () => {
    onDelete(selectedPost)
    setSelectedPost(null)
  }

  return (
    <Popup onClose={onCancel}>
      <h2>Delete Post</h2>
      {selectedPost
        ? (
        <>
          <p>
            Confirm deletion of <strong>{selectedPost.title}</strong>?
          </p>
          <button onClick={handleConfirmDelete}>Confirm Delete</button>
          <button onClick={() => setSelectedPost(null)}>Cancel</button>
        </>
          )
        : (
        <div>
          {posts.map((post) => (
            <div key={post.title} className="post-list-item" onClick={() => setSelectedPost(post)}>
              {post.title}
            </div>
          ))}
        </div>
          )}
    </Popup>
  )
}

DeletePostPopup.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default DeletePostPopup
