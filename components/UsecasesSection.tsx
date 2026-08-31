import type { Usecase } from "../types";

const USECASES: Usecase[] = [
  {
    id: 1,
    title: "PR review & visual QA",
    description: "Automatically identify and resolve bugs with visual QA",
    category: "Review",
  },
  {
    id: 2,
    title: "Code migration + refactors",
    description: "Assign a fleet of agents to migrate all repos in parallel",
    category: "Migration",
  },
  {
    id: 3,
    title: "Issue triage + bug fixing",
    description: "Investigate incidents and automatically fix CI failures",
    category: "Debugging",
  },
  {
    id: 4,
    title: "Documentation",
    description: "Auto-generate documentation and system diagrams",
    category: "Documentation",
  },
  {
    id: 5,
    title: "Scheduled chores and application development",
    description: "Schedule daily QA and continuously review user feedback",
    category: "Automation",
  },
  {
    id: 6,
    title: "And many others",
    description: "Automated ticket resolution, testing, and optimization",
    category: "Other",
  },
];

export function UsecasesSection() {
  return (
    <section className="px-4 py-20 bg-[#E7E7E7]" aria-labelledby="usecases-heading">
      <div className="max-w-[75%] mx-auto">
        <header className="text-left mb-12">
          <h2 id="usecases-heading" className="text-4xl md:text-5xl font-bold mb-4 text-ink">
            Use cases
          </h2>
          <p className="text-lg text-ink/70 leading-relaxed">
            Use Puku to plan and execute complex engineering tasks, from<br />
            code migrations to on-call incident resolution.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {USECASES.map((usecase, index) => (
            <article
              key={usecase.id}
              className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'h-[600px]' : 'h-[400px]'}`}
              role="listitem"
            >
              <h3 className="text-xl font-semibold mb-4 text-ink">
                {usecase.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed mb-4">
                {usecase.description}
              </p>
              <div className="mt-4 bg-gray-100 rounded-lg h-32 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Image placeholder</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
