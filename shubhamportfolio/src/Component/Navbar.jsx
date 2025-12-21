import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Education", "Experience", "Projects", "Contact Me"];

  const itemVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const mobileVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <nav className="top-0 left-0 w-full bg-sky-50 z-50">
      <div
        className="max-w-8xl ml-0 lg:ml-14 mr-0 lg:mr-24 mx-auto flex justify-between items-center px-6 py-4"
        //className="max-w-8xl ml-14 mr-24 flex justify-between items-center px-6 py-4"
        key={location.pathname}
      >
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-agustina text-sky-900 tracking-wide drop-shadow-md mt-5 font-semibold"
        >
          &lt;Shubham Maurya /&gt;
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <NavLink
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "")}`
                }
                className={({ isActive }) =>
                  `text-xl px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? "font-bold text-sky-900"
                      : "font-medium text-sky-900 hover:bg-sky-100"
                  }`
                }
              >
                {item}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button - THREE DOTS */}
        <button
          className="md:hidden text-sky-900 text-3xl mt-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsThreeDotsVertical />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-sky-50  px-6 py-4 space-y-4"
          >
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "")}`
                }
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-sky-900 px-2 py-2 rounded-lg hover:bg-sky-200 transition"
              >
                {item}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
