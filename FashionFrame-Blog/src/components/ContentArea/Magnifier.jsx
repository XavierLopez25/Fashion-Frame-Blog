import React, { useState } from 'react'
import '../../styles/Magnifier.css'

const Magnifier = ({ src, alt }) => {
  const [zoom, setZoom] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    const { top, left, width, height } = event.target.getBoundingClientRect()
    const x = ((event.pageX - left) / width) * 100
    const y = ((event.pageY - top) / height) * 100
    setPosition({ x, y })
  }

  return (
    <div
      className="magnifier-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setZoom(false)}
      onMouseEnter={() => setZoom(true)}
    >
      <img src={src} alt={alt} className="post-imageP" />
      {zoom && (
        <div
          className="magnifier-lens"
          style={{
            backgroundPosition: `${position.x}% ${position.y}%`,
            backgroundImage: `url('${src}')`
          }}
        />
      )}
    </div>
  )
}

export default Magnifier
