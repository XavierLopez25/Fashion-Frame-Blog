import React from 'react';
import VolumeControl from '../components/VolumeControl/VolumeControl';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import LatestUpdate from '../components/LatestUpdate/LatestUpdate';
import GifDisplay from '../components/GifDisplay/GifDisplay';
import UserStatus from '../components/UserStatus/UserStatus';
import AdminStatus from '../components/AdminStatus/AdminStatus';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import '../styles/HomePage.css';
import { useState } from 'react';

const HomePage = () => {
  const [volume, setVolume] = useState(50);

  return (
    <div className="main-container">
      <div className="section start-section">
        <VolumeControl volume={volume} setVolume={setVolume} />
        <MusicPlayer volume={volume} />
        <LatestUpdate />
        <GifDisplay />
      </div>
      <div className="section main-section">
        <MusicPlayer volume={volume}></MusicPlayer>
      </div>
      <div className="section end-section">
        <UserStatus username="JohnDoe" onLogout={() => {}} />
        <AdminStatus
          emotion="UPSET"
          emoji="💀"
          daysAgo="1"
          additionalText="The making of this website had me feeling very upset, because of the deadline."
        />
        <ImageSlider />
        <img src="src/assets/GetDagath'd.webp" className="getDagathd"></img>
      </div>
    </div>
  );
};

export default HomePage;
