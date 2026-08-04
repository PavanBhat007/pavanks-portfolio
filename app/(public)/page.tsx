import { Hero } from "../../components/Hero";
import { Projects } from "../../components/Projects";
import ExperienceTimeline from "../../components/experience/ExperienceTimeline";

export default function Portfolio() {
  return (
    <div className="flex flex-col space-y-12 px-12 pb-12 items-center lg:items-start justify-start w-full md:w-[80%] mx-auto">
      <Hero />
      <Projects />
      <ExperienceTimeline />
    </div>
  );
}
