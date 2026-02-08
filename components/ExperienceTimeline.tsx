import { Briefcase } from "lucide-react";
import { EXPERIENCES } from "../lib/data/experiences";

export default function ExperienceTimeline() {
  return (
    <section className="mt-20 w-full font-mono">
      {/* Header */}
      <p className="text-sm text-gray-400 mb-3">
        <span className="text-neon">root@kspavan:~$</span> cat experience.log
      </p>

      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="text-neon" size={20} />
        <h2 className="text-xl font-bold text-white">
          Experiences
        </h2>
      </div>

      {/* Timeline container */}
      <div className="relative">
        {/* Line */}
        <div
          className="
            absolute left-4 top-0 h-full w-px
            bg-[#30363d]
            lg:left-0 lg:top-5 lg:h-px lg:w-full
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
                  absolute
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
                <span className="text-gray-300">
                  {exp.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
