import { PukuMark } from './BrandIcon';
import { IMAGES, PROJECT_TASKS } from '../lib/constants';

export function LearnWorkSection() {
  return (
    <section className="relative z-[1] bg-[#141414] py-20 text-[#f4f3f1] min-[940px]:py-32">
      <div className="mx-auto max-w-[1440px] px-5 min-[940px]:px-10">
        <div className="min-[1440px]:px-[8%]">
          <h2 className="font-heading text-[44px] font-medium leading-[1.1] tracking-[-0.04em] min-[940px]:text-[72px]">
            Learn &amp; work
            <br />
            <span className="text-gradient-devin">together</span>
          </h2>
          <p className="mt-5 max-w-[35ch] text-[18px] leading-[1.5] text-white/80">
            Devin is built for engineering teams with complex, multi-repo projects.
          </p>
          <div className="mt-14 grid grid-cols-1 gap-4 min-[940px]:grid-cols-2 min-[940px]:gap-5">
            <div className="relative flex flex-col overflow-hidden rounded-2xl bg-[#1e1e1e] min-[940px]:order-2">
              <div className="p-8 pb-0 min-[940px]:p-10">
                <span className="mb-6 inline-block rounded-[5px] bg-[#2c2c2c] px-3 py-1.5 font-mono-devin text-[13px] uppercase tracking-wide text-[#f4f3f1]">
                  Collaborate
                </span>
                <h3 className="text-[26px] font-medium leading-[1.25]">Works where your team works</h3>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.5] text-white/70">
                  Ask Devin to triage Datadog incidents, route Slack messages, and tackle Linear tickets. Or automate
                  entirely using the Devin API and Devin Automations.
                </p>
              </div>
              <div className="ml-auto mt-6 w-[92%] overflow-hidden">
                <img src={IMAGES.BENTO_COLLAB} alt="Create automation, add a ticket for each task" loading="lazy" className="block h-auto w-full" />
              </div>
            </div>
            <div className="relative flex flex-col overflow-hidden rounded-2xl bg-[#1e1e1e] min-[940px]:order-1 min-[940px]:translate-y-[12%]">
              <div className="p-8 pb-0 min-[940px]:p-10">
                <h3 className="text-[26px] font-medium leading-[1.25]">
                  Learns your codebase &amp;
                  <br className="max-[940px]:hidden" /> picks up tribal knowledge
                </h3>
              </div>
              <div className="ml-auto mt-6 w-[92%] overflow-hidden">
                <img src={IMAGES.BENTO_KNOWLEDGE} alt="Add knowledge to Devin" loading="lazy" className="block h-auto w-full" />
              </div>
            </div>
            <div className="relative flex flex-col overflow-hidden rounded-2xl bg-[#1e1e1e] min-[940px]:order-3">
              <div className="p-8 pb-0 min-[940px]:p-10">
                <span className="mb-6 inline-block rounded-[5px] bg-[#2c2c2c] px-3 py-1.5 font-mono-devin text-[13px] uppercase tracking-wide text-[#f4f3f1]">
                  Collaborate
                </span>
                <h3 className="text-[26px] font-medium leading-[1.25]">Works where your team works</h3>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.5] text-white/70">
                  Ask Devin to triage Datadog incidents, route Slack messages, and tackle Linear tickets. Or automate
                  entirely using the Devin API and Devin Automations.
                </p>
              </div>
              <div className="ml-auto mt-6 w-[92%] overflow-hidden">
                <img src={IMAGES.BENTO_COLLAB} alt="Create automation, add a ticket for each task" loading="lazy" className="block h-auto w-full" />
              </div>
            </div>
            <div className="relative flex flex-col overflow-hidden rounded-2xl bg-[#1e1e1e] min-[940px]:order-4">
              <div className="p-8 pb-0 min-[940px]:p-10">
                <h3 className="text-[26px] font-medium leading-[1.25]">Multi-week, multi-repo projects</h3>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.5] text-white/70">
                  Devin can spin up a team of Devins for large tasks. Devin gets better over time by reading past
                  session trajectories.
                </p>
              </div>
              <div className="mx-8 mb-8 mt-6 space-y-3 min-[940px]:mx-10 min-[940px]:mb-10">
                {PROJECT_TASKS.map((row) => (
                  <div key={row.pr} className="rounded-xl bg-[#262626] p-4">
                    <p className="text-[14px] font-medium text-white/90">{row.title}</p>
                    <div className="mt-2 flex items-center justify-between text-[12px] text-white/50">
                      <span className="flex items-center gap-1.5">
                        <PukuMark className="h-3.5 w-3.5 text-white/50" />
                        Devin went to sleep
                      </span>
                      <span>{row.tasks}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-[12px]">
                      <span className="rounded bg-[#17352a] px-1.5 py-0.5 font-mono-devin text-[#4ade80]">{row.pr}</span>
                      <span className="text-white/40">repo/dev-webapp</span>
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
