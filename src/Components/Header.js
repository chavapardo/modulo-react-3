import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de búsqueda
    console.log('Buscando:', searchTerm);
  };

  return (
    <header>
      <h1>Blog</h1>
      <h2>Bienvenido a nuestro blog</h2>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Acerca de</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar..."
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
}

export default Header;