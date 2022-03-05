import React, { useState } from 'react';
import './App.css';
import DropArea from './Components/DropArea';
import Header from './Components/Header';
import NewEntryForm from './Components/NewEntryForm';
import Table from './Components/Table';

function App() {
  const [info, setInfo] = useState([]);
  return (
    <>
      <Header />
      <DropArea setInfo={setInfo} />
      <NewEntryForm info={info} setInfo={setInfo} />
      <Table info={info} setInfo={setInfo} />
    </>
  );
}

export default App;
