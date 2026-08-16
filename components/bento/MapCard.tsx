import { MapPin } from "lucide-react";
import Card from "../Card";
import Image from "next/image";

export function MapCard() {
  return (
    <Card
      icon={<MapPin size={16} className="text-red-500" />}
      title="Currently based in"
    >
      <div className="relative w-full h-full md:h-32 overflow-hidden rounded-lg bg-[#181825]">
        <div className="hidden relative md:grid grid-cols-2 w-[200%] h-[180%] -ml-[65%] -mt-[45%]">
          <Image
            src="https://a.basemaps.cartocdn.com/dark_all/8/182/118.png"
            alt="West Region"
            width={256}
            height={256}
            className="w-full h-full object-cover"
            unoptimized
          />
          <Image
            src="https://a.basemaps.cartocdn.com/dark_all/8/183/118.png"
            alt="Bengaluru Region"
            width={256}
            height={256}
            className="w-full h-full object-cover"
            unoptimized
          />
        </div>
        <div className="p-2 w-full flex items-end">
          <p className="font-semibold text-white mx-auto">📍 Bengaluru</p>
        </div>
      </div>
    </Card>
  )
}