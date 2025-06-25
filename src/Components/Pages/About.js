import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper-container">
      <div className="about-swinging-label">About</div>

      <h1 className="about-hobbies-title">Hobbies</h1>

      <div className="about-content">
        <div className="about-section">
          <h2>📚 Reading Books</h2>
          <p>Currently reading</p>
          <img src="/powerof_sub.jpg" alt="Current book" className="about-img" />
        </div>

        <div className="about-section">
          <h2>🎨 Designing</h2>
          <p>Current project snapshot</p>
          <img src="/self_help.png" alt="Design work" className="about-img" />
        </div>

        <div className="about-section">
          <h2>🏋️‍♂️ Gym</h2>
          <p>Building Myself</p>
          <img src="/gym.jpg" alt="Gym" className="about-img" />
        </div>

        <div className="about-section">
          <h2>✍️ Script Writing</h2>
          <p>Writing new stories</p>
          <img src="/script.jpg" alt="Script writing" className="about-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
