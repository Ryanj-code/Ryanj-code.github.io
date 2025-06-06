import { useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  type ScrollToSection = (ref: React.RefObject<HTMLElement>) => void;
  const homeRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const skillRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const scrollToSection: ScrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gradient-to-br from-[#0a0a0f] via-[#12172a] to-[#0f3460] text-white">
      <Navbar
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        projectRef={projectRef}
        skillRef={skillRef}
      />
      <About sectionRef={homeRef} footerRef={footerRef} />
      <Projects ref={projectRef} />
      <Skills ref={skillRef} />
      <Footer ref={footerRef} />
    </div>
  );
};

export default App;
