import { PROJECTS } from "../../../lib/data/projects";
import { ProjectPageCard } from "../../../components/Projects";
import { ArrowUpRight, Folder } from "lucide-react";

export default function ProjectsPage() {
  return (
    <section className="w-full my-12 px-12 xl:px-24">
      <p className="text-sm text-gray-400 mb-3">
        <span className="text-neon">root@kspavan:~$</span> ls projects
      </p>

      <div className="flex items-center mb-8">
        <Folder size={24} className="inline-block mr-2 text-neon" />
        <h2 className="text-2xl font-bold text-white">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {PROJECTS.map((project, idx) => (
          <ProjectPageCard key={idx} {...project} />
        ))}
      </div>

      <button className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-gray-400 hover:text-neon transition-colors group">
        <span>View all projects</span>
        <ArrowUpRight
          size={14}
          className="opacity-70 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>
    </section>
  );
}
