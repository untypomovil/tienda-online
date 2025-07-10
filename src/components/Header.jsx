import '../styles/Header.css';
import logo from '../logo.svg';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import HamburguesaMenu from './HamburguesaMenu';

function Header({ onSearch }) {
  return (
    <header className="encabezado">
      <div className="encabezado__superior">
        <img src={logo} alt="Logo de la tienda" className="encabezado__logo" />
      </div>

      <SearchBar onSearch={onSearch} />

      <nav className="encabezado__nav">
        <ul className="encabezado__lista">
          <li><Link to="/" className="encabezado__enlace">Inicio</Link></li>
          <li><Link to="/productos" className="encabezado__enlace">Productos</Link></li>
          <li><Link to="/contacto" className="encabezado__enlace">Contacto</Link></li>
          <li><Link to="/mis-compras" className="encabezado__enlace">Mis Compras</Link></li>
          <li><Link to="/carrito" className="encabezado__enlace">Carrito</Link></li>
          <li><HamburguesaMenu /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;