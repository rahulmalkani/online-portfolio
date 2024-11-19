import React from "react";
import type { Metadata } from "next";
import { jobs } from "./career-data";

export const metadata: Metadata = {
  title: "Career",
  description: "My Android Odyssey",
};

export default function Career() {
  return (
    <section className="max-w-4xl mx-auto px-2">
      <h1 className="mb-12 text-2xl font-extrabold tracking-tight text-center">
        The Path I’ve Walked &nbsp; 🐾
      </h1>
      <div className="space-y-8">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-sm bg-white dark:bg-neutral-800 transition-transform hover:shadow-lg hover:scale-[1.03] duration-200"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-black dark:text-white">
                {job.position}
              </span>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {job.duration}
              </span>
            </div>

            {/* Company */}
            <div className="mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400">
              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {job.company}
              </a>
            </div>

            {/* Description */}
            <div className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {job.description.split("\n").map((paragraph, i) => (
                <p key={i} className="mb-6">{paragraph}</p>
              ))}
            </div>
            {/* Divider */}
            <hr className="border-t border-neutral-300 dark:border-neutral-600" />
          </div>
        ))}
      </div>
    </section>
  );
}
