const CLIENTS = [
  { name: "Company 1", logo: "/company1.png" },
  { name: "Company 2", logo: "/company2.png" },
  { name: "Company 3", logo: "/company3.png" },
  { name: "Company 4", logo: "/company4.png" },
  { name: "Company 5", logo: "/company5.png" },
  { name: "Company 6", logo: "/company6.png" },
];

export function ClientsSection() {
  return (
    <section className="px-4 py-20">
      <div className="max-w-[90%] mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ink leading-tight">
            <span  className="text-sm md:text-xl text-[#7D8092] font-medium">Industry leaders choose to</span><br />
          
          </h2>
          <h1>
             <span className="text-7xl mt-8 font-semibold"> Build with</span> <span className="text-blue-500 text-7xl">Devin</span>
             </h1>
          <button className="mt-8 bg-ink border border-ink px-6 py-2  font-normal text-white hover:border-ink/60 transition-colors">
            Hear from our customers
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="bg-[#EFEFEF] rounded-lg p-6 flex items-center justify-center  border border-[#EFEFEF]"
            >
              <div className="text-ink/50 text-sm font-medium">{client.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
