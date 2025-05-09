import React from 'react';
import { useDrop } from 'react-dnd';

function NavbarItem({ sectionId, label, isActive, onDrop, showCoin }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COIN',
    drop: () => {
      onDrop();
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <li
      ref={drop}
      onClick={() => {
        onDrop();
      }}
      style={{
        position: 'relative',
        padding: '10px',
        background: isActive ? 'skyblue' : isOver ? '#dff9fb' : 'transparent',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        fontFamily: "'Indie Flower', cursive",
      }}
    >
      {label}
      {showCoin && (
        <div
          style={{
            position: 'absolute',
            right: '-30px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '20px',
            height: '20px',
            background: 'grey',
            borderRadius: '50%',
          }}
        />
      )}
    </li>
  );
}

export default NavbarItem;
