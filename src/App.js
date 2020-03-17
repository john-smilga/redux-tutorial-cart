import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";

// redux stuff

import { createStore } from "redux";
import reducer from "./reducer";
// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";
// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0
};

// store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
