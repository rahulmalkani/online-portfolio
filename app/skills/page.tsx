import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical Skills & Expertise",
};

const skillCategories = [
  {
    title: "Android Development",
    icon: null,
    skills: ["Kotlin", "Java", "Android SDK", "Jetpack Compose", "MVVM", "Clean Architecture", "SOLID"],
    color: "from-[#3DDC84] to-[#34C759]"
  },
  {
    title: "Tools & Frameworks",
    icon: "🛠️",
    skills: ["Room", "Hilt", "Coroutines", "Flows", "Firebase", "RxJava", "Glide", "Gradle", "Git", "Jenkins"],
    color: "from-[#4285F4] to-[#1A73E8]"
  },
  {
    title: "Kotlin Concepts",
    icon: "⚡",
    skills: ["KMM", "Sealed Classes", "Data Classes", "Higher-Order Functions"],
    color: "from-[#7F52FF] to-[#6B46C1]"
  },
  {
    title: "Debugging & Testing",
    icon: "🔍",
    skills: ["JUnit", "Mockito", "Espresso", "Profiler", "Perfetto", "ADB", "Charles"],
    color: "from-[#EA4335] to-[#C5221F]"
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: ["JavaScript", "HTML", "CSS", "React"],
    color: "from-[#FF9800] to-[#F57C00]"
  }
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto fade-in-up">
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
              {category.title === "Android Development" ? (
                <div className="w-6 h-6 flex items-center justify-center text-[var(--accent-green)]">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5508 0 .9993.4482.9993.9993.0001.5511-.4485.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5508 0 .9993.4482.9993.9993 0 .5511-.4485.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5671a.416.416 0 00-.5671.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1349 1.0989L4.8429 5.4467a.4161.4161 0 00-.5671-.1521a.4157.4157 0 00-.1521.5671l1.9973 3.4592C2.6889 11.186.8532 13.0508.8532 15.3414v2.2139c0 .5511.4482.9993.9993.9993h20.295c.5511 0 .9993-.4482.9993-.9993v-2.2139c0-2.2906-1.8357-4.1546-4.1787-4.0201" fill="currentColor"/>
                  </svg>
                </div>
              ) : (
                <div className={`text-2xl bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}>
                  {category.icon}
                </div>
              )}
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
