import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical Skills & Expertise",
};

const androidIcon = (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5508 0 .9993.4482.9993.9993.0001.5511-.4485.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5508 0 .9993.4482.9993.9993 0 .5511-.4485.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5671a.416.416 0 00-.5671.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1349 1.0989L4.8429 5.4467a.4161.4161 0 00-.5671-.1521a.4157.4157 0 00-.1521.5671l1.9973 3.4592C2.6889 11.186.8532 13.0508.8532 15.3414v2.2139c0 .5511.4482.9993.9993.9993h20.295c.5511 0 .9993-.4482.9993-.9993v-2.2139c0-2.2906-1.8357-4.1546-4.1787-4.0201" />
  </svg>
);

const wrenchIcon = (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const lightningIcon = (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const magnifierIcon = (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const globeIcon = (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const skillCategories = [
  {
    title: "Android Development",
    icon: androidIcon,
    iconColor: "text-[var(--accent-green)]",
    skills: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "MVVM", "Clean Architecture", "SOLID"],
  },
  {
    title: "Tools & Frameworks",
    icon: wrenchIcon,
    iconColor: "text-[#4285F4]",
    skills: ["Room", "Hilt", "Coroutines", "Flows", "Firebase", "RxJava", "Glide", "Gradle", "Git", "Jenkins"],
  },
  {
    title: "Kotlin Concepts",
    icon: lightningIcon,
    iconColor: "text-[#7F52FF]",
    skills: ["KMM", "Sealed Classes", "Data Classes", "Higher-Order Functions"],
  },
  {
    title: "Debugging & Testing",
    icon: magnifierIcon,
    iconColor: "text-[#EA4335]",
    skills: ["JUnit", "Mockito", "Espresso", "Profiler", "Perfetto", "ADB", "Charles"],
  },
  {
    title: "Web Development",
    icon: globeIcon,
    iconColor: "text-[#FF9800]",
    skills: ["JavaScript", "HTML", "CSS", "React"],
  }
];

export default function Skills() {
  return (
    <section className="max-w-3xl mx-auto fade-in-up">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[#24292f] dark:text-[#c9d1d9]">
          Skills
        </h1>
        <p className="text-[#57606a] dark:text-[#8b949e] text-sm mt-0.5">
          Technical expertise and tools I work with
        </p>
      </div>

      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="material-card border border-[#d0d7de] dark:border-[#30363d] rounded-2xl p-6 bg-[#ffffff] dark:bg-[#0d1117] hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-6 h-6 flex items-center justify-center shrink-0 ${category.iconColor}`}>
                {category.icon}
              </div>
              <h2 className="text-xl font-semibold text-[#24292f] dark:text-[#c9d1d9]">
                {category.title}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="material-chip inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-[#f6f8fa] dark:bg-[#161b22] text-[#24292f] dark:text-[#c9d1d9] border border-[#d0d7de] dark:border-[#30363d] hover:border-[var(--accent-green)] hover:bg-[#f0fdf4] dark:hover:bg-[#0a1f0a] transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
