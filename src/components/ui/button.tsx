import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <button
        onClick={onClick}
        className={`${className} ${variant === 'primary' ? 'bg-primary' : variant === 'accent' ? 'bg-accent' : 'bg-secondary'} border-border border rounded-xl pl-3 pr-3 pt-2 pb-2 text-lg`}
      >
        { children }
      </button>
    );
});