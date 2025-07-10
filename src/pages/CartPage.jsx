import { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import '../styles/CartPage.css';

function CartPage() {
  const { cartItems, setCartItems, removeFromCart, guardarCompra } = useContext(CartContext);
  const navigate = useNavigate();

  // Memoiza el total para evitar recalcular en cada render
  const total = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.precio, 0),
    [cartItems]
  );

  const finalizarCompra = () => {
    guardarCompra(cartItems);
    localStorage.removeItem('carrito');
    setCartItems([]);
    navigate('/mis-compras');
  };

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <h2>Tu carrito de compras</h2>
        <p>El carrito está vacío.</p>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <h2>Tu carrito de compras</h2>
      <ul className="cart-list">
        {cartItems.map(({ id, imagen, nombre, precio }, index) => (
          <li key={id} className="cart-item">
            <div className="cart-left">
              <img src={imagen} alt={nombre} className="cart-image" />
              <h3 className="cart-name">{nombre}</h3>
            </div>

            <div className="cart-right">
              <p className="cart-price">{precio} MXN</p>
              <button className="cart-button" onClick={() => removeFromCart(id)}>
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
      <div className="cart-total">
        <strong>Total: {total} MXN</strong>
        <button className="checkout-button" onClick={finalizarCompra}>
          Finalizar compra
        </button>
      </div>
    </main>
  );
}

export default CartPage;