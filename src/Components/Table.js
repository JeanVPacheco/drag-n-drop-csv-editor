import React from 'react';
import PropTypes from 'prop-types';

function Table({ info }) {
  if (!info[0]) {
    return null;
  }
  console.log(info);
  const headerValues = Object.keys(info[0]);
  console.log('headerValues', headerValues);

  const tableHead = (
    <thead>
      <tr>
        {
          headerValues.map((value) => <th key={value}>{ value }</th>)
        }
        <th>
          Excluir
        </th>
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {
        info.map((entry) => (
          <tr key={entry.id}>
            {
              Object.values(entry).map((attribute) => (
                <td key={attribute}>{attribute}</td>
              ))
            }
            <td>
              <button
                type="button"
              >
                Remover
              </button>
            </td>
          </tr>
        ))
      }
    </tbody>
  );

  return (
    <table>
      {tableHead}
      {tableBody}
    </table>
  );
}

Table.propTypes = {
  info: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    tel: PropTypes.string,
  })).isRequired,
};

export default Table;
