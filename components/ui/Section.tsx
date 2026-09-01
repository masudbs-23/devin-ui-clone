import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils/cn';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: 'light' | 'dark' | 'accent';
}

const sectionVariants = {
  light: 'bg-[#F7F6F4] text-[#141414]',
  dark: 'bg-[#0E0E0E] text-[#F5F5F5]',
  accent: 'bg-[#E7E7E7] text-[#141414]',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = 'light', children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn('py-20 lg:py-32', sectionVariants[variant], className)}
        {...props}
      >
        <div className="mx-auto max-w-[var(--container-outer)] px-8 lg:px-10">
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';
