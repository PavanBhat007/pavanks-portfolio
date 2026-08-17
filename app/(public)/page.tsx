import { Hero } from "../../components/Hero";
import { Projects } from "../../components/Projects";
import ExperienceTimeline from "../../components/experience/ExperienceTimeline";
import BentoSection from "../../components/bento/BentoSection";
import FadeIn from "../../components/FadeIn";
import { Footer } from "../../components/Footer";

export default function Portfolio() {
  return (
    <div className="flex flex-col space-y-12 px-12 pb-12 items-center lg:items-start justify-start w-full md:w-[80%] mx-auto">
      <FadeIn>
        <Hero />
      </FadeIn>
      
      <FadeIn delay={0.5}>
        <Projects />
      </FadeIn>

      <FadeIn>
        <ExperienceTimeline />
      </FadeIn>

      <FadeIn>
        <BentoSection />
      </FadeIn>

      <Footer />
    </div>
  );
}
