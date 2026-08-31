interface EmailInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
}

export function EmailInput({ id = 'email', label = 'Email address', placeholder = 'Enter your email' }: EmailInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-white/70 text-sm mb-2">
        {label}
      </label>
      <input
        id={id}
        type="email"
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
      />
    </div>
  );
}
