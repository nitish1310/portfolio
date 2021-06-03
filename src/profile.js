// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Nitish Soman",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am a Graduate of Computer Science major with 4 years of work experience in the full stack development and AWS services like EC2, RDS, S3, Lambdas, SNS, DynamoDB etc. I have built a few projects myself and I am actively looking for a role where I can grow and learn from other experienced team members. Leverage technical, analytical, and problem-solving skills to create dynamic, high-speed websites, apps and platforms fueling competitive advantage and revenue growth.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "React",
    faClass: "fab fa-react",
  },
  {
    name: "AWS",
    faClass: "fab fa-aws",
  },
  {
    name: "HTML5",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    faClass: "fab fa-python",
  },
  {
    name: "MySQL, SQL, NO-SQL",
    faClass: "fas fa-database",
  },
  {
    name: "Firebase",
    faClass: "fab fas fa-fire skill__square",
  },
  {
    name: "GitHub",
    faClass: "fab fa-github",
  },
  {
    name: "Figma",
    faClass: "fab fa-figma",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Amazon Clone",
    skills: ["React, Firebase, Material UI, Stripe"],
    url: "https://clone-fcc92.web.app/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Google-Clone",
    skills: ["React, Firebase, Material UI, Router"],
    url: "https://clone-e922e.web.app/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Netflix-Clone",
    skills: ["React, Firebase, Material UI"],
    url: "https://netflix-clone-92e7e.web.app/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Slack-Clone",
    skills: ["React, Firebase, Material UI, Router"],
    url: "https://slack-clone-1c1ea.web.app/",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Personalized-email-access-service-based-on-voice-response",
    skills: ["React, Firebase, Gmail-API"],
    url: "https://github.com/nitish1310/Personalized-email-access-service-based-on-voice-response",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Analyzing Uber Movement Dataset",
    skills: ["AWS, Hadoop  MapReduce"],
    url: "https://github.com/nitish1310/Bigdata-project",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project7",
    name: "Autonomous Vehicle using Data Mining",
    skills: ["Data Mining, Deep Learning"],
    url: "https://github.com/nitish1310/Bigdata-project",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project8",
    name: "Memories App",
    skills: ["MERN Stack"],
    url: "https://github.com/nitish1310/Memories-App",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project9",
    name: "NextJS Landing Page",
    skills: ["React, NextJs, Firebase, ThemeUI"],
    url: "https://nextjs-landing-page.web.app/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project10",
    name: "Unichat Application",
    skills: ["React, Firebase, Chat Engine"],
    url: "https://unichat-application.web.app/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project11",
    name: "Signal Clone App",
    skills: ["React Native, Expo, Firebase"],
    url: "https://signal-clone-223b4.web.app/",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Kaustubh Mishra",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
