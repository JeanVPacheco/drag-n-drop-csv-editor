import React, { useState } from 'react';
import './App.css';
import DropArea from './Components/DropArea';

function App() {
  const [info, setInfo] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        Learn React
      </header>
      <DropArea setInfo={setInfo} />
    </div>
  );
}

export default App;
