interface SubmitButtonProps {
  children: string;
}

export function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button className="w-full md:w-[358px] bg-white text-black font-medium rounded-[6px] h-[32px] hover:bg-white/90 transition-colors">
      {children}
    </button>
  );
}
