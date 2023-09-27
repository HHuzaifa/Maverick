"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With 2 years of experience in{" "}
        <span className="font-medium"> 🔍📈 Data Science</span> and{" "}
        <span className="font-medium">Analysis</span>, I specialize in data
        collection, preprocessing, cleaning, and conducting both quantitative
        and qualitative analyses. Proficient in{" "}
        <span className="font-medium">
          Pandas, NumPy, Scikit-learn, PyTorch, TensorFlow, Matplotlib, and
          Seaborn.
        </span>
      </p>

      <p className="mb-3">
        In addition to my Data Science expertise, I also possess 💻🌐 web development
        skills specifically using <span className="font-medium">React</span> and{" "}
        <span className="font-medium">Next.Js</span> facilitating seamless web
        app integration. Author at Medium.com Writing about tech, research, and
        philosophy and currently pursuing a{" "}
        <span className="font-medium">
          Bachelor's degree in Business and Information Technology
        </span>
        . This blend of technical and business knowledge equips me to
        effectively drive results 🚀.
      </p>

      <p className="mb-3">
        My passion extends to crafting{" "}
        <span className="font-extrabold">AGI and Quantum Computing</span>, an
        avenue to unlock the universe's mysteries and drive human exploration of
        the cosmos.
      </p>

      <p>
        Let's connect to explore possibilities—whether you seek innovative
        solutions or envision a collaborative future. Together, we can shape
        tomorrow.
      </p>
    </motion.section>
  );
}
