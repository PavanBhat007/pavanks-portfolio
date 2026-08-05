import Image from "next/image";
import { Experience } from "../../lib/data/experiences";

type ExperienceCardProps = {
  exp: Experience;
  selected: boolean;
};

export default function ExperienceCard({ exp, selected }: ExperienceCardProps) {
  const [startDate, endDate] = exp.period.split("to");

  return (
    <div
      className={`bg-slate-400/10 hover:bg-slate-400/20 rounded border border-gray-100/10 hover:border-gray-100/20 p-3 hover:scale-105 transition-transform duration-300 cursor-pointer ${selected && "bg-black/40 hover:bg-black/50 animate-pulse"}`}
    >
      <div className="flex items-center justify-center gap-4">
        <Image src={exp.logo} alt={exp.company} width={20} height={20} />
        <p className="font-semibold text-neon w-fit text-center truncate">
          {exp.company}
        </p>
      </div>

      <p className="hidden xl:flex text-xs text-gray-400 items-center gap-2 mt-2 w-full">
        <span className="shrink-0">{endDate?.trim()}</span>

        <span className="h-px flex-1 bg-gray-500 min-w-[12px]" />
        <span className="text-xs shrink-0 text-gray-300 font-medium">
          {exp.role}
        </span>
        <span className="h-px flex-1 bg-gray-500 min-w-[12px]" />

        <span className="shrink-0">{startDate?.trim()}</span>
      </p>

      <p className="block xl:hidden w-full text-xs font-semibold text-center mt-1">
        {exp.role}
      </p>
    </div>
  );
}
