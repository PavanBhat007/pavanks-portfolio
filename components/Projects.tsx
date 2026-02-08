import {
  ArrowUpRight,
  Bolt,
  DraftingCompass,
  GithubIcon,
  StarsIcon,
  User,
} from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "../lib/data/projects";
import Link from "next/link";

export const Projects = () => {
  return (
    <section className="w-full mt-20">
      <p className="text-sm text-gray-400 mb-3">
        <span className="text-neon">root@kspavan:~$</span> ls projects | head -n
        2
      </p>

      <div className="flex items-center mb-8">
        <StarsIcon size={24} className="inline-block mr-2 text-neon" />
        <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {PROJECTS.slice(0, 2).map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      <Link href="/projects">
        <button className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-neon transition-colors group">
          <span>View all projects</span>
          <ArrowUpRight
            size={14}
            className="opacity-70 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </Link>
    </section>
  );
};

interface ProjectCardProps {
  id: number;
  slug: string;
  title: string;
  description: string;
  languages: string[];
  tools: string[];
  collaborators: string[];
  repo?: string;
  image: string;
  year: number;
}

export const ProjectCard = ({
  id,
  slug,
  title,
  description,
  languages,
  tools,
  collaborators,
  repo,
  image,
  year,
}: ProjectCardProps) => {
  return (
    <Link href={`projects/${slug}`}>
      <div
        key={id}
        className="group h-full relative rounded-lg border border-[#495068] bg-[#1E1E2E] p-5 hover:p-0 transition-[background-color,border-color,padding] ease-in-out duration-300 hover:border-neon cursor-pointer"
      >
        <div>
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="rounded mb-4 w-full group-hover:rounded-b-none transition-[border-radius]"
          />
        </div>

        <div className="group-hover:px-5 group-hover:pb-5 transition-[padding] duration-300 ease-in-out">
          {/* Content */}
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

          <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="flex items-center gap-1.5 text-xs px-2 py-1 rounded 
                 border border-cyan-400/30 
                 bg-cyan-400/10 
                 text-cyan-300 
                 font-mono
                 hover:shadow-[0_0_8px_rgba(56,189,248,0.25)]
                 transition-shadow duration-200 ease-out"
                >
                  <Bolt size={12} />
                  {lang}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="flex items-center gap-1.5 text-xs px-2 py-1 rounded 
                 border border-emerald-400/30 
                 bg-emerald-400/10 
                 text-emerald-300 
                 font-mono
                 hover:shadow-[0_0_8px_rgba(56,189,248,0.25)]
                 transition-shadow duration-200 ease-out"
                >
                  <DraftingCompass size={12} />
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {collaborators.map((person) => (
                <span
                  key={person}
                  className="flex items-center gap-1.5 text-xs px-2 py-1 rounded 
                 border border-amber-400/30 
                 bg-amber-400/10 
                 text-amber-300 
                 font-mono cursor-pointer
                 hover:shadow-[0_0_8px_rgba(56,189,248,0.25)]
                 transition-shadow duration-200 ease-out"
                >
                  <User size={12} />
                  {person}
                </span>
              ))}
            </div>

            {/* Footer */}
            {repo && (
              <a
                href={repo}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-neon transition-colors duration-200"
              >
                <GithubIcon size={16} />
                View Source
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const ProjectPageCard = ({
  slug,
  title,
  description,
  languages,
  tools,
  collaborators,
  image,
}: ProjectCardProps) => {
  return (
    <Link href={`/projects/${slug}`}>
      <div
        className="
        group rounded-lg overflow-hidden
        border border-[#3b415a]
        bg-[#0d1117] h-full
        hover:border-neon
        transition-colors duration-300
        font-mono cursor-pointer
      "
      >
        {/* Terminal header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-[#30363d]">
          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          </div>
          <span className="text-xs text-neon">
            <span className="text-gray-500">$</span> {slug}
          </span>
        </div>

        {/* Image block (separate, clean) */}
        <div className="relative bg-black">
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="mb-4 w-full"
          />
        </div>

        {/* Content */}
        <div className="px-4 pb-4 space-y-3">
          {/* Title */}
          <div className="text-lg font-semibold">{title}</div>

          {/* Description */}
          {description && (
            <p className="text-xs text-gray-400 leading-relaxed">
              {description}
            </p>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {languages.map((lang) => (
              <span
                key={lang}
                className="
                text-[11px] px-2 py-0.5 rounded
                bg-[#0b2f3a] text-cyan-300
                border border-cyan-400/30
              "
              >
                {lang}
              </span>
            ))}

            {tools.map((tool) => (
              <span
                key={tool}
                className="
                text-[11px] px-2 py-0.5 rounded
                bg-[#0b3a2a] text-emerald-300
                border border-emerald-400/30
              "
              >
                {tool}
              </span>
            ))}

            {collaborators.map((person) => (
              <span
                key={person}
                className="
                text-[11px] px-2 py-0.5 rounded
                bg-[#3a2a0b] text-amber-300
                border border-amber-400/30
              "
              >
                @{person}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Projects;
