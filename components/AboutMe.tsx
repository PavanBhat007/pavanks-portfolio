import { ArrowRight, GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import CustomLink from "./CustomLink";

type AboutMeProps = {
  heroPage?: boolean;
};

export default function AboutMe({ heroPage = true }: AboutMeProps) {
  return (
    <div className="w-full md:w-[90%]">
      <div className="text-sm md:text-base leading-relaxed">
        <p className="text-xs md:text-sm text-gray-400 ">
          <span className="text-neon">{heroPage ? "root@kspavan:~$" : "about$"}</span> cat about_me.txt
        </p>
        <p className="mt-2">
          I am currently working as an AI Engineer @
          <CustomLink href="https://neurofin.ai/" text="Neurofin AI" />,
          specializing in <b>Prompt Engineering, Automations, and Agentic AI</b>
          . My foundation is in <b>Full Stack Development</b>— building
          responsive CMS platforms and architecting scalable MERN applications.
        </p>
        <p className="mt-2">
          From deploying autonomous AI workflows to presenting biomedical signal
          processing research at the
          <CustomLink
            href="https://www.bengalurutechsummit.com/"
            text="Bangalore Tech Summit 2025"
          />
          and engineering network solutions recognized by
          <CustomLink href="https://www.nokia.com/" text="Nokia" />, I bridge
          web architecture with modern AI solutions. I'm always open to
          freelance collaborations or building cool projects!
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 mt-6 text-sm">
        <div className="flex items-center gap-1 font-medium border-r-2 pr-4 py-0 border-white/60">
          <Twitter size={16} className="inline-block mr-2" />
          <CustomLink text="@ksp_bhat" href="https://x.com/ksp_bhat" />
        </div>
        <div className="flex items-center gap-1 font-medium border-r-2 pr-4 py-0 border-white/60">
          <GithubIcon size={16} className="inline-block mr-2" />
          <CustomLink href="https://github.com/PavanBhat007" text="PavanBhat007"/>
        </div>
        <div
          className={`flex items-center gap-1 font-medium pr-4 py-0 ${heroPage && "border-r-2 border-white/60"}`}
        >
          <LinkedinIcon size={16} className="inline-block mr-2" />
          <CustomLink href="https://linkedin.com/in/pavan-ks-bhat" text="Pavan KS Bhat"/>
        </div>
        {heroPage && (
          <div className="flex items-center gap-1 font-medium">
            <a href="/about">
              <span className="hidden md:inline">Get to know me better</span>
              <span className="md:hidden">About me</span>
            </a>
            <ArrowRight size={16} className="inline-block mr-2" />
          </div>
        )}
      </div>
    </div>
  );
}
