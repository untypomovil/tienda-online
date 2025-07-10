import React, { useState } from 'react';
import '../styles/ContactPage.css';

export default function ContactPage() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [status, setStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('enviando');
    try {
      await new Promise(r => setTimeout(r, 500)); // Simulación de envío
      setStatus('éxito');
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="contacto-pagina">
      <h1 className="contacto-pagina__titulo">Contáctanos</h1>

      <form className="contacto-pagina__formulario" onSubmit={handleSubmit} noValidate>
        <label htmlFor="nombre" className="contacto-pagina__label">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          className="contacto-pagina__campo"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email" className="contacto-pagina__label">Correo</label>
        <input
          id="email"
          name="email"
          type="email"
          className="contacto-pagina__campo"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="mensaje" className="contacto-pagina__label">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          className="contacto-pagina__textarea"
          rows="4"
          value={form.mensaje}
          onChange={handleChange}
          required
        />

        <button
          className="contacto-pagina__boton"
          type="submit"
          disabled={status === 'enviando'}
        >
          {status === 'enviando' ? 'Enviando…' : 'Enviar'}
        </button>

        {status === 'éxito' && (
          <p className="contacto-pagina__mensaje--exito">¡Enviado con éxito!</p>
        )}
        {status === 'error' && (
          <p className="contacto-pagina__mensaje--error">Error al enviar.</p>
        )}
      </form>
    </main>
  );
}