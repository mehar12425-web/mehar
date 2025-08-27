import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Gurmehar Arora —Software Developer",
  author: "Gurmehar K Arora",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/IMG_6823.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Gurmehar Arora",
    specialty: "Aspiring Software Developer",
    summary:
      "Business Analytics and Information Technology major at Rutgers University- New Brunswick",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Dance4Ever",
      position: "Technology Intern",
      startDate: "May 2025",
      endDate: "Aug 2025",
      summary: [
        "I assisted with introducing an online scheduling and registration system that made processes easier for staff and customers.",
        "Compiled and analyzed marketing and event data in Excel, created charts and reports that highlighted key trends for management.",
      ],
    },
    {
      company: "The Chelsea Senior Living",
      position: "Assistant Lifestyle Manager",
      startDate: "June 2022",
      endDate: "Present",
      summary: [
        "I planned and led recreational activities and events for over 200 senior residents, creating a lively environment that encouraged engagement and social interaction. I coordinated and oversaw meal service operations to ensure efficiency and consistency. I also collaborated with team members to design innovative programs that strengthened community involvement",
      ],
    },
    {
      company: "Surkhi Bindi",
      position: "Co-Founder",
      startDate: "December 2021",
      endDate: "Present",
      summary:
        "Launched and managed a jewelry business, curating international collections, analyzing sales trends, and driving a 20% customer base increase through targeted marketing and social media campaigns.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
     Hi, I'm Gurmehar Arora. I am a passionate Business Analytics and Information Technology major with a strong interest in understanding how systems operate and how decisions are driven in the financial domain. I enjoy exploring different platforms and technologies, such as Java, to build a foundation for working with big data. My goal is to leverage these skills to analyze, interpret, and deliver insights that create value and support informed decision-making.
    `,
    image: "/IMG_6823.jpeg",
  },
};

// #5755ff
