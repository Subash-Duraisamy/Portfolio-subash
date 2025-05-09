import React, { useState, useEffect } from 'react';
import Coin from '../../Coin';
import NavbarItem from '../../NavbarItem';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState(null);

  // Function to check which section is in the viewport
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // Current scroll position
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;
      
      // If the section is in the viewport, update the active section
      if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle on drop
  const handleDrop = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="right-navbar">
      <Coin />
      <ul>
        {sections.map((sec) => (
          <NavbarItem
            key={sec.id}
            sectionId={sec.id}
            label={sec.label}
            isActive={activeSection === sec.id}
            onDrop={() => handleDrop(sec.id)} // Pass the onDrop handler to NavbarItem
          />
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
