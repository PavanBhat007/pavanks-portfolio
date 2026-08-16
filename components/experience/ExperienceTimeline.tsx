"use client";

import { useRef } from "react";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { EXPERIENCES } from "../../lib/data/experiences";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });

  // Transform scale for smooth fill
  const scaleLine = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={containerRef} className="mt-20 w-full font-mono">
      {/* Header */}
      <p className="text-sm text-gray-400 mb-3">
        <span className="text-neon">root@kspavan:~$</span> cat experience.log
      </p>

      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="text-neon" size={20} />
        <h2 className="text-xl font-bold text-white">Experiences</h2>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Static Background Base Line */}
        <div
          className="
            absolute left-4 top-0 h-full w-px
            bg-[#30363d]
            lg:left-0 lg:top-5 lg:h-px lg:w-full
          "
        />

        {/* Animated Emerald-to-Blue Gradient Overlay */}
        <motion.div
          style={{
            scaleY: scaleLine,
            scaleX: scaleLine,
            transformOrigin: "top left",
          }}
          className="
            absolute left-4 top-0 h-full w-px
            bg-gradient-to-b from-emerald-400 to-blue-500
            lg:left-0 lg:top-5 lg:h-px lg:w-full
            lg:bg-gradient-to-r lg:from-emerald-400 lg:to-blue-500
            z-10
          "
        />

        {/* Entries */}
        <div
          className="
            flex flex-col gap-6
            lg:flex-row lg:justify-between
          "
        >
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="
                relative pl-10
                lg:pl-0 lg:pt-10
                flex-1
              "
            >
              {/* Dot */}
              <span
                className={`
                  absolute z-20
                  left-3 top-1.5
                  lg:left-1/2 lg:-translate-x-1/2 lg:top-4
                  h-2 w-2 rounded-full
                  ${exp.color}
                  shadow-[0_0_10px_currentColor]
                `}
              />

              {/* Terminal row */}
              <div className="text-xs text-gray-300 leading-relaxed">
                <span className="text-gray-500">[{exp.period}]</span>{" "}
                <span className="text-neon">{exp.role}</span>{" "}
                <span className="text-gray-400">@ {exp.company}</span>
                <span className="text-gray-500"> — </span>
                <span className="text-gray-300">{exp.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href="/experiences">
        <button className="mt-4 lg:mt-1 inline-flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-neon transition-colors group">
          <span>Learn More</span>
          <ArrowUpRight
            size={14}
            className="opacity-70 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </Link>
    </section>
  );
}
