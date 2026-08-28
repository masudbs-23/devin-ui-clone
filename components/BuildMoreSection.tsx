export function BuildMoreSection() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Left side */}
          <div className="flex-1">
            <h2 className="text-5xl md:text-6xl font-bold text-ink leading-tight">
              Build more with<br />
              <span className="text-blue-500">Devin</span>
            </h2>
            <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg text-lg font-medium hover:opacity-90 transition-opacity">
              Get started
            </button>
          </div>

          {/* Right side - card aligned left */}
          <div className="flex-1">
            <div className="bg-[#E3E2E1] p-8 rounded-lg shadow-md max-w-md w-full">
              <h3 className="text-2xl font-bold mb-4 text-ink">
                Need Devin for your enterprise?
              </h3>
              <p className="text-ink/70 mb-6 leading-relaxed">
                Devin Enterprise provides additional capabilities, security and control for your organization.
              </p>
              <a href="#" className="text-blue-500 hover:underline font-medium">
                Learn about Devin Enterprise
              </a>
            </div>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Left section */}
          <div className="flex-1 flex gap-[10px]">
            <a href="#" className="text-ink hover:text-ink text-md">Privacy policy</a>
            <a href="#" className="text-ink hover:text-ink text-md">Terms of service</a>
            <a href="#" className="text-ink hover:text-ink text-md">Your privacy choices</a>
          </div>
          {/* Right section */}
          <div className="flex-1">
            <div className="flex gap-6">
              <a href="#" className="text-ink hover:text-ink text-md">LinkedIn</a>
              <a href="#" className="text-ink hover:text-ink text-md">X (Twitter)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
