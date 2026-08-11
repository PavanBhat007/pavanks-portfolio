import Image from "next/image";
import Link from "next/link";
import { getSteamStats } from "../lib/steam";
import { Plus } from "lucide-react";

export default async function SteamStats() {
  const res = await getSteamStats();
  const { top5, games } = res;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {top5.map((game) => (
          <Link
            href="https://steamcommunity.com/profiles/76561198939460567/"
            key={game.id}
            className="group relative flex flex-col items-center justify-between p-3 h-24 rounded-xl bg-[#11111B]/80 border border-white/10 hover:border-neon/50 transition-all duration-300 overflow-hidden shadow-md shadow-black/40"
          >
            {/* Ambient Background Blur Icon */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 opacity-15 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300 blur-[2px] pointer-events-none">
              <Image
                src={game.iconUrl}
                alt={game.name}
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Game Badge Title */}
            <div className="z-10 w-full flex justify-center">
              <span className="font-hanken text-base font-semibold text-gray-200 truncate max-w-[90%] text-center">
                {game.name}
              </span>
            </div>

            {/* Playtime Display */}
            <div className="z-10 flex items-baseline gap-1.5 mt-auto mb-1">
              {/* Game Small Icon */}
              <div className="relative w-5 h-5 rounded overflow-hidden border border-white/10 shrink-0">
                <Image
                  src={game.iconUrl}
                  alt={game.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-mono text-2xl font-bold text-neon tracking-tight">
                {game.playTimeHours}
              </span>
              <span className="font-mono text-xs text-gray-400 font-medium">
                hrs
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-full flex items-center justify-center mt-6">
        <div className="flex items-center pl-6 py-2 px-4">
          {games.slice(0, 10).map((game, index) => (
            <Link
              href="https://steamcommunity.com/profiles/76561198939460567/"
              target="_blank"
              rel="noopener noreferrer"
              title={`${game.name}`}
              key={game.id}
              style={{ zIndex: 10 - index }}
              className="relative w-9 h-9 shrink-0 -ml-3.5 hover:-translate-y-1 hover:scale-110 transition-all duration-200"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/20 shadow-md shadow-black/50">
                <Image
                  src={game.iconUrl}
                  alt={game.name}
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
          ))}

          {/* Plus / Steam Profile Pill */}
          <Link
            href="https://steamcommunity.com/profiles/76561198939460567/"
            target="_blank"
            rel="noopener noreferrer"
            title="View Full Steam Profile"
            style={{ zIndex: 0 }}
            className="relative flex items-center justify-center w-fit h-9 shrink-0 p-1 -m-2 rounded-lg bg-[#181825] border border-white/20 ring-2 ring-[#1E1E2E] shadow-md shadow-black/50 text-gray-300 hover:text-neon hover:border-neon hover:-translate-y-1 transition-all duration-200"
          >
            <Plus className="w-4 h-4" /> <span>{` ${games.length}`}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
