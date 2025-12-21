import React from "react";
import { motion } from "framer-motion";
import experienceimg from "../assets/experience.svg";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import WorkExperience from "../Component/WorkExperience";
import InternshipExperience from "../Component/InternshipExperience";

function Experience() {
  return (
    <section className="w-full bg-sky-50 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* -------------------- Image Section -------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img
            src={experienceimg}
            alt="Experience Illustration"
            className="w-[90%] sm:w-[70%] md:w-[85%] lg:w-[80%] "
          />
        </motion.div>

        {/* -------------------- Text Section -------------------- */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 text-center space-y-6 mb-24"
        >
          {/* MAIN HEADING */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#092E53]">
            Experience
          </h2>

          {/* SUBHEADING → CENTERED UNDER H2 */}
          <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-[#0a1b4f]">
            Work and Internship
          </h3>

          {/* PARAGRAPH BELOW H3 */}
          <p className="text-xl sm:text-lg md:text-2xl lg:text-2xl text-gray-600 text-left mx-12 md:mx-2">
            I have worked with startups and established companies as a Software
            Developer and Data Analyst. I build clean, scalable applications,
            automate tasks with Python, and turn data into useful insights.
          </p>


          {/* ---------------- Social Icons Section ---------------- */}
          <div className="flex justify-center gap-8 mt-4 text-4xl text-[#092E53]">
            <a
              href="https://github.com/Shubhamaury1"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-gray-700 hover:text-gray-800 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-maurya-4a275a232/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-sky-600 hover:text-sky-700 transition" />
            </a>

            <a
              href="https://www.hackerrank.com/profile/shubhamaurya74"
              target="_blank"
              rel="noreferrer"
            >
              <FaHackerrank className="text-green-600 hover:text-green-700 transition" />
            </a>
          </div>
        </motion.div>
      </div>
      <WorkExperience />
      <InternshipExperience />
    </section>
  );
}

export default Experience;
