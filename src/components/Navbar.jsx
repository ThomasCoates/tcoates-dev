import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import ReorderIcon from "@mui/icons-material/Reorder";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    /* Horizontal navigation bar */
    <motion.nav
      className="navbar"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Logo section */}
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Thomas Coates
      </motion.div>

      {/* Horizontal menu items */}
      <motion.ul
        className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Home */}
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home"> Home</a>
        </motion.li>

        {/* Projects */}
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#projects"> Projects</a>
        </motion.li>

        {/* Contact */}
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#contact"> Contact</a>
        </motion.li>

        {/* Resume */}
        <motion.li
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="./documents/ThomasCoates_SoftwareEngineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </motion.li>
      </motion.ul>

      {/* Hamburger reorder icon */}
      <motion.div
        className="reorder-icon"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={()=> setIsMenuOpen(!isMenuOpen)}
      >
        <ReorderIcon />
      </motion.div>

      {/* Vertical drop down menu */}
      <motion.div className={`dropdown_menu ${isMenuOpen ? "open" : ""}`}>
        <motion.ul
          className="nav-links-dropdown"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Home */}
          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" onClick={() => setIsMenuOpen(false)}> Home</a>
          </motion.li>

          {/* Projects */}
          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects" onClick={() => setIsMenuOpen(false)}> Projects</a>
          </motion.li>

          {/* Contact */}
          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact" onClick={() => setIsMenuOpen(false)}> Contact</a>
          </motion.li>

          {/* Resume */}
          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="./documents/ThomasCoates_SoftwareEngineer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.nav>
  );
};
