import React, { useState } from 'react';
import './App.css';
import DropArea from './Components/DropArea';
import Header from './Components/Header';
import Table from './Components/Table';

function App() {
  const [info, setInfo] = useState([]);
  return (
    <>
      <Header />
      <DropArea setInfo={setInfo} />
      <Table info={info} setInfo={setInfo} />
    </>
  );
}

export default App;
