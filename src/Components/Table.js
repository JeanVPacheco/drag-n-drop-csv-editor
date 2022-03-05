import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Table({ info, setInfo }) {
  if (!info[0]) {
    return null;
  }

  const [selected, setSelected] = useState([]);

  const selectRow = (entryId) => {
    setSelected((prev) => [...prev, entryId]);
  };

  const removeRow = (entryId) => {
    setSelected(selected.filter((id) => id !== entryId));
  };

  const toggleRow = (entryId, e) => {
    // se a entrada já estiver selecionada, remove do array,
    // caso contrário adiciona nas selecionadas para remover
    if (!e.target.checked) {
      removeRow(entryId);
    } else {
      selectRow(entryId);
    }
  };

  const removeSelected = () => {
    // atribuo o valor atual para uma variável que será filtrada depois
    let filteredInfo = info;
    // para cada id selecionado, é feito um filtro que remove a entry com este id
    selected.forEach((idToRemove) => {
      filteredInfo = filteredInfo.filter((entry) => entry.ID !== idToRemove);
    });
    // após toda a filtragem, é atribuido o array filtrado para o estado do componente,
    // para que a tabela seja renderizada novamente
    setInfo(filteredInfo);
    // zerando os ids selecionados para que não influencie numa nova seleção
    setSelected([]);
  };

  const headerValues = Object.keys(info[0]);
  const tableHead = (
    <thead>
      <tr>
        {
          headerValues.map((value) => <th key={value}>{ value }</th>)
        }
        <th>
          Selecionar
        </th>
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {
        info.map((entry) => (
          <tr key={entry.ID}>
            {
              Object.values(entry).map((attribute) => (
                <td key={attribute}>{attribute}</td>
              ))
            }
            <td>
              <input
                type="checkbox"
                onClick={(e) => toggleRow(entry.ID, e)}
              />
            </td>
          </tr>
        ))
      }
    </tbody>
  );

  const removeSelectedButton = (
    <button
      type="button"
      onClick={removeSelected}
    >
      Remover Selecionados
    </button>
  );

  return (
    <div className="table-area">
      <table>
        {tableHead}
        {tableBody}
      </table>
      {selected.length > 0 ? removeSelectedButton : null }
    </div>
  );
}

Table.propTypes = {
  info: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    tel: PropTypes.string,
  })).isRequired,
  setInfo: PropTypes.func.isRequired,
};

export default Table;
