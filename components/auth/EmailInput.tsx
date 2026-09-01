interface EmailInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
}

export function EmailInput({ id = 'email', label = 'Email address', placeholder = 'Enter your email' }: EmailInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[#9A9A98] text-sm mb-2">
        {label}
      </label>
      <input
        id={id}
        type="email"
        placeholder={placeholder}
        className="w-full md:w-[358px] bg-[#1C1C1E] border border-[#2C2C2E] rounded-[8px] h-[40px] px-4 text-[#F5F5F5] placeholder:text-[#9A9A98] focus:outline-none focus:border-[#2200FF] transition-colors"
      />
    </div>
  );
}
