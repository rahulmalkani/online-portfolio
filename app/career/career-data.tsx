export interface Job {
  position: string;
  company: string;
  duration: string;
  description: string; // Now a single string with paragraph breaks
  url: string;
}

export const jobs: Job[] = [
  {
    position: "SDE II – Android",
    company: "AngelOne",
    duration: "Nov 2024 – Present",
    description:
      "Owning development and stability of core trade execution and order placement flows within the trade pod, including production issues and failure handling.\n\nDesigned and standardized a modular Android analytics architecture, now used across 100% of product flows.\n\nResearched and implemented accessibility improvements to make the app more usable for users with assistive needs.",
    url: "https://play.google.com/store/apps/details?id=com.msf.angelmobile&hl=en_IN&pli=1",
  },
  {
    position: "Senior Software Engineer – Android",
    company: "Paytm",
    duration: "Jul 2019 – Oct 2024",
    description:
      "Worked on the Scan & Pay module, a core payment flow in the Paytm consumer app. Led its migration to Clean Architecture to improve maintainability and stability.\n\nImplemented the T-PAP (Third-Party Application Provider) model for UPI, enabling continued payment processing via partner banks after regulatory restrictions.\n\nBuilt and improved key payment features such as Instrument Caching, Visa Single Click Payments, and post-payment confirmation flows using Kotlin, MVVM, Coroutines, Hilt, and Room.\n\nOptimized app startup and camera flows, reducing camera startup time by 30% through performance benchmarking and bottleneck analysis.\n\nIntroduced TDD practices, increasing unit test coverage by 45%, and strengthened analytics and funnel tracking to improve payment conversion by 20%.",
    url: "https://play.google.com/store/search?q=paytm&c=apps&hl=en_IN",
  },
  {
    position: "SDE Intern",
    company: "Times Internet",
    duration: "Dec 2018 – Apr 2019",
    description:
      "Delivered design revamp of the live Times Prime Android app referral flow.\n\nBuilt an internal Android app for testing and validating promotional QR codes.\n\nCreated an internal image compression web app to help the product team optimize promotional image sizes.",
    url: "https://play.google.com/store/search?q=times+prime&c=apps&hl=en_IN",
  },
];
