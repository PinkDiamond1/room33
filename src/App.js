import React, {useState} from 'react';
import logo from './logo_c.svg';
import text from './text_a.svg';
import sound from './solar_flare_sound.mp3'
import './App.css';

function App() {
  const [enterRoomStyle, setEnterRoomStyle] = useState({});
  const [audio] = useState(new Audio(sound));
  const stopAudio = () => {
    audio.pause();
    setEnterRoomStyle({filter: "none", display: "none"});
  };
  const playAudio = () => {
    audio.play();
    setEnterRoomStyle({filter: "invert(100%)", display: "block"});
  };
  return (
    <div className="App" style={{filter: enterRoomStyle.filter}}>
      <header className="App-header background-image">
        <img  onMouseEnter={() => playAudio()} onMouseLeave={() => stopAudio()} src={logo} className="room-logo" alt="logo" />
      </header>
      <div className="text-logo" >
        <img src={text} alt="text" />
      </div>
      <div className="text-instructions">make a circle out of man and woman and draw a traingle on it, and out of a triangle, make again a circle and so you will have your Philosophers Stone</div>
      <div className="enter-subtitles" style={{display: enterRoomStyle.display}}>enter</div>
    </div>
  );
}

// <audio controls autoPlay src={abc} />
window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  audio.volume = 0.2;
  audio.play();
});


export default App;
