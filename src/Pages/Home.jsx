import React, { useEffect } from "react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import "../font.css";
import { Link } from "react-router";
import HomeScreen from "../Components/Home/HomeScreen";
import Navbar from "../Components/Home/Navbar";
import AboutMeSection from "../Components/Home/AboutMeSection";
import Skills from "../Components/Home/Skills";
import { ProjectsLg, ProjectsSm } from "../Components/Home/ProjectsLg";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <AnimatePresence mode="wait">
        <Navbar />
        <Element name="Home">
          <HomeScreen />
        </Element>
        <Element name="About">
          <AboutMeSection />
        </Element>
        <Element name="Skills">
          <Skills />
        </Element>
        <Element name="Projects">
          <div className="w-full h-full hidden md:block">
            <ProjectsLg />
          </div>
          <div className="w-full h-full block md:hidden">
            <ProjectsSm />
          </div>
        </Element>
      </AnimatePresence>
    </div>
  );
};

export default Home;
