import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import geNius from "@/public/genius.png";
import reDesigner from "@/public/redesigner.png";
import dataAnalysis from "@/public/data-analysis.png";
import EDAStreamlit from "@/public/EDAStreamlit.png";
import Chatpdf from "@/public/Chatpdf.png";
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
    title: "Data Scientist",
    location: "Remote",
    description:
      "Delivering state-of-the-art quantitative and qualitative analytics solutions, leveraging ML and DL, to the freelance tech industry.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Present",
  },
  {
    title: "Project Manager",
    location: "Panaverse",
    description:
      "Led a developer team to create Full-Stack Web 2.0 and Web 3.0 templates tailored for marketplaces and businesses. Emphasized UI/UX optimization, process streamlining, and rigorous testing for high performance and reliability.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
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
    title: "Sales Data Analysis",
    tags: ["Python", "Pandas", "Numpy", "Jupyter Notebook", "EDA", "Analysis", "Visualization", "Stripe", "Prisma"],
    imageUrl: dataAnalysis,
    liveUrl: "https://github.com/HHuzaifa/Sales-Data-Analysis-Pandas",
    sourceCodeUrl: "https://github.com/HHuzaifa/Sales-Data-Analysis-Pandas"
  },
  {
    title: "ChatPDF",
    tags: ["Javascript", "Pinecone", "Radix-UI", "Axios", "Langchain", "Stripe", "TailwindCSS", "OpenAI-Edge"],
    imageUrl: Chatpdf,
    liveUrl: "https://chatpdf-h.vercel.app/",
    sourceCodeUrl: "https://github.com/HHuzaifa/ChatPDF-Next.Js-OpenAI"
  },
  {
    title: "EDA Stock Price",
    tags: ["Javascript", "Pinecone", "Radix-UI", "Axios", "Langchain", "Stripe", "TailwindCSS", "OpenAI-Edge"],
    imageUrl: EDAStreamlit,
    liveUrl: "https://eda-sp500-stock-price.streamlit.app/",
    sourceCodeUrl: "https://github.com/HHuzaifa/EDA-SP500-Stock-Price-Streamlit"
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
  "D3.Js",
  "Scikit-Learn",
  "Seaborn",
  "Power BI",
  "Tableau",
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
  "Next.Js",
  "Git",
  "Tailwind",
  "Figma",
  "Prisma",
  "MongoDB",
  "Framer Motion",
] as const;
