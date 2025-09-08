import {
  cypressLodge,
  pursejacked,
  usaigov
} from "../assets";

export * from './articles';

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
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Staff Software Engineer",
    company_name: "Flexion, Inc",
    date: "2024 - Present",
    details: [
      "<span style='color: #FF7F11;'>Architected and built out the USAi Console</span>. The console provides unified monitoring, cost tracking, user management, API key management, usage exploration, and performance evaluation tools to <span style='color: white;'>accelerate AI adoption within government agencies</span>.",
      "<span style='color: white;'>Led</span> initiatives within the organization to <span style='color: #FF7F11'>train</span> teams in collaborative coding.",
      "<span style='color: white;'>Researched</span> additional business opportunities leveraging technologies like <span style='color: #FF7F11'>Terraform</span> and X-Road.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "SamCart",
    date: "2021 - 2024",
    details: [
      "Built and scaled an eCommerce SaaS storefront designed to simplify selling digital products online, integrating innovative checkout and conversion-boosting features. Platform served high-profile clients including <span style='color: white;'>Wolf of Wallstreet, Hubspot</span>, and <span style='color: #FF7F11'>Taking Cara Babies</span></span>.",
      "<span style='color: white;'>Enhanced usability and interactivity</span> to an AI application using <span style='color: #FF7F11'>MERN stack</span> and Slate.js. (Think AI meets PowerPoint)",
      "<span style='color: white;'>Led end-to-end delivery</span> of a self-service customer payment portal, from concept through deployment, leveraging <span style='color: #FF7F11'>Stripe.js</span> to support ~2,200 daily login attempts. Enabled customers to independently manage billing details, update payment methods, and resolve issues without support intervention.",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "AppSumo",
    date: "2018 - 2021",
    details: [
      "Migrated custom enterprise applications from a <span style='color: white;'>legacy Django - Python2.7 monolith</span> to latest stable version increasing revenue from <span style='color: #FF7F11'>5M to 70M</span>.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring <span style='color: #FF7F11'>high availability</span> for critical business applications.",
      "<span style='color: white;'>Hired and Collaborated </span> with an <span style='color: #FF7F11'>international</span> team</span> to design and implement front-end interfaces in Vue.js",
    ],
  },
  {
    title: "Programmer",
    company_name: "Exacta Systems",
    date: "2016 - 2018",
    details: [
      "Built an <span style='color: white;'>automated financial report</span> for C-suite, using Phantom.JS, SES, Lamda and Node.js totaling <span style='color: #FF7F11'>$440M</span> annually.",
      "Led <span style='color: white;'>containerization technology R&D</span> and presented <span style='color: #FF7F11'>cost/benefit</span> analysis to C-suite.",
      "Collaborated with <span style='color: white;'>design</span> and product to deliver real time UI updates monitoring hundreds of <span style='color: #FF7F11'>Casino revenue</span> sites across the nation.",
    ],
  },
  {
    title: "UI Developer",
    company_name: "Bulu Marketplace",
    date: "2016 - 2016",
    details: [
      "Developed <span style='color: white;'>UI and feature</span> rollout of <span style='color: #FF7F11'>data platform</span> and e-commerce site using Django.",
      "Oversaw <span style='color: white;'>product related</span> strategy with <span style='color: #FF7F11'>CPO</span>.",
    ],
  },
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
  // {
  //   name: "Open Source electric Vertical Take-Off and Landing Repo",
  //   description:
  //     "A starred GitHub repo containing a curated list of electric Vertical Take-Off and Landing startups.",
  //   image: osevtol,
  //   link: "https://github.com/mapineda/open-source-eVTOL-startups",
  // },
  {
    name: "USAi.gov",
    description:
      "Developed the USAi.gov Console, a comprehensive AI analytics and management platform for government agencies.",
    image: usaigov,
    link: "https://usai.gov",
  },
  {
    name: "Cypress Lodge No. 1423 A.F. & A.M.",
    description:
      "A website for a Masonic Lodge in Cypress, TX",
    image: cypressLodge,
    link: "https://www.cypress1423.org/"
  },
  {
    name: "Purse Jacked",
    description:
      "An online resource for victims of purse jugging. Built with accessibility in mind.",
    image: pursejacked,
    link: "https://www.pursejacked.com"
  },
];

export { experiences, portfolio };

