import React, { useContext, useState } from 'react';
import { Themesofdark } from '../maincontext/Context';

function Button() {
  const {theme, updatetheam } = useContext(Themesofdark);
  
  const handleClick = () => {
    updatetheam(theme === 'light' ? 'dark' : 'light');
  };

  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '16px',
  };

  return (
    <div>
      <button onClick={handleClick} style={buttonStyle}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
}

export default Button;