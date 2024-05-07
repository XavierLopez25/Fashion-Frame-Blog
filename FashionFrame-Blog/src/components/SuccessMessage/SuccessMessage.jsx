import { useEffect, useState } from 'react'
import '../../styles/SuccessMessage.css'
import PropTypes from 'prop-types'

const SuccessMessage = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      if (onClose) onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  if (!visible) return null

  return (
    <div className="success-message" style={{ animation: `fadeInOut ${duration}ms` }}>
      {message}
    </div>
  )
}

SuccessMessage.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
  onClose: PropTypes.func
}

export default SuccessMessage
