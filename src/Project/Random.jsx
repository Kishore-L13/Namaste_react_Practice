import React, { useState } from 'react';

const Random = () => {
  const [userInput, setUserInput] = useState('');
  const [rolledNumber, setRolledNumber] = useState(null);
  const [message, setMessage] = useState('');

  const handleRoll = () => {
    if (!userInput || isNaN(userInput)) {
      return setMessage(`⚠️ Enter a valid number, not "${userInput}"`);
    }
  
    const allowedValues = [1, 2, 3, 4, 5, 6];
    const guess = Number(userInput);
  
    if (!allowedValues.includes(guess)) {
      return setMessage('⚠️ Enter a number within range [1–6]');
    }
  
    const randomNumber = Math.floor(Math.random() * 6) + 1; // 1 to 6
    setRolledNumber(randomNumber);
  
    if (guess === randomNumber) {
      setMessage(`🎉 Correct! You guessed ${guess} and the dice rolled ${randomNumber}.`);
    } else {
      setMessage(`❌ Oops! You guessed ${guess}, but the dice rolled ${randomNumber}.`);
    }
  };
  

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>🎲 Dice Guessing Game</h1>

      <input
        type="text"
        min="1"
        max="6"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter a number (1–6)"
        style={{ fontSize: "18px", padding: "5px", width: "200px" }}
      />

      <br />

      <button
        onClick={handleRoll}
        style={{ marginTop: "20px", fontSize: "20px", padding: "10px 20px" }}
      >
        Roll Dice
      </button>

      <h3 style={{ marginTop: "30px", fontSize: "24px" }}>{message}</h3>
    </div>
  );
};

export default Random;
