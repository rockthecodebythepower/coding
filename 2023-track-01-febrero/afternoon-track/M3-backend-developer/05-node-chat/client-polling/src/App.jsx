import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:4001/api';

function App() {
  const [messages, setMessages] = useState([]);

  const getMessages = async () => {
    return fetch(`${API_URL}/message`, { method: 'GET' })
      .then((res) => res.json())
      .then((response) => {
        // Esto habría que mejorarlo para que filtre los mensajes nuevos y los añada sobre los anteriores
        // en lugar de pisar el estado completo
        setMessages(response.data);
      })
      .catch((err) => {
        console.log('ERROR EN API:', err);
      });
  };

  // Cargamos los mensajes nada mas entrar en la app
  useEffect(() => {
    getMessages().then(() => {
      // Cargamos los mensajes cada 5s por si hay algo nuevo (POLLING)
      setInterval(() => {
        getMessages();
      }, 5000);
    });
  }, []);

  return (
    <div className="App">
      <h1>🐔📣 NODE CHAT POLLING</h1>

      {messages.map((message) => (
        <div key={message._id}>
          <p>
            <b>{message.username}</b>
          </p>
          <p>{message.text}</p>
          <span>{message.createdAt}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
