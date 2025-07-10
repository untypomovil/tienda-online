import { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // ✅ Busca en tiempo real incluso si el campo queda vacío
    if (typeof onSearch === 'function') {
      onSearch(value);
    }
  };

    function normalizarTexto(texto) {
      return texto
        .normalize('NFD')                  // descompone acentos
        .replace(/[\u0300-\u036f]/g, '')   // elimina acentos
        .toLowerCase();                    // transforma a minúsculas
    }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onSearch === 'function') {
      onSearch(normalizarTexto(searchTerm));
    } else {
      console.warn('onSearch no es una función');
    }
  };

  return (
    <form className="formulario-busqueda" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-busqueda__campo"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit" className="formulario-busqueda__boton">
        Buscar
      </button>
    </form>
  );
}

export default SearchBar;