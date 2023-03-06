import React, { useState } from 'react';
import './App.css';
import Input from "./components/input";
import Output from "./components/output";
import MatrixRain from './components/MatrixRain';
import Modal from './components/Modal';

const App = () => {
  const [value, setValue] = useState('');

  return (
    <div className="App" style={{ position: 'relative' }}>
       
      <div style={{ position: 'absolute', zIndex: -1 }}>
        <MatrixRain />
      </div>
      <div className="content" style={{ position: 'relative', zIndex: 1 }}>
        <h1 id="l1">Morse Code Translator</h1>
        <Input value={value} setValue={setValue} />
        <Output value={value} />
        <footer>Footer - Some Shit</footer>
      </div>
    </div>
  );
}

export default App;
