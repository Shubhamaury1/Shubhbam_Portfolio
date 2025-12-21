import React from "react";
import { motion } from "framer-motion";
import educationImg from "../assets/education.svg";
import { LiaAws } from "react-icons/lia";
import { SiKaggle,SiGeeksforgeeks  } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function BasicQualification() {
  return (
    <section className="w-full bg-sky-50 py-20 ">

      {/* ========= MOBILE FIRST LAYOUT ========= */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">

        {/* ================= IMAGE SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 ,ease:"easeOut",delay:0.3}}
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img
            src={educationImg}
            className="w-[70%] sm:w-[70%] md:w-[85%] lg:w-[80%]"
            alt="Education Illustration"
          />
        </motion.div>

        {/* ================= TEXT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2  md:text-left space-y-6"
        >
          <h1 className="text-3xl sm:text-5xl text-center lg:text-6xl font-semibold text-[#092E53]">
            Education
          </h1>

          <p className="text-xl sm:text-3xl text-center font-medium text-[#0C2C57 ]">
            Basic Qualification and Certifications
          </p>

          {/* Logos Row */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-2 text-5xl">

            {/* AWS ICON */}
            <Link to="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer">
            <LiaAws className="text-orange-500 hover:scale-110 transition" />
            </Link>

            {/* GFG ICON */}
            <Link to="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
            <SiGeeksforgeeks className="text-green-700 hover:scale-110 transition" />
            </Link>

            {/* HACKER RANK */}
            <Link to="https://www.hackerrank.com/profile/shubhamaurya74" target="_blank" rel="noopener noreferrer">
            <FaHackerrank className="text-green-600 hover:scale-110 transition" />
            </Link>

            {/* KAGGLE */}
            <Link to="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer">
            <SiKaggle className=" text-6xl text-blue-600 hover:scale-110 transition"/>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


