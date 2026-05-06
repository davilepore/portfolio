import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import ScrollInfinite from "./components/ScrollInfinite";
import "./App.css";

import gsap from "gsap";

import { useLayoutEffect } from "react";

function App() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".mylogo",
      { y: 30 },
      {
        y: -30,
        duration: 2,
        ease: "none",
        repeat: -1,
        yoyo: true,
      },
    );
  }, []);

  return (
    <div className="p-0 m-0 box-border w-full min-h-screen">
      <HeroSection />

      <AboutMe />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
