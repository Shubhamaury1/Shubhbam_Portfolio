import React from "react";
import {
  SiPycharm,
  SiJupyter,
  SiPython,
  SiFlask,
  SiDjango,
} from "react-icons/si";
import { motion } from "framer-motion";
import maincontentimg from "../assets/Python Developer.svg";

export default function Python() {
  return (
    <section className="w-full bg-sky-50 py-20 px-8 md:px-30">
      {/* ===================== RESPONSIVE LAYOUT ===================== */}
      <div className="flex flex-col md:flex-row items-center justify-between">

        {/* ===================== TEXT (FIRST ON MOBILE) ===================== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-8 mb-12 md:mb-0 order-1 md:order-2"
        >
          <h2 className="text-3xl font-semibold text-[#043D5D] md:text-5xl">
          Python Developer
          </h2>

          {/* ICONS */}
          <div className="flex justify-center md:justify-start items-center space-x-6 text-5xl">
          <SiPycharm className="text-green-600" />
             <SiJupyter className="text-orange-500" />
             <SiPython className="text-blue-500" />
             <SiFlask className="text-gray-700" />
             <SiDjango className="text-green-800" />
          </div>

          {/* LIST */}
          <ul className="space-y-5 text-lg md:text-xl text-gray-600 text-left">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl leading-none mt-1 flex-shrink-0">
                ⚡
              </span>
              <span className="leading-relaxed">
               Proficient in building robust backend systems using Python, Django and Flask.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl leading-none mt-1 flex-shrink-0">
                ⚡
              </span>
              <span className="leading-relaxed">
               Strong command over Python tools like PyCharm, VS Code, and Jupyter Lab.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl leading-none mt-1 flex-shrink-0">
                ⚡
              </span>
              <span className="leading-relaxed">
                Experience with Django ORM, SQLAlchemy, MySQL, and MongoDB.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl leading-none mt-1 flex-shrink-0">
                ⚡
              </span>
              <span className="leading-relaxed">
               Skilled at deploying Python apps on AWS, Render, Vercel, and Docker.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* ===================== IMAGE (SECOND ON MOBILE) ===================== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-1/2 flex justify-center order-2 md:order-1"
        >
          <img
            src={maincontentimg}
            alt="Python Developer Illustration"
            className="w-[85%] md:w-[70%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
