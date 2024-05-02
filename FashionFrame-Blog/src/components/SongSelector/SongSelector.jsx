import React, { useState } from 'react';
import '../../styles/SongSelector.css';

const CustomDropdown = ({ songs, selectedSongName, handleSongChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (song) => {
    handleSongChange(song);
    setIsOpen(false);
  };

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
  );
};

export default CustomDropdown;
