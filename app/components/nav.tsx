"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeSwitch } from "./theme-switch";
import { SocialLink } from "./social-link";
import { socialLinks } from "../config";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { HiBars3, HiXMark } from "react-icons/hi2";

const navItems = {
  "/": { name: "Overview" },
  "/career": { name: "Career" },
  "/projects": { name: "Projects" },
  "/skills": { name: "Skills" },
  "https://drive.google.com/file/d/1Itl6KqMMgvMbifxRvGYLHVcFBGF1aq1G/view?usp=drive_link": { name: "Resume" },
};

function NavLinks({ pathname, onItemClick }: { pathname: string; onItemClick?: () => void }) {
  return (
    <>
      {Object.entries(navItems).map(([path, { name }]) =>
        path.startsWith("http") ? (
          <a
            key={path}
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onItemClick}
            className="inline-flex items-center gap-1.5 text-sm md:text-base font-medium text-[#57606a] dark:text-[#8b949e] hover:text-[#24292f] dark:hover:text-[#c9d1d9] transition-colors duration-150 link-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0d1117]"
            aria-label={`${name} (opens in new tab)`}
          >
            {name}
            <svg className="w-3.5 h-3.5 shrink-0 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <Link
            key={path}
            href={path}
            onClick={onItemClick}
            className={`text-sm md:text-base font-medium transition-colors duration-150 link-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0d1117] ${
              pathname === path
                ? "text-[var(--accent-green)]"
                : "text-[#57606a] dark:text-[#8b949e] hover:text-[#24292f] dark:hover:text-[#c9d1d9]"
            }`}
          >
            {name}
          </Link>
        )
      )}
    </>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="lg:mb-10 mb-8 py-5 border-b border-[#d0d7de] dark:border-[#30363d]">
      <div className="flex flex-row items-center justify-between">
        {/* Desktop: nav links on left */}
        <div className="hidden md:flex flex-row gap-6 lg:gap-8 items-center">
          <NavLinks pathname={pathname} />
        </div>

        {/* Desktop: social + theme on right */}
        <div className="hidden md:flex flex-row gap-3 items-center ml-auto">
          <div className="h-4 border-l border-[#d0d7de] dark:border-[#30363d] mr-2" />
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} hoverColor="linkedin" />
          <SocialLink href={socialLinks.email} icon={TbMailFilled} hoverColor="email" />
          <ThemeSwitch />
        </div>

        {/* Mobile: social + theme + hamburger on right (nav links in drawer) */}
        <div className="flex md:hidden flex-row items-center justify-end gap-2 w-full">
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} hoverColor="linkedin" />
          <SocialLink href={socialLinks.email} icon={TbMailFilled} hoverColor="email" />
          <ThemeSwitch />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="p-2 -mr-2 rounded-lg text-[#57606a] dark:text-[#8b949e] hover:text-[#24292f] dark:hover:text-[#c9d1d9] hover:bg-[#f6f8fa] dark:hover:bg-[#21262d] transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <HiXMark className="w-6 h-6" /> : <HiBars3 className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile: dropdown menu (nav links only) */}
      {mobileOpen && (
        <div
          className="md:hidden mt-4 py-4 px-1 border-t border-[#d0d7de] dark:border-[#30363d] flex flex-col gap-3"
          role="dialog"
          aria-label="Navigation menu"
        >
          <NavLinks pathname={pathname} onItemClick={() => setMobileOpen(false)} />
        </div>
      )}
    </nav>
  );
}
