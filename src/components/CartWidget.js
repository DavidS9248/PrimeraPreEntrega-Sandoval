
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = () => {
  const itemCount = 5; 

  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
      <div className="cart-notification">
        <span>{itemCount}</span>
      </div>
    </div>
  );
};

export default CartWidget;