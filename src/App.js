import React, { useState } from 'react';
import './App.css';
import DropArea from './Components/DropArea';
import Header from './Components/Header';

function App() {
  const [info, setInfo] = useState([]);
  return (
    <div className="App">
      <Header />
      <DropArea setInfo={setInfo} />
    </div>
  );
}

export default App;
