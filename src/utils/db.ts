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
    reactNative,
    graphql,
    easyshare_logo,
    sloovi_logo,
    fundvine_logo,
    exaltapp_logo,
    carrent,
    jobit,
    tripguide,
    threejs,
    jideMemoji,
    nextjs,
    nestjs,
  } from "../assets";
import { ProjectProp } from "./types";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud computing",
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
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "ReactNative",
      icon: reactNative,
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
      name: "Nest JS",
      icon: nestjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "GraphQL",
      icon: graphql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];

  const personalInfo = {
    firstName: 'Akinjide',
    lastName: 'Oyekanmi',
    fullName: 'Akinjide Oyekanmi',
    role: 'Software developer (React/ Typescript/ Node/ Golang)',
    img: jideMemoji,
    workSummary: 'Full stack software engineer (React, Svelte, Express, Next, Nest, AWS) experienced in working with international teams and clients, seeking a new challenge to build novel Fintech, market place, web3 and many other interesting products.',
  }
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Exalt Application Limited",
      icon: exaltapp_logo,
      iconBg: "#fff",
      date: "Nov 2022 - present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Sloovi",
      icon: sloovi_logo,
      iconBg: "#0A0442",
      date: "Sep 2022 - Nov 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Fundvine Capital and Securities",
      icon: fundvine_logo,
      iconBg: "#fff",
      date: "Jan 2022 - Dec 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Frontend Developer (web/mobile)",
      company_name: "Easyshare",
      icon: easyshare_logo,
      iconBg: "#014d40",
      date: "May 2021 - Sep 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Fullstack Developer",
      company_name: "Cheap Order Concepts",
      icon: '',
      iconBg: "#E6DEDD",
      date: "Feb 2020 - Mar 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects: Array<ProjectProp> = [
    {
      name: "Easyshare web",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
          img: reactjs,
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
          img: mongodb,
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
          img: tailwind,
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      live_links: [
        {
          platform: "web",
          link: "https://easyshare.global/",
        },
        {
          platform: "mobile",
          link: "play.google.com/store/apps/details?id=global.easyshare.app",
        }
      ],
    },
    {
      name: "Easyshare web",
      description:
        "Web based platform that enables sending and receiving money with crypto assets easy, safe and convenient.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
          img: reactjs,
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
          img: css,
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
      live_links: [],
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
          img: nextjs,
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
          img: css,
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      live_links: [
        {
          platform: "web",
          link: "https://easyshare.global/",
        },
        {
          platform: "mobile",
          link: "play.google.com/store/apps/details?id=global.easyshare.app",
        }
      ],
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, personalInfo, };