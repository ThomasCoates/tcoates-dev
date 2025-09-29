import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
            <span>👋 Hello, I'm </span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Thomas Coates
          </motion.h1>
          <motion.h2 className="hero-subtitle">Fullstack Developer</motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I recently recieved a Master's degree from Colorado School of Mines.
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.05 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="contacts"
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
            <motion.a href="mailto:tcoates@mines.edu" target="_blank">
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
  origin: "🌎 Marathon, Florida Keys",
  role: "Fullstack Developer",
  stack: {
    frontend: ["TypeScript", "HTML/CSS", "Angular", "React", "RxJS"],
    backend: ["Python", "C/C++", "Java", "Swift", "OCaml", "Node.js"],
    tools: ["Git", "Linux", "Jira", "Docker", "VirtualBox"],
    databases: ["PostgreSQL"],
    scripting: ["Bash"]  
  },
  traits: [
    "problem-solver",
    "indie game developer",
    "runs on coffee → outputs code",
    "dark mode enthusiast"
  ],
  missionStatement: "Embracing complexity to build simplicity.",
  education: "🎓 M.S. Computer Science, Colorado School of Mines",
  availability: "🚀 Available for hire"
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
                Currently building a full-stack task manager app from the ground
                up.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
