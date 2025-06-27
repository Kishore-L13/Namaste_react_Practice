import React, { useState } from 'react';
import "./styles.css"

// ✅ Complete the custom hook below
function useToggle(initialValue = false) {
  // your code here
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue((prev) => !prev)
  return [value,toggle]
}

export default function App() {
  // ✅ Use the custom hook inside this component
  const [isOn, toggle] = useToggle(false);

  return (
    /* your toggle function for the onClick method */
    <button onClick={toggle} data-testid="toggle-button">
      {/* Render "ON" or "OFF" based on state */}
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
