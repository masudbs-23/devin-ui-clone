import { ChevronRight } from 'lucide-react';
import { USECASES } from '../lib/constants';

interface UseCaseCardProps {
  title: string;
  items: string[];
  link?: string;
  image?: string;
  className?: string;
}

function UseCaseCard({ title, items, link, image, className = '' }: UseCaseCardProps) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-2xl bg-[#f4f3f1] ${className}`}>
      <div className="relative flex flex-1 flex-col p-7 pb-6 min-[940px]:p-9">
        <h3 className="font-heading text-[24px] font-medium leading-[1.15] tracking-[-0.02em] text-black">
          {title}
        </h3>
        <ul className="mt-5 list-none p-0">
          {items.map((item) => (
            <li key={item} className="mt-2 flex items-start gap-2 text-[15px] leading-[1.35] text-black/70 first:mt-0">
              <span aria-hidden="true" className="inline-flex text-black">
                -
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {link && (
          <a
            href="#"
            className="mt-6 inline-flex w-fit items-center gap-1 text-[15px] font-medium text-[#4530e8] no-underline hover:underline"
          >
            <span>{link}</span>
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
        )}
      </div>
      {image && (
        <div className="ml-auto w-[90%] overflow-hidden">
          <img src={image} alt="" loading="lazy" className="block h-full w-full" />
        </div>
      )}
    </div>
  );
}

export function UsecasesSection() {
  return (
    <section className="relative z-[1] bg-[#e8e7e5] py-20 min-[940px]:py-32">
      <div className="mx-auto max-w-[1440px] px-5 min-[940px]:px-10">
        <div className="min-[1440px]:px-[8%]">
          <h2 className="font-heading text-[44px] font-medium leading-[1.1] tracking-[-0.04em] text-black min-[940px]:text-[72px]">
            Use cases
          </h2>
          <p className="mt-5 max-w-[45ch] text-[18px] leading-[1.5] text-black">
            Use Devin to plan and execute complex engineering tasks, from code migrations to on-call incident
            resolution.
          </p>
          <div className="mt-14 grid w-full grid-cols-1 gap-4 min-[940px]:grid-cols-3 min-[940px]:grid-rows-[repeat(3,auto)] min-[940px]:gap-5">
            {USECASES.map((usecase) => (
              <UseCaseCard
                key={usecase.id}
                className={`min-[940px]:col-start-${usecase.gridPosition.col} min-[940px]:row-start-${usecase.gridPosition.row} ${usecase.gridPosition.rowSpan > 1 ? `min-[940px]:row-span-${usecase.gridPosition.rowSpan}` : ''}`}
                title={usecase.title}
                items={usecase.items}
                link={usecase.link}
                image={usecase.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
