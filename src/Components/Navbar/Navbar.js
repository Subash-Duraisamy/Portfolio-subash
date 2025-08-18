import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavbarItem from '../../NavbarItem';
import './Navbar.css';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 120 && // adjust offset for navbar height
            scrollPosition < offsetTop + offsetHeight - 120
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ Handles click navigation
  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80-75; // adjust this to your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }

    setIsMenuOpen(false);
  };

  // ✅ Handles drag-drop event (optional, can trigger some action)
  const handleDropCoin = (sectionId) => {
    console.log(`Coin dropped on section: ${sectionId}`);
    // you could trigger rewards, animations, etc.
  };

  return (
    <div className="menu-wrapper">
      <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isMenuOpen && (
        <div className="dropdown-menu">
          <ul>
            {sections.map((sec) => (
              <NavbarItem
                key={sec.id}
                sectionId={sec.id}
                label={sec.label}
                isActive={activeSection === sec.id}
                onNavigate={handleNavigate}
                onDropCoin={handleDropCoin}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
