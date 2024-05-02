import React from 'react';
import VolumeControl from '../components/VolumeControl/VolumeControl';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import { useState } from 'react';

const HomePage = () => {
  const [volume, setVolume] = useState(50);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is your home page after login.</p>
      <VolumeControl volume={volume} setVolume={setVolume} />
      <MusicPlayer volume={volume} />
    </div>
  );
};

export default HomePage;
