import React, { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`
        bg-lime-400
        text-black
        px-6
        py-3
        rounded-lg
        shadow-neon
        hover:brightness-110
        transition-all
        duration-200
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
