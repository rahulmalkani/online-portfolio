export interface Job {
  position: string;
  company: string;
  duration: string;
  description: string; // Now a single string with paragraph breaks
  url: string;
}

export const jobs: Job[] = [
  {
    position: "SDE-II (Android)",
    company: "AngleOne",
    duration: "Nov 2024 – Present",
    description:
      "Currently building and enhancing the Android AngleOne App, providing seamless and secure mobile finance solutions for users.",
    url: "https://play.google.com/store/apps/details?id=com.msf.angelmobile&hl=en_IN&pli=1",
  },
  {
    position: "Senior Android Engineer",
    company: "Paytm",
    duration: "Jan 2019 – Nov 2024",
    description:
      "My professional journey began at Paytm, where I worked on the core Scan & Pay module. This experience gave me hands-on exposure to UPI payments, cutting-edge technologies, and enhanced my problem-solving skills.\n\nDuring my time at Paytm, I worked on multiple product and engineering features, implementing key improvements such as Instrument Caching, Visa Single Click Payments, and various flow revamps. I leveraged technologies like MVVM, Kotlin, Room, Hilt, and Coroutines to enhance app functionality and user experience.\n\nAdditionally, I led the migration of the Scan & Pay module to Clean Architecture, implemented Test-Driven Development (TDD), and focused heavily on performance optimizations to ensure a smoother and more reliable app.",
    url: "https://play.google.com/store/search?q=paytm&c=apps&hl=en_IN",
  },
  {
    position: "Intern",
    company: "Times Internet",
    duration: "Jul 2018 – Dec 2018",
    description:
      "I contributed to the revamp of the Times Prime app and developed an internal app for testing promotional QR codes. This tool enabled the internal teams to validate new features before release, enhancing the overall testing process.",
    url: "https://play.google.com/store/search?q=times+prime&c=apps&hl=en_IN",
  },
];
