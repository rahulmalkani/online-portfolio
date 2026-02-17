import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./config";

const ExploreCard = ({
  href,
  title,
  subtitle,
  icon,
}: {
  href: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}) => (
  <Link
    href={href}
    className="group flex items-center gap-3 py-3 px-4 border border-[#d0d7de] dark:border-[#30363d] rounded-xl hover:border-[var(--accent-green)] hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] hover:shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0d1117]"
  >
    <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-[#f0f2f5] dark:bg-[#21262d] flex items-center justify-center text-[#57606a] dark:text-[#8b949e] group-hover:text-[var(--accent-green)] transition-colors">
      {icon}
    </span>
    <div className="flex-1 min-w-0">
      <span className="font-medium text-[#24292f] dark:text-[#c9d1d9] text-sm block group-hover:text-[var(--accent-green)] transition-colors">
        {title}
      </span>
      <span className="text-xs text-[#57606a] dark:text-[#8b949e] block mt-0.5">
        {subtitle}
      </span>
    </div>
    <svg className="w-4 h-4 text-[#57606a] dark:text-[#8b949e] group-hover:text-[var(--accent-green)] group-hover:translate-x-0.5 transition-all duration-200 motion-reduce:translate-x-0 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </Link>
);

export default function Page() {
  return (
    <section className="fade-in-up pt-0">
      {/* Hero */}
      <div className="mb-12 -mt-1">
        <div className="flex flex-col md:flex-row md:items-center md:gap-10">
          <div className="flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
              aria-label="LinkedIn profile"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-[#f0f2f5] dark:bg-[#161b22] ring-2 ring-[#e5e7eb] dark:ring-[#30363d] shadow-sm transition-all duration-200 group-hover:ring-[var(--accent-green)] group-hover:shadow-md">
                <Image
                  src="/profile.png"
                  alt="Profile photo"
                  fill
                  className="rounded-full object-cover object-center transition-transform duration-200 group-hover:scale-105 motion-reduce:scale-100 motion-reduce:transition-none"
                  sizes="7rem"
                  priority
                />
              </div>
            </a>
          </div>
          <div className="flex-1 text-center md:text-left px-8 py-3 md:px-0 md:py-0">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#24292f] dark:text-[#c9d1d9]">
              Hi, I'm Rahul.
            </h1>
            <p className="mt-2 text-[15px] md:text-base text-[#57606a] dark:text-[#8b949e] leading-relaxed max-w-md md:max-w-none">
              Android engineer building reliable mobile systems at scale.
            </p>
          </div>
        </div>
      </div>

      {/* About + Personal note (story block) */}
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-[#24292f] dark:text-[#c9d1d9] mb-3">
            About
          </h2>
          <div className="space-y-4 text-[#24292f] dark:text-[#c9d1d9] leading-relaxed text-[15px]">
            <p>
              I'm an Android engineer with over <strong className="font-semibold">6+ years</strong> of experience building large-scale mobile applications, mainly in payments and trading systems where reliability and correctness matter.
            </p>
            <p>
              My work focuses on designing and maintaining systems that perform well under real production load. I care deeply about architecture, long-term maintainability, and writing code that is easy to reason about and safe to evolve. Much of my experience comes from owning critical user flows, improving performance bottlenecks, and strengthening system stability as products scale.
            </p>
            <p>
              I enjoy working close to production problems and understanding why systems fail, not just how to ship features. This has shaped how I approach Android development and how I make technical trade-offs over time.
            </p>
          </div>
        </div>

        <div className="border-l-2 border-[var(--accent-green)] pl-5 py-3 bg-[#f6f8fa] dark:bg-[#161b22] rounded-r-lg">
          <p className="text-xs font-medium text-[#57606a] dark:text-[#8b949e] uppercase tracking-wider mb-1.5">
            Beyond work
          </p>
          <p className="text-[#24292f] dark:text-[#c9d1d9] leading-relaxed text-[15px] italic">
            I like to slow things down. I enjoy spending time in the mountains, playing the guitar, and having long conversations about life and technology. It helps me stay grounded and clear-headed.
          </p>
        </div>
      </div>

      {/* Explore (navigation) */}
      <div className="mt-12 pt-8 border-t border-[#d0d7de] dark:border-[#30363d]">
        <p className="text-xs font-medium text-[#57606a] dark:text-[#8b949e] uppercase tracking-wider mb-4">
          Explore
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <ExploreCard
            href="/career"
            title="Career"
            subtitle="Professional journey"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <ExploreCard
            href="/projects"
            title="Projects"
            subtitle="Selected work"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            }
          />
          <ExploreCard
            href="/skills"
            title="Skills"
            subtitle="Technical expertise"
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
