import { LEGAL_LINKS, SOCIAL_LINKS } from '../lib/constants';

export function BuildMoreSection() {
  return (
    <section className="px-4 py-20 bg-[#F7F6F4]" aria-labelledby="build-more-heading">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          {/* Left side - full width on mobile/tablet */}
          <div className="w-full lg:flex-1">
            <h2 id="build-more-heading" className="text-5xl lg:text-6xl font-medium text-[#141414] leading-tight tracking-[-0.015em]">
              Build more with<br />
              <span className="text-[#2200FF]">Puku</span>
            </h2>
            <button className="mt-8 px-6 py-3 bg-[#141414] text-[#FFFFFF] rounded-[8px] text-[14px] font-medium hover:opacity-90 transition-opacity">
              Get started
            </button>
          </div>

          {/* Right side - card full width on mobile/tablet */}
          <div className="w-full lg:flex-1">
            <article className="bg-[#EDEDED] p-8 rounded-[20px] w-full lg:w-[619px] h-[278px] border border-[#E0DFDD]">
              <h3 className="text-[23px] font-medium mb-4 text-[#141414]">
                Need Puku for your enterprise?
              </h3>
              <p className="text-[#5F5F5D] mb-6 leading-relaxed">
                Puku Enterprise provides additional capabilities, security and control for your organization.
              </p>
              <a href="#" className="underline font-medium text-[#2200FF]">
                Learn about Puku Enterprise
              </a>
            </article>
          </div>
        </div>

        {/* Footer links */}
        <footer className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          {/* Left section */}
          <nav className="w-full lg:flex-1 flex gap-[10px]" aria-label="Legal links">
           <div className="flex flex-col lg:flex-row gap-6">
            {LEGAL_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-[#5F5F5D] hover:text-[#141414] text-[14px]">
                {link.label}
              </a>
            ))}
           </div>
          </nav>
          {/* Right section */}
          <nav className="w-full lg:flex-1" aria-label="Social links">
            <div className="flex flex-col lg:flex-row gap-6">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="text-[#5F5F5D] hover:text-[#141414] text-[14px]"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </nav>
        </footer>
      </div>
    </section>
  );
}
