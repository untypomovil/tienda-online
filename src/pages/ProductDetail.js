import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/products';
import '../styles/ProductDetail.css';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const producto = productos.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!producto) return <p className="product-detail__mensaje--error">Producto no encontrado</p>;

  return (
    <section className="product-detail">
      <h2 className="product-detail__titulo">{producto.nombre}</h2>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="product-detail__imagen"
      />

      <p className="product-detail__descripcion">{producto.descripcion}</p>
      <p className="product-detail__precio">Precio: ${producto.precio}</p>
      <button
        className="product-detail__boton"
        onClick={() => addToCart(producto)}
      >
        Agregar al carrito
      </button>
    </section>
  );
};

export default ProductDetail;