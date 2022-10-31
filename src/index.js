import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
// import {  ProductsProvider } from './contexts/products.context';
import { CategoriesProvider} from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/* <ProductsProvider> */}
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
        {/* </ProductsProvider> */}
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
