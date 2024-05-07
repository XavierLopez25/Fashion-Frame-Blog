import '../../styles/UserStatus.css'
import PropTypes from 'prop-types'

const UserStatus = ({ username, onLogout, isAuthenticated }) => {
  return (
    <div className="user-status">
      <span>
        User: <strong>{isAuthenticated ? username : 'Guest'}</strong>
      </span>
      <button onClick={onLogout}>{isAuthenticated ? 'Log Out' : 'Log In'}</button>
    </div>
  )
}

UserStatus.propTypes = {
  username: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

export default UserStatus
