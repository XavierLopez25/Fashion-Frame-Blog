import { useState, useEffect } from 'react'
import '../../styles/GifDisplay.css'

const GifDisplay = () => {
  const initialImages = [
    { src: 'https://media1.tenor.com/m/A8eMkJsv-yIAAAAd/warframe.gif', alt: 'EL TRANSPORTE' },
    {
      src: 'https://media1.tenor.com/m/mvECswet7RgAAAAd/warframe-swagger.gif',
      alt: 'PHORID INVASION'
    },
    {
      src: 'https://media1.tenor.com/m/O5v0zqkteI8AAAAC/warframe-destiny.gif',
      alt: 'DESTINY PLAYER VS WARFRAME PLAYER'
    },
    {
      src: 'https://media1.tenor.com/m/uy5TnRZ_OHEAAAAC/warframe-farming.gif',
      alt: 'FARMING INTENSIFIES'
    },
    {
      src: 'https://media1.tenor.com/m/7s1Rwy0bDjIAAAAd/warframe-hello-chat.gif',
      alt: 'HELLO CHAT'
    }
  ]

  const [images, setImages] = useState(initialImages)

  useEffect(() => {
    setImages((images) => [...images, ...images])
  }, [])

  return (
    <div className="gif-section">
      <ul className="gif-conveyor">
        {images.map((img, index) => (
          <li key={index}>
            <img src={img.src} alt={img.alt} className="gif" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GifDisplay
