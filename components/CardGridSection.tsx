"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function CardGridSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Switch between Grid 3 rendering and Bottom Card Section rendering on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.35 && !isExpanded) {
      setIsExpanded(true);
    } else if (latest <= 0.35 && isExpanded) {
      setIsExpanded(false);
    }
  });

  const cards3Bottom = [
    { id: 0, title: "Card 3-4", desc: "Description for Card 3-4" },
    { id: 1, title: "Card 3-5", desc: "Description for Card 3-5" },
    { id: 2, title: "Card 3-6", desc: "Description for Card 3-6" },
  ];

  return (
    <section ref={sectionRef} className="px-4 py-20 bg-white relative min-h-[1000px] pb-32">
      <div className="max-w-[90%] mx-auto relative">
        {/* Sticky Center Title and Description */}
        <div className="sticky top-28 z-0 text-center mb-16 pt-48 pointer-events-none">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ink pointer-events-auto">
            Section Title
          </h2>
          <p className="text-lg text-ink/70 leading-relaxed max-w-2xl mx-auto pointer-events-auto">
            This is the description for the section. It provides context about the cards below.
          </p>
        </div>

        {/* Full Width Card Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr_1fr_1fr] gap-6 items-start mb-12">
          
          {/* Grid 1: 3 cards in column - starts from top */}
          <div className="flex flex-col gap-4 mt-0">
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
          </div>

          {/* Grid 2: 3 cards in flex column - slightly below */}
          <div className="flex flex-col gap-4 mt-12">
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
          </div>

          {/* Grid 3: 3 cards in flex row + 3 more below */}
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

            {/* Row 2 inside Grid 3: Card 3-4, 3-5, 3-6 (Hides when scrolled!) */}
            <motion.div
              animate={{
                opacity: isExpanded ? 0 : 1,
                y: isExpanded ? -10 : 0,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className={`flex flex-row gap-4 ${
                isExpanded ? "pointer-events-none" : ""
              }`}
            >
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[270px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-4</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[270px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-5</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
              <div className="flex-1 bg-[#E3E2E1] p-6 rounded-lg shadow-sm h-[270px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-6</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
            </motion.div>
          </div>

          {/* Grid 4: 3 cards - moves up */}
          <div className="flex flex-col gap-4 mt-12">
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
          </div>

          {/* Grid 5: 3 cards in flex column - moves even more up (like grid 1) */}
          <div className="flex flex-col gap-4 mt-0">
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
          </div>

        </div>

        {/* bottom card section */}
        {/* Appears when scrolled down! Spans 75% width centered below grid */}
        <motion.div
          animate={{
            opacity: isExpanded ? 1 : 0,
            y: isExpanded ? 0 : 30,
          }}
          transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
          className={`relative z-20 w-[75vw] mx-auto flex flex-row gap-4 ${
            isExpanded ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {cards3Bottom.map((card, idx) => {
            const isActive = activeCardIndex === idx;
            return (
              <motion.div
                key={card.id}
                onClick={() => setActiveCardIndex(idx)}
                animate={{
                  flexGrow: isActive ? 7 : 1.5,
                  flexShrink: 1,
                  flexBasis: "0%",
                }}
                transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
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
      </div>
    </section>
  );
}
