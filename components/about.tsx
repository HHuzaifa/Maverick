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
        <span className="font-medium">Machine Learning</span> and{" "}
        <span className="font-medium">Deep Learning</span>, I specialize in data
        analysis and preprocessing, model training from scratch and harnessing
        the power of pre-trained models as well using the latest libraries and
        frameworks. Proficient in <span className="font-medium">MLOps</span>, I
        ensure <span className="underline">end-to-end</span> excellence in
        machine learning workflows.
      </p>

      <p className="mb-3">
        In addition to my AI expertise, I excel in{" "}
        <span className="font-medium">React</span> and{" "}
        <span className="font-medium">Next.Js</span>, facilitating seamless web
        app integration. I'm a perpetual learner, consistently embracing new
        technologies. Furthermore, I am currently pursuing a{" "}
        <span className="font-medium">
          Bachelor's degree in Business and Information Technology
        </span>
        . This blend of technical and business knowledge equips me to
        effectively drive results.
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
