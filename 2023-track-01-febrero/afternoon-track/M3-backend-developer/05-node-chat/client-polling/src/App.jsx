import { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'https://node-chat-polling.onrender.com/api';
// const API_URL = 'http://localhost:4001/api';

function App() {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const newUsername = prompt('Introduce tu nombre de usuari@:');
    setUsername(newUsername);
  }, []);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      username,
      text: inputText,
    };

    // Guarda un mensaje nuevo en la base de datos
    fetch(`${API_URL}/message`, {
      method: 'POST',
      body: JSON.stringify(payload),
      // Si no ponemos este header en fetch, no se envía el body en JSON
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        // Incluyo el nuevo mensaje respuesta dentro del array messages
        // para que el cliente lo vea de inmendiato
        setMessages((prevMessages) => [...prevMessages, response.data]);
        setInputText('');
      })
      .catch((err) => {
        console.log(err);
        alert('Ha ocurrido un error guardando tu mensaje!');
      });
  };

  return (
    <div className="App">
      <h1>🐔📣 NODE CHAT POLLING</h1>

      <div className="App__messages">
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

      {/* BEM naming */}
      <form className="App__form" onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
          name="message"
          id="message"
        />
        <button type="submit">▶</button>
      </form>
    </div>
  );
}

export default App;
