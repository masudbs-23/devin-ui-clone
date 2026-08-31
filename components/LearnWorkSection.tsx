export function LearnWorkSection() {
  return (
    <section className="px-4 py-20 bg-ink" aria-labelledby="learn-work-heading">
      <div className="max-w-[75%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left side */}
          <div className="flex-1">
            <h2 id="learn-work-heading" className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Learn & work
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              together
            </h3>
            <p className="text-lg text-white/70 mb-2 leading-relaxed">
              Puku is built for engineering teams with complex
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              multi-repo project
            </p>
            <article className="bg-gray-200 p-8 rounded-lg shadow-md max-w-md w-full">
              <h4 className="text-xl font-bold mb-4 text-ink">Card Title</h4>
              <p className="text-ink/70 leading-relaxed">
                Card description goes here.
              </p>
            </article>
          </div>

          {/* Right side - 2 cards in flex column */}
          <div className="flex-1 flex flex-col gap-6">
            <article className="bg-gray-200 p-8 rounded-lg shadow-md w-full h-[600px]">
              <h4 className="text-xl font-bold mb-4 text-ink">Card 1</h4>
              <p className="text-ink/70 leading-relaxed">
                Card 1 description goes here.
              </p>
            </article>
            <article className="bg-gray-200 p-8 rounded-lg shadow-md w-full h-[600px]">
              <h4 className="text-xl font-bold mb-4 text-ink">Card 2</h4>
              <p className="text-ink/70 leading-relaxed">
                Card 2 description goes here.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
