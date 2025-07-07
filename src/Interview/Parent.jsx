// Parent.jsx
import React from 'react';
import ChildA from './ChildA';
import ChildB from './ChildB';
import { useCount } from './CountContext';

const Parent = () => {
  const { count } = useCount();

  return (
    <div style={{ border: "2px solid blue", padding: 15 }}>
      <h2>Parent Component</h2>
      <p>Count in Parent: {count}</p>
      <ChildA />
      <ChildB />
    </div>
  );
};

export default Parent;
// // App.jsx
// import React from 'react';
// import { CountProvider } from './CountContext';
// import Parent from './Parent';

// const App = () => (
//   <CountProvider>
//     <Parent />
//   </CountProvider>
// );

// export default App;
