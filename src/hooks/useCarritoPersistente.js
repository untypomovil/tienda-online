import { useEffect, useRef } from 'react';
import '../styles/Cart.css';

export function useCarritoPersistente(carrito, setCarrito) {
  const cargado = useRef(false);

  useEffect(() => {
    const guardado = localStorage.getItem('carrito');
    if (guardado) {
      console.log('✅ Carrito restaurado:', JSON.parse(guardado)); // ← Aquí
      setCarrito(JSON.parse(guardado));
    }
    cargado.current = true;
  }, [setCarrito]);

  useEffect(() => {
    if (cargado.current && carrito.length > 0) {
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
  }, [carrito]);
}