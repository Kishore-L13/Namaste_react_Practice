import React, { useState } from 'react';

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue((prev) => !prev)
  return [value,toggle]
}
export default function App() {
  const [isOn, toggle] = useToggle(false);
  return (
    <button onClick={toggle} data-testid="toggle-button">
      {isOn ? "ON" : "OFF"}
    </button>
  );
}
