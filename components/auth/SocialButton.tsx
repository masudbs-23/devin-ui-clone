interface SocialButtonProps {
  icon: React.ReactNode;
  children: string;
}

export function SocialButton({ icon, children }: SocialButtonProps) {
  return (
    <button className="w-full md:w-[358px] flex items-center justify-center gap-3 bg-[#1C1C1E] hover:bg-[#2C2C2E] border border-[#2C2C2E] rounded-[8px] h-[40px] text-[#F5F5F5] transition-colors">
      {icon}
      <span>{children}</span>
    </button>
  );
}
