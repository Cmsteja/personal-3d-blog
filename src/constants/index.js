import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  byjus,
  phonepe,
  problemSolver,
  mentor
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "blogs",
    title: "Blogs"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "AI  Enthusiast",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: problemSolver,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
   {
    title: "Mentor",
    icon: mentor,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [

  {
    title: "Full stack Developer",
    company_name: "BYJU'S",
    icon: byjus,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "PhonePe",
    icon: phonepe,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Engineered a rapid-launch framework using Jolt specifications that slashed product deployment time by 86%, reducing the cycle from 15 days to just 2 days.",
      "Architected a highly configurable rules engine for Travel Insurance, enabling real-time, personalized pricing based on user affluence, destination, and priority parameters.",
      "Led a critical backend overhaul by transitioning legacy systems to a State Machine model, significantly increasing system predictability and operational stability.",
      "Successfully executed an overnight data center migration during a geopolitical crisis, establishing robust Disaster Recovery (DR) capabilities to ensure zero business interruption."
    ],
  },
];

const testimonials =[];
// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Switch from Javascript to Java",
    description:
      "As a web application developer it is often happens to switch between different languages, in this blog I help people to understand the way I switched from Javascript to Java",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Design Patterns",
        color: "pink-text-gradient",
      },
    ],
    source_code_link: "https://suryatejachakkapalli.blogspot.com/2023/10/switch-to-java-from-javascript.html"
  },
];

export { services, technologies, experiences, testimonials, projects };
