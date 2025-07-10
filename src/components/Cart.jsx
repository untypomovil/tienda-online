import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/Cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.precio, 0);

  return (
    <aside className="carrito">
      <h2>Carrito</h2>
      {cartItems.map((item, index) => (
        <div
          key={item.id}
          className={`carrito__item ${index === cartItems.length - 1 ? 'carrito__item--ultimo' : ''}`}
        >
          <div className="carrito__detalles">
            <span className="carrito__nombre">{item.nombre}</span>
            <span className="carrito__precio">{item.precio} MXN</span>
            <button
              className="carrito__boton"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      <hr />
      <strong>Total: ${total} MXN</strong>
      <Link to="/carrito">
        <button className="carrito__boton--principal">Finalizar compra</button>
      </Link>
    </aside>
  );
}

export default Cart;