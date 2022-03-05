import React from 'react';
import inteligovLogo from '../Images/logo.png';

function Header() {
  return (
    <header>
      <div className="header-content">
        <img src={inteligovLogo} alt="inteligov logo" />
      </div>
    </header>
  );
}

export default Header;
