"use client";

import { ArrowLeft, Briefcase } from "lucide-react";
import { Experience, EXPERIENCES } from "../../../lib/data/experiences";
import ExperienceCard from "../../../components/experience/ExperienceCard";
import { useState } from "react";
import ExperienceModal from "../../../components/experience/ExperienceModal";

export default function ExperiencesPage() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience>(EXPERIENCES[0]);

  return (
    <section className="w-full my-12 px-12 xl:px-24">
      <p className="text-sm text-gray-400 mb-3">
        <span className="text-neon">root@kspavan:~$</span> ls experience
      </p>

      <div className="flex items-center mb-8">
        <Briefcase size={24} className="inline-block mr-2 text-neon" />
        <h2 className="text-2xl font-bold text-white">Experience</h2>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full">
        {EXPERIENCES.map((exp, index) => {
          const isBetween = index > 0;

          return (
            <div
              key={exp.company + index}
              className="flex-1 flex items-center gap-4 min-w-0"
            >
              {isBetween && (
                <ArrowLeft size={24} className="text-neon shrink-0 opacity-60" />
              )}

              <div className="flex-1" onClick={() => setSelectedExperience(exp)}>
                <ExperienceCard exp={exp} selected={selectedExperience.slug === exp.slug} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-slate-500/10 px-6 py-4 border border-gray-100/10 rounded">
        <ExperienceModal experience={selectedExperience} />
      </div>
    </section>
  );
}
