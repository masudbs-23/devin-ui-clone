/**
 * Utility function to merge Tailwind CSS classes
 * Simple version without external dependencies
 */
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
