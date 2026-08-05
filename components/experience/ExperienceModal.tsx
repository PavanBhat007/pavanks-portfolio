"use client";

import Image from "next/image";
import { Experience } from "../../lib/data/experiences";
import { useMemo } from "react";

type ExperienceModalProps = {
  experience: Experience;
};

const COLORS = ["amber", "emerald", "cyan"];

export default function ExperienceModal({ experience }: ExperienceModalProps) {
  const periodStart = useMemo(() => {
    return experience.period.trim().split("to")[0];
  }, [experience]);

  const periodEnd = useMemo(() => {
    return experience.period.trim().split("to")[1];
  }, [experience]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <div className="flex items-center justify-start gap-4">
            <div className="hidden md:block">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={50}
                height={50}
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={30}
                height={30}
              />
            </div>
            <div>
              <h3 className="text-sm md:text-xl font-semibold">
                {experience.company}
              </h3>
              <p className="text-neon hidden md:inline">{experience.role}</p>
            </div>
          </div>
          <p className="text-neon text-xs inline md:hidden">
            {experience.role}
          </p>
        </div>

        <div className="flex flex-col text-xs md:text-sm">
          <p className="text-right text-gray-600 whitespace-nowrap">
            {periodStart}
          </p>
          <p className="text-right text-gray-400 whitespace-nowrap">
            {periodEnd}
          </p>
        </div>
      </div>

      <div className="w-full border-t border-b border-gray-100/10 mt-4 py-4">
        <h4 className="font-semibold">Role Description</h4>
        <p className="mt-1 text-xs md:text-sm">{experience.description}</p>
      </div>

      <div className="space-y-3 my-6">
        <h3 className="text-sm font-semibold text-gray-300">
          Responsibilities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {experience.responsibilities.map((item, idx) => {
            const title = item.title;
            const desc = item.description;

            return (
              <div
                key={idx}
                className="relative p-3 rounded-lg bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 transition-colors"
              >
                {title && (
                  <span className="inline-block text-sm font-semibold font-mono text-neon bg-neon/10 mb-1.5 border-b border-gray-600/50">
                    {title}
                  </span>
                )}
                <p className="text-xs text-gray-300 leading-relaxed">{desc}</p>

                <p className="absolute -z-50 top-0 right-0 p-2 text-3xl text-slate-300/30 italic font-mono animate-pulse">
                  {idx + 1}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full border-t border-gray-100/10 py-4">
        <h4 className="font-semibold">Skills Gained/Used</h4>
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          {experience.skills.map((skill, index) => {
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            const bg = `bg-${color}-400/10`;
            const border = `border-${color}-400/30`;
            const text = `text-${color}-300`;

            return (
              <span
                key={index}
                className={`text-xs ${bg} border ${border} ${text} px-2 py-1 rounded font-mono`}
              >
                {skill}
              </span>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 translate-x-20 translate-y-20 -z-50">
        <div className="h-64 rounded-full w-64 bg-gray-400/10 flex items-center justify-center">
          <div className="w-36 rounded-full h-36 bg-[#1E1E2E]" />
        </div>
      </div>
    </div>
  );
}
