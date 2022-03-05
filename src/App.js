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
      {/* Renderiza opção de adicionar nova entrada apenas
      se algum csv foi carregado */}
      <section className="form-table-section">
        {
          info.length > 0
            ? <NewEntryForm info={info} setInfo={setInfo} />
            : null
        }
        <Table info={info} setInfo={setInfo} />
      </section>
    </>
  );
}

export default App;
