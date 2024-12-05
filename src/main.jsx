import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Darktheme from './maincontext/Context.jsx';


createRoot(document.getElementById('root')).render(
  <Darktheme>
    <App />
  </Darktheme>  
  
);