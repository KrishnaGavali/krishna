import React, { useEffect } from "react";
import { AnimatePresence, motion, useAnimate } from "motion/react";
import "../font.css";
import { Link } from "react-router";
import HomeScreen from "../Components/Home/HomeScreen";
import Navbar from "../Components/Home/Navbar";
import AboutMeSection from "../Components/Home/AboutMeSection";
import SkillsLG from "../Components/Home/SkillsLG";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <AnimatePresence mode="wait">
        <Navbar />
        <HomeScreen />
        <AboutMeSection />
        <SkillsLG />
      </AnimatePresence>
    </div>
  );
};

export default Home;
