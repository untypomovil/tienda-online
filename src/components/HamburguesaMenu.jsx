import { useState } from 'react';
import '../styles/HamburguesaMenu.css';

export default function HamburguesaMenu() {
  const [abierto, setAbierto] = useState(false);
  const toggleMenu = () => setAbierto(!abierto);

  return (
    <div className="menu-hamburguesa">
      <button className="menu-hamburguesa__boton" onClick={toggleMenu}>
        ☰ {/* Icono tipo hamburguesa simple */}
      </button>

      {abierto && (
        <ul className="menu-hamburguesa__dropdown">
          <li className="menu-hamburguesa__item">
            <a href="/" className="menu-hamburguesa__enlace">Inicio</a>
          </li>
          <li className="menu-hamburguesa__item">
            <a href="/productos" className="menu-hamburguesa__enlace">Productos</a>
          </li>
          <li className="menu-hamburguesa__item">
            <a href="/contacto" className="menu-hamburguesa__enlace">Contacto</a>
          </li>
          <li className="menu-hamburguesa__item">
            <a href="/carrito" className="menu-hamburguesa__enlace">Carrito</a>
          </li>
        </ul>
      )}
    </div>
  );
}