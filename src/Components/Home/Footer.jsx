import React from "react";
import { Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import "../../font.css";

const Footer = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-[#64ffda] mb-10 text-center px-6 fira-code text-base leading-relaxed max-w-md mx-auto select-none"
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.2,
        },
      }}
      viewport={{ once: true }}
    >
      <div className="flex gap-8 mb-6">
        <motion.a
          href="https://github.com/krishnagavali"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.8)]"
          aria-label="Github"
        >
          <Github className="w-7 h-7" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/krishnagavali"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition duration-300 hover:scale-110 hover:text-white hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.8)]"
          aria-label="LinkedIn"
          initial={{}}
        >
          <Linkedin className="w-7 h-7" />
        </motion.a>
      </div>
      <p className="text-sm sm:text-base text-[#64ffda] ">
        © {new Date().getFullYear()} — All rights reserved, probably.
        <br />
        💻 Made with React, regrets & way too many console.logs @ Krishna
      </p>
    </motion.div>
  );
};

export default Footer;
