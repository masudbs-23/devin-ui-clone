import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../../lib/constants';

export function HeroSection() {
  return (
    <section className="relative flex overflow-hidden h-[1464px]  lg:min-h-screen mt-12 bg-[#F7F6F4]">
      <div className="mx-auto flex w-full max-w-[1905px] flex-col items-center justify-center px-8 lg:px-10">
        <a
          href="#"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#0E0E0E] py-[5px] pl-[7px] pr-[10px] text-[13px] text-[#F5F5F5] shadow-[0_4px_16px_rgba(0,0,0,0.22),0_1px_3px_rgba(0,0,0,0.14)] transition-transform duration-200 hover:scale-[1.02] h-[32.5px] w-[258px] whitespace-nowrap mt-2"
        >
          <span className="rounded-full bg-[#CFC0FF] px-[9px] py-[3px] font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-[#0E0E0E]">
            New
          </span>
          <span className="font-medium">Introducing Security Swarm</span>
          <ArrowUpRight className="h-4 w-4 text-white/60" strokeWidth={1.5} />
        </a>
        <h1 className="mb-8 text-center font-heading text-[13vw] font-medium leading-[1.05] tracking-[-0.02em] text-[#141414] lg:whitespace-nowrap lg:text-[72px] font-[500]">
          Puku, the AI
          <br />
          software engineer
        </h1>
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="rounded-[2px] bg-[#141414] px-[20px] py-[8px] text-[14px] text-[#FFFFFF] font-medium transition-opacity hover:opacity-80"
          >
            Try Puku
          </a>
          <a
            href="#"
            className=" flex  items-center justify-center rounded-[2px] border border-black bg-transparent w-[124px] h-[35px] text-[16px] text-black font-medium transition-opacity hover:opacity-70"
          >
            Contact sales
          </a>
        </div>
        <figure className="mx-auto w-full max-w-[1789px] overflow-hidden rounded-[10px] drop-shadow-[0_0_8px_#ddd]">
          <img
            src={IMAGES.HERO}
            alt="Puku, the AI software engineer product interface"
            className="block w-full h-auto object-cover"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}
