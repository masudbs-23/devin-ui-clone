interface PukuMarkProps {
  className?: string;
}

export function PukuMark({ className = 'h-6 w-6 text-black' }: PukuMarkProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-label="Puku logo">
      <ellipse cx="16" cy="7" rx="3.4" ry="5.2" />
      <ellipse cx="16" cy="25" rx="3.4" ry="5.2" />
      <ellipse cx="7" cy="11.5" rx="3.4" ry="5.2" transform="rotate(-60 7 11.5)" />
      <ellipse cx="25" cy="20.5" rx="3.4" ry="5.2" transform="rotate(-60 25 20.5)" />
      <ellipse cx="25" cy="11.5" rx="3.4" ry="5.2" transform="rotate(60 25 11.5)" />
      <ellipse cx="7" cy="20.5" rx="3.4" ry="5.2" transform="rotate(60 7 20.5)" />
    </svg>
  );
}

// Backward compatibility alias
export const DevinMark = PukuMark;
