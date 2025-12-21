import React from "react";
import { motion } from "framer-motion";

import {
  FaCode,
  FaHashtag,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiJupyter,
  SiPycharm,
  SiSublimetext,
  SiPostman,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";

/* ================= Animation Variants ================= */

const cardVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -120,
  },
  hiddenRight: {
    opacity: 0,
    x: 120,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

/* ================= Skills Data ================= */

const skillsData = [
  {
    title: "Programming Languages",
    subtitle: "Core languages powering application logic",
    icon: "🖥️",
    gradient: "from-purple-500 to-indigo-500",
    skills: [
      { name: "C", icon: <FaCode />, color: "text-gray-800" },
      { name: "C#", icon: <FaHashtag />, color: "text-purple-600" },
      { name: ".NET", icon: <SiDotnet />, color: "text-indigo-600" },
      { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
    ],
  },
  {
    title: "Frontend Development",
    subtitle: "Interactive & responsive user interfaces",
    icon: "🌐",
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-600" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-600" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
      { name: "React", icon: <FaReact />, color: "text-cyan-500" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-700" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-500" },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "APIs, logic & server-side architecture",
    icon: "⚙️",
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-800" },
      { name: "Django", icon: <SiDjango />, color: "text-green-700" },
    ],
  },
  {
    title: "Databases",
    subtitle: "Structured & NoSQL data storage",
    icon: "🗄️",
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
    ],
  },
  {
    title: "Tools & Work Environment",
    subtitle: "Daily tools for productivity & development",
    icon: "🛠️",
    gradient: "from-pink-500 to-rose-500",
    skills: [
      { name: "VS Code", icon: <VscVscode />, color: "text-blue-600" },
      { name: "Visual Studio", icon: <DiVisualstudio />, color: "text-purple-700" },
      { name: "Jupyter Notebook", icon: <SiJupyter />, color: "text-orange-500" },
      { name: "PyCharm", icon: <SiPycharm />, color: "text-green-600" },
      { name: "Sublime Text", icon: <SiSublimetext />, color: "text-yellow-500" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    ],
  },
];

/* ================= Component ================= */

export default function TechnicalSkills() {
  return (
    <section className="min-h-screen py-24 bg-gradient-to-b from-sky-50 via-white to-slate-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{once: true}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-semibold text-[#043D5D]">
            Technical Expertise
          </h2>
        </motion.div>

        {/* ===== Skills Grid ===== */}
        <div className="grid lg:grid-cols-2 gap-14">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-3xl p-[1px]"
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-30 blur-xl`}
              />

              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition">
                
                {/* Card Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {category.subtitle}
                  </p>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      viewport={{once: true}}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md cursor-pointer"
                    >
                      <span className={`text-4xl ${skill.color}`}>
                        {skill.icon}
                      </span>
                      <span className="text-sm font-semibold text-gray-800 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
