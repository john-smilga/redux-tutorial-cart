import { createStore } from "redux";

import cartItems from "./cart-items";
import reducer from "./reducer";

const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0
}

const store = createStore(reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;