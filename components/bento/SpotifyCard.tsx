import { Music } from "lucide-react";
import Card from "../Card";
import Link from "next/link";

export function SpotifyCard() {
  return (
    <div className="col-span-1 md:col-span-2 xl:col-span-2 h-full">
      <Card
        icon={<Music size={16} className="text-neon" />}
        title="Listening To"
        subtitle={
          <Link
            href="https://open.spotify.com/user/31m4eetibpdt6rrv5rugldfote4m?si=8fb45084c09d4b67"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xs font-semibold px-2 bg-gray-300/20 rounded">
              View Profile
            </p>
          </Link>
        }
      >
        <div className="block w-full overflow-hidden rounded-lg">
          <iframe
            src="https://open.spotify.com/embed/playlist/0gyLZ2aU4Y1e9PWRFM0LEG?si=34b78dd6660c4ef1&utm_source=generator&theme=0"
            width="100%"
            height="100"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full rounded-lg"
          />
        </div>
      </Card>
    </div>
  );
}
