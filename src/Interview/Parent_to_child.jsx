import React, { useState } from 'react';

const ChildA = ({ count }) => {
  return (
    <div style={{ border: "1px solid green", padding: "10px" }}>
      <h3>Child A</h3>
      <p>Count from parent: {count}</p>
    </div>
  );
};

const ChildB = ({ onIncrement }) => {
  return (
    <div style={{ border: "1px solid red", padding: "10px" }}>
      <h3>Child B</h3>
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);

  // Function to update state (passed to Child B)
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ border: "2px solid blue", padding: "15px" }}>
      <h2>Parent Component</h2>
      <p>Current Count in Parent: {count}</p>

      <ChildA count={count} />
      <ChildB onIncrement={handleIncrement} />
    </div>
  );
};

export default Parent;
