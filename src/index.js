import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./assets/css/bootstrap.min.css";
import "./assets/css/bundle.css";
import "./assets/css/plugins.css";
import "./assets/css/style.css";
import "./assets/css/edit.css"
import "./assets/css/responsive.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
      <App />
  </React.Fragment>
);

