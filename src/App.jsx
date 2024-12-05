import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import Header from './Component/header';
import Content from './Component/content';

import Button from './Component/buttton';
import { Themesofdark } from './maincontext/Context';


function App() {
    
    const {theme} = useContext(Themesofdark)
    // const data = useContext(Themesofdark)

  return (
    <div>
    <div style={{ backgroundColor: theme == 'light' ? 'white' : 'black', color: theme == 'light' ? 'black' : 'white' }}>
      <Header />
      <Content />
    </div>
    <Button />
    
  
    </div>
  );
}

export default App;