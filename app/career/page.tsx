import React from "react";
import type { Metadata } from "next";
import { jobs } from "./career-data";

export const metadata: Metadata = {
  title: "Career",
  description: "My Android Odyssey",
};

export default function Career() {
  return (
    <section className="max-w-3xl mx-auto fade-in-up">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[#24292f] dark:text-[#c9d1d9]">
          Career
        </h1>
        <p className="text-[#57606a] dark:text-[#8b949e] text-sm mt-0.5">
          Professional journey in Android development
        </p>
      </div>

      <div className="relative">
        {/* Timeline line (desktop only) */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[#d0d7de] dark:bg-[#30363d] hidden md:block"></div>

        <div className="space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="relative pl-0 md:pl-12">
              {/* Timeline dot (desktop only) */}
              <div className="absolute left-0 top-1.5 w-8 h-8 hidden md:flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[var(--accent-green)] ring-4 ring-[#f6f8fa] dark:ring-[#0d1117]"></div>
              </div>

              <div className="border-l-2 md:border-l-0 border-[#d0d7de] dark:border-[#30363d] pl-6 md:pl-0">
                {/* Date badge */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-mono text-[#57606a] dark:text-[#8b949e] bg-[#f6f8fa] dark:bg-[#161b22] px-2.5 py-1 rounded-md border border-[#d0d7de] dark:border-[#30363d]">
                    {job.duration}
                  </span>
                </div>

                {/* Position and Company */}
                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-[#24292f] dark:text-[#c9d1d9] mb-1">
                    {job.position}
                  </h2>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-green)] hover:text-emerald-700 dark:hover:text-[#34C759] font-medium text-base transition-colors inline-flex items-center gap-1.5 link-underline group"
                  >
                    {job.company}
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </div>

                {/* Description */}
                <div className="space-y-2.5">
                  {job.description.split("\n").map((paragraph, i) => (
                    paragraph.trim() && (
                      <p key={i} className="text-[#24292f] dark:text-[#c9d1d9] leading-relaxed text-sm">
                        {paragraph.trim()}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
