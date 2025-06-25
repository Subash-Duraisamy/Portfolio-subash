import React from 'react';
import './Contact.css';
import { FaInstagram, FaYoutube, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contactpage-container">
      <div className="contactpage-hanging-title">Contact</div>

      <div className="contactpage-links">
        <a
          href="https://www.instagram.com/subash_official_insta"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaInstagram className="icon" />
          <span>@subash_official_insta</span>
        </a>

        <a
          href="https://youtube.com/@boovictor?si=pqbs0FO2ikF2EKPv"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaYoutube className="icon" />
          <span>Boo and Victor</span>
        </a>

        {/* <a
          href="https://www.youtube.com/@Victor"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaYoutube className="icon" />
          <span>Victor</span>
        </a> */}

        <a
          href="https://www.facebook.com/yourfacebookname"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
        >
          <FaFacebook className="icon" />
          <span>subash D</span>
        </a>

        <a href="mailto:subash111425@gmail.com" className="contact-icon">
          <FaEnvelope className="icon" />
          <span>subash111425@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
