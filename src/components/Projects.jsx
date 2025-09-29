import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/taskManager-highQ.jpg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Full-Stack Task Manager App</h3>
          <p>
            Currently building a responsive task manager with authentication and
            full CRUD functionality. Designing scalable APIs and a clean UI for
            productivity.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Typescript</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>Docker</span>
            <span>Git</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/NodeRED-OpenPLC.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Cyber-Physical IoT Fan Control</h3>
          <p>
            Engineered a Raspberry Pi system to control a relay-powered fan via
            motion sensor. Visualized data with Node-RED and evaluated Modbus
            TCP security risks.
          </p>
          <div className="project-tech">
            <span>Raspberry Pi</span>
            <span>Node-RED</span>
            <span>Modbus TCP</span>
            <span>Docker</span>
            <span>Linux</span>
            <span>VirtualBox</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/ICR_presentationPhoto.jpg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Geospatial Data Viewer (ICR Internship Project)</h3>
          <p>
            Built a responsive Angular application that visualized geospatial
            data using MapLibre. Developed animated map markers, improved user
            interaction with dynamic UI components, and collaborated in Agile
            sprints with code reviews.
          </p>
          <div className="project-tech">
            <span>Angular</span>
            <span>Typescript</span>
            <span>MapLibre</span>
            <span>RxJS</span>
            <span>TailwindCSS</span>
            <span>Git</span>
            <span>Jira</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
