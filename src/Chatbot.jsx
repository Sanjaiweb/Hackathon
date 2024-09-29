import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Chatbot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const response = await fetch("http://localhost:8080/api/chatbot/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });

    const botResponse = await response.text();
    setMessages([...messages, { user: input, bot: botResponse }]);
    setInput("");
  };

  return (
    <div className="chatbot-container container mt-5">
      <div className="card">
        <div className="card-header">
          <h5>Chatbot</h5>
        </div>
        <div className="card-body" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
          {messages.map((msg, index) => (
            <div key={index} className="mb-3">
              <p className="mb-1"><strong>You:</strong> {msg.user}</p>
              <p className="bg-light p-2 rounded"><strong>Bot:</strong> {msg.bot}</p>
            </div>
          ))}
        </div>
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
            />
            <button className="btn btn-primary" onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
