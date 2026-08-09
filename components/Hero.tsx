"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowUpRight,
  CalendarRange,
  X,
} from "lucide-react";
import Image from "next/image";
import { EXPERIENCES } from "../lib/data/experiences";
import AboutMe from "./AboutMe";

export const Hero = () => {
  const [openExp, setOpenExp] = useState<string | null>(null);
  const [position, setPosition] = useState<"above" | "below">("above");
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const popoverRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Update position based on scroll + screen size
  useEffect(() => {
    if (!openExp) return;

    const button = buttonRefs.current.get(openExp);
    if (!button) return;

    const updatePosition = () => {
      const rect = button.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;
      const isMobile = window.innerWidth < 640; // sm breakpoint

      // On mobile → always prefer below
      if (isMobile) {
        setPosition("below");
        return;
      }

      // On desktop: prefer above, but flip if not enough space
      if (spaceAbove > 300) {
        setPosition("above");
      } else if (spaceBelow > 300) {
        setPosition("below");
      } else {
        // fallback: above but might be partially cut – better than nothing
        setPosition("above");
      }
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition);
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [openExp]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!openExp) return;

      const button = buttonRefs.current.get(openExp);
      const popover = popoverRefs.current.get(openExp);

      if (
        !button?.contains(e.target as Node) &&
        !popover?.contains(e.target as Node)
      ) {
        setOpenExp(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openExp]);

  return (
    <section className="mt-12 max-w-3xl lg:max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        Hi! I'm <span className="text-neon">Pavan 👋</span>
      </h1>

      <AboutMe />

      <div className="flex items-center gap-4 mt-6 text-sm flex-wrap">
        {EXPERIENCES.map((exp, idx) => {
          const isOpen = openExp === exp.company;
          const isBelow = position === "below";

          return (
            <div
              key={exp.company}
              className="relative flex items-center gap-3 outline-none"
            >
              <button
                ref={(el) => {
                  if (el) buttonRefs.current.set(exp.company, el);
                  else buttonRefs.current.delete(exp.company);
                }}
                type="button"
                onClick={() => setOpenExp(isOpen ? null : exp.company)}
                className={`
                  flex items-center gap-3 font-medium
                  hover:text-neon transition-colors outline-none
                `}
              >
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={36}
                  height={36}
                  className="rounded-md"
                />
                <span>
                  {exp.company}
                  {!exp.is_current && (
                    <span className="text-gray-600 ml-1.5 text-xs">(past)</span>
                  )}
                </span>
              </button>

              {isOpen && (
                <div
                  ref={(el) => {
                    if (el) popoverRefs.current.set(exp.company, el);
                    else popoverRefs.current.delete(exp.company);
                  }}
                  className={`
                    absolute md:left-1/2 -translate-x-2 md:-translate-x-1/2 z-30
                    w-max min-w-[240px] max-w-[360px] sm:max-w-[420px]
                    bg-[#0b0f14]/95 backdrop-blur-md border border-white/30
                    rounded-lg shadow-2xl overflow-hidden md:mx-6
                    ${isBelow ? "top-full mt-3" : "bottom-full mb-3"}
                  `}
                >
                  <button
                    onClick={() => setOpenExp(null)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-neon p-1 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>

                  <div className="p-4 sm:p-5">
                    <div className="hidden md:flex items-center gap-3 mb-4">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={48}
                        height={48}
                        className="rounded-md"
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold text-lg">
                          {exp.company}
                        </span>
                        <span className="text-sm text-gray-400">
                          {exp.role || "Role"}
                        </span>
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-gray-300 text-sm leading-relaxed mb-3">
                        {exp.description}
                      </p>
                    )}

                    {exp.period && (
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                        <CalendarRange size={14} />
                        <span>{exp.period}</span>
                      </div>
                    )}

                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-neon text-sm hover:underline mt-1"
                      >
                        Visit Website
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    <div className="flex md:hidden items-center gap-3 mt-4">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={48}
                        height={48}
                        className="rounded-md"
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold text-lg">
                          {exp.company}
                        </span>
                        <span className="text-sm text-gray-400">
                          {exp.role || "Role"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow – points to trigger */}
                  <div
                    className={`
                      absolute left-1/2 -translate-x-1/2
                      w-0 h-0 border-l-[8px] border-l-transparent
                      border-r-[8px] border-r-transparent
                      ${
                        isBelow
                          ? "top-[-8px] border-b-[8px] border-b-[#0b0f14]/95"
                          : "bottom-[-8px] border-t-[8px] border-t-[#0b0f14]/95"
                      }
                    `}
                  />
                </div>
              )}

              {idx < EXPERIENCES.length - 1 && (
                <div className="w-6 h-0.5 -rotate-[70deg] bg-neon shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
