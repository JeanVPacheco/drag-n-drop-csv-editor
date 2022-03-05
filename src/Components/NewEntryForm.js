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
      // gera o novo id com base no último elemento do form
      const ID = Number(prev[prev.length - 1].ID) + 1;
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
    <form className="new-entry-form">
      <div className="form-field">
        <span><strong>Nome</strong></span>
        <input
          onChange={handleChange}
          name="username"
          value={username}
          type="text"
          placeholder="Nome"
        />
      </div>
      <div className="form-field">
        <span><strong>Telefone</strong></span>
        <input
          onChange={handleChange}
          name="telephone"
          value={telephone}
          type="text"
          placeholder="Telefone"
        />
      </div>
      <button
        type="button"
        onClick={addNewEntry}
      >
        <strong>+</strong>
      </button>
    </form>
  );
}

NewEntryForm.propTypes = {
  setInfo: PropTypes.func.isRequired,
};

export default NewEntryForm;
