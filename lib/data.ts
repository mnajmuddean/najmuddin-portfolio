import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import hadithTodayImg from "@/public/images/hadith-today.jpg";
import simpleCalculatorImg from "@/public/images/simple-calculator.jpg";
import apaHukumImg from "@/public/images/apa-hukum.png";
import ueImg from "@/public/images/ue.jpg";

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
] as const;

export const experiencesData = [
  {
    title: "Graduated in Diploma Computer Science",
    location: "UiTM Jasin, Melaka",
    description: "Graduated after 2 years with 3.48 CGPA",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
    image: "../images/uitm.png",
  },
  {
    title: "Graduated in Bachelor of Information Systems Engineering",
    location: "UiTM Jasin, Melaka",
    description:
      "After finish my diploma study, I continued with my degree study and graduate after 2 years with 3.44 CGPA",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - 2023",
    image: "../images/uitm.png",
  },
  {
    title: "Junior Web Developer",
    location: "Ampang, Kuala Lumpur",
    description:
      "During my semester break of my degree study, I'm working as a part-time developer as Tarikemas Dot Com",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2022 - Oct 2022",
    image: "",
  },
  {
    title: "Backend Engineer Intern",
    location: "Kuala Lumpur",
    description:
      "I'm working as an Backend Engineer Intern at Pos Malaysia Berhad during my degree study",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023 - July 2023",
    image: "../images/pos.png",
  },
  {
    title: "Junior Backend Engineer",
    location: "Kuala Lumpur",
    description:
      "After I finished my internship, I was offered to work as a full time staff at Pos Malaysia Berhad",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023 - Dec 2023",
    image: "../images/pos.png",
  },
  {
    title: "Junior Web Developer",
    location: "Subang Jaya",
    description:
      "I pursue my programming career at Uni Enrol as a Junior Web Developer",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Present",
    image: "../images/ue.jpg",
  },
] as const;

export const projectsData = [
  {
    title: "Hadis-Today",
    link: "https://hadis-today.vercel.app/",
    description:
      '"Hadis Today," is a modern, minimalist web app that displays collections of hadiths (Islamic narrations) in a user-friendly, card-based interface.',
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: hadithTodayImg,
  },
  {
    title: "Apa Hukum Bot",
    link: "https://t.me/ApaHukumBot",
    description:
      "This application scrapes fatwa articles from the Jabatan Mufti Wilayah Persekutuan website and provides a Telegram bot interface for searching and retrieving fatwas.",
    tags: ["Golang", "Telegram Bot", "Web Scraping"],
    imageUrl: apaHukumImg,
  },
  {
    title: "Simple Calculator Application",
    link: "https://simple-calculator-go-web-app.vercel.app/",
    description: "A simple calculator application for users",
    tags: ["Golang", "HTML"],
    imageUrl: simpleCalculatorImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "Golang",
  "NodeJS",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "AWS S3",
  "Postman",
  "AWS Lambda",
  "Git",
  "Docker",
  "ECR",
  "EC2",
] as const;
