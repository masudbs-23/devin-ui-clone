const USECASES = [
  {
    title: "PR review & visual QA",
    bullets: [
      "Automatically identify and resolve bugs",
      "Visual QA with full browser and desktop use",
      "Intelligently organize code diffs for review"
    ],
    link: "Learn about Devin Review >",
    hasImage: true,
    height: "h-[600px]"
  },
  {
    title: "Code migration + refactors",
    bullets: [
      "Assign a fleet of agents to migrate all repos in parallel",
      "Accelerate all modernizations - COBOL, .NET, Talend, legacy ETL, and more.",
      "Complete audibility at each step."
    ],
    hasImage: false,
    height: "h-[400px]"
  },
  {
    title: "Issue triage + bug fixing",
    bullets: [
      "Investigate Datadog incidents immediately",
      "Intelligently route Slack bug reports",
      "Automatically fix CI failures"
    ],
    hasImage: true,
    height: "h-[600px]"
  },
  {
    title: "Documentation",
    bullets: [
      "Auto-generate documentation and system diagrams for legacy codebases.",
      "Comprehensive visibility into systems that your team"
    ],
    hasImage: false,
    height: "h-[400px]"
  },
  {
    title: "Scheduled chores and application development",
    bullets: [
      "Schedule daily QA and release notes",
      "Continuously review and address user feedback",
      "Maintain documentation"
    ],
    hasImage: true,
    height: "h-[600px]"
  },
  {
    title: "And many others",
    bullets: [
      "Automated ticket resolution",
      "Unit and E2E testing",
      "Performance optimization"
    ],
    hasImage: false,
    height: "h-[400px]"
  }
];

export function UsecasesSection() {
  return (
    <section className="px-4 py-20 bg-[#E7E7E7]" >
      <div className="max-w-[75%] mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ink">
            Use cases
          </h2>
          <p className="text-lg text-ink/70 leading-relaxed">
            Use Devin to plan and execute complex engineering tasks, from<br />
            code migrations to on-call incident resolution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: Card 0 (600px), Card 3 (400px) */}
          <div className="flex flex-col gap-6">
            <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${USECASES[0].height}`}>
              <h3 className="text-xl font-semibold mb-4 text-ink">
                {USECASES[0].title}
              </h3>
              <ul className="space-y-2 mb-4">
                {USECASES[0].bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-sm text-ink/70 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
              {USECASES[0].link && (
                <a href="#" className="text-blue-500 text-sm font-medium hover:underline">
                  {USECASES[0].link}
                </a>
              )}
              {USECASES[0].hasImage && (
                <div className="mt-4 bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Image placeholder</span>
                </div>
              )}
            </div>
            <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${USECASES[3].height}`}>
              <h3 className="text-xl font-semibold mb-4 text-ink">
                {USECASES[3].title}
              </h3>
              <ul className="space-y-2 mb-4">
                {USECASES[3].bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-sm text-ink/70 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
              {USECASES[3].hasImage && (
                <div className="mt-4 bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Image placeholder</span>
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Card 1 (400px), Card 4 (600px) */}
          <div className="flex flex-col gap-6">
            <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${USECASES[1].height}`}>
              <h3 className="text-xl font-semibold mb-4 text-ink">
                {USECASES[1].title}
              </h3>
              <ul className="space-y-2 mb-4">
                {USECASES[1].bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-sm text-ink/70 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
              {USECASES[1].hasImage && (
                <div className="mt-4 bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Image placeholder</span>
                </div>
              )}
            </div>
            <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${USECASES[4].height}`}>
              <h3 className="text-xl font-semibold mb-4 text-ink">
                {USECASES[4].title}
              </h3>
              <ul className="space-y-2 mb-4">
                {USECASES[4].bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-sm text-ink/70 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
              {USECASES[4].hasImage && (
                <div className="mt-4 bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Image placeholder</span>
                </div>
              )}
            </div>
          </div>

          {/* Column 3: Card 2 (600px), Card 5 (400px) */}
          <div className="flex flex-col gap-6">
            <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${USECASES[2].height}`}>
              <h3 className="text-xl font-semibold mb-4 text-ink">
                {USECASES[2].title}
              </h3>
              <ul className="space-y-2 mb-4">
                {USECASES[2].bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-sm text-ink/70 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
              {USECASES[2].hasImage && (
                <div className="mt-4 bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Image placeholder</span>
                </div>
              )}
            </div>
            <div className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${USECASES[5].height}`}>
              <h3 className="text-xl font-semibold mb-4 text-ink">
                {USECASES[5].title}
              </h3>
              <ul className="space-y-2 mb-4">
                {USECASES[5].bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="text-sm text-ink/70 leading-relaxed">
                    {bullet}
                  </li>
                ))}
              </ul>
              {USECASES[5].hasImage && (
                <div className="mt-4 bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Image placeholder</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
