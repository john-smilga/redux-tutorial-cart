import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import clearCart from "../actions/clearCart";
import total from "../actions/total";
import CartItem from "./CartItem";


const CartContainer = () => {
  const totalItems = useSelector((state) => state.total)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total())
  }, [cart])

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${totalItems}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => {
          dispatch(clearCart());
        }}>clear cart</button>
      </footer>
    </section>
  );
};

export default CartContainer