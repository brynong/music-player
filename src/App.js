import React, { useState } from 'react';

//Styles here
import './styles/App.scss';

//Add components here
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';

//Import Song
import data from './util';


function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;
