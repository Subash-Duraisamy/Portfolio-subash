import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import { FaPlay, FaPause } from 'react-icons/fa';

function Home() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(err => {
          console.warn("Still blocked:", err);
        });
      }

      // Remove event listeners once the audio starts playing
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };

    // Attach event listeners to detect user interaction (click or scroll)
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    return () => {
      // Clean up event listeners when the component unmounts
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);

      // Pause the audio if the component is unmounted
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Function to handle play/pause
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="home-container">
      <audio ref={audioRef} src="/door_creaky.mp3" loop preload="auto" />
      
      <div className="home-left">
        <h1 className="name-title">Subash D</h1>
        <span className="play-icon" onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </span>

        <p className="pendulum-text">Junior Developer</p>
      </div>

      <div className="home-right">
        <img src="/dev.png" alt="profile" className="profile-img" />
      </div>
    </div>
  );
}

export default Home;
