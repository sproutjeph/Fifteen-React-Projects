import React from 'react';
import { useGlobalContext } from '../context';
import './CartContainer.scss';
import CartItem from './CartItem';

const CartContainer = () => {
  const { clearCart, total } = useGlobalContext();
  return (
    <section className="cart-container">
      <h1>Your Bag</h1>
      <div className="item-container">
        {' '}
        <CartItem />{' '}
      </div>

      <footer>
        <h4>Total</h4>
        <span>$ {total}</span>
      </footer>
      <button onClick={clearCart} className="clear-cart">
        clear cart
      </button>
    </section>
  );
};

export default CartContainer;
