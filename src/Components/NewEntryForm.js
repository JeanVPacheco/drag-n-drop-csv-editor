import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewEntryForm({ setInfo }) {
  const [username, setUsername] = useState('');
  const [telephone, setTelephone] = useState('');

  const handleChange = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;
      default:
        break;
    }
  };

  const addNewEntry = (e) => {
    e.preventDefault();
    setInfo((prev) => {
      const ID = prev.length + 1;
      const newEntry = {
        ID,
        Nome: username,
        Telefone: telephone,
      };
      return [...prev, newEntry];
    });
    setUsername('');
    setTelephone('');
  };

  return (
    <form>
      Nome
      <input
        onChange={handleChange}
        name="username"
        value={username}
        type="text"
        placeholder="Nome"
      />
      Telefone
      <input
        onChange={handleChange}
        name="telephone"
        value={telephone}
        type="text"
        placeholder="Telefone"
      />
      <button
        type="button"
        onClick={addNewEntry}
      >
        Adicionar
      </button>
    </form>
  );
}

NewEntryForm.propTypes = {
  setInfo: PropTypes.func.isRequired,
};

export default NewEntryForm;
