import React, { useState } from 'react';
import './styles.css'

function BMI_calculator() {
  // TODO: useState for weight
  // TODO: useState for height
  // TODO: useState for calculated BMI
  // TODO: useState for BMI category
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [category,setCategory] = useState("")
  // TODO: Function to calculate BMI
  const calculateBMI = () => {
    // - Convert inputs to numbers
    // - Validate they are positive
    // - Apply BMI formula: weight / ((height / 100) ^ 2)
    // - Round the result
    // - Set BMI and category
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) {
      alert("Please enter valid positive numbers for weight and height.")
      return
    }
    const bmiValue = w / ((h / 100) ** 2);
    const roundedBMI = parseFloat(bmiValue.toFixed(1))
    setBMI(roundedBMI);
    setCategory(getCategory(roundedBMI))
  };

  // TODO: Function to return category based on BMI value
  const getCategory = (bmi) => {
    // - if bmi < 18.5 => "Underweight"
    // - else if bmi < 24.9 => "Normal"
    // - else if bmi < 29.9 => "Overweight"
    // - else => "Obese"
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal";
    if (bmi < 29.9) return "Overweight";
    return "Obese"
  };

  // Optional: Function to reset inputs and outputs
  const reset = () => {
    // - Clear all state values
    setWeight("");
    setHeight("");
    setBMI(null);
    setCategory("");
  };

  return (
    <div style={{padding:"20px",maxWidth:"400px",margin:"auto"}}>
      <h2>BMI Calculator</h2>

      {/* TODO: Input field for weight */}
      <input type="number" placeholder="Weight (kg)"
      value={weight}
onChange={(e) => setWeight(e.target.value)}
      />
      {/* TODO: Input field for height */}
      <input type="number" placeholder="Height (cm)"
      value={height}
onChange={(e) => setHeight(e.target.value)}
      />
      {/* TODO: Button to calculate BMI */}
      <button onClick={calculateBMI}>Calculate BMI</button>
      {/* TODO: Button to reset */}
 <button onClick={reset}>Reset</button>
      {/* TODO: Conditionally render result */}
      {bmi !== null && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p> Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default BMI_calculator;
