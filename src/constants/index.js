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
  byjus
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
    title: "Fullstack Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
      "Devised and implemented a robust pipeline to seamlessly propagate leads generated from marketing pages to the lead portal within Byjus, ensuring smooth and efficient data transfer.",
      "Spearheaded the development of a series of captivating and dynamic frontend pages using the cutting-edge Next.js framework, enhancing the user experience and elevating the visual appeal of the web platform.",
      "Developed multiple restful apis for the marketing pages.",
      "Built a google based authentication system in tracking the users who are using the web application.",
      "Collaborated on a team to create an empowering low-code platform for marketing, enabling seamless creation of captivating web pages for marketing in byjus.",
      "Developed a tailored notification system utilizing a Slack webhook for receiving prompt alerts on code failures.",
      "Integrated some feature toggling mechanism to the marketing pages for implementing some marketing strategies.",
      "Guided and mentored interns in completing their onboarding task and initial projects.",
      "Assisted in resolving challenges within the current pipeline to facilitate the transfer of student information to the CRM seamlessly.",
      "Presently, I am involved in the development of an internal CRM system designed to capture leads and enhance customer management capabilities."
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
  {
    name: "React Tutorial",
    description:
    "Explore systematically organized React concepts to gain a comprehensive understanding of key principles and functionalities. Navigate through each topic to gain insights into core concepts, enhancing proficiency in utilizing this powerful JavaScript library for dynamic user interfaces.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "React Concepts",
        color: "pink-text-gradient",
      },
    ],
    source_code_link:"https://pointy-pixie-e68.notion.site/REACT-d4e7248da4824fa59c907b5607fa8a43?pvs=4"
  }
];

export { services, technologies, experiences, testimonials, projects };
