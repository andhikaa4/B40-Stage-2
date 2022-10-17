import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from 'react-use-cart';
import App from './App';
import { CardContextProvider } from './Component/Context/cardContext';
import { CountContextProvider } from './Component/Context/countContext';
import { ProfileContextProvider } from './Component/Context/profileContext';
import { UserContextProvider } from './Component/Context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
        <ProfileContextProvider>
          <CardContextProvider>
              <CartProvider>

                  <App />
              </CartProvider>
          </CardContextProvider> 
        </ProfileContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
