"use client";

import Image from "next/image";
import { Experience } from "../../lib/data/experiences";
import { useMemo } from "react";
import { ChevronRight } from "lucide-react";

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
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <div>
            <Image
              src={experience.logo}
              alt={experience.company}
              width={50}
              height={50}
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{experience.company}</h3>
            <p className="text-neon">{experience.role}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-right text-gray-600">{periodStart}</p>
          <p className="text-right text-gray-400">{periodEnd}</p>
        </div>
      </div>

      <div className="w-full border-t border-b border-gray-100/10 mt-4 py-4">
        <h4 className="font-semibold">Role Description</h4>
        <p className="mt-1">{experience.description}</p>
      </div>

      <div className="w-full border-t border-b border-gray-100/10 py-4">
        <h4 className="font-semibold">Responsibilities</h4>
        <div className="flex flex-col gap-1 mt-4 leading-snug">
          {experience.responsibilities.map((resp, index) => (
            <p key={index} className="flex items-center gap-2">
              <ChevronRight className="font-bold" size={12} />
              <span className="">{resp}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="w-full border-t border-gray-100/10 py-4">
        <h4 className="font-semibold">Skills Gained/Used</h4>
        <div className="flex items-center gap-2 mt-4">
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
