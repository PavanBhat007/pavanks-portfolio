import { getUserRepoStats } from "../../lib/github";

type RecentCommitsProps = {
  username?: string;
};

export default async function GitUserStats({
  username = "PavanBhat007",
}: RecentCommitsProps) {
  const { reposCount, languages } = await getUserRepoStats(username);

  return (
    <div className="w-full h-full border border-white/10 rounded-xl p-4 md:p-6 font-mono text-sm shadow-xl text-gray-300">
      <div className="flex items-center justify-between w-full border-b border-gray-300/20 pb-2">
        <span className="font-semibold text-base">Languages</span>
        <p className="hidden md:block text-xs text-neon text-right">across {reposCount} repos</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 w-full">
        {languages.map((lang, index) => (
          <div key={index} className="flex items-center justify-between border border-gray-300/10 rounded">
            <div className="flex items-center gap-2 shadow-md shadow-gray-600/10">
              <span
                style={{
                  backgroundColor: `${lang.colour}60`
                }}
                className="text-xs px-1 rounded-l p-1"
              >{lang.repos}</span>
              <span className="text-xs pr-1">{lang.name}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="md:hidden w-full mt-4">
        <p className="text-xs text-neon text-right">across {reposCount} repos</p>
      </div>
    </div>
  );
}
