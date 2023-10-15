import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/partials/App';
//const URL = "https://api.weatherapi.com/v1/current.json?key=cd8ab197a16b48e595a50816231410&q=india";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
