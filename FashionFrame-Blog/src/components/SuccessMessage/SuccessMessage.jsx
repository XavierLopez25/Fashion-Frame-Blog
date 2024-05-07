import React, { useEffect, useState } from 'react'
import '../../styles/SuccessMessage.css'

const SuccessMessage = ({ message, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      if (onClose) onClose() // Ejecutar cualquier función adicional al cerrar
    }, duration)

    return () => clearTimeout(timer) // Limpieza al desmontar
  }, [duration, onClose])

  if (!visible) return null

  return (
    <div className="success-message" style={{ animation: `fadeInOut ${duration}ms` }}>
      {message}
    </div>
  )
}

export default SuccessMessage
