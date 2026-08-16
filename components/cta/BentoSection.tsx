import { Calendar, MapPin, Music, Webcam, Zap } from "lucide-react";
import Card from "../Card";
import GitUserStats from "./GitUserStats";
import RecentCommits from "./RecentCommits";
import Link from "next/link";
import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section className="w-full my-12">
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-4">
        <div className="w-full lg:w-1/2 xl:w-2/3">
          <RecentCommits />
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3">
          <GitUserStats />
        </div>
      </div>

      <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <Card
          icon={<Webcam size={16} className="text-orange-600" />}
          title="Let's Connect"
        >
          <div className="flex flex-col gap-4">
            <p className="font-light px-2">
              Open to connect for a meeting to discuss ideas and projects.
            </p>
            <Link
              href="https://calendar.app.google/xgju7bGfQSpQEdSw9"
              title="Connect for 30 mins"
              className="w-full mx-auto bg-orange-400 border border-orange-300 hover:bg-orange-300 text-[#0b0f14] px-4 py-1 rounded flex items-center justify-center gap-1"
            >
              <Calendar size={14} />
              <span>Book a slot</span>
            </Link>
          </div>
        </Card>

        <Card
          icon={<MapPin size={16} className="text-red-500" />}
          title="Currently based in"
        >
          <div className="relative w-full h-full md:h-32 overflow-hidden rounded-lg bg-[#181825]">
            <div className="hidden md:grid grid-cols-2 w-[200%] h-[180%] -ml-[65%] -mt-[45%] relative">
              <Image
                src="https://a.basemaps.cartocdn.com/dark_all/8/182/118.png"
                alt="West Region"
                width={256}
                height={256}
                className="w-full h-full object-cover brightness-90 contrast-110"
                unoptimized
              />
              <Image
                src="https://a.basemaps.cartocdn.com/dark_all/8/183/118.png"
                alt="Bengaluru Region"
                width={256}
                height={256}
                className="w-full h-full object-cover brightness-90 contrast-110"
                unoptimized
              />
            </div>
            <div className="p-2 w-full flex items-end">
              <p className="font-semibold text-white mx-auto">📍 Bengaluru</p>
            </div>
          </div>
        </Card>

        <div className="col-span-1 md:col-span-2 xl:col-span-2 h-full">
          <Card
            icon={<Music size={16} className="text-neon" />}
            title="Listening To"
          >
            <Link
              href="https://open.spotify.com/user/31m4eetibpdt6rrv5rugldfote4m?si=8fb45084c09d4b67"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full overflow-hidden rounded-lg"
            >
              <iframe
                src="https://open.spotify.com/embed/playlist/0gyLZ2aU4Y1e9PWRFM0LEG?si=34b78dd6660c4ef1&utm_source=generator&theme=0"
                width="100%"
                height="100"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full rounded-lg"
              />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}
