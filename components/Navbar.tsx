"use client";

import { User, Briefcase, FolderGit2, Mail, Menu, X, GitPullRequest, User2 } from "lucide-react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState("");

  const path = usePathname();

  useEffect(() => {
    switch (path) {
      case "/experiences":
        setCurrentPage("experiences");
        break;
      case "/about":
        setCurrentPage("about");
        break;
      case "/projects":
        setCurrentPage("projects");
        break;
      case "/":
        setCurrentPage("home");
        break;
      default:
        setCurrentPage("");
        break;
    }
  }, [path]);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f14]/70 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
      <div className="px-8 lg:px-12 mx-auto">
        <nav className="relative flex justify-between items-center py-4">
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
          <div className="hidden md:flex items-center justify-center gap-5 text-sm font-medium flex-1">
            <a href="/experiences" className="relative">
              <p
                className={`font-hanken text-xs md:text-sm hover:border-b ${currentPage === "experiences" && "text-neon border-b border-neon font-semibold"}`}
              >
                Experience
              </p>
              <span className="absolute -top-2 left-6 -z-10">
                <Briefcase size={36} className="text-gray-600/20" />
              </span>
            </a>
            <a href="/projects" className="relative">
              <p
                className={`font-hanken text-xs md:text-sm hover:border-b ${currentPage === "projects" && "text-neon border-b border-neon font-semibold"}`}
              >
                Projects
              </p>
              <span className="absolute -top-2 left-6 -z-10">
                <GitPullRequest size={36} className="text-gray-600/20" />
              </span>
            </a>
            <a href="/about" className="relative">
              <p
                className={`font-hanken text-xs md:text-sm hover:border-b ${currentPage === "about" && "text-neon border-b border-neon font-semibold"}`}
              >
                About
              </p>
              <span className="absolute -top-2 left-0 -z-10">
                <User2 size={36} className="text-gray-600/20" />
              </span>
            </a>
          </div>

          <button
            type="button"
            className="hidden md:block bg-neon px-4 py-1 rounded-sm text-[#0b0f14] font-semibold hover:bg-purple-600 transition-colors duration-300"
            onClick={() => redirect("/contact")}
          >
            Contact
          </button>

          <button
            type="button"
            className="flex md:hidden flex-col items-center justify-center transition-all duration-300"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 group-hover:text-amber-400" />
            ) : (
              <Menu className="w-5 h-5 group-hover:text-amber-400" />
            )}
          </button>
        </nav>

        {/* Mobile Navbar */}
        {mobileMenuOpen && (
          <div className="absolute md:hidden top-18 p-2 right-0 z-50 bg-[#0b0f14] backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col">
              <a
                href="/experiences"
                className="group transition mt-2 border-b border-slate-600 pb-2"
              >
                <span className="flex gap-2 items-center justify-start">
                  <Briefcase className="w-5 h-5 group-hover:text-amber-400" />
                  <span className="text-xs md:text-sm">Exp</span>
                </span>
              </a>

              <a
                href="/about"
                className="group transition mt-2 border-b border-slate-600 pb-2"
              >
                <span className="flex gap-2 items-center justify-start">
                  <User className="w-5 h-5 group-hover:text-cyan-400" />
                  <span className="text-xs md:text-sm">About</span>
                </span>
              </a>

              <a
                href="/projects"
                className="group transition mt-2 border-b border-slate-600 pb-2"
              >
                <span className="flex gap-2 items-center justify-start">
                  <FolderGit2 className="w-5 h-5 group-hover:text-emerald-400" />
                  <span className="text-xs md:text-sm">Projects</span>
                </span>
              </a>

              <a href="/contact" className="group transition mt-2 pb-2">
                <span className="flex gap-2 items-center justify-start">
                  <Mail className="w-5 h-5 group-hover:text-fuchsia-400" />
                  <span className="text-xs md:text-sm">Contact</span>
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
