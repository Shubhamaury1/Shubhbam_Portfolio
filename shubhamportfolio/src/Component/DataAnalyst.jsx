import React from "react";
import {
  SiTensorflow,
  SiKeras,
  SiPycharm,
  SiJupyter,
  SiPython,
  SiOpencv,
} from "react-icons/si";
import { motion } from "framer-motion";
import maincontentimg from "../assets/Data analysis-amico.svg";

export default function DataAnalyst() {
  return (
    <section className="w-full bg-sky-50 py-20 px-8 md:px-30">
      
      {/* SECTION TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center text-6xl sm:text-5xl md:text-6xl font-semibold text-[#043D5D] mb-16"
      >
        What I Do
      </motion.h1>

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
            Data Science & Machine Learning
          </h2>

          {/* ICONS */}
          <div className="flex justify-center md:justify-start items-center space-x-6 text-5xl">
            <SiTensorflow className="text-[#F7B52C]" />
            <SiKeras className="text-red-600" />
            <SiPycharm className="text-green-600" />
            <SiJupyter className="text-orange-500" />
            <SiPython className="text-blue-500" />
            <SiOpencv className="text-black" />
          </div>

          {/* LIST */}
          <ul className="space-y-5 text-lg md:text-xl text-gray-600 text-left">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl leading-none mt-1 flex-shrink-0">
                ⚡
              </span>
              <span className="leading-relaxed">
                Building scalable AI models using TensorFlow & PyTorch.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl leading-none mt-1 flex-shrink-0">
                ⚡
              </span>
              <span className="leading-relaxed">
                Expertise in Computer Vision, NLP & automation.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl leading-none mt-1 flex-shrink-0">
                ⚡
              </span>
              <span className="leading-relaxed">
                End-to-end ML pipelines from preprocessing to deployment.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-2xl leading-none mt-1 flex-shrink-0">
                ⚡
              </span>
              <span className="leading-relaxed">
                Advanced statistical analysis & visualization.
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
            alt="Data Science Illustration"
            className="w-[85%] md:w-[70%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
