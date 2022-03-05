import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { parse } from 'papaparse';

import inteligovMascot from '../Images/inteligov-mascot.png';

function DropArea({ setInfo }) {
  const [highlighted, setHighlighted] = useState(false);
  return (
    <div
      className={`drop-area ${highlighted ? 'highlight' : ''}`}
      onDragEnter={() => setHighlighted(true)}
      onDragLeave={() => setHighlighted(false)}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        Array.from(e.dataTransfer.files)
          .filter((file) => file.type === 'text/csv')
          .forEach(async (file) => {
            const text = await file.text();
            const result = parse(text, { header: true });
            setInfo((lastInfo) => [...lastInfo, ...result.data]);
          });
        setHighlighted(false);
      }}
    >
      <img src={inteligovMascot} alt="inteligov mascot" />
      <span className="drop-area-text">
        Solte seu arquivo .CSV aqui
      </span>
    </div>
  );
}

DropArea.propTypes = {
  setInfo: PropTypes.func.isRequired,
};

export default DropArea;
