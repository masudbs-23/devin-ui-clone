"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export function CardGridSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Parallax offsets for outer grid columns as user scrolls through the grid
  const grid1Y = useTransform(scrollYProgress, [0, 0.8], [0, -80]);
  const grid2Y = useTransform(scrollYProgress, [0, 0.8], [0, -40]);
  const grid4Y = useTransform(scrollYProgress, [0, 0.8], [0, -40]);
  const grid5Y = useTransform(scrollYProgress, [0, 0.8], [0, -80]);

  // Card 3-4, 3-5, 3-6 translation down near the end of grid scrolling (0.50 -> 0.75)
  const cardsTranslateY = useTransform(scrollYProgress, [0.50, 0.75], [0, 140]);
  const cardsScale = useTransform(scrollYProgress, [0.50, 0.75], [1, 1.03]);
  const cardsOpacity = useTransform(scrollYProgress, [0.70, 0.75], [1, 0.95]);

  // Trigger layout state transition into bottom section ONLY when grid scrolling is ~100% done (latest > 0.75)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.75 && !isExpanded) {
      setIsExpanded(true);
    } else if (latest <= 0.75 && isExpanded) {
      setIsExpanded(false);
    }
  });

  const cards3Data = [
    { id: 0, key: "card-3-4", title: "Card 3-4", desc: "Description for Card 3-4" },
    { id: 1, key: "card-3-5", title: "Card 3-5", desc: "Description for Card 3-5" },
    { id: 2, key: "card-3-6", title: "Card 3-6", desc: "Description for Card 3-6" },
  ];

  return (
    <section ref={sectionRef} className="px-4 py-20 bg-white relative min-h-[1800px] pb-32">
      <div className="max-w-[90%] mx-auto relative">
        {/* Sticky Center Title and Description */}
        <div className="sticky top-28 z-0 text-center mb-16 pt-32 pb-24 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ink pointer-events-auto">
            Section Title
          </h2>
          <p className="text-lg text-ink/70 leading-relaxed max-w-2xl mx-auto pointer-events-auto">
            This is the description for the section. It provides context about the cards below.
          </p>
        </div>

        {/* Full Width Card Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr_1fr_1fr] gap-6 items-start mb-16">
          
          {/* Grid 1: 3 cards in column */}
          <motion.div style={{ y: grid1Y }} className="flex flex-col gap-4 mt-0">
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 1-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 1-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 1-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
          </motion.div>

          {/* Grid 2: 3 cards in column */}
          <motion.div style={{ y: grid2Y }} className="flex flex-col gap-4 mt-12">
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 2-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 2-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 2-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
          </motion.div>

          {/* Grid 3: 3 cards in flex row + Card 3-4, 3-5, 3-6 */}
          <div className="flex flex-col gap-4 mt-24">
            <div className="flex flex-row gap-4">
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[170px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-1</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[170px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-2</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[170px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-3</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
            </div>

            {/* Row 2 inside Grid 3: Card 3-4, 3-5, 3-6 (Stays visible in Grid 3 until 100% grid scroll is complete) */}
            <div className="h-[270px] relative">
              {!isExpanded && (
                <motion.div
                  style={{ y: cardsTranslateY, scale: cardsScale, opacity: cardsOpacity }}
                  className="flex flex-row gap-4 absolute inset-0 w-full"
                >
                  {cards3Data.map((card) => (
                    <motion.div
                      key={card.key}
                      layoutId={card.key}
                      transition={{ type: "spring", stiffness: 200, damping: 25 }}
                      className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[270px] flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="text-lg font-bold mb-2 text-ink">{card.title}</h4>
                        <p className="text-sm text-ink/70">{card.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* Grid 4: 3 cards */}
          <motion.div style={{ y: grid4Y }} className="flex flex-col gap-4 mt-12">
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 4-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 4-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 4-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
          </motion.div>

          {/* Grid 5: 3 cards */}
          <motion.div style={{ y: grid5Y }} className="flex flex-col gap-4 mt-0">
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 5-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 5-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <div className="bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[240px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 5-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
          </motion.div>

        </div>

        {/* bottom card section */}
        {/* Appears when grid section scrolling is 100% completed! Spans 75% width centered below grid */}
        <div className="relative z-20 w-[75vw] mx-auto min-h-[180px] pt-6">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="flex flex-row gap-4 w-full"
            >
              {cards3Data.map((card, idx) => {
                const isActive = activeCardIndex === idx;
                return (
                  <motion.div
                    key={card.key}
                    layoutId={card.key}
                    onClick={() => setActiveCardIndex(idx)}
                    animate={{
                      flexGrow: isActive ? 7 : 1.5,
                      flexShrink: 1,
                      flexBasis: "0%",
                    }}
                    transition={{
                      layout: { type: "spring", stiffness: 200, damping: 25 },
                      flexGrow: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
                    }}
                    className={`p-6 rounded-lg h-[180px] overflow-hidden flex flex-col justify-between cursor-pointer transition-colors ${
                      isActive
                        ? "bg-[#D5D4D2] border-2 border-black/10 shadow-md"
                        : "bg-[#E3E2E1] hover:bg-[#DCDBC9]"
                    }`}
                  >
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-ink whitespace-nowrap overflow-hidden text-ellipsis">
                        {card.title}
                      </h4>
                      <p className="text-sm text-ink/70">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}


