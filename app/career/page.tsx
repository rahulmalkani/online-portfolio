import React from "react";
import type { Metadata } from "next";
import { jobs } from "./career-data";

export const metadata: Metadata = {
  title: "Career",
  description: "My Android Odyssey",
};

export default function Career() {
  return (
    <section className="max-w-4xl mx-auto">
  <h1 className="mb-12 text-2xl sm:text-3xl font-extrabold tracking-tight text-center">
    The Path I’ve Walked &nbsp; 🐾
  </h1>
  <div className="space-y-8">
    {jobs.map((job, index) => (
      <div
        key={index}
        className="py-8 px-6 border rounded-lg bg-gradient-to-r from-white to-gray-100 dark:from-neutral-800 dark:to-neutral-900 shadow-sm hover:shadow-lg hover:scale-[1.03] transition-transform duration-300"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            {job.position}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {job.duration}
          </div>
        </div>

        {/* Company */}
        <div className="text-lg text-blue-600 dark:text-blue-400">
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
        <div className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {job.description.split("\n").map((paragraph, i) => (
            <p key={i} className="mb-4">{paragraph}</p>
          ))}
        </div>

        {/* Divider */}
        <hr className="mt-2 border-t border-neutral-300 dark:border-neutral-700 opacity-50" />
      </div>
    ))}
  </div>
</section>

  );
}
