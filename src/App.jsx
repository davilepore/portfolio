import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";

import "./App.css";

function App() {
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
