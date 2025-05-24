import React, { useState } from 'react';

const items = [
  { emoji: '🏡', label: 'House' },
  { emoji: '📧', label: 'Mail' },
  { emoji: '🏍', label: 'Bike' },
];

const Tooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      {items.map((i, index) => (
        <div key={index} style={{ display: 'inline-block', margin: '10px', position: 'relative' }}>
          <span
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ fontSize: '2rem', cursor: 'pointer' }}
          >
            {i.emoji}
          </span>
          {hoveredIndex === index && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#222',
              color: '#fff',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              marginTop: '5px'
            }}>
              {i.label}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tooltip;
