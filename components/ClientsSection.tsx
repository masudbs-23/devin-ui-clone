import type { Client } from "../types";

const CLIENTS: Client[] = [
  { name: "Company 1", logo: "/company1.png" },
  { name: "Company 2", logo: "/company2.png" },
  { name: "Company 3", logo: "/company3.png" },
  { name: "Company 4", logo: "/company4.png" },
  { name: "Company 5", logo: "/company5.png" },
  { name: "Company 6", logo: "/company6.png" },
];

export function ClientsSection() {
  return (
    <section className="px-4 py-20" aria-labelledby="clients-heading">
      <div className="max-w-[90%] mx-auto">
        <header className="flex flex-col items-center text-center mb-12">
          <p className="text-sm md:text-xl text-[#7D8092] font-medium mb-2">
            Industry leaders choose to
          </p>
          <h2 id="clients-heading" className="text-7xl font-semibold leading-tight">
            Build with <span className="text-blue-500">Puku</span>
          </h2>
          <button 
            className="mt-8 bg-ink border border-ink px-6 py-2 font-normal text-white hover:border-ink/60 transition-colors"
            aria-label="View customer testimonials"
          >
            Hear from our customers
          </button>
        </header>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" role="list">
          {CLIENTS.map((client) => (
            <li key={client.name}>
              <div className="bg-[#EFEFEF] rounded-lg p-6 flex items-center justify-center border border-[#EFEFEF] h-24">
                <div className="text-ink/50 text-sm font-medium">{client.name}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
