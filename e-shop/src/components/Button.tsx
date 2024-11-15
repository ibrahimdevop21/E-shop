// Button compoenent
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 rounded-md bg-blue-700 text-white mb-5 hover:bg-blue-300 ${className} ${
        disabled ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
