import React from 'react';
import '../styles/FiltroPrecioSlider.css';

export default function FiltroPrecioSlider({
  precioMinimo,
  precioMaximo,
  setPrecioMinimo,
  setPrecioMaximo
}) {
  return (
    <div className="filtro-precio">
      <div className="filtro-precio__grupo">
        <label className="filtro-precio__label">
          Mín: {precioMinimo} MXN
          <input
            type="range"
            className="filtro-precio__rango"
            min="0"
            max={precioMaximo}
            value={precioMinimo}
            onChange={e => setPrecioMinimo(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="filtro-precio__grupo">
        <label className="filtro-precio__label">
          Máx: {precioMaximo} MXN
          <input
            type="range"
            className="filtro-precio__rango"
            min={precioMinimo}
            max="2000"
            value={precioMaximo}
            onChange={e => setPrecioMaximo(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}