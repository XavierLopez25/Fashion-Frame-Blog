import React, { useState } from 'react';
import '../../styles/SongSelector.css';

const CustomDropdown = ({ songs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState('Select a Song');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (songName) => {
    setSelectedSong(songName);
    setIsOpen(false);
  };

  return (
    <div className="custom-select">
      <div className="selected-option" onClick={toggleDropdown}>
        <div className="marquee">{selectedSong}</div>
      </div>
      {isOpen && (
        <div className="options-container">
          {songs.map((song, index) => (
            <div key={index} className="option" onClick={() => handleSelect(song.name)}>
              {song.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
