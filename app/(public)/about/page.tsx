import { Gamepad2, UserSearch } from "lucide-react";
import Image from "next/image";
import HeroContent from "../../../components/AboutMe";
import SteamStats from "../../../components/SteamStats";

export default function AboutPage() {
  return (
    <section className="w-full my-12 px-12 xl:px-24">
      <p className="text-sm text-gray-400 mb-3">
        <span className="text-neon">about$</span> cat about.md
      </p>

      <div className="flex items-center mb-8">
        <UserSearch size={24} className="inline-block mr-2 text-neon" />
        <h2 className="text-2xl font-bold text-white">About Me</h2>
      </div>

      <div className="flex items-center gap-4 justify-between w-full">
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative w-full max-w-sm aspect-[1/1] rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-gray-300/10">
            <Image
              src="/images/me.jpeg"
              alt="A Picture of Me!"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 px-12 flex-1">
          <HeroContent heroPage={false} />
        </div>
      </div>

      <div className="w-full mt-12">
        <p className="text-sm text-gray-400 mb-3">
          <span className="text-neon">about$</span> cat steam_stats.md
        </p>
  
        <div className="flex items-center mb-8">
          <Gamepad2 size={24} className="inline-block mr-2 text-neon" />
          <h2 className="text-2xl font-bold text-white">Gaming - A Hobby</h2>
        </div>
        
        <SteamStats />
      </div>
    </section>
  );
}
