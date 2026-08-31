export function BuildMoreSection() {
  return (
    <section className="px-4 py-20" aria-labelledby="build-more-heading">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          {/* Left side - full width on mobile/tablet */}
          <div className="w-full lg:flex-1">
            <h2 id="build-more-heading" className="text-5xl lg:text-6xl font-bold text-ink leading-tight">
              Build more with<br />
              <span className="text-blue-500">Puku</span>
            </h2>
            <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg text-lg font-medium hover:opacity-90 transition-opacity">
              Get started
            </button>
          </div>

          {/* Right side - card full width on mobile/tablet */}
          <div className="w-full lg:flex-1">
            <article className="bg-[#E3E2E1] p-8 rounded-2xl  w-full lg:w-[619px] h-[278px]">
              <h3 className="text-2xl font-bold mb-4 text-ink">
                Need Puku for your enterprise?
              </h3>
              <p className="text-ink/70 mb-6 leading-relaxed">
                Puku Enterprise provides additional capabilities, security and control for your organization.
              </p>
              <a href="#" className="underline font-medium">
                Learn about Puku Enterprise
              </a>
            </article>
          </div>
        </div>

        {/* Footer links */}
        <footer className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          {/* Left section */}
          <nav className="w-full lg:flex-1 flex gap-[10px]" aria-label="Legal links">
           <div className="flex flex-col lg:flex-row gap-6"> <a href="/privacy" className="text-ink hover:text-ink text-md">Privacy policy</a>
            <a href="/terms" className="text-ink hover:text-ink text-md">Terms of service</a>
            <a href="/privacy-choices" className="text-ink hover:text-ink text-md">Your privacy choices</a></div>
          </nav>
          {/* Right section */}
          <nav className="w-full lg:flex-1" aria-label="Social links">
            <div className="flex flex-col lg:flex-row gap-6">
              <a href="https://linkedin.com/company/puku" className="text-ink hover:text-ink text-md" rel="noopener noreferrer" target="_blank">LinkedIn</a>
              <a href="https://twitter.com/puku" className="text-ink hover:text-ink text-md" rel="noopener noreferrer" target="_blank">X (Twitter)</a>
            </div>
          </nav>
        </footer>
      </div>
    </section>
  );
}
