"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { DevinMark } from "./BrandIcon";
import Link from "next/link";

const NAV = [
  { label: "Product", hasMenu: true },
  { label: "Solutions", hasMenu: true },
  { label: "Customers", hasMenu: false },
  { label: "Resources", hasMenu: true },
  { label: "Pricing", hasMenu: false },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full min-[940px]:bg-[#F7F6F5]">
      <div className="site-container">
        <div className="mx-auto flex h-[68px] max-w-[1320px] items-center gap-8">
          <a href="/" aria-label="Devin home" className="shrink-0 text-ink">
            <DevinMark className="h-[22px] w-[22px]" />
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 min-[940px]:flex">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.hasMenu && setHoveredMenu(item.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button
                  className="inline-flex items-center gap-1 text-[14px] leading-none font-medium text-ink  transition-all rounded-full px-3 py-2 border border-transparent hover:bg-gray-200"
                >
                  {item.label}
                  {item.hasMenu && (
                    <ChevronDown className="h-[14px] w-[14px] stroke-[1.6] stroke-[#191919] opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </button>
                {item.hasMenu && hoveredMenu === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-[#191919] rounded-lg shadow-lg border border-[#191919] p-4 z-50">
                    <div className="text-sm text-white">
                      {item.label} dropdown content
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 min-[940px]:flex">
            <a
              href="#contact"
              className="px-2 text-[14px] font-normal text-ink transition-colors hover:text-ink"
            >
              Get a Demo
            </a>
            <button
              className="rounded-[4px] border border-[#191919] px-[14px] py-[4px] text-[14px] font-medium text-ink transition-colors hover:border-[#191919]/60"
            >
              Download
            </button>
            <Link
              href="/login"
              className="bg-black px-[14px] py-[4px] text-[14px] font-medium text-white transition-opacity hover:opacity-85"
            >
              Log in
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md text-ink min-[940px]:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <div 
            className="fixed inset-0 z-[9998] bg-black/50 min-[940px]:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-0 z-[9999] flex flex-col bg-white min-[940px]:hidden">
            <div className="flex h-[68px] items-center border-b border-ink/10 bg-white px-[10px]">
              <DevinMark className="h-[22px] w-[22px] text-ink" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="ml-auto inline-flex h-9 w-9 items-center justify-center text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col gap-1 pt-4 overflow-y-auto flex-1 bg-white px-[10px]">
            {NAV.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.hasMenu) {
                      setMobileOpenMenu(mobileOpenMenu === item.label ? null : item.label);
                    } else {
                      setOpen(false);
                    }
                  }}
                  className="flex items-center justify-between border-b border-ink/10 py-4 text-[22px] font-medium tracking-[-0.02em] w-full text-left"
                >
                  {item.label}
                  {item.hasMenu && (
                    <ChevronDown
                      className={`h-4 w-4 opacity-50 transition-transform duration-200 ${
                        mobileOpenMenu === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>
                {item.hasMenu && mobileOpenMenu === item.label && (
                  <div className="pl-4 py-2 border-b border-ink/10">
                    <ul className="space-y-2">
                      <li className="text-[18px] text-ink/70 py-2">Sub-item 1</li>
                      <li className="text-[18px] text-ink/70 py-2">Sub-item 2</li>
                      <li className="text-[18px] text-ink/70 py-2">Sub-item 3</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="py-2 text-center text-[15px] font-medium text-ink/70"
              >
                Get a Demo
              </a>
              <button
                onClick={() => setOpen(false)}
                className="rounded-[7px] border border-ink/25 px-4 py-3 text-center text-[15px] font-medium"
              >
                Download
              </button>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-[7px] bg-ink px-4 py-3 text-center text-[15px] font-medium text-ink-white"
              >
                Log in
              </Link>
            </div>
          </nav>
        </div>
        </>
      )}
    </header>
  );
}
