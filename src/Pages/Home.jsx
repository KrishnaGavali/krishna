import React from "react";
import { AnimatePresence } from "motion/react";
import "../font.css";
import { Link } from "react-router";
import HomeScreen from "../Components/Home/HomeScreen";
import Navbar from "../Components/Home/Navbar";
import AboutMeSection from "../Components/Home/AboutMeSection";
import Skills from "../Components/Home/Skills";
import { ProjectsLg, ProjectsSm } from "../Components/Home/ProjectsLg";
import { Element } from "react-scroll";
import Contact from "../Components/Home/Contact";
import Footer from "../Components/Home/Footer";

const Home = () => {
  return (
    <div className=" overflow-hidden">
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
      <Element name="Contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};

export default Home;
