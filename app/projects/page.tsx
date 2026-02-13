import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section className="max-w-3xl mx-auto fade-in-up">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[#24292f] dark:text-[#c9d1d9]">
          Projects
        </h1>
        <p className="text-[#57606a] dark:text-[#8b949e] text-sm mt-0.5">
          Selected work and side projects
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group material-card border border-[#d0d7de] dark:border-[#30363d] rounded-xl p-6 bg-[#ffffff] dark:bg-[#0d1117] hover:border-[var(--accent-green)] transition-all duration-200"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-semibold text-[#24292f] dark:text-[#c9d1d9] group-hover:text-[var(--accent-green)] transition-colors">
                    {project.title}
                  </h2>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#57606a] dark:text-[#8b949e] hover:text-[var(--accent-green)] transition-colors"
                      aria-label="View project"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <span className="text-xs font-mono text-[#57606a] dark:text-[#8b949e] bg-[#f6f8fa] dark:bg-[#161b22] px-2 py-0.5 rounded-md border border-[#d0d7de] dark:border-[#30363d]">
                  {project.year}
                </span>
              </div>
            </div>

            <p className="text-[#24292f] dark:text-[#c9d1d9] leading-relaxed text-sm mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.split(", ").map((tech, i) => (
                <span
                  key={i}
                  className="material-chip text-xs font-mono text-[#57606a] dark:text-[#8b949e] bg-[#f6f8fa] dark:bg-[#161b22] px-2 py-0.5 rounded-full border border-[#d0d7de] dark:border-[#30363d]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
