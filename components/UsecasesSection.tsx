import { ChevronRight } from 'lucide-react';

const USECASE_REVIEW =
  'https://devin.ai/_next/image?url=%2Fassets%2Fimages%2Fhome-hero%2Fhero_usecase_2.webp&w=3840&q=75';
const USECASE_CHORES =
  'https://devin.ai/_next/image?url=%2Fassets%2Fimages%2Fhome-hero%2Fhero_usecase_1.webp&w=3840&q=75';
const USECASE_TRIAGE =
  'https://devin.ai/_next/image?url=%2Fassets%2Fimages%2Fhome-hero%2Fhero_usecase_3.webp&w=3840&q=75';

function UseCaseCard({ title, items, link, image, className = '' }: { 
  title: string; 
  items: string[]; 
  link?: string; 
  image?: string; 
  className?: string;
}) {
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
            <UseCaseCard
              className="min-[940px]:col-start-1 min-[940px]:row-start-1 min-[940px]:row-span-2"
              title="PR review & visual QA"
              items={[
                'Automatically identify and resolve bugs',
                'Visual QA with full browser and desktop use',
                'Intelligently organize code diffs for review',
              ]}
              link="Learn about Devin Review"
              image={USECASE_REVIEW}
            />
            <UseCaseCard
              className="min-[940px]:col-start-1 min-[940px]:row-start-3"
              title="Documentation"
              items={[
                'Auto-generate documentation and system diagrams for legacy codebases.',
                "Comprehensive visibility into systems that your team hasn't built.",
              ]}
              link="Learn more about DeepWiki"
            />
            <UseCaseCard
              className="min-[940px]:col-start-2 min-[940px]:row-start-1"
              title="Code migration + refactors"
              items={[
                'Assign a fleet of agents to migrate all repos in parallel',
                'Accelerate all modernizations — COBOL, .NET, Talend, legacy ETL, and more.',
                'Complete audibility at each step.',
              ]}
            />
            <UseCaseCard
              className="min-[940px]:col-start-2 min-[940px]:row-start-2 min-[940px]:row-span-2"
              title="Scheduled chores and application development"
              items={[
                'Schedule daily QA and release notes',
                'Continuously review and address user feedback',
                'Maintain documentation',
              ]}
              image={USECASE_CHORES}
            />
            <UseCaseCard
              className="min-[940px]:col-start-3 min-[940px]:row-start-1 min-[940px]:row-span-2"
              title="Issue triage + bug fixing"
              items={[
                'Investigate Datadog incidents immediately',
                'Intelligently route Slack bug reports',
                'Automatically fix CI failures',
              ]}
              image={USECASE_TRIAGE}
            />
            <UseCaseCard
              className="min-[940px]:col-start-3 min-[940px]:row-start-3"
              title="And many others"
              items={[
                'Automated ticket resolution',
                'Unit and E2E testing',
                'Performance optimization',
                'Web research and scraping',
                'Repetitive browser task automation',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
