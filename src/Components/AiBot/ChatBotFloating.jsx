import React, { useState } from "react";
import { projects } from "../AiBot/projectData";
import "./ChatBotFloating.css";

export default function ChatBotFloating() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [speaking, setSpeaking] = useState(false);

  const speak = (text) => {
    if (!window.speechSynthesis) {
      alert("Sorry, your browser does not support speech synthesis.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    speechSynthesis.cancel(); // stop previous speech
    speechSynthesis.speak(utterance);
  };

  const handleProjectClick = (id) => {
    const project = projects[id];
    if (project) {
      const text = `This project is called ${project.title}. It uses ${project.tech}. ${project.description}`;
      setMessage(text);
      speak(text);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Button */}
      <button className="chatbot-btn" onClick={() => setOpen(!open)}>
        {open ? "✖" : "💬"}
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="chatbot-popup">
          <h4 className="chat-title">AI Project Guide 🤖</h4>
          <div className="chat-buttons">
            {Object.keys(projects).map((key) => (
              <button
                key={key}
                onClick={() => handleProjectClick(key)}
                className="chat-option"
              >
                {projects[key].title}
              </button>
            ))}
          </div>

          {message && (
            <div className="chat-response">
              <p>{message}</p>
              {speaking && <p className="speaking-status">🔊 Speaking...</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
