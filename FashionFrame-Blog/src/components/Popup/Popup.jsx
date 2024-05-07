// Popup.js
import '../../styles/Popup.css'
import PropTypes from 'prop-types'

const Popup = ({ onClose, children }) => {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  )
}

Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Popup
