import React, { useRef, useState } from "react";
import "../../font.css";
import { AnimatePresence, motion } from "motion/react";

const ProjectCard = ({ index, title, desc, points, github, livelink }) => {
  return (
    <motion.div
      className="border-2 border-[#64ffda] rounded-lg hover:rounded-sm"
      initial={{
        scale: 0.5,
      }}
      whileHover={{
        boxShadow: "7px 7px 0px 0px white",
        scale: 1.1,
        transition: {
          delay: 0,
          duration: 0.3,
        },
      }}
      animate={{
        scale: 1,
        transition: {
          delay: 0.2 * index,
          duration: 0.3,
        },
      }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col bg-[#64ffda] h-56 w-56 p-2 items-center justify-between hover:bg-[#25fac8]">
        <p className="text-center text-lg font-semibold">{title}</p>
        <p className="h-[60%]">{desc}</p>
      </div>
      <div className="w-full flex justify-between items-center border-t-2 border-[#0a192f] ">
        <motion.a
          href={livelink}
          className="w-1/2 p-3 bg-[#64ffda] text-[#0a192f]"
          whileHover={{
            backgroundColor: "#0a192f",
            color: "#64ffda",
            borderTopColor: "#64ffda",
            borderRight: "2px solid #64ffda",
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
    </motion.div>
  );
};

const ProjectsLg = () => {
  const projectData = [
    {
      title: "TypeStrike",
      description: "4 player multiplayer typing game",
      points: "really good",
      github: "ghishgsdig",
      livelink: "hgidshgois",
    },
    {
      title: "Chitrush",
      description: "8 player multiplayer card game",
      points: "really good",
      github: "https://www.github.com",
      livelink: "hgidshgois",
    },
    {
      title: "Campus Connect",
      description: "Building...",
      points: "really good",
      github: "ghishgsdig",
      livelink: "hgidshgois",
    },
  ];

  return (
    <div className="fira-code w-full my-5 mb-20">
      <div className="text-center my-10  text-[#64ffda] text-2xl font-extrabold">
        <h1 className="">Projects</h1>
      </div>
      <div className="w-2/3 flex flex-row flex-wrap mx-auto items-center justify-center gap-7">
        {projectData.map((data, index) => {
          return (
            <ProjectCard
              key={data.title}
              index={index}
              title={data.title}
              desc={data.description}
              points={data.points}
              github={data.github}
              livelink={data.livelink}
            />
          );
        })}
      </div>
    </div>
  );
};

const ProjectSSm = () => {
  const projectData = [
    {
      title: "TypeStrike",
      description: "4 player multiplayer typing game",
      points: "really good",
      github: "ghishgsdig",
      livelink: "hgidshgois",
    },
    {
      title: "Chitrush",
      description: "8 player multiplayer card game",
      points: "really good",
      github: "https://www.github.com",
      livelink: "hgidshgois",
    },
    {
      title: "Campus Connect",
      description: "Building...",
      points: "really good",
      github: "ghishgsdig",
      livelink: "hgidshgois",
    },
  ];

  const [cardIndex, setCardIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    console.log("Swipe Start");
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

    console.log("Swipe End");
  };

  return (
    <div className="fira-code w-full my-5 mb-20">
      <div className="text-center my-10  text-[#64ffda] text-2xl font-extrabold">
        <h1 className="">Projects</h1>
      </div>
      <div className="w-2/3 flex flex-row flex-wrap mx-auto items-center justify-center gap-7">
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
              points={projectData[cardIndex].points}
              github={projectData[cardIndex].github}
              livelink={projectData[cardIndex].livelink}
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
                } transition-all duration-300`}
              ></div>
            ))}
          </div>

          <div className=" text-[#64ffda] text-center">
            {"<--- Swipe ^_^ --->"}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { ProjectsLg, ProjectSSm };
