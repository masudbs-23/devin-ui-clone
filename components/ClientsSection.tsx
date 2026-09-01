import { CLIENTS } from "../lib/constants";

export function ClientsSection() {
  return (
    <section className="px-4 py-20 bg-[#F2F1F0]" aria-labelledby="clients-heading">
      <div className="max-w-[1280px] mx-auto px-8">
        <header className="flex flex-col items-center text-center mb-12">
          <p className="text-sm md:text-xl text-[#5F5F5D] font-medium mb-2">
            Industry leaders choose to
          </p>
          <h2 id="clients-heading" className="text-7xl font-medium leading-tight text-[#141414] tracking-[-0.015em]">
            Build with <span className="text-[#2200FF]">Puku</span>
          </h2>
          <button 
            className="mt-8 bg-[#141414] border border-[#141414] px-6 py-2 font-normal text-[#FFFFFF] rounded-[8px] hover:border-[#141414]/60 transition-colors"
            aria-label="View customer testimonials"
          >
            Hear from our customers
          </button>
        </header>

        <ul className="grid grid-cols-3 md:grid-cols-5 gap-4" role="list">
          {CLIENTS.map((client) => (
            <li key={client.name}>
              <div className="bg-[#EDEDED] rounded-[12px] flex items-center justify-center border border-[#EDEDED] h-[40px] md:h-[69px] lg:h-[125px]">
                <div className="text-[#9A9A98] text-sm font-medium">{client.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
