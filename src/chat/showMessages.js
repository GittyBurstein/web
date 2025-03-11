import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // ייבוא Bootstrap

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]); // הוספת הודעה
      setInput(""); // ניקוי השדה
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") { // אם נלחץ מקש Enter
      e.preventDefault();  // מונע את פעולה ברירת המחדל של Enter (כגון מעבר לשורה חדשה)
      handleSendMessage(); // שולח את ההודעה
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h4>💬 צ'אט מעוצב</h4>
        </div>

        {/* תיבת ההודעות */}
        <div className="card-body chat-box" style={{ maxHeight: "550px", overflowY: "auto" }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`d-flex mb-3 ${index % 2 !== 0 ? "justify-content-end" : "justify-content-start"}`}
            >
              <div className={`message-card ${index % 2 !== 0 ? "right-message" : "left-message"}`}>
                <div className="card-body p-2">
                  <p className="m-0">{msg}</p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* קלט לשליחת הודעה */}
        <div className="card-footer">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress} // הוספת האזנה למקש ENTER
              placeholder="הקלד הודעה..."
            />
            <button className="btn btn-primary" onClick={handleSendMessage}>
              שלח 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
