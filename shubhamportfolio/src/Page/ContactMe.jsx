import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

import shubham from "../assets/shubham/s1.png";
import { motion } from "framer-motion";
import Address from "../Component/Address";

function ContactMe() {
  return (
   <>
     <section className="w-full bg-sky-50 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        {/* ================= LEFT : PROFILE IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img
            src={shubham}
            alt="Profile"
            className="w-[80%] sm:w-[70%] md:w-[85%] lg:w-[60%] "
          />
        </motion.div>

        {/* ================= RIGHT : CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 text-center space-y-6 mb-24"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#092E53]">
            Contact Me
          </h2>

          <p className="text-gray-600 mr-6 text-lg sm:text-xl lg:text-2xl px-4 text-left sm:text-center mx-12  md:mx-2 lg:mx-2">
            I am available on almost every social media platform. You can
            message me anytime — I usually reply within 24 hours. I can help
            with software development, web applications, ML, Data Analyst and
            modern technologies.
          </p>

          {/* ================= SOCIAL ICONS ================= */}
          <div className="flex justify-center gap-8 mt-4 text-4xl text-[#092E53] ">

            <a href="https://github.com/Shubhamaury1" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={<FaGithub />} bg="bg-gray-900" />
            </a>

            <a href="https://www.linkedin.com/in/shubham-maurya-4a275a232/" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={<FaLinkedinIn />} bg="bg-[#0077b5]" />
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={<FaFacebookF />} bg="bg-[#1877f2]" />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={<FaInstagram />} bg="bg-[#e4405f]" />
            </a>

          </div>

          {/* ================= BUTTON ================= */}
          <a
            href="https://drive.google.com/file/d/16kc1BvC5rbUB2TtW6ElDQl98TgyyfN8o/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#0a1b4f] text-white px-8 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-[#09203f] transition"
          >
            See My Resume
          </a>
        </motion.div>
      </div>
    </section>
    <Address />
   </>
  );
}

/* ================= SOCIAL ICON COMPONENT ================= */
const SocialIcon = ({ icon, bg = "bg-gray-900" }) => {
  return (
    <div
      className={`${bg} w-11 h-11 rounded-full flex items-center justify-center text-white text-lg cursor-pointer hover:scale-110 transition`}
    >
      {icon}
    </div>
  );
};

export default ContactMe;
