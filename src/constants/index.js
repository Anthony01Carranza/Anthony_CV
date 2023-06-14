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
      content: ["nativo:Spanish   ", "English"],
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
      name: "astro",
      icon: astro,
    },
    {
      name: "notion",
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "xd",
      icon: xd,
    },
    {
      name: "sketch",
      icon: sketch,
    },
  ];
  
  const experiences = [
    {
      title: "Coding bootcamp",
      company_name: "Alura",
      icon: alura,
      iconBg: "#004e98",
      date: "June 2022 - December 2022",
      points: [
        "Front End bootcamp student, I learned the basics of programming and the basics of css, html and js.",
        "I have knowledge and experience with Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "freelance work",
      company_name: "freelance",
      icon: freelance,
      iconBg: "#ffffff",
      date: "December 2022 - April 2023",
      points: [
        "This period i have designed and created websites for restaurants with pure code. only using html, css and js.",
        "Creating high quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Have a good relationship with the client for future code maintenance or other projects.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Web Developer",
      icon: website,
      iconBg: "#ffffff",
      date: "April 2023 - Jan 2023",
      points: [
        "Improve my knowledge in programming logic using JavaScript.",
        "I am creating projects to improve my skills and using other frameworks to facilitate the layout and optimization of the project.",
        "Using javascript ES6, react-spring-library, serverless Api, in my projects.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "web restaurant",
      description:
        "the landing page has a beautiful product display with a responsible design and pure code.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "js",
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
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
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
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: project3,
      source_code_link: "https://anthony01carranza.github.io/note_book/",
      source_code_Git: "https://github.com/Anthony01Carranza/note_book",
    },
    {
      name: "Calculator",
      description:
        "This application to create daily activities. It is based on HTML. CSS and Javascript.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: project4,
      source_code_link: "https://calculator-project-fvflxyb02-anthony01carranza.vercel.app/",
      source_code_Git: "https://github.com/Anthony01Carranza/calculator_project",
    },
    {
      name: "Individuals and Teams",
      description:
        "This project is created with react and allows you to create, delete and modify groups and persons. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: project5,
      source_code_link: "https://team-organization-app.vercel.app/?",
      source_code_Git: "https://github.com/Anthony01Carranza/team_organization_app",
    },
    {
      name: "My First CV ",
      description:
        "My first CV .",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: project6,
      source_code_link: "https://anthony01carranza.github.io/Anthony_About_Me/",
      source_code_Git: "https://github.com/Anthony01Carranza/Anthony_About_Me/deployments/activity_log?environment=github-pages",
    },
  ];
  
  export { services, technologies, experiences, projects };
  