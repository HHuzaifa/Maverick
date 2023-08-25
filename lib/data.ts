import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import geNius from "@/public/genius.png";
import reDesigner from "@/public/redesigner.png";
import moVix from "@/public/movix.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Machine Learning Engineer",
    location: "Remote",
    description:
      "Providing cutting-edge Machine Learning solutions to the freelance tech landscape.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - Present",
  },
  {
    title: "Machine Learning Engineer | React/Next.Js Developer",
    location: "Remote",
    description:
      "Exploring The Fiverr freelance platform and providing cutting-edge Machine Learning and web app solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "Machine Learning Engineer | React/Next.Js Developer",
    location: "Remote",
    description:
      "Exploring The Upwork freelance platform and providing cutting-edge Machine Learning and web app solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "ReDesigner",
    tags: ["Replicate AI", "Next.js", "PlanetScale", "Tailwind", "Prisma", "Typescript"],
    imageUrl: reDesigner,
    liveUrl: "https://redesginer.vercel.app/",
    sourceCodeUrl: "https://github.com/HHuzaifa/ReDesginer-Next.js-Replicate-AI"
  },
  {
    title: "Genius",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Replicate AI", "Open AI", "Stripe", "Prisma"],
    imageUrl: geNius,
    liveUrl: "https://genius-rho.vercel.app/",
    sourceCodeUrl: "https://github.com/HHuzaifa/Generative-AI-SAAS-Platform"
  },
  {
    title: "Movix",
    tags: ["React", "CSS", "Hooks", "IMDB API", "Tailwind", , "Javascript", "Axios", "Redux"],
    imageUrl: moVix,
    liveUrl: "https://movix-two-opal.vercel.app/",
    sourceCodeUrl: "https://github.com/HHuzaifa/Movix-React"
  },
] as const;

export const skillsData = [
  "Python",
  "TensorFlow",
  "HugginFace",
  "Langchain",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "PyTorch",
  "OpenCV",
  "MLFlow",
  "KubeFlow",
  "Kubernetes",
  "Docker",
  "AWS",
  "PyCaret",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Figma",
  "Prisma",
  "MongoDB",
  "Framer Motion",
] as const;
