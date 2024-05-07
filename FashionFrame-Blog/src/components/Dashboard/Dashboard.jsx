import '../../styles/Dashboard.css'
import PropTypes from 'prop-types'

const Dashboard = ({ onNewPost, onUpdatePosts, onDeletePosts }) => {
  return (
    <div className="admin-dashboard">
      <button onClick={onNewPost}>New Post</button>
      <button onClick={onUpdatePosts}>Update Posts</button>
      <button onClick={onDeletePosts}>Delete Posts</button>
    </div>
  )
}

Dashboard.propTypes = {
  onNewPost: PropTypes.func.isRequired,
  onUpdatePosts: PropTypes.func.isRequired,
  onDeletePosts: PropTypes.func.isRequired
}

export default Dashboard
