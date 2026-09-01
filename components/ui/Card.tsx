import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
}

const cardVariants = {
  default: 'bg-[#EDEDED]',
  elevated: 'bg-[#EDEDED] shadow-lg',
  bordered: 'bg-[#EDEDED] border border-[#E0DFDD]',
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('rounded-[12px] overflow-hidden', cardVariants[variant], className)}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';
