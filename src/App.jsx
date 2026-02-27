import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollInfinite from "./components/ScrollInfinite";
import "./App.css";
import TextType from "./components/_uicomponents/TextType";
import mylogo from "./assets/mylogo.png";
import gsap from "gsap";
import RotatingText from "./components/_uicomponents/RotatingText";
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
      <Navbar />
      <section className="inicio min-h-screen w-full flex flex-col items-center gap-30 p-40">
        <div className="flex flex-row justify-between w-full min-h-125">
          <div className="space-y-3 items-center">
            <TextType
              className="text-6xl font-bold opacity-[1] text-white"
              text={["Hi, I'm Davi Lepore"]}
              typingSpeed={155}
              pauseDuration={5000}
              showCursor
              cursorCharacter="|"
              deletingSpeed={75}
              cursorBlinkDuration={0.6}
            />
            <div className="text-4xl text-white flex flex-row p-0 m-0 items-center">
              <h2 className="pb-1.25">Desenvolvedor</h2>
              <RotatingText
                texts={["FrontEnd", "BackEnd", "FullStack"]}
                mainClassName="px-2 sm:px-2 md:px-3 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <img src={mylogo} alt="My Logo" className="mylogo w-120 h-80" />
          </div>
        </div>
      </section>
      <ScrollInfinite />

      <AboutMe />

      <Projects />

      <Contact />
    </div>
  );
}

export default App;
