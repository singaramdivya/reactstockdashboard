import React from 'react';
import { FaMoon } from "react-icons/fa";

import './style.css';

const Header = (props) => {
  const {onToggle} = props
  return (
    <header className='headerStyle'>
    <div className='btn-container'>
        <button onClick={onToggle}>
            <FaMoon size={20}/>
        </button>
    </div>
      <h1>Stock Market Dashboard</h1>
      <p>Visualizing monthly stock data for selected companies</p>
    </header>
  );
};



export default Header;
