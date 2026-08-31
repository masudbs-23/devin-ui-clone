interface SubmitButtonProps {
  children: string;
}

export function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button className="w-full bg-white text-black font-medium rounded-lg py-3 hover:bg-white/90 transition-colors">
      {children}
    </button>
  );
}
