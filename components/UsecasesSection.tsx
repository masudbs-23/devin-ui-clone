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
    <div className={`flex flex-col overflow-hidden rounded-[12px] bg-[#EDEDED] ${className}`}>
      <div className="relative flex flex-1 flex-col p-6 pb-6 lg:p-8">
        <h3 className="font-heading text-[23px] font-medium leading-[1.25] text-[#141414]">
          {title}
        </h3>
        <ul className="mt-5 list-none p-0">
          {items.map((item) => (
            <li key={item} className="mt-2 flex items-start gap-2 text-[14px] leading-[1.5] text-[#5F5F5D] first:mt-0">
              <span aria-hidden="true" className="inline-flex text-[#141414]">
                -
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {link && (
          <a
            href="#"
            className="mt-6 inline-flex w-fit items-center gap-1 text-[14px] font-medium text-[#2200FF] no-underline hover:underline"
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
    <section className="relative z-[1] bg-[#E7E7E7] py-20 lg:py-32">
      <div className="mx-auto max-w-[var(--container-outer)] px-8 lg:px-10">
        <div className="mx-auto max-w-[var(--container-content)]">
          <h2 className="font-heading text-[40px] font-medium leading-[1.1] tracking-[-0.015em] text-[#141414] lg:text-[40px]">
            Use cases
          </h2>
          <p className="mt-5 max-w-[45ch] text-[16px] leading-[1.5] text-[#5F5F5D]">
            Use Puku to plan and execute complex engineering tasks, from code migrations to on-call incident
            resolution.
          </p>
          <div className="mt-14 grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-[repeat(3,auto)] lg:gap-6">
            {USECASES.map((usecase) => (
              <UseCaseCard
                key={usecase.id}
                className={`lg:col-start-${usecase.gridPosition.col} lg:row-start-${usecase.gridPosition.row} ${usecase.gridPosition.rowSpan > 1 ? `lg:row-span-${usecase.gridPosition.rowSpan}` : ''}`}
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
