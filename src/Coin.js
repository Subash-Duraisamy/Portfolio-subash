import { useDrag } from 'react-dnd';

function Coin() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COIN',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'grey',
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
      }}
    />
  );
}

export default Coin;
