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
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["Replicate AI", "Next.js", "PlanetScale", "Tailwind", "Prisma", "Typescript"],
    imageUrl: reDesigner,
  },
  {
    title: "Genius",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Replicate AI", "Open AI", "Stripe", "Prisma"],
    imageUrl: geNius,
  },
  {
    title: "Movix",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "IMDB API", "Tailwind",, "Javascript", "Axios", "Redux"],
    imageUrl: moVix,
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
