import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import './CartItem.scss';
const CartItem = () => {
  const { cart, removeItem, increaseItem, decreaseItem } = useGlobalContext();

  return (
    <>
      {cart.map(({ id, title, price, img, amount }) => (
        <article className="cart-item" key={id}>
          <div className="img-container">
            <img src={img} alt={title} className="img" />
          </div>
          <div className="info">
            <h4>{title}</h4>
            <p>${price}</p>
            <button onClick={() => removeItem(id)} className="remove-btn">
              remove
            </button>
          </div>
          <div className="action">
            <FaChevronUp onClick={() => increaseItem(id)} />
            <p>{amount}</p>
            <FaChevronDown onClick={() => decreaseItem(id)} />
          </div>
        </article>
      ))}
    </>
  );
};

export default CartItem;
