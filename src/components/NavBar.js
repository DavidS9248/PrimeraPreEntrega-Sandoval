import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Tienda Nike</h1> 
      <ul>
        <li>Zapatillas</li>
        <li>Gorras</li>
        <li>Camisetas</li>
        
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;