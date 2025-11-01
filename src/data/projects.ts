import uiTablet from "../assets/UI-in-Tablet.png";
import uiDesktop from "../assets/UI-in-Desktop.png";
import uiMobile from "../assets/UI-in-Mobile.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce website dengan React, Node.js, dan MongoDB. Fitur lengkap termasuk payment gateway dan admin dashboard.",
    image: uiDesktop,
    github: "https://github.com/username/ecommerce",
    demo: "https://demo.example.com",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas dengan fitur drag & drop, real-time updates menggunakan Firebase.",
    image: uiTablet,
    github: "https://github.com/username/task-manager",
    demo: "https://demo.example.com",
    tags: ["React", "Firebase", "Tailwind"],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard cuaca interaktif dengan visualisasi data menggunakan Chart.js dan API cuaca real-time.",
    image: uiMobile,
    github: "https://github.com/username/weather-dashboard",
    tags: ["React", "API", "Chart.js"],
  },
];
