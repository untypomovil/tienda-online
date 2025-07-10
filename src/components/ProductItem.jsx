import '../styles/ProductItem.css';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function ProductItem({ producto }) {
  const { addToCart } = useContext(CartContext);

  return (
    <article className="producto">
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="producto__imagen"
      />
      <h3 className="producto__nombre">{producto.nombre}</h3>
      <p className="producto__descripcion">{producto.descripcion}</p>
      <p className="producto__precio">${producto.precio}</p>

      <button
        className="producto__boton"
        onClick={() => addToCart(producto)}
      >
        Agregar al carrito
      </button>

      <Link to={`/producto/${producto.id}`}>
        <button className="producto__boton--detalles">Ver detalles</button>
      </Link>
    </article>
  );
}

export default ProductItem;