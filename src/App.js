import logo from './logo_c.svg';
import text from './text_a.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header background-image">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{color: "transparent"}}>make a circle out of man and woman and draw a traingle on it, and out of a triangle, make again a circle and so you will have your Philosophers Stone</div>
      </header>
      <div className="text-logo" >
        <img src={text} alt="text" />
      </div>
    </div>
  );
}

export default App;
