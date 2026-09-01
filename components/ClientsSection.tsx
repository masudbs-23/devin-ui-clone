import { CLIENTS } from "../lib/constants";

export function ClientsSection() {
  return (
    <section className="bg-[#F7F6F5] py-20 min-[940px]:py-24" aria-labelledby="clients-heading">
      <div className="mx-auto max-w-[1880px] px-4 min-[940px]:px-8">
        <header className="flex flex-col items-center text-center mb-14">
          <p className="text-center text-[18px] min-[940px]:text-[24px] text-[#5F5F5D] font-medium mb-2">
            Industry leaders choose to
          </p>
          <h2 id="clients-heading" className="text-center text-[40px] min-[940px]:text-[64px] font-semibold leading-tight text-[#141414] tracking-[-0.01em] mb-6">
            Build with <span className="text-[#2200FF]">Devin</span>
          </h2>
          <button 
            className="mx-auto flex justify-center bg-[#141414] border border-[#141414] px-5 py-2.5 font-semibold text-[14px] text-white rounded-full hover:bg-[#2A2A2A] transition-all"
            aria-label="View customer testimonials"
          >
            Hear from our customers
          </button>
        </header>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 w-full justify-items-center" role="list">
          {CLIENTS.map((client) => (
            <li key={client.name} className="w-full flex justify-center">
              <div className="bg-[#EFEFEF] rounded-xl flex items-center justify-center w-full max-w-[351px] h-[125px] transition-all hover:bg-[#E3E3E2] hover:border-[#141414]/30">
                <span className="text-[#5F5F5D] text-[15px] min-[940px]:text-[16px] font-semibold tracking-tight">{client.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
