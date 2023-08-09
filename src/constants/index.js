import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    astro,
    xd,
    sketch,
    alura,
    freelance,
    vite,
    website,
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    linkedin,
    github,
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
      id: "contact",
      title: "Contact",
    },
  ];

  export const socialNetworksLinks = [
    {
      id: "linkedin",
      title: "Linkedin",
      icon: linkedin,
      source_code_link: "https://www.linkedin.com/in/anthony-alexander-carranza-ramirez-6a77ab25a/ ",
    },
    {
      id: "github",
      title: "git-hub",
      icon: github,
      source_code_link: "https://github.com/Anthony01Carranza",
    },
  ];
  
  const services = [
    {
      title: "CSS Frameworks",
      icon: web,
      content: "Bootstrap, Tailwind & Sass",
    },
    {
      title: "Project management",
      icon: mobile,
      content: "Trello, notion, Git-Hub",
    },
    {
      title: "Web Developer",
      icon: backend,
      content: "React, Astro, Vite, Api",
    },
    {
      title: "Languages",
      icon: creator,
      content: ["native:Spanish & ", "English"],
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Astro",
      icon: astro,
    },
    {
      name: "Notion",
      icon: vite,
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
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "XD",
      icon: xd,
    },
    {
      name: "Sketch",
      icon: sketch,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Web Developer",
      icon: website,
      iconBg: "#ffffff",
      date: "April 2023 - Jan 2023",
      points: [
        "Updated my technical skills employing JavaScript",
        "I am constantly doing projects to improve my skills and implemting other frameworks to facilitate the layout and optimization of the web pages.",
        "Execute javascript ES6, react-spring-library, and serverless Api, in my projects.",
      ],
    },
    {
      title: "Freelance Work",
      company_name: "freelance",
      icon: freelance,
      iconBg: "#ffffff",
      date: "December 2022 - April 2023",
      points: [
        "I have designed and implemented websites for restaurants with pure code, using HTML, CSS and js.",
        "Validation was done to the websites to ensure their responsiveness and cross-browser compatibility.",
        "The satisfaction with the deliverables allowed me to create a good relationship for future code maintenance and additional projects.",
      ],
    },
    {
      title: "Coding Bootcamp",
      company_name: "Alura",
      icon: alura,
      iconBg: "#004e98",
      date: "January 2022 - December 2022",
      points: [
        "Front End Bootcamp student, I learned the basics of programming and the basics of CSS, HTML and js",
        "I have experience developing and maintaining web applications using React.js and other related technologies.",
        "With cross-functional teams that included designers, product managers, and other developers we implemented high-quality products.",
        "Implemented a responsive design and ensured cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Web Restaurant",
      description:
        "The landing page exudes excellence with its meticulously crafted responsive layout and pristine code.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JS",
          color: "green-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://restauran-landing-page.vercel.app/",
      source_code_Git: "https://github.com/Anthony01Carranza/restauran_landing-page",
    },
    {
      name: "Note App",
      description:
        "This is an application to create daily activities. It is based on HTML. CSS and Javascript.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://anthony01carranza.github.io/Activity-Notes-App/",
      source_code_Git: "https://github.com/Anthony01Carranza/Activity-Notes-App?",
    },
    {
      name: "Note Book App",
      description:
        "This is an application to save notes. using DOM, Javascript, HTML and CSS.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: project3,
      source_code_link: "https://anthony01carranza.github.io/note_book/",
      source_code_Git: "https://github.com/Anthony01Carranza/note_book",
    },
    {
      name: "Tesla Landing Page",
      description:
        "This page is created with tailwind, Astro Frameword and typescript, to make a static page, which is light and responsive.",
      tags: [
        {
          name: "Astro",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: project8,
      source_code_link: "https://tesla-demo-astro.vercel.app/",
      source_code_Git: "https://github.com/Anthony01Carranza/tesla-demo-astro",
    },
    {
      name: "Individuals and Teams",
      description:
        "This project is created with react and allows you to create, delete and modify groups and persons. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: project5,
      source_code_link: "https://team-organization-app.vercel.app/?",
      source_code_Git: "https://github.com/Anthony01Carranza/team_organization_app",
    },
    {
      name: "Demo-Harry-potter-Legacy ",
      description:
        "Demo-Harry-potter-Legacy. implementing the framework Astro, TS and TailwindCSS for the creation of this web site as well as making .map to search the information",
      tags: [
        {
          name: "Astro",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "green-text-gradient",
        },
        {
          name: "TS",
          color: "pink-text-gradient",
        },
      ],
      image: project7,
      source_code_link: "https://harry-legacy-astro.vercel.app/",
      source_code_Git: "https://github.com/Anthony01Carranza/harry-legacy-astro",
    }
  ];
  
  export { services, technologies, experiences, projects };
  