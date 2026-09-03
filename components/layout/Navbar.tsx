"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { PukuMark } from "../brand";
import Link from "next/link";
import { NAV_ITEMS } from "../../lib/constants";
import { useMobileMenu, useHoverMenu } from "../../lib/hooks";

export function Navbar() {
  const { isOpen: open, toggle, close } = useMobileMenu();
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useHoverMenu();
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-[1000] bg-[#F7F6F5] transition-all duration-150 ease-out ${
        isScrolled ? "border-b border-[#D6D6D4]" : "border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1440px] mx-auto px-5 md:px-10 lg:px-12 xl:px-15 py-[18px] box-border h-[66px]">

        {/* Logo + Navigation */}
        <div
          className="flex items-center gap-5 xl:gap-[40px] min-w-0"
          style={{ width: "527px" }}
        >
          <Link
            href="/"
            aria-label="Puku home"
            className="shrink-0 text-[#141414]"
          >
            <PukuMark className="h-[22px] w-[22px]" />
          </Link>

          <nav
            aria-label="Main"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() =>
                  item.hasMenu && handleMouseEnter(item.label)
                }
                onMouseLeave={handleMouseLeave}
              >
                <button className="inline-flex items-center gap-1 px-2 font-heading text-[14px] leading-[1.4] no-underline whitespace-nowrap transition-opacity duration-150 ease-out cursor-pointer hover:opacity-70 text-[#141414] font-medium">
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
        </div>

        {/* Desktop Actions */}
        <div
          className="hidden min-[1170px]:flex items-center gap-[6px] shrink-0"
          style={{ width: "253px", height: "32px" }}
        >
          <a
            href="#contact"
            className="px-2 font-heading text-[14px] leading-[26px] no-underline whitespace-nowrap transition-opacity duration-150 ease-out cursor-pointer hover:opacity-70 text-[#141414] font-medium"
          >
            Get a Demo
          </a>

          <button className="px-2 font-heading text-[14px] leading-[26px] no-underline whitespace-nowrap transition-opacity duration-150 ease-out cursor-pointer hover:opacity-70 text-[#141414] font-medium border border-[#141414] bg-transparent h-[32px]">
            Download
          </button>

          <a
            href="https://puku.sh/login?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-heading text-[14px] leading-[26px] no-underline whitespace-nowrap transition-opacity duration-150 ease-out cursor-pointer hover:opacity-70 text-white font-medium border border-[#141414] bg-black px-[12px] h-[32px]"
          >
            Log in
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={toggle}
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md text-[#141414] lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black/50 lg:hidden"
            onClick={close}
          />

          <div className="fixed inset-0 z-[9999] flex flex-col pl-4 pr-4 bg-white lg:hidden">
            {/* ... আপনার existing mobile menu ... */}
          </div>
        </>
      )}
    </header>
  );
}