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
              <div className="relative w-28 h-28 rounded-full overflow-hidden bg-[#f0f2f5] dark:bg-[#161b22] ring-2 ring-[#e5e7eb] dark:ring-[#30363d] shadow-md transition-[box-shadow] duration-200 group-hover:ring-[var(--accent-green)]">
                <Image
                  src="/profile.png"
                  alt="Profile photo"
                  fill
                  className="rounded-full object-cover object-center"
                  sizes="7rem"
                  priority
                />
              </div>
            </a>
          </div>

          {/* Header Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1 text-[#24292f] dark:text-[#c9d1d9]">
              Hi, I'm Rahul
            </h1>
            <p className="text-lg text-[#57606a] dark:text-[#8b949e] font-medium mb-1">
              Android Engineer
            </p>
            <p className="text-sm text-[#8b949e] dark:text-[#6e7681] leading-relaxed max-w-2xl">
              Building reliable fintech applications in payments and trading with a focus on correctness, performance, and clean architecture.
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
              I'm an Android engineer with <strong className="font-semibold">6+ years</strong> of experience building reliable fintech applications in payments and trading, with a strong focus on correctness, performance, and clean architecture. Currently, I'm working at <strong className="font-semibold">AngelOne</strong> as SDE II, where I own the development and stability of core trade execution and order placement flows within the trade pod.
            </p>
            <p className="text-base">
              Previously at <strong className="font-semibold">Paytm</strong>, I worked on the Scan & Pay module—a core payment flow in the consumer app. I led its migration to Clean Architecture and implemented critical payment features including the T-PAP (Third-Party Application Provider) model for UPI, Instrument Caching, and Visa Single Click Payments. I've optimized performance metrics, increased test coverage significantly, and built scalable solutions that improve both user experience and business outcomes.
            </p>
          </div>
        </div>

        {/* Personal Note */}
        <div className="border-l-2 border-[var(--accent-green)] pl-5 py-2 bg-[#f6f8fa] dark:bg-[#161b22] rounded-r-md">
          <p className="text-[#24292f] dark:text-[#c9d1d9] leading-relaxed text-base italic">
            When I'm not coding, you'll find me chasing new adventures in the mountains, strumming my guitar to relax, or diving into deep conversations about life and technology. I also love trekking through rugged trails, seeking new challenges and inspirations along the way.
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
              className="group flex items-center justify-between p-4 border border-[#d0d7de] dark:border-[#30363d] rounded-xl hover:border-[var(--accent-green)] hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] hover:shadow-md transition-all duration-200 material-card"
            >
              <div>
                <div className="font-medium text-[#24292f] dark:text-[#c9d1d9] mb-1 group-hover:text-[var(--accent-green)] transition-colors">
                  Career
                </div>
                <div className="text-sm text-[#57606a] dark:text-[#8b949e]">
                  Professional journey
                </div>
              </div>
              <svg className="w-5 h-5 text-[#57606a] dark:text-[#8b949e] group-hover:text-[var(--accent-green)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="group flex items-center justify-between p-4 border border-[#d0d7de] dark:border-[#30363d] rounded-xl hover:border-[var(--accent-green)] hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] hover:shadow-md transition-all duration-200 material-card"
            >
              <div>
                <div className="font-medium text-[#24292f] dark:text-[#c9d1d9] mb-1 group-hover:text-[var(--accent-green)] transition-colors">
                  Projects
                </div>
                <div className="text-sm text-[#57606a] dark:text-[#8b949e]">
                  Selected work
                </div>
              </div>
              <svg className="w-5 h-5 text-[#57606a] dark:text-[#8b949e] group-hover:text-[var(--accent-green)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/skills"
              className="group flex items-center justify-between p-4 border border-[#d0d7de] dark:border-[#30363d] rounded-xl hover:border-[var(--accent-green)] hover:bg-[#f6f8fa] dark:hover:bg-[#161b22] hover:shadow-md transition-all duration-200 material-card"
            >
              <div>
                <div className="font-medium text-[#24292f] dark:text-[#c9d1d9] mb-1 group-hover:text-[var(--accent-green)] transition-colors">
                  Skills
                </div>
                <div className="text-sm text-[#57606a] dark:text-[#8b949e]">
                  Technical expertise
                </div>
              </div>
              <svg className="w-5 h-5 text-[#57606a] dark:text-[#8b949e] group-hover:text-[var(--accent-green)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Connect Section */}
        <div className="pt-4 border-t border-[#d0d7de] dark:border-[#30363d]">
          <p className="text-[#24292f] dark:text-[#c9d1d9] leading-relaxed text-base mb-0">
            Let's connect! Feel free to reach out to me on{" "}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-medium text-[#0969da] dark:text-[#58a6ff]"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline font-medium text-[#0969da] dark:text-[#58a6ff]"
            >
              Instagram
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
