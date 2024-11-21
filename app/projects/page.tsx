import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="mb-12 text-2xl sm:text-3xl font-extrabold tracking-tight text-center">
        From Ideas to Execution &nbsp;💡
      </h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="py-8 px-6 border rounded-lg bg-gradient-to-r from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-900 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform duration-300"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {project.title}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.year}
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
              <strong className="font-medium text-gray-800 dark:text-gray-200">
                Tech Stack:
              </strong>{" "}
              {project.techStack}
            </div>

            {/* URL */}
            {project.url && (
              <div className="mt-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Visit Project →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
