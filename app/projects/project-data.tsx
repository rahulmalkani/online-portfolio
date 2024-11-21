export interface Project {
  title: string;
  year: number;
  description: string;
  url?: string; // URL is now optional
  techStack: string;
}

export const projects: Project[] = [
  {
    title: "Pragati Water Care",
    year: 2023,
    description:
      "An inventory and order management Android app that allows local water jar vendors to completely maintain the records, bills, inventories and orders.",
    url: "",
    techStack: "Kotlin, Android Studio, FireBase, MongoDB",
  },
  {
    title: "Transfer Management System",
    year: 2019,
    description:
      "It was part of our participation in Smart India Hackathon. Our Idea got selected for a problem from the CPWD department.",
    url: "", 
    techStack: "Java, JavaScript, MySql",
  },
  {
    title: "SmartCalc - Converter",
    year: 2018,
    description:
      "Back in college, I created a single-page web app that does more than just calculations. It includes converters for volume, length, height,   weight, and more. A fun side project that combined utility and creativity!",
    url: "https://codepen.io/rahulmalkani/full/jyjMEd",
    techStack: "HTML, CSS, JavaScript",
  },
];