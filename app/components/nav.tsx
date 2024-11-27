import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import { SocialLink } from "./social-link";
import { socialLinks } from "../config";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

const navItems = {
  "/career": { name: "Career" },
  "/projects": { name: "Projects" },
  "https://drive.google.com/file/d/1Itl6KqMMgvMbifxRvGYLHVcFBGF1aq1G/view?usp=drive_link": { name: "Resume" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center md:justify-start justify-center">
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight gradient-text border-2 border-transparent hover:border-gradient rounded-lg group relative"
          >
            {metaData.name}
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#1DA1F2] to-[#D85C76] dark:from-[#24CCFF] dark:to-[#EA8396] transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center justify-center">
          {Object.entries(navItems).map(([path, { name }]) =>
            path.startsWith("http") ? (
              <a
                key={path}
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
              >
                {name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-neutral-800 dark:bg-neutral-200 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </a>
            ) : (
              <Link
                key={path}
                href={path}
                className="group relative transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle"
              >
                {name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-neutral-800 dark:bg-neutral-200 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </Link>
            )
          )}
          <ThemeSwitch />
          {/* Vertical Divider */}
          <div className="h-4 border-l border-neutral-400 dark:border-neutral-600 mx-1"></div>
          <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} hoverColor="linkedin" />
          <SocialLink href={socialLinks.email} icon={TbMailFilled} hoverColor="email" />
        </div>
      </div>
    </nav>
  );
}
