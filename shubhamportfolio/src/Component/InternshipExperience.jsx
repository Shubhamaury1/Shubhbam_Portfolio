// import React from "react";
// import { FaUserGraduate } from "react-icons/fa";
// import { motion } from "framer-motion";
// import UGIS from "../assets/UGIS.png";
// import internshsala from "../assets/internshala.png";
// import algoscale from "../assets/algoscale_logo.jpeg";
// import web3task from "../assets/Web3task.png";

// const internshipData = [
//   {
//     company: "Web3task",
//     position: "MERN Stack Intern",
//     logo: web3task,
//     start: "June 2024",
//     end: "August 2024",
//     location: "Remote, India",
//     website: "https://web3task.com/",
//     description:
//       "Worked as a MERN Stack Intern, gaining hands-on experience in building and maintaining full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Contributed to both frontend and backend development while following clean coding practices and modern development workflows.",
//     points: [
//       "Developed full-stack web applications using the MERN stack.",
//       "Worked with CRUD operations and backend business logic.",
//       "Built responsive and dynamic UIs using React.js.",
//     ],
//   },
//   {
//     company: "Internshala",
//     position: "Data Analyst Intern",
//     logo: internshsala,
//     start: "March 2024",
//     end: "March 2024",
//     location: "Remote, India",
//     website: "https://internshala.com/",
//     description:
//       "Worked as a Data Analyst Intern, gaining hands-on experience in collecting, cleaning, analyzing, and visualizing data to extract actionable insights. Assisted in transforming raw data into meaningful reports to support data-driven decision-making.",
//     points: [
//       "Worked with SQL to query and analyze data from databases.",
//       "Worked with large datasets and optimized queries for faster analysis.",
//       "Supported data initiatives with a strong focus on clarity, accuracy, and value.",
//     ],
//   },
//   {
//     company: "Algoscale Technologies Pvt Ltd",
//     position: "Machine Learning Intern",
//     logo: algoscale,
//     start: "November 2023",
//     end: "December 2023",
//     location: "Remote, India",
//     website: "https://algoscale.com/",
//     description:
//       "Worked as a Machine Learning Intern, gaining hands-on experience in developing, training, and evaluating machine learning models. Contributed to data preprocessing, feature engineering, and model optimization while working with real-world datasets and practical ML workflows.",
//     points: [
//       "Built and trained machine learning models using Python.",
//       "Utilized NumPy, Pandas, and Scikit-learn for data analysis and model development.",
//       "Evaluated models using performance metrics such as accuracy, precision, recall, and RMSE.",
//     ],
//   },
//   {
//     company: "Internshala",
//     position: "Devops Intern",
//     logo: internshsala,
//     start: "July 2023",
//     end: "September 2023",
//     location: "Remote, India",
//     website: "https://internshala.com/",
//     description:
//       "Worked as a Cloud Computing Intern through Internshala, gaining practical experience with AWS cloud services. Learned and implemented cloud fundamentals including virtual servers, storage, deployment, and security while working on hands-on labs and real-world use cases.",
//     points: [
//       "Configured IAM users, roles, and permissions following cloud security best practices.",
//       "Gained hands-on experience with AWS core services such as EC2, S3 and IAM.",
//       "Hosted and deployed web applications using AWS infrastructure.",
//     ],
//   },
//   {
//     company: "United Global InfoServices Pvt Ltd",
//     position: "Python Programming Intern",
//     logo: UGIS,
//     start: "May 2022",
//     end: "June 2022",
//     location: "Prayagraj, India",
//     website: "https://www.united.ac.in/summertraining/",
//     description:
//       "Worked as a Python Programming Intern gaining hands-on experience in developing, testing, and optimizing Python applications. Contributed to real-world projects involving data processing, automation, and backend logic while improving problem-solving and coding efficiency.",
//     points: [
//       "Performed data cleaning, processing, and analysis using Python libraries.",
//       "Created interactive dashboards and reportsFamiliar with Python libraries, data handling, and clean coding practices.",
//       "Worked with core Python concepts such as OOP, data structures, and exception handling.",
//     ],
//   },
// ];


// const fadeUp = {
//   hidden: { opacity: 0, y: 24 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.9, ease: "easeOut" },
//   },
// };

// export default function InternshipExperience() {
//   return (
//     <motion.section 
//     className="w-full bg-sky-50 py-24 px-6"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{amount: 0.2 }}
//     variants={fadeUp}
//     >
//       {/* Heading */}
//       <motion.div className="flex justify-center items-center gap-4 mb-24" variants={fadeUp}>
//         <FaUserGraduate className="text-[#0a3d62] text-5xl" />
//         <h2 className="text-4xl sm:text-5xl font-semibold text-[#0a3d62]">
//           Internship Experience
//         </h2>
//       </motion.div>

//       {/* Timeline Wrapper */}
//       <div className="relative max-w-7xl mx-auto">
//         <div className="flex flex-col gap-28 relative">

//           {/* Dynamic Timeline Line */}
//           <div className="absolute left-[140px] top-10 bottom-10 w-[4px] bg-[#0a3d62] rounded-full" />

//           {internshipData.map((item, index) => (
//             <motion.div key={index} 
//             className="relative flex items-start gap-16"
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{amount: 0.3 }}
//             >

//               {/* Logo Column */}
//               <div className="min-w-[120px] flex justify-center">
//                 <motion.div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center z-10 cursor-pointer"
//                   whileHover={{ scale: 1.35 }}>
//                   <img
//                     src={item.logo}
//                     alt={item.company}
//                     className="w-12 h-12 object-contain"
//                   />
//                 </motion.div>
//               </div>

//               {/* Timeline Dot */}
//               <span className="absolute left-[132px] top-8 w-5 h-5 bg-[#0a3d62] rounded-full ring-4 ring-white shadow-md z-20" />

//               {/* Content Card */}
//               <motion.div className="bg-[#f4fbff] rounded-2xl shadow-md px-10 py-8 w-full hover:shadow-lg transition relative z-10">

//                 {/* Header */}
//                 <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-5">
//                   <div>
//                     <h3 className="text-2xl sm:text-3xl font-bold text-[#0a3d62]">
//                       {item.company}
//                     </h3>
//                     <p className="text-xl text-gray-600 mt-1">
//                       {item.position}
//                     </p>
//                   </div>

//                   <div className="text-sm text-gray-500 sm:text-right">
//                     <p>{item.start} – {item.end}</p>
//                     <p>{item.location}</p>
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-xl text-gray-700 leading-relaxed mb-4">
//                   {item.description}
//                 </p>

//                 {/* Points */}
//                 <ul className="text-xl list-disc ml-5 text-gray-700 space-y-2">
//                   {item.points.map((point, i) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>

//                 {/* Link */}
//                 <div className="mt-5">
//                    <a
//                     href={item.website}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="font-medium bg-[#092E53] text-white rounded-lg px-3 py-1 text-sm hover:bg-[#0c3d76] transition"
//                   >
//                     Visit Company →
//                   </a>
//                 </div>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }









import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import UGIS from "../assets/UGIS.png";
import internshsala from "../assets/internshala.png";
import algoscale from "../assets/algoscale_logo.jpeg";
import web3task from "../assets/Web3task.png";

const internshipData = [
  {
    company: "Web3task",
    position: "MERN Stack Intern",
    logo: web3task,
    start: "June 2024",
    end: "August 2024",
    location: "Remote, India",
    website: "https://web3task.com/",
    description:
      "Worked as a MERN Stack Intern, gaining hands-on experience in building and maintaining full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Contributed to both frontend and backend development while following clean coding practices and modern development workflows.",
    points: [
      "Developed full-stack web applications using the MERN stack.",
      "Worked with CRUD operations and backend business logic.",
      "Built responsive and dynamic UIs using React.js.",
    ],
  },
  {
    company: "Internshala",
    position: "Data Analyst Intern",
    logo: internshsala,
    start: "March 2024",
    end: "March 2024",
    location: "Remote, India",
    website: "https://internshala.com/",
    description:
      "Worked as a Data Analyst Intern, gaining hands-on experience in collecting, cleaning, analyzing, and visualizing data to extract actionable insights. Assisted in transforming raw data into meaningful reports to support data-driven decision-making.",
    points: [
      "Worked with SQL to query and analyze data from databases.",
      "Worked with large datasets and optimized queries for faster analysis.",
      "Supported data initiatives with a strong focus on clarity, accuracy, and value.",
    ],
  },
  {
    company: "Algoscale Technologies Pvt Ltd",
    position: "Machine Learning Intern",
    logo: algoscale,
    start: "November 2023",
    end: "December 2023",
    location: "Remote, India",
    website: "https://algoscale.com/",
    description:
      "Worked as a Machine Learning Intern, gaining hands-on experience in developing, training, and evaluating machine learning models. Contributed to data preprocessing, feature engineering, and model optimization while working with real-world datasets and practical ML workflows.",
    points: [
      "Built and trained machine learning models using Python.",
      "Utilized NumPy, Pandas, and Scikit-learn for data analysis and model development.",
      "Evaluated models using performance metrics such as accuracy, precision, recall, and RMSE.",
    ],
  },
  {
    company: "Internshala",
    position: "Devops Intern",
    logo: internshsala,
    start: "July 2023",
    end: "September 2023",
    location: "Remote, India",
    website: "https://internshala.com/",
    description:
      "Worked as a Cloud Computing Intern through Internshala, gaining practical experience with AWS cloud services. Learned and implemented cloud fundamentals including virtual servers, storage, deployment, and security while working on hands-on labs and real-world use cases.",
    points: [
      "Configured IAM users, roles, and permissions following cloud security best practices.",
      "Gained hands-on experience with AWS core services such as EC2, S3 and IAM.",
      "Hosted and deployed web applications using AWS infrastructure.",
    ],
  },
  {
    company: "United Global InfoServices Pvt Ltd",
    position: "Python Programming Intern",
    logo: UGIS,
    start: "May 2022",
    end: "June 2022",
    location: "Prayagraj, India",
    website: "https://www.united.ac.in/summertraining/",
    description:
      "Worked as a Python Programming Intern gaining hands-on experience in developing, testing, and optimizing Python applications. Contributed to real-world projects involving data processing, automation, and backend logic while improving problem-solving and coding efficiency.",
    points: [
      "Performed data cleaning, processing, and analysis using Python libraries.",
      "Created interactive dashboards and reportsFamiliar with Python libraries, data handling, and clean coding practices.",
      "Worked with core Python concepts such as OOP, data structures, and exception handling.",
    ],
  },
];


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function InternshipExperience() {
  return (
    <section 
     className="w-full bg-sky-50 py-20 px-4 sm:px-8 lg:px-20">
      {/* Heading */}
      <motion.div className="flex justify-center items-center gap-2 mb-20" 
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.25, once: true }}
        variants={fadeUp}>

        <FaUserGraduate className="text-[#0a3d62] text-4xl sm:text-5xl" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0a3d62]">
          Internship Experience
        </h2>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="relative max-w-7xl mx-auto">
        

          {/* Dynamic Timeline Line */}
          <div className="absolute left-[140px] top-10 bottom-10 w-[4px] bg-[#0a3d62] rounded-full hidden md:block" />
         
          <div className="flex flex-col gap-16">
            {internshipData.map((item, index) => (
              <motion.div 
                key={index} 
                className="relative flex flex-col md:flex-row gap-8 md:gap-14"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >

              {/* Logo Column */}
              <div className="md:min-w-[120px] flex justify-center">
                <motion.div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full shadow-xl flex items-center justify-center z-10 cursor-pointer"
                  whileHover={{ scale: 1.3 }}>
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </motion.div>
              </div>
              

              {/* Timeline Dot */}
              <span className="absolute left-[132px] top-8 w-5 h-5 bg-[#0a3d62] rounded-full ring-4 ring-white shadow-md z-20 hidden md:block" />

                    
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







