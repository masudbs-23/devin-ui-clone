import { ChevronRight } from 'lucide-react';
import { USECASES, IMAGES } from '../../lib/constants';

interface UseCaseCardProps {
  title: string;
  items: string[];
  link?: string;
  image?: string;
  className?: string;
  height?: string;
}

function UseCaseCard({ title, items, link, image, className = '', height }: UseCaseCardProps) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-[12px] bg-[#EDEDED] ${className}`} style={{ height: height, width: '483px' }}>
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
          <div className="mt-14 flex gap-6 w-full" style={{ height: '925px' }}>
            {/* Grid 1 */}
            <div className="flex flex-col gap-6" style={{ width: '483px' }}>
              <UseCaseCard
                title="PR review & visual QA"
                items={[
                  'Automatically identify and resolve bugs',
                  'Visual QA with full browser and desktop use',
                  'Intelligently organize code diffs for review',
                ]}
                link="Learn about Devin Review"
                image={IMAGES.USECASE_REVIEW}
                height="602px"
              />
              <UseCaseCard
                title="And many others"
                items={[
                  'Automated ticket resolution',
                  'Unit and E2E testing',
                  'Performance optimization',
                  'Web research and scraping',
                  'Repetitive browser task automation',
                ]}
                height="303px"
              />
            </div>

            {/* Grid 2 */}
            <div className="flex flex-col gap-6" style={{ width: '483px' }}>
              <UseCaseCard
                title="Code migration + refactors"
                items={[
                  'Assign a fleet of agents to migrate all repos in parallel',
                  'Accelerate all modernizations — COBOL, .NET, Talend, legacy ETL, and more.',
                  'Complete audibility at each step.',
                ]}
                height="303px"
              />
              <UseCaseCard
                title="Scheduled chores and application development"
                items={[
                  'Schedule daily QA and release notes',
                  'Continuously review and address user feedback',
                  'Maintain documentation',
                ]}
                image={IMAGES.USECASE_CHORES}
                height="602px"
              />
            </div>

            {/* Grid 3 */}
            <div className="flex flex-col gap-6" style={{ width: '483px' }}>
              <UseCaseCard
                title="Issue triage + bug fixing"
                items={[
                  'Investigate Datadog incidents immediately',
                  'Intelligently route Slack bug reports',
                  'Automatically fix CI failures',
                ]}
                image={IMAGES.USECASE_TRIAGE}
                height="602px"
              />
              <UseCaseCard
                title="And many others"
                items={[
                  'Automated ticket resolution',
                  'Unit and E2E testing',
                  'Performance optimization',
                  'Web research and scraping',
                  'Repetitive browser task automation',
                ]}
                height="303px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
