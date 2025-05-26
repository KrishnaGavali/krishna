import React, { useState } from "react";
import "../../font.css";
import { AnimatePresence, motion } from "framer-motion";

// Animations ✨
const cardVariant = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,

    transition: {
      delay: i * 0.07,
      duration: 0.25,
      ease: "easeOut",
    },
  }),
};

const sectionTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeIn" } },
};

// Just a reusable animated card for any skill list
const SkillCard = ({ title, skills, points }) => (
  <motion.div
    variants={sectionTransition}
    initial="initial"
    exit="exit"
    animate={"animate"}
    className="p-2 text-left bg-[#64ffda] text-[#0a192f] rounded-lg shadow-[7px_7px_0px_0px_white] border border-[#0a192f] text-sm"
  >
    <h2 className="text-sm mb-3 font-semibold">{title}</h2>
    <div className="list-disc  space-y-1 flex decouration-none flex-wrap gap-1 border-b-2 border-[#0a192f] pb-3">
      {skills.map((skill, i) => (
        <motion.p
          key={skill}
          custom={i}
          variants={cardVariant}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="text-[#64ffda] transition-colors duration-300 cursor-pointer p-0.5 px-1 bg-[#0a192f] rounded-full border-2 border-transparent border-l-4 border-l-white "
        >
          {skill}
        </motion.p>
      ))}
    </div>
    <div className="mt-3 flex flex-col gap-2">
      {points.map((points) => (
        <motion.p key={points} className="text-sm">
          <span className="text-[#0a192f]">{"> "}</span>
          {points}
        </motion.p>
      ))}
    </div>
  </motion.div>
);

const SkillsLG = () => {
  const [currentTab, setCurrentTab] = useState("frontend");

  // All your skill sets in one clean object
  const skillsData = {
    frontend: {
      title: "Frontend Skills",
      skills: [
        "React.js",
        "BootStrap",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Socket.IO (Client)",
        "RadixUI",
        "ShadCN UI",
      ],
      points: [
        "Built responsive SPAs & games",
        "Real-time UI with WebSockets",
        "Designed multiplayer room system",
        "Used hooks and context API",
        "Created clean component structure",
        "Cross-browser, mobile-first design",
        "Fast, intuitive user interfaces",
      ],
    },

    backend: {
      title: "Backend Skills",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Redis (Upstash)",
        "Socket.IO (Server)",
        "FastAPI",
        "PyMongo",
        "JWT Authentication",
        "Python",
        "OpenCV",
        "CNN (Image Classification)",
      ],
      points: [
        "Built REST & socket servers",
        "Session storage with Redis",
        "JWT for secure login",
        "FastAPI for ML tools",
        "Used CNN for classification",
        "Handled room matchmaking logic",
        "Connected and Handled MongoDB  with backend",
        "Tested APIs using Postman",
      ],
    },

    devops: {
      title: "DevOps & Deployment",
      skills: [
        "GCP VM",
        "AWS EC2",
        "Web Hosting",
        "Domain Configuration",
        "Nginx & Reverse Proxy",
        "SSL Setup (Certbot)",
        "PM2",
        "Vim (Config Editing)",
        "Git & GitHub",
        "Linux CLI",
      ],
      points: [
        "Hosted apps on GCP/AWS",
        "Custom domains with SSL",
        "Used Nginx reverse proxy",
        "Managed apps using PM2",
        "Edited configs with Vim",
        "Linux CLI for deployment",
        "Git for version control",
        "Updated live builds easily",
      ],
    },
  };

  return (
    <div className="text-center fira-code bg-[#0a192f] text-[#64ffda] text-2xl font-extrabold p-5 pt-7 w-full">
      <motion.p
        className="font-bold mb-10"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: 0.1 },
        }}
      >
        Skills
      </motion.p>

      <div className="w-full md:w-h-3/4 lg:w-2/3 full mx-auto flex flex-col md:flex-row justify-center items-center">
        {/* -- Tabs -- */}
        <div className="flex flex-row md:flex-col h-full w-full md:w-1/2 justify-center items-center gap-3 mb-5 border-b-2 border-[#64ffda] pb-5 md:border-b-0 md:border-r-2 md:border-l-2 md:px-5">
          {Object.keys(skillsData).map((tabKey, index) => {
            const isActive = currentTab === tabKey;

            return (
              <motion.button
                key={tabKey}
                onClick={() => setCurrentTab(tabKey)}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.3 }}
                className={`text-sm px-4 py-2 w-full rounded-md transition-all duration-300 ease-in-out border-2 ${
                  isActive
                    ? "bg-[#64ffda] text-[#0a192f] border-[#0a192f] shadow-[7px_7px_0px_0px_white]"
                    : "bg-transparent text-[#64ffda] border-transparent hover:bg-[#0a192f] hover:text-[#64ffda] hover:border-[#64ffda]"
                }`}
              >
                {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
              </motion.button>
            );
          })}
        </div>

        {/* -- Skill Card -- */}
        <div className="h-full w-full relative md:ml-2">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              <SkillCard
                key={currentTab}
                title={skillsData[currentTab].title}
                skills={skillsData[currentTab].skills}
                points={skillsData[currentTab].points}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SkillsLG;
