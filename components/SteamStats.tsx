import Image from "next/image";
import Link from "next/link";
import { getSteamStats } from "../lib/steam";

export default async function SteamStats() {
  const res = await getSteamStats();
  const { top5, games } = res;

  return (
    <div>
      <div className="flex items-center gap-4 justify-center">
        {top5.map((game) => (
          <div key={game.id} className="relative flex flex-col w-full max-h-20 items-center bg-[#0b0f14] py-4 border border-gray-600 rounded-lg">
            <div className="relative w-12 h-12 mb-3 rounded-lg overflow-hidden border border-white/10 shrink-0">
              <Image
                src={game.iconUrl}
                alt={game.name}
                fill
                className="object-cover opacity-30"
              />
            </div>
            <div className="absolute flex flex-col items-center">
              <p className="text-hanken font-semibold text-white bg-gray-600/50 px-2 rounded">{game.name}</p>
              <p className="text-hanken font-bold text-2xl text-neon">
                {game.playTimeHours} <span className="text-sm text-[#D9E0EE] font-semibold">hrs</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-center gap-4 p-2 mt-4 bg-[#0b0f14]/50 border border-gray-600 rounded-lg">
        {games.map((game) => (
          <Link href={"https://steamcommunity.com/profiles/76561198939460567/"} title={game.name} key={game.id} className="relative w-6 h-6 overflow-hidden border border-white/10 shrink-0">
            <Image
              src={game.iconUrl}
              alt={game.name}
              fill
              className="object-cover opacity-50 hover:opacity-100 cursor-pointer"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
