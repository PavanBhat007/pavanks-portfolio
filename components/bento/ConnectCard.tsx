import { Calendar, Clock5 } from "lucide-react";
import Card from "../Card";
import Link from "next/link";

export function ConnectCard() {
  return (
    <Card
      icon={<Clock5 size={16} className="text-orange-600" />}
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
  )
}