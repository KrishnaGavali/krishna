import React, { useState } from "react";
import "../../font.css";
import { AnimatePresence, motion } from "framer-motion";

// Dummy components for now – replace with your real content
const FrontendCard = () => (
  <div className="p-5 text-left">
    <h2 className="text-3xl mb-3">Frontend Skills</h2>
    <ul className="list-disc ml-6">
      <li>React</li>
      <li>Tailwind CSS</li>
      <li>Framer Motion</li>
      <li>HTML/CSS/JS</li>
    </ul>
  </div>
);

const BackendCard = () => (
  <div className="p-5 text-left">
    <h2 className="text-3xl mb-3">Backend Skills</h2>
    <ul className="list-disc ml-6">
      <li>Node.js</li>
      <li>Express.js</li>
      <li>MongoDB</li>
      <li>Redis</li>
    </ul>
  </div>
);

const DevOpsCard = () => (
  <div className="p-5 text-left">
    <h2 className="text-3xl mb-3">DevOps Skills</h2>
    <ul className="list-disc ml-6">
      <li>Docker</li>
      <li>GCP</li>
      <li>CI/CD</li>
      <li>Linux</li>
    </ul>
  </div>
);

const SkillsLG = () => {
  const [currentSkillSection, setCurrentSkillSection] = useState("frontend");

  const renderCard = () => {
    switch (currentSkillSection) {
      case "frontend":
        return <FrontendCard />;
      case "backend":
        return <BackendCard />;
      case "devops":
        return <DevOpsCard />;
      default:
        return null;
    }
  };

  return (
    <div className="text-center fira-code bg-[#0a192f] text-[#64ffda] text-2xl font-extrabold p-10 pt-7 w-full">
      <p className="font-bold mb-10">Skills</p>

      <div className="w-3/4 h-full mx-auto flex justify-center items-center">
        <div className="flex flex-col h-full w-1/2 justify-between items-center gap-3">
          {["frontend", "backend", "devops"].map((skill, index) => (
            <motion.p
              key={skill}
              className={`bg-[#64ffda] text-[#0a192f] rounded-sm w-1/2 cursor-pointer hover:bg-[#0a192f] hover:text-[#64ffda] border-2 border-transparent hover:border-[#64ffda] ${
                currentSkillSection === skill
                  ? "shadow-[7px_7px_0px_0px_white] bg-[#0a192f]  border-[#64ffda]"
                  : ""
              } transition-all`}
              initial={{
                x: -100,
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.3 + index * 0.3,
                },
              }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              onClick={() => setCurrentSkillSection(skill)}
            >
              {skill.charAt(0).toUpperCase() + skill.slice(1)}
            </motion.p>
          ))}
        </div>

        <div className="w-0 h-96 border border-[#64ffda] mx-5"></div>

        <div className="h-full w-1/2 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSkillSection}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              {renderCard()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SkillsLG;
