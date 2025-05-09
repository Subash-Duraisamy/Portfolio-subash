import React from 'react';
import './Home.css';


function Home() {



  

  return (
    <div className="home-container">
      {/* Optional: If you want audio later, add this <audio> tag back */}
      {/* <audio ref={audioRef} src="/door_creaky.mp3" loop preload="auto" /> */}

      <div className="home-left">
        <h1 className="name-title">Subash D</h1>
        
        <p className="pendulum-text">Junior Developer</p>
      </div>

      <div className="home-right">
        <img src="/dev.png" alt="profile" className="profile-img" />
      </div>
    </div>
  );
}

export default Home;
