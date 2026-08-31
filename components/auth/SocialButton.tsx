interface SocialButtonProps {
  icon: React.ReactNode;
  children: string;
}

export function SocialButton({ icon, children }: SocialButtonProps) {
  return (
    <button className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg py-3 text-white transition-colors">
      {icon}
      <span>{children}</span>
    </button>
  );
}
