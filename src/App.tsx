import { useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  type ScrollToSection = (ref: React.RefObject<HTMLElement>) => void;
  const homeRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const skillRef = useRef<HTMLElement>(null);

  const scrollToSection: ScrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-950 text-white">
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        projectRef={projectRef}
        skillRef={skillRef}
        contactRef={contactRef}
      />
      <About ref={homeRef} />
      <Projects ref={projectRef} />
      <Skills ref={skillRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default App;
