import React from "react";
import { motion } from "motion/react";
import "../../font.css";

const AboutMeSection = () => {
  return (
    <div className="fira-code p-10 pt-7 bg-[#0a192f]">
      <div className="w-full md:w-[75%] mx-auto mb-5 md:mb-10 flex flex-col items-center ">
        <motion.p
          className="text-center text-[#64ffda] text-2xl font-extrabold mb-5"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, delay: 0.1 },
          }}
          viewport={{ once: true }}
        >
          About Me
        </motion.p>

        <div className="w-full md:w-full mt-5 block md:flex gap-3 text-xs md:text-sm lg:text-base md:justify-between md:items-center ">
          <motion.div
            className=" hidden md:block"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div className="w-32 mr-5" id="profile-image">
              <img
                src="src/assets/mobileProfile.jpg"
                alt=""
                srcset=""
                className=" rounded-full shadow-[0px_0px_25px_0px_#64ffda]"
              />
            </motion.div>
          </motion.div>

          {/* Summary Section */}
          <motion.div
            className="text-[#ccd6f6] w-full md:w-1/2 h-full border-b-2 border-[#64ffda] md:border-b-0 md:border-r-2 md:border-l-2 flex flex-col pb-5 md:pb-0 md:px-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            <p className="text-[#64ffda] text-xl font-bold mb-2 ">Summary :</p>
            <p>
              I’m a 2nd-year engineering student who’s all about building
              full-stack and real-time web apps. Still learning, but I love
              working on both frontend and backend to make apps that actually
              work and feel smooth to use.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="w-full md:w-1/2 h-full text-[#ccd6f6] mt-5 md:mt-0 md:ml-5  p-2 border-2 border-[#64ffda] rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            viewport={{ once: true }}
          >
            <p className="text-[#64ffda] text-xl font-bold mb-2">Education :</p>
            <div className="block md:flex justify-between  ">
              <p>
                2<sup>nd</sup> Year BTech. Data Science
              </p>
              <p className="text-[#64ffda]">2023 - 2027</p>
            </div>
            <p className="text-[#8892b0]">
              G. H. Raisoni College of Engineering and Management, Pune
            </p>
            <p className="text-[#8892b0] italic">
              Grade:AVG{" "}
              <span className="text-[#64ffda]">(this portfolio? 10/10 💥)</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
