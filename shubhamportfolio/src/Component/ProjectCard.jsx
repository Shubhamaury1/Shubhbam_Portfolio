import React from "react";
import { motion } from "framer-motion";

// Your custom icons       //https://icons8.com/icons/set/c-sharp--style-color
import pythonIcon from "../assets/project_page_icons/python.png";
import djangoIcon from "../assets/project_page_icons/django.png";
import htmlIcon from "../assets/project_page_icons/html.png";
import cssIcon from "../assets/project_page_icons/css.png";
import jsIcon from "../assets/project_page_icons/js.png";
import powerBIIcon from "../assets/project_page_icons/powerBI.png";
import tableauIcon from "../assets/project_page_icons/tableau.png";
import excelIcon from "../assets/project_page_icons/excel.png";
import mysqlIcon from "../assets/project_page_icons/mysql.png";

/* ----------------------- PROJECT DATA ----------------------- */
const projects = [
  {
    title: "Diabetes Prediction Using ML",
    description:
      "Predictive healthcare application developed to assess diabetes risk and support informed medical insights.",
    date: "14-02-2025",
    tech: [
      { type: "image", src: pythonIcon, name: "Python" },
      { type: "image", src: djangoIcon, name: "Django" },
      // { type: "emoji", value: "🤖" },
    ],
    link: "https://github.com/Shubhamaury1/Diabetes-Prediction-ML",
  },
  {
    title: "Amazon Sales Dashboard Using Power BI",
    description:
      "Sales analytics dashboard built to visualize revenue trends, regional performance, and key business insights.",
    date: "01-03-2025",
    tech: [
      { type: "image", src: tableauIcon, name: "Tableau" },
      { type: "image", src: powerBIIcon, name: "Power BI" },
      { type: "image", src: mysqlIcon, name: "MySQL" },
      { type: "image", src: excelIcon, name: "Ms-Excel" },
    ],
    link: "https://github.com/Shubhamaury1/Amazon-Sales-Dashboard-Power-BI-",
  },
  {
    title: "OLA Dashboard Using Power BI",
    description:
      "Analytical dashboard developed to evaluate ride trends, revenue performance, and operational insights.",
    date: "25-02-2025",
    tech: [
      { type: "image", src: tableauIcon, name: "Tableau" },
      { type: "image", src: powerBIIcon, name: "Power BI" },
      { type: "image", src: mysqlIcon, name: "MySQL" },
      { type: "image", src: excelIcon, name: "Ms-Excel" },
    ],
    link: "https://github.com/Shubhamaury1/OLA-Dashboard-Using-Power-BI",
  },
  {
    title: "Amazon Clone",
    description:
      "E-commerce platform designed to replicate online shopping flows with responsive layouts and intuitive interactions.",
    date: "09-02-2025",
    tech: [
      { type: "image", src: htmlIcon, name: "HTML" },
      { type: "image", src: cssIcon, name: "CSS" },
      { type: "image", src: jsIcon, name: "JavaScript" },
    ],
    link: "https://github.com/Shubhamaury1/Amazon-clone",
  },
  {
    title: "Spotify Clone",
    description:
      "Interactive music streaming interface crafted to deliver smooth navigation and engaging user experiences.",
    date: "17-04-2024",
    tech: [
      { type: "image", src: htmlIcon, name: "HTML" },
      { type: "image", src: cssIcon, name: "CSS" },
      { type: "image", src: jsIcon, name: "JavaScript" },
      // { type: "emoji", value: "🎧" },
    ],
    link: "https://github.com/Shubhamaury1/Spotify-clone-working-with-music",
  },
  {
    title: "Password Generator",
    description:
      "Secure password generator designed to create strong, randomized credentials with flexible customization options.",
    date: "06-02-2024",
    tech: [
      { type: "image", src: pythonIcon, name: "React" },
      // { type: "emoji", value: "🔐" },
    ],
    link: "https://github.com/Shubhamaury1/password-generator",
  },
];

/* ----------------------- ANIMATIONS ----------------------- */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ----------------------- COMPONENT ----------------------- */
export default function ProjectCard() {
  return (
    <motion.section
      className="bg-sky-50 py-20 px-6"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-8xl mx-auto">
        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-sky-200 hover:bg-sky-300 rounded-xl p-6 shadow-md hover:shadow-lg cursor-pointer"
              variants={card}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            >
              {/* Title */}
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex gap-2 items-center">
                📄 {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-700 leading-relaxed mb-6 text-left">
                {project.description}
              </p>

              {/* Footer */}
              <div className="flex justify-between items-center text-sm text-slate-600">
                <span>Created on {project.date}</span>

                {/* <div className="flex gap-2 items-center">
                  {Array.isArray(project.tech) &&
                    project.tech.map((tech, i) => (
                      <span key={i} title={tech.name || ""}>
                        {tech.type === "emoji" && (
                          <span className="text-xl">{tech.value}</span>
                        )}

                        {tech.type === "image" && (
                          <img
                            src={tech.src}
                            alt={tech.name}
                            className="w-9 h-9 object-contain"
                          />
                        )}
                      </span>
                    ))}
                </div> */}

                <div className="flex gap-2 items-center">
                  {Array.isArray(project.tech) &&
                    project.tech.map((tech, i) => (
                      <div key={i} className="relative group">
                        {/* ICON */}
                        {tech.type === "emoji" && (
                          <span className="text-xl cursor-pointer">
                            {tech.value}
                          </span>
                        )}

                        {tech.type === "image" && (
                          <img
                            src={tech.src}
                            alt={tech.name}
                            className="w-9 h-9 object-contain cursor-pointer"
                          />
                        )}

                        {/* TOOLTIP */}
                        {tech.name && (
                          <span
                            className="absolute -top-8 left-1/2 -translate-x-1/2 
            bg-slate-700 text-white text-sm px-2 py-1 rounded 
            opacity-0 group-hover:opacity-100 
            transition-all duration-300 whitespace-nowrap
          "
                          >
                            {tech.name}
                          </span>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* More Projects */}
        <motion.div className="flex justify-center mt-14" variants={card}>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#092E53] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#0c3d76] transition"
          >
            More Projects
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
