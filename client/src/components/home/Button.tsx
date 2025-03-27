import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`bg-primary text-white font-medium px-6 py-3 rounded-full ${className}`}>
      {children}
    </button>
  );
};

export default Button;