// ✅ Make sure this file is named Button.tsx
import React from 'react';

type CustomButton = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

const Button: React.FC<CustomButton> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
