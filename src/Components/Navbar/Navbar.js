import React, { useState } from 'react';
import Coin from '../../Coin.js';
import NavbarItem from '../../NavbarItem';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState(null);  // Track the active section

  return (
    <div className="right-navbar">
      <Coin />
      <ul>
        {sections.map((sec) => (
          <NavbarItem
            key={sec.id}
            sectionId={sec.id}
            label={sec.label}
            isActive={activeSection === sec.id} // Pass active state to each NavbarItem
            onDrop={() => setActiveSection(sec.id)} // Update active section on drop
          />
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
