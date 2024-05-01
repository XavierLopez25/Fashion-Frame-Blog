import React, { useState } from 'react';
import '../../styles/MusicPlayer.css';
import CustomDropdown from '../SongSelector/SongSelector.jsx';

const MusicPlayer = () => {
  const [currentSong, setCurrentSong] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    { id: 1, name: 'Song 1' },
    { id: 2, name: 'Song 2' },
    { id: 3, name: 'Song 3' },
    // Add more songs as needed
  ];

  const handleSongChange = (event) => {
    setCurrentSong(event.target.value);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="music-image">
        <img src="src/assets/DepthsIconImage.jpg" alt="Music Cover" />
      </div>
      <div className="player-controls">
        <CustomDropdown songs={songs} />
        <div className="controls">
          <button onClick={() => {}}>⏮️</button>
          <button onClick={togglePlay}>{isPlaying ? '⏸️' : '▶️'}</button>
          <button onClick={() => {}}>⏭️</button>
          <button onClick={() => {}}>🔁</button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
