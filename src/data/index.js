import {
  refrontier,
  osevtol,
  pursejacked,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "YouTube Content Creator",
    company_name: "Self Employed",
    date: "2024 - Present",
    details: [
      "Built a subscriber base of over <span style='color: white;'>10 subscribers</span> by creating video content to help programmers.",
      "Crafted visually appealling programming videos that have garnered over <span style='color: white;'>50 views</span>.",
      "Produced high-quality educational and entertaining articles for clients including <span style='color: white;'>Bitcoinist and Bitcoin Magazine</span>.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "SamCart",
    date: "2021 - 2024",
    details: [
      "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Wolf of Wallstreet, Hubspot, and Taking Cara Babies</span>.",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications using Slate.js and the MERN stack.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions of a self-serving payment portal for customers.",
    ],
  },
  {
    title: "Software Engineer I",
    company_name: "AppSumo",
    date: "2018 - 2021",
    details: [
      "Migrated custom enterprise applications from a <span style='color: white;'>legacy monolith</span> to latest version increasing revenue from 2M to 12M.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  {
    title: "Programmer",
    company_name: "Exacta Systems",
    date: "2016 - 2018",
    details: [
      "Built an <span style='color: white;'>automated financial report</span> for C-suite, using Phantom.JS, SES, Lamda and Node.js.",
      "Led <span style='color: white;'>containerization technology R&D</span> and presented cost/benefit analysis to C-suite.",
      "Collaborated with <span style='color: white;'>design</span> and product to deliver UI updates at hundreds of Casinos across the nation.",
    ],
  },
  // {
  //   title: "UI Developer",
  //   company_name: "Bulu Marketplace",
  //   date: "2016 - 2016",
  //   details: [
  //     "Built an <span style='color: white;'>automated financial report</span> for C-suite, using Phantom.JS, SES, Lamda and Node.js.",
  //     "Led <span style='color: white;'>containerization technology R&D</span> and presented cost/benefit analysis to C-suite.",
  //     "Collaborated with <span style='color: white;'>design</span> and product to deliver UI updates at hundreds of Casinos across the nation.",
  //   ],
  // },
  // {
  //   title: "Freelance Developer",
  //   company_name: "COPA Paris 2016",
  //   date: "2016",
  //   details: [
  //     "Built an <span style='color: white;'>automated financial report</span> for C-suite, using Phantom.JS, SES, Lamda and Node.js.",
  //     "Led <span style='color: white;'>containerization technology R&D</span> and presented cost/benefit analysis to C-suite.",
  //     "Collaborated with <span style='color: white;'>design</span> and product to deliver UI updates at hundreds of Casinos across the nation.",
  //   ],
  // },
];

const portfolio = [
  {
    name: "Open Source electric Vertical Take-Off and Landing Repo",
    description:
      "A starred GitHub repo containing a curated list of electric Vertical Take-Off and Landing startups.",
    image: osevtol,
    link: "https://github.com/mapineda/open-source-eVTOL-startups",
  },
  {
    name: "Purse Jacked",
    description:
      "An online resource for victims of purse jugging. Built with accessibility in mind.",
    image: pursejacked,
    link: "https://www.pursejacked.com"
  },
  {
    name: "Refrontier",
    description:
      "A bodyweight calculator for the American Hero.",
    image: refrontier,
    link: "https://www.refrontier.com"
  },
];

export { experiences, portfolio };

