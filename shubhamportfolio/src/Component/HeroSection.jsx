import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaGoogle,
  FaInstagram,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import heroimage from "../assets/feelingProud.svg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full bg-sky-50 pt-10 px-4 md:px-20 flex flex-col md:flex-row items-center overflow-hidden">

      {/* LEFT CONTENT WITH SLOW SLIDE-IN */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.6,
          ease: "easeOut",
          delay: 0.3    // slightly late load
        }}
        className="w-full md:w-1/2 space-y-5 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.8,
            ease: "easeOut",
            delay: 0.6
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#043D5D] mb-4"
        >
          Shubham Maurya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 1
          }}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-[#043D5D] font-semibold"
        >
          ( Full-Stack Developer )
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2.2,
            ease: "easeOut",
            delay: 1.3
          }}
          className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-gray-500 leading-relaxed font-medium text-justify sm:text-center md:text-left mb-4"
        >
          A passionate Full-Stack Software Developer dedicated to building
          end-to-end digital products that are scalable, sustainable, and
          engineered to deliver real-world impact.
        </motion.p>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 1.6
          }}
          className="flex items-center space-x-5 text-3xl"
        >
          <Link to="https://github.com/Shubhamaury1" target="_blank">
            <FaGithub className="cursor-pointer hover:scale-110 transition text-gray-900" />
          </Link>
          
          <Link to="https://www.linkedin.com/in/shubham-maurya-4a275a232/" target="_blank">
            <FaLinkedin className="cursor-pointer hover:scale-110 transition text-sky-700" />
          </Link>
          
          <Link to="https://www.youtube.com/" target="_blank">
            <FaYoutube className="cursor-pointer hover:scale-110 transition text-red-600" />
          </Link>

          <Link to="https://www.google.com/" target="_blank">
            <FaGoogle className="cursor-pointer hover:scale-110 transition text-red-500" />
          </Link>

         <Link to="https://www.instagram.com/" target="_blank" >
            <FaInstagram className="cursor-pointer hover:scale-110 transition text-pink-600" />
          </Link>
        </motion.div>

        {/* BUTTON */}
        <Link to="https://github.com/Shubhamaury1" target="_blank">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 2,
            ease: "easeOut",
            delay: 1.9
          }}
          className="bg-[#043D5D] text-white px-6 py-3 mt-3 rounded-lg shadow-md hover:bg-[#06577e] flex items-center gap-2 text-lg">
          ⭐ Star Me On Github
        </motion.button>
        </Link>
      </motion.div>

      {/* RIGHT IMAGE WITH MOTION */}
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
          delay: 0.8
        }}
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <img
          src={heroimage}
          alt="Hero Illustration"
          className="w-[90%] sm:w-[75%] md:w-[85%]"
        />
      </motion.div>

    </section>
  );
}



