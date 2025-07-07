// ChildA.jsx
import React from 'react';
import { useCount } from './CountContext';

const ChildA = () => {
  const { count } = useCount();

  return (
    <div style={{ border: "1px solid green", padding: 10 }}>
      <h3>Child A</h3>
      <p>Count: {count}</p>
    </div>
  );
};

export default ChildA;
