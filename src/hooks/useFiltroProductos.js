// src/hooks/useFiltroProductos.js
import { useMemo } from 'react';

export function useFiltroProductos(productos, searchTerm) {
  const productosFiltrados = useMemo(() => {
    const texto = searchTerm.toLowerCase();
    return productos.filter((p) =>
      p.nombre?.toLowerCase().includes(texto)
    );
  }, [productos, searchTerm]);

  return productosFiltrados;
}