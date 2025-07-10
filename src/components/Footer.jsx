// src/components/Footer.jsx
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} La Guadalupana. Todos los derechos reservados.</p>

      <nav>
        <ul className="footer__nav">
          <li><a href="/privacidad" className="footer__enlace">Privacidad</a></li>
          <li><a href="/terminos" className="footer__enlace">Términos</a></li>
          <li><a href="/soporte" className="footer__enlace">Soporte</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;