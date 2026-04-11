"use client";

import { User, Briefcase, FolderGit2, Mail } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#0b0f14]/70 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
      <div className="px-8 lg:px-12 mx-auto">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="group text-neon font-bold text-xl cursor-pointer">
              KSP
              <span className="max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-in-out">
                avan
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-5 text-sm font-medium">
            <a href="/about" className="group transition">
              <span className="flex flex-col items-center justify-center">
                <User className="w-5 h-5 group-hover:text-cyan-400" />
                <span className="text-xs md:text-sm">About</span>
              </span>
            </a>

            {/* <a href="/experiences" className="group transition">
              <span className="flex flex-col items-center justify-center">
                <Briefcase className="w-5 h-5 group-hover:text-amber-400" />
                <span className="text-xs md:text-sm">Experiences</span>
              </span>
            </a> */}

            <a href="/projects" className="group transition">
              <span className="flex flex-col items-center justify-center">
                <FolderGit2 className="w-5 h-5 group-hover:text-emerald-400" />
                <span className="text-xs md:text-sm">Projects</span>
              </span>
            </a>

            <a href="/contact" className="group transition">
              <span className="flex flex-col items-center justify-center">
                <Mail className="w-5 h-5 group-hover:text-fuchsia-400" />
                <span className="text-xs md:text-sm">Contact</span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
