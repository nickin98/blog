import classNames from "classnames";
import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  customStyles?: string
}

const Button: React.FC<Props> = ({ 
    children,
    onClick,
    customStyles,
  }) => {
  const styles = classNames(
    `bg-yellow rounded-full`,
    customStyles
  )
  return (
    <button
      onClick={onClick}
      className={styles}
    >
    {children}
    </button>
  );
}

export default Button;
