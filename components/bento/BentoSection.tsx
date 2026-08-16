import GitUserStats from "./GitUserStats";
import RecentCommits from "./RecentCommits";
import { MapCard } from "./MapCard";
import { ConnectCard } from "./ConnectCard";
import { SpotifyCard } from "./SpotifyCard";

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
        <ConnectCard />
        <MapCard />
        <SpotifyCard />
      </div>
    </section>
  );
}
