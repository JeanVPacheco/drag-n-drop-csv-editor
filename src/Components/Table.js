import React from 'react';
import PropTypes from 'prop-types';

function Table({ info }) {
  console.log(info);
  return (
    <p>Tabela</p>
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
