import { Languages } from "lucide-react";
import { getUserRepoStats } from "../../lib/github";

// Helper function to calculate YIQ luminance and pick high-contrast text color
function getContrastColor(hexColor: string): "#0b0f14" | "#ffffff" {
  if (!hexColor) return "#ffffff";

  // Remove leading '#' if present
  const hex = hexColor.replace("#", "");

  // Convert 3-digit hex to 6-digit hex
  const fullHex =
    hex.length === 3
      ? hex
          .split("")
          .map((c) => c + c)
          .join("")
      : hex;

  const r = parseInt(fullHex.substring(0, 2), 16) || 0;
  const g = parseInt(fullHex.substring(2, 4), 16) || 0;
  const b = parseInt(fullHex.substring(4, 6), 16) || 0;

  // YIQ formula calculates perceived brightness
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "#0b0f14" : "#ffffff";
}

type RecentCommitsProps = {
  username?: string;
};

export default async function GitUserStats({
  username = "PavanBhat007",
}: RecentCommitsProps) {
  const { reposCount, languages } = await getUserRepoStats(username);

  return (
    <div className="w-full h-full border border-white/10 rounded-xl p-4 md:p-6 font-mono text-sm shadow-xl text-gray-300">
      <div className="flex items-center justify-between w-full">
        <p className="font-semibold text-sm flex items-center gap-2">
          <Languages size={18} className="text-amber-400" />
          <span>Languages</span>
        </p>
        <p className="hidden md:block text-xs text-neon text-right bg-gray-300/20 px-2 rounded font-semibold">
          across {reposCount} repos
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-4 w-full">
        {languages.map((lang, index) => {
          const textColour = getContrastColor(lang.colour)
          
          return (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-300/10 rounded"
            >
              <div className="flex items-center gap-2 shadow-md shadow-gray-600/10">
                <span
                  style={{
                    backgroundColor: `${lang.colour}`,
                    color: textColour
                  }}
                  className="text-xs px-1 rounded-l font-bold py-0.5"
                >
                  {lang.repos}
                </span>
                <span className="text-xs pr-1 font-semibold">{lang.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:hidden w-full mt-4">
        <p className="text-xs text-neon text-right">
          across {reposCount} repos
        </p>
      </div>
    </div>
  );
}
