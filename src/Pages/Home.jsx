import React, { useEffect } from "react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import "../font.css";
import { Link } from "react-router";
import HomeScreen from "../Components/Home/HomeScreen";
import Navbar from "../Components/Home/Navbar";
import AboutMeSection from "../Components/Home/AboutMeSection";
import Skills from "../Components/Home/Skills";
import { ProjectsLg, ProjectSSm } from "../Components/Home/ProjectsLg";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <AnimatePresence mode="wait">
        <Navbar />
        <HomeScreen />
        <AboutMeSection />
        <Skills />
        <div className="w-full h-full hidden md:block">
          <ProjectsLg />
        </div>
        <div className="w-full h-full block md:hidden">
          <ProjectSSm />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
