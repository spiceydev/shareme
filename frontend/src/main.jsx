import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import CategoriesProvider from './context/categoriesContext';

ReactDOM.render(
  <React.StrictMode>
    <CategoriesProvider>
      <Router>
        <App />
      </Router>
    </CategoriesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
