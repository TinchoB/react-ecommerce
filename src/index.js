import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './NavBar';
import ItemListContainer from './ItemListContainer';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <ItemListContainer />
  </React.StrictMode>,
  document.getElementById('root')
);