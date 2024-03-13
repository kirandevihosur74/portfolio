// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Kiran Gangadhar",
  middleName: "",
  lastName: "Devihosur",
  message: "Passionate about improving user experiences and driving business success through new tech solutions.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/kirandevihosur74",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/kiran-devihosur/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/kiran.png"),
  imageSize: 375,
  message:
    "Hello world, I'm Kiran Gangadhar Devihosur, a proud 2020 alumnus of KLE Technological University, Hubli, India, where I honed my skills in Computer Science and Engineering. My tech journey began at Accenture, where I spent 10 thrilling months as an Associate Software Engineer before diving into the diverse world of Full Stack Development at TekSystems Global Services. Here, I mastered the art of developing website using both frontend and backend technologies. Currently, I'm doing my masters in Data Science at the University of Colorado Boulder. When not immersed in data or contributing to open source projects, you'll find me embracing the great outdoors, hiking through nature's wonders. Let's connect and explore the endless possibilities in the world of tech!",
  resume: "https://drive.google.com/file/d/1Uaam1tqD1u3E56qmtmPe2UL_Of-J4U4E/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "kirandevihosur74",
  reposLength: 4,
  specificRepos: [],
};


// Leadership SECTION
// const leadership = {
//   show: false,
//   heading: "Leadership",
//   message:
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
//   images: [
//     { 
//       img: require("../editable-stuff/hashirshoaeb.png"), 
//       label: "First slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//     { 
//       img: require("../editable-stuff/hashirshoaeb.png"), 
//       label: "Second slide label", 
//       paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
//     },
//   ],
//   imageSize: {
//     width:"615",
//     height:"450"
//   }
// };

// SKILLS SECTION
// const skills = {
//   show: true,
//   heading: "Skills",
//   hardSkills: [
//     { name: "Python", value: 90 },
//     { name: "SQL", value: 75 },
//     { name: "Data Structures", value: 85 },
//     { name: "C/C++", value: 65 },
//     { name: "JavaScript", value: 90 },
//     { name: "React", value: 65 },
//     { name: "HTML/CSS", value: 55 },
//     { name: "C#", value: 80 },
//   ],
//   softSkills: [
//     { name: "Goal-Oriented", value: 80 },
//     { name: "Collaboration", value: 90 },
//     { name: "Positivity", value: 75 },
//     { name: "Adaptability", value: 85 },
//     { name: "Problem Solving", value: 75 },
//     { name: "Empathy", value: 90 },
//     { name: "Organization", value: 70 },
//     { name: "Creativity", value: 90 },
//   ],
// };

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Im on the hunt for an exciting Summer Internship in 2024, where I can immerse myself in Software Engineering or Data Science! If you're aware of any opportunities, have queries, or simply wish to exchange a friendly hello, don't hesitate to drop me an email. I'm all ears and ready for new adventures!",
  email: "kirandevihosur74@gmail.com",
};


// const experiences = {
//   show: false,
//   heading: "Experiences",
//   data: [
//     {
//       role: 'Software Engineer',// Here Add Company Name
//       companylogo: require('../assets/img/dell.png'),
//       date: 'June 2018 – Present',
//     },
//     {
//       role: 'Front-End Developer',
//       companylogo: require('../assets/img/boeing.png'),
//       date: 'May 2017 – May 2018',
//     },
//   ]
// }

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, getInTouch };
