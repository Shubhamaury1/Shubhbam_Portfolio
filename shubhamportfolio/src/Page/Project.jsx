import React from "react";
import { motion } from "framer-motion";
import projectimg from "../assets/projects_image.svg";
import ProjectCard from "../Component/ProjectCard";
import DeployedProjectCard from "../Component/DeployedProjectCard";

function Project() {
  return (
  <>
  <section className="w-full bg-sky-50 py-20">
       <div className="flex flex-col-reverse md:flex-row items-center justify-between">

        {/* -------------------- Image Section -------------------- */}
        <motion.div
          
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 ,ease:"easeOut",delay:0.3}}
          className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img
            src={projectimg}
            alt="Projects Illustration"
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
            Projects
          </h2>


          {/* PARAGRAPH BELOW H3 */}
          <p className="text-gray-600 mr-6 text-xl sm:text-2xl lg:text-3xl text-left mx-10 sm:mx-6 md:mx-2 lg:mx-16">
           My projects make use of a wide range of modern technologies and tools. 
           I have hands-on experience in building Data Analysts, Machine Learning and Full Stack Developer solutions and transforming 
           them into scalable web applications. I specialize in deploying these applications using cloud infrastructure, 
           ensuring high performance, reliability, and real-world usability.           
          </p>

          
        </motion.div>
      </div>
    </section>
    <ProjectCard />
    <DeployedProjectCard />
  </>
    
    
  );
}

export default Project;
