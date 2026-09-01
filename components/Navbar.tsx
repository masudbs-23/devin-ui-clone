"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { PukuMark } from "./BrandIcon";
import Link from "next/link";
import { NAV_ITEMS } from "../lib/constants";

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
    <header className="sticky top-0 z-50 w-full bg-[#F7F6F4]">
      <div className="site-container">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center gap-8 px-8">
          <Link href="/" aria-label="Puku home" className="shrink-0 text-[#141414]">
            <PukuMark className="h-[22px] w-[22px]" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.hasMenu && setHoveredMenu(item.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button
                  className="inline-flex items-center gap-1 text-[14px] leading-none font-medium text-[#141414] transition-all rounded-full px-3 py-2 border border-transparent hover:bg-[#EDEDED]"
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

          <div className="ml-auto hidden items-center gap-2 lg:flex">
            <a
              href="#contact"
              className="px-2 text-[14px] font-normal text-[#141414] transition-colors hover:text-[#141414]"
            >
              Get a Demo
            </a>
            <button
              className="rounded-[8px] border border-[#E0DFDD] px-[14px] py-[10px] text-[14px] font-medium text-[#141414] transition-colors hover:border-[#141414]"
            >
              Download
            </button>
            <Link
              href="/login"
              className="bg-[#141414] px-[14px] py-[10px] text-[14px] font-medium text-[#FFFFFF] rounded-[8px] transition-opacity hover:opacity-85"
            >
              Log in
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md text-[#141414] lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <>
          <div 
            className="fixed inset-0 z-[9998] bg-black/50 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-0 z-[9999] flex flex-col bg-white lg:hidden">
            <div className="flex h-[72px] items-center border-b border-[#E0DFDD] bg-white px-[10px]">
              <PukuMark className="h-[22px] w-[22px] text-[#141414]" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="ml-auto inline-flex h-9 w-9 items-center justify-center text-[#141414]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col gap-1 pt-4 overflow-y-auto flex-1 bg-white px-[10px]">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.hasMenu) {
                      setMobileOpenMenu(mobileOpenMenu === item.label ? null : item.label);
                    } else {
                      setOpen(false);
                    }
                  }}
                  className="flex items-center justify-between border-b border-[#E0DFDD] py-4 text-[22px] font-medium tracking-[-0.02em] w-full text-left text-[#141414]"
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
                  <div className="pl-4 py-2 border-b border-[#E0DFDD]">
                    <ul className="space-y-2">
                      <li className="text-[18px] text-[#5F5F5D] py-2">Sub-item 1</li>
                      <li className="text-[18px] text-[#5F5F5D] py-2">Sub-item 2</li>
                      <li className="text-[18px] text-[#5F5F5D] py-2">Sub-item 3</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="py-2 text-center text-[15px] font-medium text-[#5F5F5D]"
              >
                Get a Demo
              </a>
              <button
                onClick={() => setOpen(false)}
                className="rounded-[8px] border border-[#E0DFDD] px-4 py-3 text-center text-[15px] font-medium text-[#141414]"
              >
                Download
              </button>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-[8px] bg-[#141414] px-4 py-3 text-center text-[15px] font-medium text-[#FFFFFF]"
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
