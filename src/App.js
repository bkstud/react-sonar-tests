import React from 'react';
import {ShopContextProvider} from './contexts/ShopContext'

import Products from './components/Products';
import Basket from './components/Basket';
import Checkout from './components/Checkout';

const App = () => (
  <ShopContextProvider>
    <Products />
    <br></br>
    <Basket />
    <br></br>
    <Checkout />
  </ShopContextProvider>
);

export default App;
