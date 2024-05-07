import { useState } from 'react'
import '../../styles/SongSelector.css'
import PropTypes from 'prop-types'

const CustomDropdown = ({ songs, selectedSongName, handleSongChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleSelect = (song) => {
    handleSongChange(song)
    setIsOpen(false)
  }

  return (
    <div className="custom-select">
      <div className="selected-option" onClick={toggleDropdown}>
        <div className="marquee">{selectedSongName}</div>
      </div>
      {isOpen && (
        <div className="options-container">
          {songs.map((song, index) => (
            <div key={index} className="option" onClick={() => handleSelect(song)}>
              {song.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

CustomDropdown.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
      // Add other required properties if necessary
    })
  ).isRequired,
  selectedSongName: PropTypes.string.isRequired,
  handleSongChange: PropTypes.func.isRequired
}

export default CustomDropdown
