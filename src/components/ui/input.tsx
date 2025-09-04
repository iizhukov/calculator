import React from "react";

export interface InputProps {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'invisible';
  align?: 'left' | 'center' | 'right';
}

export const Input = React.forwardRef<HTMLButtonElement, InputProps>(
  ({ label, error, fullWidth, className, ...props }, ref) => {
    return (
      <input type="text" className={
        `${className} bg-card align-right \
        ${props.align === 'right' ? 'text-right' : 'text-right'} \
        p-2 text-[24px]
        `
      }/>
    );
});