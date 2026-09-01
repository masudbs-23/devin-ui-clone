interface SubmitButtonProps {
  children: string;
}

export function SubmitButton({ children }: SubmitButtonProps) {
  return (
    <button className="w-full md:w-[358px] bg-[#141414] text-[#FFFFFF] font-medium rounded-[8px] h-[40px] hover:bg-[#2A2A2A] transition-colors">
      {children}
    </button>
  );
}
