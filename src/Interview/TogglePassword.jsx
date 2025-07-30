import React, { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import "./styles.css";

function TogglePassword() {
  const [input, setInput] = useState('')
  const [isPasswordvisible, setIsPasswordvisible] = useState(false)
  const toggle = () => {
    setIsPasswordvisible(!isPasswordvisible)
  }
  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={ isPasswordvisible?"text":"password"}
          id="password"
          value = {input}
          placeholder="Enter password"
          onChange={(e)=>setInput(e.target.value)}
          className="password-input"
          data-testid="password-input"
        />
        <span
          className="icon"
          data-testid="toggle-icon"
          onClick = {toggle}
        >
          {isPasswordvisible ?<Eye size={18} />: <EyeOff size={18} />}
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        {isPasswordvisible ? "Password Visible": "Password Hidden"}
      </span>
    </div>
  );
}

export default TogglePassword;
