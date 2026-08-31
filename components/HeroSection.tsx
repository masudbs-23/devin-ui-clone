import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../lib/constants';

export function HeroSection() {
  return (
    <section className="relative flex overflow-hidden pt-28 min-[940px]:min-h-screen min-[940px]:pt-36">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center px-5 min-[940px]:px-10">
        <a
          href="#"
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#121111] py-[5px] pl-[7px] pr-[10px] text-[13px] text-white shadow-[0_4px_16px_rgba(0,0,0,0.22),0_1px_3px_rgba(0,0,0,0.14)] transition-transform duration-200 hover:scale-[1.02]"
        >
          <span className="rounded-full bg-[#4530e8] px-[9px] py-[3px] font-mono-devin text-[11px] font-medium uppercase tracking-[0.04em]">
            New
          </span>
          <span className="font-medium">Introducing Security Swarm</span>
          <ArrowUpRight className="h-4 w-4 text-white/60" strokeWidth={1.5} />
        </a>
        <h1 className="mb-10 text-center font-heading text-[13vw] font-medium leading-[100%] tracking-[-0.04em] text-black min-[940px]:whitespace-nowrap min-[940px]:text-[88px]">
          Devin, the AI
          <br />
          software engineer
        </h1>
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#"
            className="rounded-[2px] bg-black px-3 pb-[5px] pt-[6px] text-[16px] text-white transition-opacity hover:opacity-80"
          >
            Try Devin
          </a>
          <a
            href="#"
            className="rounded-[2px] border border-black bg-transparent px-[11px] pb-[4px] pt-[5px] text-[16px] text-black transition-opacity hover:opacity-70"
          >
            Contact sales
          </a>
        </div>
        <figure className="mx-auto w-full max-w-[1920px] overflow-hidden rounded-[10px] drop-shadow-[0_0_8px_#ddd]">
          <img
            src={IMAGES.HERO}
            alt="Devin, the AI software engineer product interface"
            className="block h-auto w-full"
            loading="eager"
          />
        </figure>
      </div>
    </section>
  );
}
