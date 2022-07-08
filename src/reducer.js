
const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] }
  }

  if (action.type === "REMOVE") {
    return {
      ...state
      , cart: state.cart.filter((item) => {
        return item.id !== action.payload
      })
    }
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;

      cartTotal.amount += amount;
      cartTotal.total += itemTotal;
      return cartTotal;
    }, { total: 0, amount: 0 });
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === "TOGGLE_AMOUNT") {
    return {
      ...state, cart: state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.toggle === "inc") {
            return cartItem = { ...cartItem, amount: cartItem.amount + 1 }
          }
          if (action.payload.toggle === "dec") {
            return cartItem = { ...cartItem, amount: cartItem.amount - 1 }
          }
        }
        return cartItem;
      }
      )
    }
  }
  return state;
}

export default reducer