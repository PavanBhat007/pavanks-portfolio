import Image from "next/image";
import { PROJECTS } from "../../../../lib/data/projects";
import { Calendar, ExternalLink, Tag, User, Users } from "lucide-react";
import Link from "next/link";

const TERMINAL_COLORS = [
  "text-emerald-400",
  "text-cyan-400",
  "text-purple-400",
  "text-pink-400",
  "text-yellow-400",
  "text-orange-400",
  "text-blue-400",
];

const getTagColor = (tag: string, salt = "") => {
  let hash = 0;
  const input = `${tag}-${salt}`;

  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 6) - hash);
  }

  return TERMINAL_COLORS[Math.abs(hash) % TERMINAL_COLORS.length];
};

export default async function Project({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) return <div>Project not found</div>;

  const tags = [...project.languages, ...project.tools];

  return (
    <div className="mx-auto my-12 w-full max-w-5xl px-6 md:px-12">
      {/* Image */}
      <div className="rounded-xl bg-black/30 p-0 md:p-8">
        <Image
          src={project.image}
          width={700}
          height={450}
          alt={project.title}
          className="mx-auto rounded-xl shadow-2xl shadow-black/40"
        />
      </div>

      {/* Header */}
      <div className="mt-10 border-b border-white/10 pb-8">
        <h1 className="text-3xl font-bold text-neon">{project.title}</h1>

        <div className="mt-4 flex flex-wrap items-center gap-6 text-sm">
          <span className="flex items-center gap-2 text-gray-400">
            <Calendar size={14} />
            {project.year}
          </span>

          <Link
            href={project.link}
            target="_blank"
            className="flex items-center gap-2 text-gray-400 hover:text-neon transition"
          >
            <ExternalLink size={16} />
            View
          </Link>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Tag size={14} className="text-gray-400" />
          {tags.map((tag) => (
            <span
              key={tag}
              className={`
                text-xs font-mono px-2 py-1 rounded-md
                bg-[#313244] font-semibold
                ${getTagColor(tag, project.slug)}
              `}
            >
              {tag.toLowerCase()}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Users size={14} className="text-gray-400" />
          {project.collaborators.map((person) => {
            return (
              <p key={person} className="flex items-center gap-2 text-xs text-gray-400 bg-[#313244] px-2 py-1 rounded font-semibold">
                <User size={14} />
                <span>{person}</span>
              </p>
            );
          })}
        </div>

        <div className="mt-6 text-sm text-gray-500 w-[90%]">
          {project.description}
        </div>
      </div>

      {/* Rich Content */}
      <div className="pt-10">
        <div
          className="
            prose prose-invert prose-sm sm:prose-base
            max-w-none
            prose-headings:text-neon
            prose-p:text-gray-300
            prose-li:text-gray-300
            prose-a:text-cyan-400
            prose-code:bg-[#1e1e2e] prose-code:text-pink-400 prose-code:px-1 prose-code:rounded
            prose-pre:bg-[#1e1e2e] prose-pre:border prose-pre:border-white/10
          "
          dangerouslySetInnerHTML={{ __html: project.technical_description }}
        />
      </div>
    </div>
  );
}
