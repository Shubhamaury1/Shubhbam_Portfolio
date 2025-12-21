import React from "react";
import { motion } from "framer-motion";
import ugiLogo from "../assets/UGI.jpeg";
import mhps from "../assets/MHPS.jpg";
import { link } from "framer-motion/client";

export default function Degree() {
  const degreeData = [
    {
      logo: ugiLogo,
      university: "United Institute of Technology",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2021 - 2025",
      points: [
        "I have studied core software engineering subjects like DS, DBMS, OS, ML, AI, CN etc.",
        "Completed courses in Machine Learning, Data Science, Cloud Computing with AWS.",
        "Worked on projects demonstrating strong technical execution, teamwork, and problem-solving skills.",
      ],
      button: "Visit Website",
      link: "https://www.united.ac.in/uit/",
    },
    {
      logo: mhps,
      university: "Mother Haleema Public School",
      degree: "Intermediate Education",
      duration: "2019 - 2021 ",
      points: [
        "Studied core PCM subjects including Physics, Chemistry, and Mathematics with strong conceptual understanding.",
        "Developed strong skills in logical reasoning, numerical problem-solving, and analytical interpretation.",
        "Participated in science exhibitions and STEM activities demonstrating teamwork and analytical thinking.",
      ],
      button: "Visit Website",
      link: "https://mhps.in/",
    },
    {
      logo: mhps,
      university: "Mother Haleema Public School",
      degree: "High School Education",
      duration: "2017 - 2019  ",
      points: [
        "Studied core high-school subjects including Science, Mathematics, English, and Computer Science with strong academic performance.",
        "Demonstrated consistent discipline, time-management, and commitment towards academic excellence.",
        "Shows curiosity in understanding real-world applications of science through experiments and activity-based learning.",
      ],
      button: "Visit Website",
      link: "https://mhps.in/",
    },
  ];

  return (
    <section className="w-full bg-sky-50 py-24 px-6 md:px-16 lg:px-32">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center text-[#0C2C57] mb-20"
      >
        Qualifications
      </motion.h1>

      <div className="space-y-20">
        {degreeData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start gap-10 w-full"
          >
            {/* ================= MOBILE VIEW (Card FIRST / Image SECOND) ================= */}
            <div className="md:hidden flex flex-col gap-10 w-full">
              {/* MOBILE CARD FIRST */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="bg-[#0E6BA877] px-6 py-5 flex flex-col gap-2">
                  <h1 className="text-3xl font-bold text-[#001C55] leading-tight">
                    {item.university}
                  </h1>
                  <p className="text-md font-semibold text-[#001C55] leading-tight">
                    {item.degree}
                  </p>
                  <p className="text-md font-semibold text-[#001C55]">
                    {item.duration}
                  </p>
                </div>

                <div className="px-6 py-6 space-y-4">
                  {item.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-orange-500 text-xl mt-1">⚡</span>
                      <p className="text-gray-700 text-lg leading-relaxed text-left md:text-left">
                        {p}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="px-6 pb-6 flex justify-end">
                  {/* <button className="px-3 py-1.5 bg-blue-300 hover:bg-blue-400 rounded-md text-[#0C2C57] text-sm font-medium transition">
                    {item.button}
                  </button> */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-300 hover:bg-blue-400 rounded-md 
               text-[#0C2C57] text-sm font-medium transition inline-block"
                    >
                      {item.button}
                    </a>
                  )}
                </div>
              </motion.div>

              {/* MOBILE IMAGE SECOND */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex justify-center"
              >
                <img
                  src={item.logo}
                  alt="University Logo"
                  className="w-40 h-40 rounded-full shadow-lg bg-white p-2"
                />
              </motion.div>
            </div>

            {/* ================= DESKTOP VIEW (Image FIRST / Card SECOND) ================= */}
            <div className="hidden md:flex w-full gap-10">
              {/* IMAGE LEFT */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className=""
              >
                <img
                  src={item.logo}
                  alt="University Logo"
                  className="w-50 h-50 rounded-full shadow-lg bg-white p-2 mt-14"
                />
              </motion.div>

              {/* DESKTOP CARD RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="bg-[#0E6BA877] px-6 py-5 flex justify-between gap-2">
                  <div>
                    <h1 className="text-3xl font-bold text-[#001C55] leading-tight">
                      {item.university}
                    </h1>
                    <p className="text-md font-semibold text-[#001C55] leading-tight">
                      {item.degree}
                    </p>
                  </div>
                  <p className="text-md lg:text-xl font-semibold text-[#001C55] mt-6">
                    {item.duration}
                  </p>
                </div>

                <div className="px-6 py-6 space-y-4">
                  {item.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-orange-500 text-xl mt-1">⚡</span>
                      <p className="text-gray-700 text-lg leading-relaxed text-left md:text-left">
                        {p}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="px-6 pb-6 flex justify-end">
                  {/* <button className="px-3 py-1.5 bg-blue-300 hover:bg-blue-400 rounded-md text-[#0C2C57] text-sm font-medium transition">
                    {item.button}
                  </button> */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-300 hover:bg-blue-400 rounded-md 
               text-[#0C2C57] text-sm font-medium transition inline-block"
                    >
                      {item.button}
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
