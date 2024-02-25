import React from 'react';

const productos = [
  { id: 1, nombre: 'Producto 1', precio: 20 },
  { id: 2, nombre: 'Producto 2', precio: 30 },
  { id: 3, nombre: 'Producto 3', precio: 25 },
  
];

const ItemListContainer = () => {
  return (
    <div className="item-list-container">
      <h2>Productos Destacados</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <p>{producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
            <button>Agregar al Careito</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;