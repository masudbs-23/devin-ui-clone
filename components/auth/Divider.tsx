export function Divider() {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-white/10"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-[#0a0a0a] text-white/50">OR</span>
      </div>
    </div>
  );
}
