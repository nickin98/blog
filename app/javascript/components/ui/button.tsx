import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ 
    children,
    onClick,
  }) => {
  return (
    <button
      onClick={onClick}
      className='bg-yellow rounded-full xl:text-xl font-semibold'
    >
    {children}
    </button>
  );
}

export default Button;
