import { GitCommit } from "lucide-react";
import { getGithubStats } from "../../lib/github";
import Link from "next/link";

type RecentCommitsProps = {
  username?: string;
};

export default async function RecentCommits({
  username = "PavanBhat007",
}: RecentCommitsProps) {
  const { commits, languages } = await getGithubStats(username);

  return (
    <div className="w-full h-full border border-white/10 rounded-xl p-4 md:p-6 font-mono text-sm shadow-xl text-gray-300">
      <div className="flex items-center justify-between mb-2 border-b border-gray-300/20 pb-2">
        <div className="flex items-center gap-2">
          <GitCommit size={18} className="text-[#f472b6]" />
          <h3 className="text-white font-bold text-base tracking-wide">
            Recent Commits
          </h3>
        </div>
        <span className="text-[#f472b6]/70 text-xs font-mono">[changes]</span>
      </div>

      <div className="text-xs mb-2">
        {commits.map((commit) => (
          <div
            key={commit.id}
            className="flex items-center justify-between gap-4 group"
          >
            <div className="flex items-center gap-2 min-w-0 truncate py-1">
              <span className="text-gray-200 pr-2 truncate">
                {commit.repo}
              </span>
              <Link
                href={commit.url}
                rel="noopener noreferrer"
                target="_blank"
                className="text-gray-400 group-hover:text-white transition-colors truncate"
              >
                {commit.message}
              </Link>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 text-xs font-semibold">
              <span className="text-[#4ade80]">+{commit.additions}</span>
              <span className="text-gray-600">/</span>
              <span className="text-[#f43f5e]">-{commit.deletions}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-2">
        <Link
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-[#f472b6] hover:text-[#f472b6]/80 transition-colors font-bold shrink-0"
        >
          <span>View on GitHub</span>
        </Link>
        
        <div className="flex-1 flex h-2 rounded-full overflow-hidden bg-[#1e1e2e] gap-[2px]">
          {languages.map((language, index) => (
            <div
              key={index}
              style={{
                width: `${language.percentage}%`,
                backgroundColor: language.colour,
              }}
              className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-300"
              title={`${language.name}: ${language.percentage}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
