import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Left Section */}
      <div className="home-left">
        <p className="intro-text">Hi I'm</p>
        <h1 className="name-title">Subash D</h1>
        <p className="pendulum-text">Junior Developer</p>

        {/* Desktop-only quote */}
        <div className="desktop-quote">
          <blockquote className="dev-quote">
            “A young developer fueled by creativity and a love for clean design.  
            Believes consistency in effort matters more than speed.”
          </blockquote>
        </div>
      </div>

      {/* Right Section (Image and Mobile Quote) */}
      <div className="home-right">
        <img src="/dev.png" alt="profile" className="profile-img" />

        {/* Mobile-only quote */}
        <div className="mobile-quote">
          <blockquote className="dev-quote">
            “A young developer fueled by creativity and a love for clean design.  
            Believes consistency in effort matters more than speed.”
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Home;
