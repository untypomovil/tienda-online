import { useState } from 'react';

export default function useRangoPrecio({
  minInicial = 0,
  maxInicial = 10000
} = {}) {
  const [precioMinimo, setPrecioMinimo] = useState(minInicial);
  const [precioMaximo, setPrecioMaximo] = useState(maxInicial);

  return {
    precioMinimo,
    precioMaximo,
    setPrecioMinimo,
    setPrecioMaximo
  };
}