import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../lib/constants';

export function HeroSection() {
  return (
    <section className="relative flex overflow-hidden h-[1608px] pt-28 lg:min-h-screen lg:pt-36 bg-[#F7F6F4]">
      <div className="mx-auto flex w-full max-w-[var(--container-outer)] flex-col items-center justify-center px-8 lg:px-10">
        <a
          href="#"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#0E0E0E] py-[5px] pl-[7px] pr-[10px] text-[13px] text-[#F5F5F5] shadow-[0_4px_16px_rgba(0,0,0,0.22),0_1px_3px_rgba(0,0,0,0.14)] transition-transform duration-200 hover:scale-[1.02]"
        >
          <span className="rounded-full bg-[#CFC0FF] px-[9px] py-[3px] font-mono text-[11px] font-medium uppercase tracking-[0.04em] text-[#0E0E0E]">
            New
          </span>
          <span className="font-medium">Introducing Security Swarm</span>
          <ArrowUpRight className="h-4 w-4 text-white/60" strokeWidth={1.5} />
        </a>
        <h1 className="mb-10 text-center font-heading text-[13vw] font-medium leading-[1.05] tracking-[-0.02em] text-[#141414] lg:whitespace-nowrap lg:text-[58px] font-[550]">
          Puku, the AI
          <br />
          software engineer
        </h1>
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="rounded-[8px] bg-[#141414] px-[20px] py-[10px] text-[14px] text-[#FFFFFF] font-medium transition-opacity hover:opacity-80"
          >
            Try Puku
          </a>
          <a
            href="#"
            className="rounded-[8px] border border-[#E0DFDD] bg-transparent px-[20px] py-[10px] text-[14px] text-[#141414] font-medium transition-opacity hover:opacity-70"
          >
            Contact sales
          </a>
        </div>
        <figure className="mx-auto w-full max-w-[var(--container-hero-image)] h-[1032px] overflow-hidden rounded-[12px] mb-24">
          <img
            src={IMAGES.HERO}
            alt="Puku, the AI software engineer product interface"
            className="block h-full w-full object-cover"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}
