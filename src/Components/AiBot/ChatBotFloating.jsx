import React, { useEffect, useState } from "react";
import "./ChatBotFloating.css";

// 🔹 IMPORT YOUR AI IMAGE
import figualAvatar from "../../Assets/figual.png";

export default function ChatBotFloating() {
  const [open, setOpen] = useState(false);
  const [spoken, setSpoken] = useState(false);

  const speak = (text) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 0.95;
    utter.pitch = 1;
    window.speechSynthesis.speak(utter);
  };

  useEffect(() => {
    if (open && !spoken) {
      speak("Hi, I am Figual, an AI friend of Shoebash. What do you want now?");
      setSpoken(true);
    }
    if (!open) setSpoken(false);
  }, [open]);

  return (
    <div className="chatbot-wrapper">
      {/* 🔹 FLOATING IMAGE BUTTON */}
      <button
        className="chatbot-btn chatbot-img-btn"
        onClick={() => setOpen(!open)}
        aria-label="Figual AI"
      >
        {open ? (
          <span className="close-icon">✖</span>
        ) : (
          <img
            src={figualAvatar}
            alt="Figual AI"
            className="chatbot-avatar"
          />
        )}
      </button>

      {/* 🔹 POPUP */}
      {open && (
        <div className="chatbot-popup figual-popup">
          {/* AI HEADER */}
          <div className="figual-header">
            <img
              src={figualAvatar}
              alt="Figual"
              className="figual-avatar-large"
            />
            <h4>Hey 👋 I’m Figual</h4>
          </div>

          <p className="figual-intro">
            AI friend of <strong>Subash</strong><br />
            
          </p>

          <div className="chat-buttons">
            <a
              href="mailto:subash@email.com"
              className="chat-option figual-link"
            >
              Email Subash at iamyourjasper@gmail.com
            </a>

            <button
              className="chat-option"
              onClick={() => alert("Enroll clicked 🚀")}
            >
              🧾 Enroll with Figual (soon will be available)
            </button>

            <a
              href="https://www.linkedin.com/in/subash-d-858704258/"
              target="_blank"
              rel="noreferrer"
              className="chat-option figual-link"
            >
              💼 Follow on LinkedIn
            </a>

            <a
              href="https://www.instagram.com/subash_official_insta?igsh=MWY2ZzBra25ia2NpMQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="chat-option figual-link"
            >
              📸 Follow on Instagram
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
