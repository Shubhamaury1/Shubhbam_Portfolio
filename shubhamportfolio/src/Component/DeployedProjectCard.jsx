import React from "react";
import { motion } from "framer-motion";
import htmlIcon from "../assets/project_page_icons/html.png";
import cssIcon from "../assets/project_page_icons/css.png";
import jsIcon from "../assets/project_page_icons/js.png";
import reactIcon from "../assets/project_page_icons/react.png";
import mongodbIcon from "../assets/project_page_icons/mongodb.png";
import nodejsIcon from "../assets/project_page_icons/nodejs.png";
import expressIcon from "../assets/project_page_icons/expressjs.png";

const deployedProjects = [
  {
    title: "House Modelling Website",
    description:
      "Interactive trip travel website developed to showcase destinations, itineraries, and smooth user journey experiences.",
    date: "01-08-2024",
    tech: [
      { type: "image", src: htmlIcon, name: "HTML" },
      { type: "image", src: cssIcon, name: "CSS" },
      { type: "image", src: jsIcon, name: "JavaScript" },
    ],
    link: "https://house-modelling-website.vercel.app/",
  },
  {
    title: "Trip Travel Website",
    description:
      "Trip travel website created to explore destinations, travel planning, and engaging user experiences.",
    date: "23-07-2024",
    tech: [
      { type: "image", src: htmlIcon, name: "HTML" },
      { type: "image", src: cssIcon, name: "CSS" },
      { type: "image", src: jsIcon, name: "JavaScript" },
    ],
    link: "https://trip-website-red.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Interactive weather application providing real-time forecasts, location-based updates, and clear visual data.",
    date: "02-02-2025",
    tech: [
      { type: "image", src: reactIcon, name: "React Js" },
      { type: "image", src: expressIcon, name: "Express Js" },
      { type: "image", src: nodejsIcon, name: "Node Js" },
      { type: "image", src: mongodbIcon, name: "MongoDB" },
    ],
    link: "https://weather-app-iota-sand-63.vercel.app/",
  },
];

/* 🔥 Back → Front smooth animation */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    y: 40,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function DeployedProjectCard() {
  return (
    <>
      <h2 className="text-4xl text-[#0C2C57] text-center font-semibold ">
        Live Deployed Projects{" "}
      </h2>
      <motion.section
        className="bg-sky-50 py-20 px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // ✅ runs only first time
      >
        <div className="max-w-8xl mx-auto">
          {/* Grid */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
          >
            {deployedProjects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="bg-sky-200 hover:bg-sky-300 rounded-xl p-6 shadow-md hover:shadow-lg cursor-pointer"
                variants={card}
                /* ✅ Smooth hover IN */
                whileHover={{ scale: 1.03 }}
                /* ✅ IMMEDIATE hover OUT */
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

                  {/* <div className="flex gap-2 text-xl">
                  {project.tech.map((icon, i) => (
                    <span key={i}>{icon}</span>
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
        </div>
      </motion.section>
    </>
  );
}
