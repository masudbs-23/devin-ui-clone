import { CLIENTS } from "../lib/constants";

export function ClientsSection() {
  return (
    <section className="bg-[#F2F1F0] py-24" aria-labelledby="clients-heading">
      <div className="max-w-[1240px] mx-auto px-10 md:px-6 sm:px-4">
        <header className="flex flex-col items-center text-center mb-12">
          <p className="text-center text-[15px] text-[#5F5F5D] font-medium mb-2">
            Industry leaders choose to
          </p>
          <h2 id="clients-heading" className="text-center text-[26px] font-semibold leading-tight text-[#141414] tracking-[-0.01em] mb-6">
            Build with <span className="text-[#2200FF]">Puku</span>
          </h2>
          <button 
            className="mx-auto flex justify-center bg-[#141414] border border-[#141414] px-[16px] py-[8px] font-semibold text-[13px] text-[#FFFFFF] rounded-[8px] hover:border-[#141414]/60 transition-colors"
            aria-label="View customer testimonials"
          >
            Hear from our customers
          </button>
        </header>

        <ul className="grid grid-cols-5 gap-4 max-[820px]:grid-cols-3 max-[520px]:grid-cols-2" role="list">
          {CLIENTS.map((client) => (
            <li key={client.name}>
              <div className="bg-[#EDEDED] rounded-[8px] flex items-center justify-center border border-[#EDEDED] h-[76px]">
                <div className="text-[#8B8B89] text-[16px] font-semibold tracking-[-0.01em]">{client.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
