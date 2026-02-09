import React from 'react'
type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

function Button({ className, children, onClick, disabled,}: ButtonProps) {
  const baseClases = 'px-6 py-3 font-medium border md:px-8 md:py-3 rounded-md cursor-pointer transition duration-300 delay-15'

  return (
    <button className={`${baseClases} ${className}`} onClick={onClick} disabled={disabled}>
      { children }
    </button>
  )
}

export default Button
