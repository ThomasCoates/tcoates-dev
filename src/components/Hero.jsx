import { motion } from "framer-motion";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Typewriter from "typewriter-effect";

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

const subtitles = [
"Hey there!",
"I'm Thomas.",
"Mines graduate, M.S. Computer Science 2025.",
"Full-stack developer in the making.",
"Marine Corps Veteran — MV-22 Osprey avionics tech.",
"Into fishing, photography, and problem-solving.",
"Always learning, always building.",
"Glad you're here.",
"Thanks for checking out my portfolio!"
];

function TypewriterLoop() {
  return (
    <Typewriter
      options={{
        loop: true,
        autoStart: true,
        delay: 50,
      }}
      onInit={(typewriter) => {
        subtitles.forEach((text) => {
          typewriter.typeString(text).pauseFor(2000).deleteAll().start();
        });
      }}
    />
  );
}

export default TypewriterLoop;

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            {/*<span>👋 Hello, I'm </span>*/}
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Thomas Coates
          </motion.h1>
          <motion.h2 className="hero-subtitle">
            <TypewriterLoop />
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}></motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.05 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.05 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/ThomasCoates" target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/t-coates/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/tcoates_/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
            <motion.a href="mailto:tcoates.dev@gmail.com" target="_blank">
              <i className="fas fa-envelope"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30,41,59,0.99)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
            >
              {`const identity: DeveloperProfile = {
  codename: "ThomasCoates",
  location: "Marathon, Florida Keys",
  role: "Computer Science Graduate | Software Developer",
  stack: {
    frontend: ["TypeScript", "HTML/CSS", "Angular", "React", "RxJS"],
    backend: ["Python", "C/C++", "Java", "Swift", "OCaml", "Node.js"],
    tools: ["Git", "Linux", "Docker", "VirtualBox", "Jira"],
    databases: ["PostgreSQL"],
    scripting: ["Bash"]  
  },
  strengths: [
    "problem solving",
    "attention to detail",
    "strong team collaboration",
    "clear communication of complex topics"
  ],
  mission: "Build reliable, scalable, and user-focused software.",
  education: "M.S. Computer Science, Colorado School of Mines",
  availability: "Open to opportunities",
  hobbies: ["photography", "rock climbing", "lifting", "PC gaming"]
};`}
            </SyntaxHighlighter>
          </div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently building this portfolio website to showcase my projects.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
