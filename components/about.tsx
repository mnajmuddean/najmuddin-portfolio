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
        Hello 👋, my name is Muhammad Najmuddin Bin Amdan. I am a junior full-stack
        developer 🧩 (but I'm focusing more on backend development 👻)
        After graduating with a degree in{" "}
        <span className="font-medium">Information Systems Engineering</span> from 
        UiTM Jasin, I decided to pursue my passion for programming. My core stack
        is{" "}
        <span className="font-medium">
          Node js, Typescript, Golang and React js.
        </span> I am currently looking for a{" "} 
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing football ⚽,
        video games 🎮, going camping ⛺ and hiking 🧗. I'm also playing guitar 🧐.
      </p>
    </motion.section>
  );
}
