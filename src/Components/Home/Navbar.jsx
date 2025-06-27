import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react"; // Corrected import for motion
import "../../font.css";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [scrolledStyle, setScrolledStyle] = useState("");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.1) {
      setScrolledStyle(" shadow-[0px_-2px_13px_0px_#64ffda]");
    } else {
      setScrolledStyle("");
    }
  });

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      className={`bg-[#0a192f] px-4 pr-6 md:px-6 py-4 w-full fira-code fixed top-0 left-0 z-50 ${scrolledStyle} transition-all duration-250`}
      initial={{
        y: -200,
      }}
      animate={{
        y: 0,
      }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="Home" duration={300} smooth={true} offset={-120}>
            <div className="text-2xl font-bold text-[#64ffda] lg:pl-5  ">
              <img src="src\assets\Logo.png" alt="Logo" className="h-10 w-10" />
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center lg:space-x-6 md:space-x-4 ">
          {navItems.map((item) => (
            <Link
              to={item.label}
              smooth={true}
              duration={300}
              offset={-120}
              key={item.id}
            >
              <div
                className={`relative text-sm transition duration-300 ease-in-out`}
              >
                <motion.span>
                  <span className="text-[#64ffda] mr-1">
                    0{navItems.indexOf(item) + 1}.
                  </span>
                  <motion.span
                    className="p-2 text-[#64ffda]"
                    initial={{
                      color: "#64ffda",
                    }}
                    whileHover={{
                      color: "#0a192f",
                      backgroundColor: "#64ffda",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    whileTap={{
                      borderRadius: "0px",
                      transition: {
                        duration: 0.3,
                      },
                    }}
                  >
                    {item.label}
                  </motion.span>
                </motion.span>
              </div>
            </Link>
          ))}

          {/* Resume Button */}
          <motion.a
            href="https://drive.google.com/file/d/1sWgGjRloRlpZMykteLeWFhRO2E_6aZbk/view"
            className="text-sm text-[#64ffda] border border-[#64ffda] rounded px-4 py-2 relative fira-code"
            whileHover={{
              backgroundColor: "rgba(100, 255, 218)",
              color: "#0a192f",
              boxShadow: "5px 5px 0px 0px white",
              cursor: "pointer",

              transition: {
                duration: 0.3,
              },
            }}
            transition={{ duration: 0.3 }}
            whileTap={{
              boxShadow: "0px 0px 0px 0px white",
              transition: {
                duration: 0.1,
              },
            }}
          >
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button - Hamburger */}
        <div className="md:hidden flex items-center">
          <motion.button
            className="text-[#64ffda] focus:outline-none"
            whileHover={{ color: "#ffffff" }}
            whileTap={{ scale: 0.8 }}
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            {showMobileNav ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence mode="wait" initial={false}>
          {showMobileNav && (
            <motion.div
              className="absolute top-20 left-0 w-full bg-[#0a192f] p-4  shadow-lg md:hidden -z-10 h-screen border-l-2   border-[#64ffda]"
              initial={{ x: 500 }}
              animate={{ x: 0 }}
              exit={{ x: 500 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-1/2 mx-auto flex flex-col items-center justify-center h-full relative bottom-28">
                <div className="flex flex-col space-y-4 ">
                  {navItems.map((item) => (
                    <Link
                      to={item.label}
                      smooth={true}
                      duration={300}
                      offset={-90}
                      key={item.id}
                    >
                      <div onClick={() => setShowMobileNav(false)}>
                        <div
                          className={({ isActive }) =>
                            `text-sm transition duration-300 ease-in-out ${
                              isActive ? "text-[#64ffda]" : "text-gray-400"
                            }`
                          }
                        >
                          <motion.span className="text-[#64ffda]">
                            <span className="text-[#64ffda] mr-1">
                              0{navItems.indexOf(item) + 1}.
                            </span>
                            {item.label}
                          </motion.span>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <a href="https://drive.google.com/file/d/1sWgGjRloRlpZMykteLeWFhRO2E_6aZbk/view">
                    <motion.span
                      className="text-sm text-[#0a192f] bg-[#64ffda] rounded px-4 py-2 fira-code"
                      whileTap={{ scale: 0.9 }}
                    >
                      Resume
                    </motion.span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
