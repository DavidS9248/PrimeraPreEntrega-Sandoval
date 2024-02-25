import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'; 

function App() {
  const handleClick = () => {
    alert('¡Has hecho click!');
  };

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />

      
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>Contenido Adicional</h2>
        <button onClick={handleClick}>HAz click en esta parte</button>
      </div>
    </div>
  );
}

export default App;