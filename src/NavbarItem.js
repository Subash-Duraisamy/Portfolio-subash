import React from 'react';
import { useDrop } from 'react-dnd';

function NavbarItem({ sectionId, label, isActive, onDrop }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COIN',
    drop: () => {
      onDrop(); // Trigger the onDrop handler passed from parent
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <li
      ref={drop}
      style={{
        padding: '10px',
        background: isActive ? 'skyblue' : isOver ? 'white' : 'transparent',
        borderRadius: '10px',
        cursor: isOver ? 'move' : 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    >
      {label}
    </li>
  );
}

export default NavbarItem;
