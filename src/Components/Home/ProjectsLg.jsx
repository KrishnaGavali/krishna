import React, { useRef, useState } from "react";
import "../../font.css";
import { AnimatePresence, motion } from "motion/react";
import { div } from "motion/react-client";

const ProjectCard = ({
  index,
  title,
  desc,
  techstack,
  github,
  livelink,
  work,
}) => {
  return (
    <motion.div
      className="border-2 border-[#64ffda] rounded-lg"
      initial={{
        boxShadow: "0px 0px 5px 0px #64ffda",
        border: "2px solid transparent",
        opacity: 0,
      }}
      whileHover={{
        boxShadow: "0px 0px 10px 0px #64ffda",
        border: "2px solid #0a192f",
        transition: {
          delay: 0,
          duration: 0.3,
        },
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.2 * index,
          duration: 0.3,
        },
      }}
    >
      <div className="flex flex-col bg-[#64ffda] h-96 w-72 p-2 items-center rounded-lg justify-between hover:bg-[#25fac8]">
        <p className="text-center text-lg font-semibold">{title}</p>
        <p className=" my-5">{desc}</p>
        <div className=" flex flex-row flex-wrap items-start w-full gap-2">
          {techstack.map((tech) => (
            <div className="my-2" key={tech}>
              <p className=" bg-[#0a192f] text-[#64ffda] p-2 inline text-sm rounded-full shadow-[0px_0px_5px_0px_#0a192f]">
                {tech}
              </p>
            </div>
          ))}
        </div>
      </div>
      {work == "deployed" && (
        <div className="w-full flex justify-between items-center border-t-2 border-[#0a192f] m-1">
          <motion.a
            href={livelink}
            className="w-1/2 p-3 md:bg-[#0a192f] bg-[#64ffda] md:text-[#64ffda] text-[#0a192f] rounded-l-lg border-r-2 border-[#64ffda]"
            whileHover={{
              backgroundColor: "#64ffda",
              color: "#0a192f",
              borderTopColor: "#64ffda",
              borderRight: "2px solid #64ffda",
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <p className="">Live Demo</p>
          </motion.a>
          <motion.a
            href={github}
            className="w-1/2 p-3 text-[#64ffda] text-center"
            whileHover={{
              color: "white",
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <p className="">Github</p>
          </motion.a>
        </div>
      )}
    </motion.div>
  );
};

const ProjectsLg = () => {
  const projectData = [
    {
      title: "TypeStrike",
      description:
        "A real-time 4-player multiplayer typing game with both solo typing test and 4 player battle modes. Built for speed demons and word warriors.",
      techstack: ["MERN", "Socket.io", "Vercel", "GCP VM", "Nginx", "Certbot"],
      github: "https://github.com/KrishnaGavali/TypeStrike",
      livelink: "https://www.typestrike.tech",
      work: "deployed",
    },
    {
      title: "Chitrush",
      description:
        "A modern web remake of the classic Maharashtrian game 'Charr Chithay'. 8 players, private lobbies, fast-paced fun!",
      techstack: [
        "React",
        "Socket.io",
        "Redis(Session)",
        "Vercel",
        "GCP VM",
        "Nginx",
        "Certbot",
      ],
      github: "https://github.com/KrishnaGavali/ChitRush",
      livelink: "https://www.chitrush.me",
      work: "deployed",
    },
  ];

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div className="fira-code w-full my-5 mb-20">
        <div className="text-center my-10  text-[#64ffda] text-2xl font-extrabold">
          <h1 className="">Projects💼📂🚀</h1>
        </div>
        <div className="w-2/3 flex flex-row flex-wrap mx-auto items-center justify-center gap-7">
          {projectData.map((data, index) => {
            return (
              <ProjectCard
                key={data.title}
                index={index}
                title={data.title}
                desc={data.description}
                techstack={data.techstack}
                github={data.github}
                livelink={data.livelink}
                work={data.work}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectsSm = () => {
  const projectData = [
    {
      title: "TypeStrike",
      description:
        "A real-time 4-player multiplayer typing game with both solo typing test and 4 player battle modes. Built for speed demons and word warriors.",
      techstack: ["MERN", "Socket.io", "Vercel", "GCP VM", "Nginx", "Certbot"],
      github: "https://github.com/KrishnaGavali/TypeStrike",
      livelink: "https://www.typestrike.tech",
      work: "deployed",
    },
    {
      title: "Chitrush",
      description:
        "A modern web remake of the classic Maharashtrian game 'Charr Chithay'. 8 players, private lobbies, fast-paced fun!",
      techstack: [
        "React",
        "Socket.io",
        "Redis(Session)",
        "Vercel",
        "GCP VM",
        "Nginx",
        "Certbot",
      ],
      github: "https://github.com/KrishnaGavali/ChitRush",
      livelink: "https://www.chitrush.me",
      work: "deployed",
    },
  ];

  const [cardIndex, setCardIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const delta = touchEndX - touchStartX.current;

    if (delta > 50 && cardIndex > 0) {
      // Swipe right
      setDirection(-1);
      setCardIndex((prev) => prev - 1);
    } else if (delta < -50 && cardIndex < projectData.length - 1) {
      // Swipe left
      setDirection(1);
      setCardIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full h-[90vh] flex justify-center items-center">
      <div className="fira-code w-full my-5 mb-20">
        <div className="text-center my-10  text-[#64ffda] text-2xl font-extrabold">
          <h1 className="">Projects</h1>
        </div>
        <div className="w-full flex flex-row flex-wrap mx-auto items-center justify-center gap-7">
          <motion.div
            className=""
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <ProjectCard
                key={projectData[cardIndex].title}
                title={projectData[cardIndex].title}
                desc={projectData[cardIndex].description}
                techstack={projectData[cardIndex].techstack}
                github={projectData[cardIndex].github}
                livelink={projectData[cardIndex].livelink}
                work={projectData[cardIndex].work}
              />
            </AnimatePresence>

            <div className=" flex flex-row items-center justify-center my-7 gap-2">
              {projectData.map((data, index) => (
                <div
                  key={data.title}
                  className={` w-3 h-3  rounded-full ${
                    cardIndex == index
                      ? `bg-[#64ffda] scale-105`
                      : `bg-gray-500 scale-75`
                  } transition-all duration-300 hover:bg-white hover:scale-125 cursor-pointer`}
                  onClick={() => setCardIndex(index)}
                ></div>
              ))}
            </div>

            <div className=" text-[#64ffda] text-center">
              {"<--- Swipe ^_^ --->"}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { ProjectsLg, ProjectsSm };
