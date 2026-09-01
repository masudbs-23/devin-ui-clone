"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { PukuMark } from "../brand";
import Link from "next/link";
import { NAV_ITEMS } from "../../lib/constants";
import { useMobileMenu, useHoverMenu } from "../../lib/hooks";

export function Navbar() {
  const { isOpen: open, toggle, close } = useMobileMenu();
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverMenu();
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F6F4]">
      <div className="mx-auto max-w-[var(--container-outer)] px-8">
        <div className="mx-auto flex h-[72px] max-w-[var(--container-navbar)] items-center gap-8">
          <Link href="/" aria-label="Puku home" className="shrink-0 text-[#141414]">
            <PukuMark className="h-[22px] w-[22px]" />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.hasMenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="inline-flex items-center gap-1 px-2 font-heading text-[14px] leading-[1.4] no-underline whitespace-nowrap transition-opacity duration-150 ease-out cursor-pointer hover:opacity-70 text-[#141414] font-medium"
                >
                  {item.label}
                  {item.hasMenu && (
                    <ChevronDown className="h-[14px] w-[14px] stroke-[1.6] stroke-[#191919] opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </button>
                {item.hasMenu && hoveredItem === item.label && (
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
              className="px-2 font-heading text-[14px] leading-[1.4] no-underline whitespace-nowrap transition-opacity duration-150 ease-out cursor-pointer hover:opacity-70 text-[#141414] font-medium"
            >
              Get a Demo
            </a>
            <button
              className="rounded-[2px] border border-[#E0DFDD] px-[16px] py-[10px] font-heading text-[14px] leading-[1.4] font-medium text-[#141414] transition-colors hover:border-[#141414] "
            >
              Download
            </button>
            <a
              href="https://puku.sh/login?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#141414] px-[16px] py-[10px] font-heading text-[14px] leading-[1.4] font-medium text-[#FFFFFF] rounded-[2px] transition-opacity hover:opacity-85"
            >
              Log in
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={toggle}
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
            onClick={close}
          />
          <div className="fixed inset-0 z-[9999] flex flex-col bg-white lg:hidden">
            <div className="flex h-[72px] items-center border-b border-[#E0DFDD] bg-white px-[10px]">
              <PukuMark className="h-[22px] w-[22px] text-[#141414]" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="ml-auto inline-flex h-9 w-9 items-center justify-center text-[#141414]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav aria-label="Mobile" className="flex flex-col gap-1 pt-4 overflow-y-auto flex-1 bg-white px-[10px]">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                <a
                  onClick={() => {
                    if (item.hasMenu) {
                      setMobileOpenMenu(mobileOpenMenu === item.label ? null : item.label);
                    } else {
                      close();
                    }
                  }}
                  className="flex items-center justify-between border-b border-[#E0DFDD] py-4 font-heading text-[24px] leading-[1.4] font-medium tracking-[-0.02em] w-full text-left text-[#141414]"
                  
                >
                  {item.label}
                  {item.hasMenu && (
                    <ChevronDown
                      className={`h-4 w-4 opacity-50 transition-transform duration-200 ${
                        mobileOpenMenu === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </a>
                {item.hasMenu && mobileOpenMenu === item.label && (
                  <div className="pl-4 py-2 border-b border-[#E0DFDD]">
                    <ul className="space-y-2">
                      <li className="font-heading text-[16px] leading-[1.4] text-[#5F5F5D] py-2">Sub-item 1</li>
                      <li className="font-heading text-[16px] leading-[1.4] text-[#5F5F5D] py-2">Sub-item 2</li>
                      <li className="font-heading text-[16px] leading-[1.4] text-[#5F5F5D] py-2">Sub-item 3</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={close}
                className="py-2 text-center font-heading text-[14px] leading-[1.4] font-medium text-[#5F5F5D]"
              >
                Get a Demo
              </a>
              <button
                onClick={close}
                className="rounded-[8px] border border-[#E0DFDD] px-[16px] py-[10px] font-heading text-[14px] leading-[1.4] font-medium text-[#141414] text-center"
              >
                Download
              </button>
              <a
                href="https://puku.sh/login?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="rounded-[8px] bg-[#141414] px-[16px] py-[10px] font-heading text-[14px] leading-[1.4] font-medium text-[#FFFFFF] text-center"
              >
                Log in
              </a>
            </div>
          </nav>
        </div>
        </>
      )}
    </header>
  );
}
