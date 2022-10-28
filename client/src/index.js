import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from 'react-use-cart';
import App from './App';
import { CardContextProvider } from './Component/Context/cardContext';
import { ProfileContextProvider } from './Component/Context/profileContext';
import { UserContextProvider } from './Component/Context/userContext';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new QueryClient();
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
        <ProfileContextProvider>
          <CardContextProvider>
              <CartProvider>
              <QueryClientProvider client={client}>

                  <App />
                </QueryClientProvider>
              </CartProvider>
          </CardContextProvider> 
        </ProfileContextProvider>
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
