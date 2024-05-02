import React, { useState, useRef, useEffect } from 'react';
import '../../styles/MusicPlayer.css';
import CustomDropdown from '../SongSelector/SongSelector.jsx';
import { VscChromeMaximize } from 'react-icons/vsc';
import { VscChromeMinimize } from 'react-icons/vsc';
import { VscChromeClose } from 'react-icons/vsc';
import { LiaVolumeUpSolid } from 'react-icons/lia';
import { MdFastForward } from 'react-icons/md';
import { MdFastRewind } from 'react-icons/md';
import { MdOutlinePause } from 'react-icons/md';
import { MdLoop } from 'react-icons/md';
import { IoIosPlay } from 'react-icons/io';

const MusicPlayer = ({ volume }) => {
  const [currentSong, setCurrentSong] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongName, setCurrentSongName] = useState('Select a Song');
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef(new Audio());

  const songs = [
    {
      id: 1,
      name: 'Cream Blade, romi - Daydream',
      url: '../../assets/MP3/Cream Blade, romi - Daydream.mp3',
    },
    { id: 2, name: 'Dawn Wall - Spears', url: '../../assets/MP3/Dawn Wall - Spears.mp3' },
    { id: 3, name: 'Droptek - Back 2 U', url: '../../assets/MP3/Droptek - Back 2 U.mp3' },
    {
      id: 4,
      name: 'Droptek, Isabel Higuero - Killing Time',
      url: '../../assets/MP3/Droptek, Isabel Higuero - Killing Time.mp3',
    },
    { id: 5, name: 'Fox Stevenson - Knowhow', url: '../../assets/MP3/Fox Stevenson - Knowhow.mp3' },
    { id: 6, name: 'JNR.h - Waking Up', url: '../../assets/MP3/JNR.h - Waking Up.mp3' },
    {
      id: 7,
      name: 'Lenzman, Artificial Intelligence - String City - Artificial Intelligence Remix',
      url: '../../assets/MP3/Lenzman, Artificial Intelligence - String City - Artificial Intelligence Remix.mp3',
    },
    { id: 8, name: 'Monroe - Eventide', url: '../../assets/MP3/Monroe - Eventide.mp3' },
    {
      id: 9,
      name: 'Peter Lix - Echoes Of My Mind',
      url: '../../assets/MP3/Peter Lix - Echoes Of My Mind.mp3',
    },
    {
      id: 10,
      name: 'Polaris - Prismatic Gate',
      url: '../../assets/MP3/Polaris - Prismatic Gate.mp3',
    },
  ];

  useEffect(() => {
    audioRef.current.volume = volume / 100;
    audioRef.current.loop = isLooping;
  }, [volume, isLooping]);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong;
      audioRef.current.play().catch((e) => console.log('Failed to play automatically:', e));
      setIsPlaying(true);
    }
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const handleSongChange = (song) => {
    setCurrentSong(song.url);
    setCurrentSongName(song.name);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  const handleNext = () => {
    if (!isLooping) {
      const currentIndex = songs.findIndex((song) => song.url === currentSong);
      const nextIndex = (currentIndex + 1) % songs.length;
      setCurrentSong(songs[nextIndex].url);
      handleSongChange(songs[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (!isLooping) {
      const currentIndex = songs.findIndex((song) => song.url === currentSong);
      const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
      setCurrentSong(songs[previousIndex].url);
      handleSongChange(songs[previousIndex]);
    }
  };

  return (
    <div className="music-player">
      <div className="player-header">
        <div className="header-controls">
          <div className="volume-controlM">
            <div className="window-controlsM">
              <div className="volume-labelM">
                <LiaVolumeUpSolid className="volume-iconM" />
                <span className="volume-textM">Volume!</span>
              </div>
              <div className="control-buttonsM">
                <button className="minimizeM">
                  <VscChromeMinimize className="minimize-iconM" />
                </button>
                <button className="maximizeM">
                  <VscChromeMaximize className="maximize-iconM" />
                </button>
                <button className="closeM">
                  <VscChromeClose className="close-iconM" />
                </button>
              </div>
            </div>
          </div>
          <div className="mp-container">
            <div className="player-controls">
              <div className="music-image">
                <img src="src/assets/DepthsIconImage.jpg" alt="Music Cover" />
              </div>
              <div className="mselection-controls">
                <CustomDropdown
                  songs={songs}
                  handleSongChange={handleSongChange}
                  selectedSongName={currentSongName}
                />
                <div className="controls">
                  <button onClick={handlePrevious}>
                    <MdFastRewind />
                  </button>
                  <button onClick={togglePlay}>
                    {isPlaying ? <MdOutlinePause /> : <IoIosPlay />}
                  </button>
                  <button onClick={handleNext}>
                    <MdFastForward />
                  </button>
                  <button onClick={toggleLoop} className={isLooping ? 'active-loop' : ''}>
                    <MdLoop />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
