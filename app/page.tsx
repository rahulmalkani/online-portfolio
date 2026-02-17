import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section className="fade-in-up pt-0">
      {/* Hero Section */}
      <div className="mb-10 -mt-1">
        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0 mx-auto md:mx-0 mb-4 md:mb-0">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative w-28 h-28 rounded-full overflow-hidden bg-[#f0f2f5] dark:bg-[#161b22] ring-2 ring-[#e5e7eb] dark:ring-[#30363d] shadow-md transition-all duration-200 group-hover:ring-[var(--accent-green)] group-hover:shadow-lg">
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

          {/* Header Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#24292f] dark:text-[#c9d1d9]">
              Hi, I'm Rahul.
            </h1>
            <p className="mt-1.5 text-base md:text-lg text-[#57606a] dark:text-[#8b949e] leading-snug">
              Android engineer building reliable mobile systems at scale.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-[#24292f] dark:text-[#c9d1d9] mb-4">
            About
          </h2>
          <div className="space-y-4 text-[#24292f] dark:text-[#c9d1d9] leading-relaxed">
            <p className="text-base">
              I'm an Android engineer with over <strong className="font-semibold">6+ years</strong> of experience building large-scale mobile applications, mainly in payments and trading systems where reliability and correctness matter.
            </p>
            <p className="text-base">
              My work focuses on designing and maintaining systems that perform well under real production load. I care deeply about architecture, long-term maintainability, and writing code that is easy to reason about and safe to evolve. Much of my experience comes from owning critical user flows, improving performance bottlenecks, and strengthening system stability as products scale.
            </p>
            <p className="text-base">
              I enjoy working close to production problems and understanding why systems fail, not just how to ship features. This has shaped how I approach Android development and how I make technical trade-offs over time.
            </p>
          </div>
        </div>

        {/* Personal Note */}
        <div className="border-l-2 border-[var(--accent-green)] pl-5 py-2 bg-[#f6f8fa] dark:bg-[#161b22] rounded-r-md">
          <p className="text-[#24292f] dark:text-[#c9d1d9] leading-relaxed text-base italic">
            Outside of work, I like to slow things down. I enjoy spending time in the mountains, playing the guitar, and having long conversations about life and technology. It helps me stay grounded and clear-headed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-[#24292f] dark:text-[#c9d1d9] mb-4">
            Explore
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="/career"
              className="group flex items-center justify-between py-2.5 px-3 border border-[#d0d7de] dark:border-[#30363d] rounded-lg hover:border-[var(--accent-green)] hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] hover:shadow-md transition-all duration-200 material-card focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0d1117]"
            >
              <div>
                <div className="font-medium text-[#24292f] dark:text-[#c9d1d9] text-sm mb-0.5 group-hover:text-[var(--accent-green)] transition-colors">
                  Career
                </div>
                <div className="text-xs text-[#57606a] dark:text-[#8b949e]">
                  Professional journey
                </div>
              </div>
              <svg className="w-4 h-4 text-[#57606a] dark:text-[#8b949e] group-hover:text-[var(--accent-green)] group-hover:translate-x-0.5 transition-all duration-200 motion-reduce:translate-x-0 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="group flex items-center justify-between py-2.5 px-3 border border-[#d0d7de] dark:border-[#30363d] rounded-lg hover:border-[var(--accent-green)] hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] hover:shadow-md transition-all duration-200 material-card focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0d1117]"
            >
              <div>
                <div className="font-medium text-[#24292f] dark:text-[#c9d1d9] text-sm mb-0.5 group-hover:text-[var(--accent-green)] transition-colors">
                  Projects
                </div>
                <div className="text-xs text-[#57606a] dark:text-[#8b949e]">
                  Selected work
                </div>
              </div>
              <svg className="w-4 h-4 text-[#57606a] dark:text-[#8b949e] group-hover:text-[var(--accent-green)] group-hover:translate-x-0.5 transition-all duration-200 motion-reduce:translate-x-0 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/skills"
              className="group flex items-center justify-between py-2.5 px-3 border border-[#d0d7de] dark:border-[#30363d] rounded-lg hover:border-[var(--accent-green)] hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] hover:shadow-md transition-all duration-200 material-card focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-green)] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0d1117]"
            >
              <div>
                <div className="font-medium text-[#24292f] dark:text-[#c9d1d9] text-sm mb-0.5 group-hover:text-[var(--accent-green)] transition-colors">
                  Skills
                </div>
                <div className="text-xs text-[#57606a] dark:text-[#8b949e]">
                  Technical expertise
                </div>
              </div>
              <svg className="w-4 h-4 text-[#57606a] dark:text-[#8b949e] group-hover:text-[var(--accent-green)] group-hover:translate-x-0.5 transition-all duration-200 motion-reduce:translate-x-0 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
