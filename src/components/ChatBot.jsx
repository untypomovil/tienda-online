// src/components/ChatBot.jsx
import { useState } from 'react';
import '../styles/ChatBot.css';

function ChatBot() {
  const [visible, setVisible] = useState(false);
  const [mensajes, setMensajes] = useState([
    { autor: 'bot', texto: '¡Hola! ¿En qué puedo ayudarte hoy?' }
  ]);

  const toggleChat = () => setVisible(!visible);

  const handleEnviar = (e) => {
    e.preventDefault();
    const input = e.target.elements.mensaje.value;
    if (input.trim()) {
      setMensajes([...mensajes, { autor: 'usuario', texto: input }]);
      e.target.reset();
    }
  };

  return (
    <>
      <button className="chatbot__boton-toggle" onClick={toggleChat}>
        💬
      </button>

      {visible && (
        <div className="chatbot">
          <div className="chatbot__cabecera">Asistente Virtual</div>
          <div className="chatbot__mensajes">
            {mensajes.map((m, i) => (
              <div
                key={i}
                className={`chatbot__mensaje chatbot__mensaje--${m.autor}`}
              >
                {m.texto}
              </div>
            ))}
          </div>
          <form className="chatbot__formulario" onSubmit={handleEnviar}>
            <input type="text" name="mensaje" placeholder="Escribe algo..." />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </>
  );
}

export default ChatBot;