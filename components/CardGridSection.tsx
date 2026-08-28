export function CardGridSection() {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-[90%] mx-auto">
        {/* Center Title and Description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ink">
            Section Title
          </h2>
          <p className="text-lg text-ink/70 leading-relaxed max-w-2xl mx-auto">
            This is the description for the section. It provides context about the cards below.
          </p>
        </div>

        {/* Full Width Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr_1fr_1fr] gap-6">
          
          {/* Grid 1: 3 cards in column - starts from top */}
          <div className="flex flex-col gap-4 mt-0">
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 1-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 1-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 1-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
          </div>

          {/* Grid 2: 3 cards in flex column - slightly below */}
          <div className="flex flex-col gap-4 mt-12">
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 2-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 2-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 2-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
          </div>

          {/* Grid 3: 3 cards in flex row + 3 more below - even more below */}
          <div className="flex flex-col gap-4 mt-24">
            <div className="flex flex-row gap-4">
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[150px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-1</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[150px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-2</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[150px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-3</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[150px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-4</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[150px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-5</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[150px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-6</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
            </div>
          </div>

          {/* Grid 4: 3 cards - moves up */}
          <div className="flex flex-col gap-4 mt-12">
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 4-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 4-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 4-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
          </div>

          {/* Grid 5: 3 cards in flex column - moves even more up (like grid 1) */}
          <div className="flex flex-col gap-4 mt-0">
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 5-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 5-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[200px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 5-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
