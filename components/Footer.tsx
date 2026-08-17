import { Copyright, Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

export function Footer() {
  return (
    <div className="w-full bg-gradient-to-br from-[#11111B] to-[#11111B10] p-4 flex flex-col md:flex-row gap-4 items-center justify-between rounded-lg border border-gray-600/40 shadow-lg shadow-gray-800/10">
      <div className="flex items-center gap-2">
        <Copyright size={14} />
        <p className="text-base md:text-xs font-light">
          2026 | <span className="font-bold text-neon">K S Pavan Bhat</span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        <FooterSocialLink
          href="https://www.github.com/PavanBhat007"
          title="GitHub"
          icon={
            <FiGithub
              size={18}
              className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
            />
          }
        />
        <FooterSocialLink
          href="https://www.linkedin.com/in/pavan-ks-bhat"
          title="LinkedIn"
          icon={
            <FaLinkedinIn
              size={18}
              className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
            />
          }
        />
        <FooterSocialLink
          href="https://x.com/ksp_bhat"
          title="X"
          icon={
            <FaXTwitter
              size={18}
              className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
            />
          }
        />
        <FooterSocialLink
          href="https://www.instagram.com/ksp_bhat"
          title="Instagram"
          icon={
            <FaInstagram
              size={18}
              className="text-gray-500 hover:text-gray-300 transition-colors duration-300"
            />
          }
        />
      </div>
    </div>
  );
}

type FooterSocialLink = {
  href: string;
  title: string;
  icon: React.ReactNode;
};

const FooterSocialLink = ({ href, title, icon }: FooterSocialLink) => {
  return (
    <Link href={href} title={title}>
      {icon}
    </Link>
  );
};
