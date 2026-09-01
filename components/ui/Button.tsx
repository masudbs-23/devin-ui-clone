import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const buttonVariants = {
  primary: 'bg-[#141414] text-white hover:opacity-85',
  secondary: 'bg-[#EDEDED] text-[#141414] hover:bg-[#E3E3E2]',
  outline: 'border border-[#E0DFDD] bg-transparent text-[#141414] hover:border-[#141414]',
  ghost: 'bg-transparent text-[#141414] hover:bg-[#EDEDED]',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-[13px]',
  md: 'px-4 py-2 text-[14px]',
  lg: 'px-6 py-3 text-[16px]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-[8px] font-medium transition-all',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
