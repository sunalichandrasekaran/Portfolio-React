import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";

//image for projects
import project_img1 from "../assets/project_img1.png";
import project_img2 from "../assets/project_img2.png";
import project_img3 from "../assets/project_img3.png";
import project_img4 from "../assets/project_img4.png";

//icons for myskill
export const Skills = [
  {
    id: 0,
    tech: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 1,
    tech: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 2,
    tech: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 3,
    tech: "React Js",
    icon: <FaReact />,
  },
  {
    id: 4,
    tech: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    id: 5,
    tech: "Sql",
    icon: <PiFileSqlBold />,
  },
];

// {details for projects}
export const projectdetails = [
  {
    id: 0,
    project_name: "NETFLIX",
    projects_detail: `Designed a visually appealing homepage with a layout similar to Netflix, featuring rows of trending movies and TV shows.
    Integrated a dynamic content catalog with a vast collection of movies and TV series, organized into categories such as genres, trending, and top-rated.
    Integrated a custom video player that supports smooth playback and includes features like play, pause, volume control, and fullscreen mode.
    Front-end: HTML, CSS, JavaScript (ReactJS) netflix`,
    tech_stack: ["React JS", "Tailwind"],
    project_img: project_img1,
    link: "https://beautiful-eclair-0323a6.netlify.app/",
    reverese: false,
  },
  {
    id: 0,
    project_name: "Airplane Website",
    projects_detail: `In this project, I undertook the challenge of replicating the popular streaming 
      platform Netflix, showcasing my proficiency in front-end web development. The Netflix clone is a responsive and user-friendly web application that mimics the key features and aesthetics of the original platform.`,
    tech_stack: ["HTML", "CSS", "Javascript"],
    project_img: project_img2,
    link: "https://quiet-stroopwafel-adef05.netlify.app/",
    reverese: false,
  },
  {
    id: 0,
    project_name: "Restaurant Website",
    projects_detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
    tech_stack: ["React JS", "Tailwind"],
    project_img: project_img3,
    link: "https://super-mochi-24aca5.netlify.app",
    reverese: false,
  },
  {
    id: 0,
    project_name: "Shoe Website",
    projects_detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
    tech_stack: ["React JS"],
    project_img: project_img4,
    link: "https://sparkly-melomakarona-bafef9.netlify.app/",
    reverese: true,
  },
];

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },
  {
    id: 1,
    name: "My Skills",
    href: "Skills",
  },
  {
    id: 2,
    name: " My Projects",
    href: "Projects",
  },
  {
    id: 3,
    name: "Contact",
    href: "Contact",
  },
];
