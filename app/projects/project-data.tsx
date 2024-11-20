export interface Project {
  title: string;
  year: number;
  description: string;
  url?: string; // URL is now optional
  techStack: string;
}

export const projects: Project[] = [
  {
    title: "PRAGATI WATER CARE",
    year: 2023,
    description:
      "An inventory and order management Android app that allows local water jar vendors to completely maintain the records, bills, inventories and orders.",
    url: "",
    techStack: "Kotlin, Android Studio, FireBase, MongoDB",
  },
  {
    title: "TRANSFER MANAGEMENT SYSTEM",
    year: 2022,
    description:
      "It was part of our participation in Smart India Hackathon. Our Idea got selected for a problem from the CPWD department.",
    url: "", 
    techStack: "Java, JavaScript, MySql",
  },
];