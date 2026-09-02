import { PukuMark } from '../brand';
import { IMAGES, PROJECT_TASKS } from '../../lib/constants';

export function LearnWorkSection() {
  return (
    <section className="relative z-[1] bg-[#0E0E0E] min-h-screen text-[#F5F5F5] py-20 lg:py-32">
      <div className="mx-auto max-w-[var(--container-outer)] px-4 sm:px-6 md:px-8 lg:px-10 h-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full max-w-[var(--container-content)] mx-auto">
          {/* Left Grid */}
          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2">
            <div className="flex flex-col mt-8 md:mt-12 lg:mt-32">
              <h2 className="font-heading text-[40px] font-medium leading-[1.1] tracking-[-0.015em] lg:text-[64px]">
                Learn &amp; work
                <br />
                <span className="text-[#2200FF]">together</span>
              </h2>
              <p className="mt-5 max-w-[35ch] text-[16px] leading-[1.5] text-[#9A9A98]">
                Puku is built for engineering teams with complex, multi-repo projects.
              </p>
            </div>
            <div className="relative flex flex-col overflow-hidden rounded-[12px] bg-[#1C1C1E] mt-8 md:mt-12 lg:mt-32 w-full">
              <div className="p-8 pb-0 lg:p-10">
                <h3 className="text-[23px] font-medium leading-[1.25]">
                  Learns your codebase &amp;
                  <br className="lg:hidden" /> picks up tribal knowledge
                </h3>
              </div>
              <div className="ml-auto mt-6 w-[92%] overflow-hidden">
                <img src={IMAGES.BENTO_KNOWLEDGE} alt="Add knowledge to Devin" loading="lazy" className="block h-auto w-full" />
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="flex flex-col gap-4 md:gap-6 w-full md:w-1/2">
            <div className="relative flex flex-col overflow-hidden rounded-[12px] bg-[#1C1C1E] w-full">
              <div className="p-8 pb-0 lg:p-10">
                <span className="mb-6 inline-block rounded-[6px] bg-[#2C2C2E] px-3 py-1.5 font-mono text-[13px] uppercase tracking-wide text-[#F5F5F5]">
                  Collaborate
                </span>
                <h3 className="text-[23px] font-medium leading-[1.25]">Works where your team works</h3>
                <p className="mt-4 max-w-[52ch] text-[14px] leading-[1.5] text-[#9A9A98]">
                  Ask Puku to triage Datadog incidents, route Slack messages, and tackle Linear tickets. Or automate
                  entirely using the Puku API and Puku Automations.
                </p>
              </div>
              <div className="ml-auto mt-6 w-[92%] overflow-hidden">
                <img src={IMAGES.BENTO_COLLAB} alt="Create automation, add a ticket for each task" loading="lazy" className="block h-auto w-full" />
              </div>
            </div>
            <div className="relative flex flex-col overflow-hidden rounded-[12px] bg-[#1C1C1E] w-full">
              <div className="p-8 pb-0 lg:p-10">
                <h3 className="text-[23px] font-medium leading-[1.25]">Multi-week, multi-repo projects</h3>
                <p className="mt-4 max-w-[52ch] text-[14px] leading-[1.5] text-[#9A9A98]">
                  Puku can spin up a team of Pukus for large tasks. Puku gets better over time by reading past
                  session trajectories.
                </p>
              </div>
              <div className="mx-8 mb-8 mt-6 space-y-3 lg:mx-10 lg:mb-10">
                {PROJECT_TASKS.map((row) => (
                  <div key={row.pr} className="rounded-xl bg-[#262626] p-4 border border-[#2C2C2E]">
                    <p className="text-[14px] font-medium text-[#F5F5F5]/90">{row.title}</p>
                    <div className="mt-2 flex items-center justify-between text-[12px] text-[#9A9A98]">
                      <span className="flex items-center gap-1.5">
                        <PukuMark className="h-3.5 w-3.5 text-[#9A9A98]" />
                        Puku went to sleep
                      </span>
                      <span>{row.tasks}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-[12px]">
                      <span className="rounded bg-[#17352a] px-1.5 py-0.5 font-mono text-[#22C55E]">{row.pr}</span>
                      <span className="text-[#9A9A98]/40">repo/dev-webapp</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
