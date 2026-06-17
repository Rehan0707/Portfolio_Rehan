/**
 * Single source of truth for all portfolio content.
 * Edit values here to update the site — every section reads from this file.
 */

export const profile = {
  name: "Rehan Sanadi",
  roles: ["iOS Developer", "Product Builder", "Founder"],
  tagline: "iOS Developer • Product Builder • Founder",
  location: "Ichalkaranji, Maharashtra, India",
  email: "rehansanadi0707@gmail.com",
  phone: "+91 9890786572",
  github: "https://github.com/Rehan0707",
  linkedin: "https://www.linkedin.com/in/rehan-sanadi-559151366",
  resume: "/Rehan_Resume.pdf",
  heroPhoto: "/rehan.png", // drop a cut-out PNG here; an elegant fallback renders if missing
  description:
    "I design and build digital products that solve real problems through technology, design, and innovation.",
} as const;

export const heroCards = [
  { id: "01", title: "Yumyoo", subtitle: "Food pre-ordering", tint: "#CBB6FF" },
  { id: "02", title: "Hearly", subtitle: "AI meeting assistant", tint: "#B89BFF" },
  { id: "03", title: "Solace", subtitle: "Holistic Health Tracker", tint: "#FFC5A0" },
  { id: "04", title: "Roam", subtitle: "AI Travel Companion", tint: "#10B981" },
] as const;

export const achievements = [
  "OpenAI Buildathon — Top 17",
  "NxtWave Buildathon — Winner",
  "Neuroverse Software Solutions",
  "B.Tech AI & DS",
  "Gold Medalist — Boxing",
] as const;

export const timeline = [
  {
    year: "2025",
    items: [
      {
        title: "Started B.Tech in AI & Data Science",
        org: "Sanjay Ghodawat University (NIAT)",
        body: "Began my engineering journey — diving into AI, data science, and software fundamentals.",
      },
      {
        title: "Built Solace",
        org: "Personal project",
        body: "Shipped a comprehensive health app tracking sunlight exposure, hydration, and sleep monitoring in SwiftUI.",
      },
      {
        title: "Core Lead — NIAT Entrepreneurship Club",
        org: "Sanjay Ghodawat University",
        body: "Organized 5-minute pitches and 48-hour sprints. Led team to produce and sell 420 custom NFC networking cards in 48 hours.",
      },
    ],
  },
  {
    year: "2026",
    items: [
      {
        title: "Joined Neuroverse Software Solutions",
        org: "Software Developer Intern",
        body: "Building SwiftUI components and shipping features through Git, PRs, and code reviews.",
      },
      {
        title: "OpenAI Buildathon — Top 17 Finalist",
        org: "OpenAI Buildathon Challenge",
        body: "Recognized among the top 17 teams for product thinking and execution under pressure.",
      },
      {
        title: "Active Member — Swift Pune",
        org: "Developer Community",
        body: "Engaged in local Swift/iOS developer meetups, participating in technical discussions, workshops, and Apple tech panels.",
      },
    ],
  },
] as const;

export const skills = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "Firebase",
  "Apple Intelligence",
  "Core ML",
  "Xcode",
  "Git",
  "GitHub",
  "Figma",
  "VS Code",
] as const;

export const building = [
  {
    title: "Yumyoo",
    status: "In active development",
    body: "A smart food pre-ordering platform that lets customers skip the queue and helps restaurants go digital.",
    tag: "FoodTech",
  },
  {
    title: "Hearly",
    status: "Prototype",
    body: "An AI meeting assistant focused on voice clarity, noise reduction, and human-sounding conversations.",
    tag: "AI Productivity",
  },
  {
    title: "Future AI Products",
    status: "Exploring",
    body: "Experiments at the intersection of Apple Intelligence, on-device ML, and everyday utility.",
    tag: "R&D",
  },
] as const;

export const faqs = [
  {
    q: "Are you available for work?",
    a: "Yes — I'm open to internships, collaborations, startups, and product opportunities, especially iOS, SwiftUI, and product-focused roles.",
  },
  {
    q: "What are you building right now?",
    a: "Yumyoo, a food pre-ordering platform, and Hearly, an AI meeting assistant — plus ongoing experiments with Apple Intelligence and on-device ML.",
  },
  {
    q: "What's your tech stack?",
    a: "Swift, SwiftUI, UIKit and MVVM for iOS; Core ML, Apple Intelligence and Foundation Models for AI; Firebase, Git and GitHub for the rest. I also work in Python and JavaScript.",
  },
  {
    q: "Where are you based?",
    a: "Ichalkaranji, Maharashtra, India. I'm open to remote work and relocation for the right opportunity.",
  },
  {
    q: "How do I reach you?",
    a: "Email is fastest, or connect on LinkedIn and GitHub — all the links are in the footer and the contact section above.",
  },
] as const;

export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/#contact" },
] as const;
