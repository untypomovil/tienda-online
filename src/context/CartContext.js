import { createContext, useState } from 'react';
import { useCarritoPersistente } from '../hooks/useCarritoPersistente';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // 🧠 Hook que recupera y guarda el carrito automáticamente
  useCarritoPersistente(cartItems, setCartItems);

  const addToCart = (producto) => {
    const productoConCantidad = { ...producto, cantidad: 1 };
    setCartItems((prev) => [...prev, productoConCantidad]);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ Nueva función para guardar compras en localStorage
  const guardarCompra = (productos) => {
    const historial = JSON.parse(localStorage.getItem('compras')) || [];
    const nuevaCompra = {
      id: 'PED' + Math.floor(Math.random() * 100000),
      fecha: new Date().toLocaleDateString(),
      productos,
    };
    localStorage.setItem('compras', JSON.stringify([...historial, nuevaCompra]));
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      setCartItems, // 👈 esta línea es la clave
      addToCart,
      removeFromCart,
      guardarCompra
    }}>
      {children}
    </CartContext.Provider>
  );
}