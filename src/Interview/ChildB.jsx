// ChildB.jsx
import React from 'react';
import { useCount } from './CountContext';

const ChildB = () => {
  const { setCount } = useCount();

  return (
    <div style={{ border: "1px solid red", padding: 10 }}>
      <h3>Child B</h3>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
};

export default ChildB;
