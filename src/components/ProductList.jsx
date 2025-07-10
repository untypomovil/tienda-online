import React from 'react';
import ProductItem from './ProductItem';
import '../styles/ProductList.css';
import { useFiltroProductos } from '../hooks/useFiltroProductos';
import useRangoPrecio from '../hooks/useRangoPrecio';
import FiltroPrecioSlider from './FiltroPrecioSlider';

export default function ProductList({ productos, searchTerm }) {
  const productosPorTexto = useFiltroProductos(productos, searchTerm);

  const {
    precioMinimo,
    precioMaximo,
    setPrecioMinimo,
    setPrecioMaximo
  } = useRangoPrecio({ minInicial: 0, maxInicial: 10000 });

  const productosFiltrados = productosPorTexto.filter(
    p => p.precio >= precioMinimo && p.precio <= precioMaximo
  );

  return (
    <div className="lista-productos__slider-wrapper">
      <FiltroPrecioSlider
        precioMinimo={precioMinimo}
        precioMaximo={precioMaximo}
        setPrecioMinimo={setPrecioMinimo}
        setPrecioMaximo={setPrecioMaximo}
      />

      {productosFiltrados.length === 0 ? (
        <p className="lista-productos__vacio">No hay productos disponibles.</p>
      ) : (
        <section className="lista-productos">
          {productosFiltrados.map(producto => (
            <ProductItem key={producto.id} producto={producto} />
          ))}
        </section>
      )}
    </div>
  );
}