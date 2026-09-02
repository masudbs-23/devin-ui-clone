"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";

export function CardGridSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [cardHeight, setCardHeight] = useState<number>(375);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 935);

      // Calculate card height based on screen width
      // At 935px: 375px, at 400px: 239px
      const minWidth = 400;
      const maxWidth = 935;
      const minHeight = 239;
      const maxHeight = 375;

      if (width >= maxWidth) {
        setCardHeight(maxHeight);
      } else if (width <= minWidth) {
        setCardHeight(minHeight);
      } else {
        const ratio = (width - minWidth) / (maxWidth - minWidth);
        setCardHeight(minHeight + ratio * (maxHeight - minHeight));
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Upward parallax motion for side columns
  const grid1Y = useTransform(scrollYProgress, [0, 0.70], [0, -180]);
  const grid2Y = useTransform(scrollYProgress, [0, 0.70], [0, -100]);
  const grid4Y = useTransform(scrollYProgress, [0, 0.70], [0, -100]);
  const grid5Y = useTransform(scrollYProgress, [0, 0.70], [0, -180]);

  // Serial card upward gap reduction (Card X-2 and X-3 slide UP towards Card X-1 as user scrolls)
  const card_1_2_Y = useTransform(scrollYProgress, [0, 0.70], [0, -32]);
  const card_1_3_Y = useTransform(scrollYProgress, [0, 0.70], [0, -64]);

  const card_2_2_Y = useTransform(scrollYProgress, [0, 0.70], [0, -32]);
  const card_2_3_Y = useTransform(scrollYProgress, [0, 0.70], [0, -64]);

  // Card 3-2 & 3-5 start offset higher (-28px) and align into the same position with their row on scroll
  const card_3_2_Y = useTransform(scrollYProgress, [0, 0.45], [-28, 0]);
  const card_3_5_Y = useTransform(scrollYProgress, [0, 0.45], [-28, 0]);

  const card_4_2_Y = useTransform(scrollYProgress, [0, 0.70], [0, -32]);
  const card_4_3_Y = useTransform(scrollYProgress, [0, 0.70], [0, -64]);

  const card_5_2_Y = useTransform(scrollYProgress, [0, 0.70], [0, -32]);
  const card_5_3_Y = useTransform(scrollYProgress, [0, 0.70], [0, -64]);

  // Card 3-4, 3-5, 3-6 translation down to align with Card 4-3 level
  const cardsTranslateY = useTransform(scrollYProgress, [0.15, 0.70], [0, 430]);
  const cardsScale = useTransform(scrollYProgress, [0.15, 0.70], [1, 1.04]);
  const cardsOpacity = useTransform(scrollYProgress, [0.65, 0.70], [1, 0]);

  // Trigger layout state transition into bottom section when grid scroll completes (latest > 0.70)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.70 && !isExpanded) {
      setIsExpanded(true);
    } else if (latest <= 0.70 && isExpanded) {
      setIsExpanded(false);
    }
  });

  const cards3Data = [
    { id: 0, title: "Card 3-4", desc: "Description for Card 3-4" },
    { id: 1, title: "Card 3-5", desc: "Description for Card 3-5" },
    { id: 2, title: "Card 3-6", desc: "Description for Card 3-6" },
  ];

  const iconTiles = [
    { icon: "grid", color: "#c7c8cb" },
    { icon: "hexagon", color: "#c7c8cb" },
    { icon: "triangle", color: "#c7c8cb" },
    { icon: "x", color: "#c7c8cb" },
    { icon: "circle", color: "#c7c8cb" },
    { icon: "star", color: "#c7c8cb" },
  ];

  const centerTiles = [
    { icon: "mountain", color: "#6c63ff" },
    { icon: "ellipse", color: "#7c3aed" },
    { icon: "dots", color: "#f97316" },
    { icon: "cross", color: "#111318" },
    { icon: "code", color: "#2563eb" },
    { icon: "heart", color: "#ec4899" },
    { icon: "bolt", color: "eab308" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative min-h-[1600px] pb-32 w-full">
      <div className="w-full mx-auto relative ">
        {/* Sticky Center Title and Description */}
        <div className={`${!isExpanded && !isMobile ? 'sticky top-28' : ''} z-0 text-center mb-16 pt-12 md:pt-32 pb-32 md:pb-64 pointer-events-none`}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink pointer-events-auto">
            Section Title
          </h2>
          <p className="text-sm md:text-lg text-ink/70 leading-relaxed max-w-2xl mx-auto pointer-events-auto">
            This is the description for the section. It provides context about the cards below.
          </p>
        </div>

        {/* Mobile Layout - Icon Grid */}
        {isMobile && (
          <div className="relative z-10 mb-16 max-w-full mx-auto mt-[-150px]">
            <div className="grid grid-cols-[1fr_1.15fr_1fr] gap-2">
              {/* Left Column */}
              <div className="flex flex-col gap-2">
                {iconTiles.map((tile, idx) => (
                  <div key={idx} className="bg-[#f2f2f3] flex items-center justify-center w-full rounded-lg" style={{ height: `${cardHeight}px` }}>
                    <div className=""  />
                  </div>
                ))}
              </div>

              {/* Middle Column - Offset */}
              <div className="flex flex-col gap-2 -translate-y-3 mt-[-70px]">
                {centerTiles.map((tile, idx) => (
                  <div key={idx} className="bg-[#f2f2f3] flex items-center justify-center w-full rounded-lg" style={{ height: `${cardHeight}px` }}>
                    <div  />
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-2">
                {iconTiles.map((tile, idx) => (
                  <div key={idx} className="bg-[#f2f2f3] flex items-center justify-center w-full rounded-lg" style={{ height: `${cardHeight}px` }}>
                    <div />
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Section */}
            <div className="mt-8 flex flex-col gap-4 p-4">
              {/* GitHub */}
              <div className="flex gap-3 items-start h-[700px] ">
                <div className="w-6 h-6 flex-none mt-0.5 bg-black rounded-full" />
                <div>
                  <h3 className="text-base font-semibold mb-1">GitHub</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Reads open PRs the way your team does — picking up review feedback and threaded discussion to get each PR approved and merged.
                  </p>
                </div>
              </div>

              {/* Linear */}
              <div className="flex gap-3 items-start h-[700px] ">
                <div className="w-6 h-6 flex-none mt-0.5 bg-purple-500 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold mb-1">Linear</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Manages issues and project tracking with seamless integration for efficient workflow.
                  </p>
                </div>
              </div>

              {/* Slack */}
              <div className="flex gap-3 items-start h-[700px] ">
                <div className="w-6 h-6 flex-none mt-0.5 bg-green-500 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold mb-1">Slack</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Real-time communication and notifications to keep your team aligned and informed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Layout - Full Width Card Grid */}
        {!isMobile && (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto_1fr_2fr_1fr_auto] gap-3 items-start mb-16 justify-center">
          
          {/* Grid 1: Positioned significantly higher initially (-mt-36) */}
          <motion.div style={{ y: grid1Y }} className="flex flex-col gap-6 -mt-36">
            <div className="bg-[#EFEFEF] p-6 rounded-2xl h-[425px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 1-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <motion.div style={{ y: card_1_2_Y }} className="bg-[#EFEFEF] p-6 rounded-2xl h-[265px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 1-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </motion.div>
            <motion.div style={{ y: card_1_3_Y }} className="bg-[#EFEFEF] p-6 rounded-2xl h-[425px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 1-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </motion.div>
          </motion.div>

          {/* Grid 2: Positioned significantly higher initially (-mt-20) */}
          <motion.div style={{ y: grid2Y }} className="flex flex-col gap-6 -mt-20">
            <div className="bg-[#EFEFEF] p-6 rounded-2xl h-[425px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 2-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <motion.div style={{ y: card_2_2_Y }} className="bg-[#EFEFEF] p-6 rounded-2xl h-[265px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 2-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </motion.div>
            <motion.div style={{ y: card_2_3_Y }} className="bg-[#EFEFEF] p-6 rounded-2xl h-[425px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 2-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </motion.div>
          </motion.div>

          {/* Grid 3: Center Column */}
          <div className="flex flex-col gap-4 mt-24">
            <div className="flex flex-row gap-4">
              <div className="flex-1 bg-[#EFEFEF] p-6 rounded-2xl h-[265px] w-[265px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-1</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
              <motion.div style={{ y: card_3_2_Y }} className="flex-1 bg-[#EFEFEF] p-6 rounded-2xl h-[265px] w-[265px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-2</h4>
                <p className="text-sm text-ink/70">Description</p>
              </motion.div>
              <div className="flex-1 bg-[#EFEFEF] p-6 rounded-2xl h-[265px] w-[265px]">
                <h4 className="text-lg font-bold mb-2 text-ink">Card 3-3</h4>
                <p className="text-sm text-ink/70">Description</p>
              </div>
            </div>

            {/* Row 2 inside Grid 3: Card 3-4, 3-5, 3-6 */}
            <div className="h-[265px] relative">
              {!isExpanded && (
                <motion.div
                  style={{ y: cardsTranslateY, scale: cardsScale, opacity: cardsOpacity }}
                  className="flex flex-row gap-4 absolute inset-0 w-full"
                >
                  {cards3Data.map((card, idx) => {
                    const isMiddleCard = idx === 1; // Card 3-5
                    return (
                      <motion.div
                        key={idx}
                        style={{ y: isMiddleCard ? card_3_5_Y : 0 }}
                        className="flex-1 bg-[#EFEFEF] p-6 rounded-2xl h-[265px] w-[265px] flex flex-col justify-between"
                      >
                        <div>
                          <h4 className="text-lg font-bold mb-2 text-ink">{card.title}</h4>
                          <p className="text-sm text-ink/70">{card.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </div>
          </div>

          {/* Grid 4: Positioned significantly higher initially (-mt-20) */}
          <motion.div style={{ y: grid4Y }} className="flex flex-col gap-6 -mt-20">
            <div className="bg-[#EFEFEF] p-6 rounded-2xl h-[425px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 4-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <motion.div style={{ y: card_4_2_Y }} className="bg-[#EFEFEF] p-6 rounded-2xl h-[265px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 4-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </motion.div>
            <motion.div style={{ y: card_4_3_Y }} className="bg-[#EFEFEF] p-6 rounded-2xl h-[425px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 4-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </motion.div>
          </motion.div>

          {/* Grid 5: Positioned significantly higher initially (-mt-36) */}
          <motion.div style={{ y: grid5Y }} className="flex flex-col gap-6 -mt-36">
            <div className="bg-[#EFEFEF] p-6 rounded-2xl h-[425px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 5-1</h4>
              <p className="text-sm text-ink/70">Description</p>
            </div>
            <motion.div style={{ y: card_5_2_Y }} className="bg-[#EFEFEF] p-6 rounded-2xl h-[265px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 5-2</h4>
              <p className="text-sm text-ink/70">Description</p>
            </motion.div>
            <motion.div style={{ y: card_5_3_Y }} className="bg-[#EFEFEF] p-6 rounded-2xl h-[425px] w-[265px]">
              <h4 className="text-lg font-bold mb-2 text-ink">Card 5-3</h4>
              <p className="text-sm text-ink/70">Description</p>
            </motion.div>
          </motion.div>

        </div>
        )}

        {/* bottom card section - Desktop only */}
        {!isMobile && (
        <div className="relative z-20 w-full mx-auto min-h-[675px] pt-6 overflow-hidden">
          <AnimatePresence mode="wait">
            {isExpanded && (
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ 
                  y: -100, 
                  opacity: 0,
                  transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                className="flex flex-row gap-4 w-full"
              >
                {cards3Data.map((card, idx) => {
                  const isMiddleCard = idx === 1;
                  const isHovered = hoveredCard === idx;
                  const shouldExpand = isHovered || (hoveredCard === null && isMiddleCard);
                  return (
                    <motion.div
                      key={idx}
                      style={{ 
                        flexGrow: shouldExpand ? 5 : 1,
                        flexShrink: 1,
                        flexBasis: "0%",
                      }}
                      onHoverStart={() => setHoveredCard(idx)}
                      onHoverEnd={() => setHoveredCard(null)}
                      initial={{ y: 60, opacity: 0, scale: 0.9 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        flexGrow: shouldExpand ? 5 : 1,
                      }}
                      exit={{
                        // Phase 1: Shrink to grid card size
                        flexGrow: 1,
                        height: 265,
                        scale: 0.95,
                        // Phase 2: Move back to grid position
                        y: -200,
                        opacity: 0,
                        transition: {
                          flexGrow: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                          height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                          scale: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                          y: { duration: 0.3, delay: 0.3, ease: [0.25, 1, 0.5, 1] },
                          opacity: { duration: 0.3, delay: 0.3, ease: [0.25, 1, 0.5, 1] },
                        }
                      }}
                      transition={{
                        y: { duration: 0.5, delay: idx * 0.08, ease: "easeOut" },
                        opacity: { duration: 0.5, delay: idx * 0.08 },
                        scale: { duration: 0.5, delay: idx * 0.08 },
                        flexGrow: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                      }}
                      className={`p-6 rounded-2xl h-[675px] overflow-hidden flex flex-col justify-between cursor-pointer bg-[#EFEFEF] `}
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
          </AnimatePresence>
        </div>
        )}
      </div>
    </section>
  );
}







