import '../styles/MisComprasPage.css';

function MisComprasPage() {
  const compras = JSON.parse(localStorage.getItem('compras')) || [];

  const eliminarPedido = (id) => {
    const actualizado = compras.filter(compra => compra.id !== id);
    localStorage.setItem('compras', JSON.stringify(actualizado));
    window.location.reload();
  };

  const regresarPedido = (id) => {
    alert(`🛬 Pedido ${id} ha sido marcado como regresado.`);
  };

  console.log("Historial de compras:", compras);

  return (
    <div className="mis-compras">
      <h2>🧾 Historial de compras</h2>
      {compras.length === 0 ? (
        <p>No has realizado compras aún.</p>
      ) : (
        <div className="mis-compras__grid">
          {compras.map((compra) => (
            <div key={compra.id} className="mis-compras__tarjeta">
              <h3 className="mis-compras__tarjeta-titulo">🧾 Pedido #{compra.id}</h3>
              <p>📅 Fecha: {compra.fecha}</p>

              <ul className="mis-compras__lista-productos">
                {compra.productos.map((producto, index) => (
                  <li key={index} className="mis-compras__producto">
                    {producto.nombre} — ${producto.precio} x {producto.cantidad || 1}
                  </li>
                ))}
              </ul>

              <div className="mis-compras__acciones">
                <button
                  className="mis-compras__boton"
                  onClick={() => regresarPedido(compra.id)}
                >
                  ↩️ Regresar pedido
                </button>
                <button
                  className="mis-compras__boton"
                  onClick={() => eliminarPedido(compra.id)}
                >
                  🗑️ Eliminar pedido
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MisComprasPage;