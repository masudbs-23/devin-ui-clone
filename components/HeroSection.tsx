import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-20 md:py-32" aria-labelledby="hero-heading">
      <div className="mb-6">
        <button 
          className="bg-black text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity"
          aria-label="Learn about Security Swarm feature"
        >
          <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold" aria-hidden="true">NEW</span>
          Introducing Security Swarm
        </button>
      </div>
      <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-center mb-8 text-ink leading-tight">
        Puku, the AI<br />development environment
      </h1>
      
      <div className="flex gap-4 mb-12" role="group" aria-label="Primary actions">
        <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
          Try Puku
        </button>
        <button className="border border-ink/25 px-6 py-3 rounded-lg font-medium text-ink hover:border-ink/60 transition-colors">
          Contact sales
        </button>
      </div>

      <div className="w-full max-w-[90%] mx-auto">
        <Image
          src="/hero-image.png"
          alt="Puku AI development environment interface showing code editor and AI assistant"
          width={1200}
          height={800}
          className="rounded-lg shadow-2xl w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
