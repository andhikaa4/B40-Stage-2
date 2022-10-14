import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CardContextProvider } from './Component/Context/cardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardContextProvider>
    <App />
    </CardContextProvider>
  </React.StrictMode>
);
