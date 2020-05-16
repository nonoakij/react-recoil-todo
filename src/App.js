import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  useRecoilState
} from 'recoil';
import {textState} from './atoms'

function App() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {text}
        <form>
          <label>
            Name:
            <input type="text" value={text} onChange={onChange} />
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
