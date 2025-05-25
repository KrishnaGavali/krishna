import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import "../../font.css";

const HomeScreen = () => {
  return (
    <>
      <div className="relative flex flex-col md:flex-row items-start mb-14">
        {/* Left Side Content */}
        <div className=" mt-8 pt-20 md:mt-10 lg:pt-32 fira-code p-3 pl-5 md:pt-24 md:w-1/2 md:pl-10 lg:w-[55%] lg:pl-16 text-center md:text-left min-w-1/2">
          <motion.div
            className=" md:hidden block"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div className="w-32 mx-auto mb-5" id="profile-image">
              <img
                src="src/assets/mobileProfile.jpg"
                alt=""
                srcset=""
                className=" rounded-full shadow-[0px_0px_25px_0px_#64ffda]"
              />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-[#64ffda] font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="w-fit mx-auto md:mx-0">
              Hi, my name is{" "}
              <motion.p
                className="text-[#ccd6f6] text-3xl md:text-4xl lg:text-5xl xl:text-6xl w-fit"
                whileHover={{ color: "#64ffda" }}
              >
                Krishna Gavali
              </motion.p>
            </p>
          </motion.h1>
          <motion.p
            className="text-slate-500 text-lg mt-2 font-bold md:text-xl lg:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            I build things for the web.
          </motion.p>
          <motion.p
            className="text-slate-500 text-sm mt-2 md:text-lg lg:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm a{" "}
            <motion.span
              className="text-white underline decoration-[#64ffda] rounded-full px-2"
              whileHover={{ backgroundColor: "#64ffda", color: "#0a192f" }}
            >
              {" "}
              Full Stack Developer
            </motion.span>{" "}
            who loves building real time web apps and web products that actually
            feel good to use. From responsive interfaces to scalable backends, I
            enjoy working across the entire stack, turning ideas into
            interactive, living systems.
          </motion.p>
          <motion.div className="my-2 flex flex-row items-center justify-center md:justify-start gap-2 md:text-sm">
            <motion.p
              className="text-white hidden md:block"
              initial={{
                x: -20,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.6 },
              }}
            >
              What I build :
            </motion.p>
            <motion.p
              className="p-2 border-2 border-[#64ffda] text-[#64ffda] rounded-full text-xs"
              whileHover={{
                borderLeftWidth: "9px",
                boxShadow: "0px 0px 10px 0px #64ffda",
                backgroundColor: "#64ffda",
                color: "#0a192f",
              }}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.8 },
              }}
            >
              Full Stack Web Products
            </motion.p>

            <motion.p
              className="p-2 border-2 border-[#64ffda] text-[#64ffda] rounded-full text-xs"
              whileHover={{
                borderLeftWidth: "9px",
                boxShadow: "0px 0px 10px 0px #64ffda",
                backgroundColor: "#64ffda",
                color: "#0a192f",
              }}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.9 },
              }}
            >
              Real Time Web Apps
            </motion.p>
          </motion.div>
          <div
            className="flex flex-row gap-2 mt-2 items-center justify-center md:justify-start"
            id="social-media-icons"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="https://www.linkedin.com/in/krishnagavali">
                <motion.img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/50/64ffda/linkedin.png"
                  alt="linkedin"
                  whileHover={{
                    scale: 1.1,
                    rotate: 25,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  whileTap={{
                    scale: 1.2,
                  }}
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }} // slight delay difference for stagger effect
            >
              <a href="https://github.com/krishnagavali">
                <motion.img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/50/64ffda/github.png"
                  alt="github"
                  whileHover={{
                    scale: 1.1,
                    rotate: 25,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  whileTap={{
                    scale: 1.2,
                  }}
                />
              </a>
            </motion.div>
          </div>

          <div to="/projects">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <motion.button
                className="text-[#64ffda] border border-[rgb(100,255,218)] rounded px-4 py-2 mt-4 relative fira-code md:text-lg lg:text-xl"
                whileHover={{
                  backgroundColor: "rgba(100, 255, 218)",
                  color: "#0a192f",
                  boxShadow: "7px 7px 0px 0px white",
                  cursor: "pointer",
                  transition: {
                    duration: 0.3,
                  },
                }}
                whileTap={{
                  boxShadow: "0px 0px 0px 0px white",
                  transition: {
                    duration: 0.1,
                  },
                }}
              >
                Check out my projects
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Right Side Image - Only visible on tablet and larger screens */}
        <AnimatePresence mode="wait">
          <motion.div
            className="w-full md:w-fit hidden lg:w-[45%] pt-80 relative md:flex justify-center items-center overflow-hidden h-[690px]"
            initial={{ opacity: 0, x: 300 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            <img
              src="src/assets/MeSittingDeskWaving.png"
              alt="Profile"
              className=" md:w-full max-w-xs md:max-w-md"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default HomeScreen;
