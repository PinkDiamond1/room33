import React, {useState} from 'react';
import logo from './logo.svg';
import text from './text_a.svg';
// import alchemistLogo from './alchemistLogo.png';
import alchemistLogo from './alchemist.svg';
import sound from './solar_flare_sound.mp3'
import './App.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

function App() {
  const [enterRoomStyle, setEnterRoomStyle] = useState({});
  const [audio] = useState(new Audio(sound));
  const stopAudio = () => {
    audio.pause();
    setEnterRoomStyle({filter: "none", display: "none"});
  };
  const playAudio = () => {
    audio.play();
    audio.volume = 0.1;
    setEnterRoomStyle({filter: "invert(100%)", display: "block"});
  };
  return (
    <div className="App" style={{filter: enterRoomStyle.filter}}>
      <header className="App-header background-image">
        <img  onMouseEnter={() => playAudio()} onMouseLeave={() => stopAudio()} src={logo} className="room-logo" alt="logo" />
      </header>
      <div className="text-logo" >
        <img src={text} alt="text" />
        <div className="alchemist-link">
          <div style={{color: "#ffbe2e", fontSize: "23px"}}>the alchemist gallery</div>
          <img style={{height: "30px", marginLeft: "5px"}} src={alchemistLogo} alt="text" />
        </div>
      </div>
      <div className="text-instructions">make a circle out of man and woman and draw a traingle on it, and out of a triangle, make again a circle and so you will have your Philosophers Stone</div>
      <div className="enter-subtitles" style={{display: enterRoomStyle.display}}>coming soon</div>
    </div>
  );
}


export default App;
