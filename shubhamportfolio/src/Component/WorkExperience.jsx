
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import CUPL from "../assets/CUPL.jpeg";

const workData = [
  {
    company: "Chandrakala Universal Pvt Ltd",
    position: "Software Developer",
    logo: CUPL,
    start: "August 2025",
    end: "Present",
    location: "Prayagraj, India",
    website: "http://chandrakala.co.in/",
    description:
      "Worked as a Software Developer delivering scalable full-stack applications using React, C# .NET, MySQL, and MERN technologies. Actively involved in frontend development, backend API creation, database design, and cloud deployment, with a strong focus on performance, security, and maintainability.",
    points: [
      "Implemented full MERN-stack applications (MongoDB, Express, React, Node.js) for scalable solutions.",
      "Integrated frontend and backend systems through secure RESTful APIs.",
      "Strong focus on performance optimization, security, and clean code.",
    ],
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};


export default function WorkExperience() {
  return (
      <section
      className="w-full bg-sky-50 py-20 px-4 sm:px-8 lg:px-20">
    
      {/* Heading */}
      <motion.div className="flex justify-center items-center gap-2 mb-20" 
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.25, once: true }}   // ✅ repeat when re-entering view
      variants={fadeUp}>
        <FaBriefcase className="text-[#0a3d62] text-4xl sm:text-5xl" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a3d62]">
          Work Experience
        </h2>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-7xl mx-auto">

          {/* Dynamic Timeline Line */}
          <div className="absolute left-[140px] top-10 bottom-10 w-[4px] bg-[#0a3d62] rounded-full hidden md:block" />

           <div className="flex flex-col gap-16">
            {workData.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative flex flex-col md:flex-row gap-8 md:gap-14"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}  // ✅ repeat on scroll
            >

              {/* Logo Column */}
              <div className="min-w-[120px] flex justify-center">
                <motion.div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-xl flex items-center justify-center z-10 mt-24 cursor-pointer"
                  whileHover={{ scale: 1.6}}>
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <span className="hidden md:block absolute left-[132px] top-8 w-5 h-5 bg-[#0a3d62] rounded-full ring-4 ring-white shadow-md z-20" />

              {/* Content Card */}
              <div className="bg-[#f4fbff] rounded-2xl shadow-md px-6 sm:px-8 py-6 w-full hover:shadow-lg transition">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a3d62]">
                      {item.company}
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700">
                      {item.position}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 sm:text-right">
                    <p>{item.start} – {item.end}</p>
                    <p>{item.location}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-700 mb-4 text-left">
                  {item.description}
                </p>

                {/* Points */}
                <ul className="text-base sm:text-lg text-gray-700 sapce-y-2 list-disc ml-5 text-left">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                {/* Link */}
                <div className="mt-5">
                   <a
                    href={item.website}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium bg-[#092E53] text-white rounded-lg px-3 py-1 text-sm hover:bg-[#0c3d76] transition"
                  >
                    Visit Company →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



