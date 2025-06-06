type AboutProps = {
  sectionRef: React.RefObject<HTMLElement>;
  footerRef: React.RefObject<HTMLElement>;
};

const About = ({ sectionRef, footerRef }: AboutProps) => {
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 text-center min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 backdrop-blur-sm">
        <h1 className="text-white/90 text-4xl md:text-6xl font-bold drop-shadow-md animate-slide-up-1">
          Hello, I'm Ryan Jiang,
        </h1>
        <h2 className="mt-6 text-white/80 text-xl md:text-3xl font-semibold drop-shadow-sm animate-slide-up-2">
          A FullStack Developer from Brooklyn, NY.
        </h2>
        <p className="mt-10 text-white/70 text-lg max-w-4xl mx-auto drop-shadow-sm animate-slide-up-3">
          I'm a developer who thrives on continuous learning and exploring new
          technologies. Whether refining my skills or experimenting with new
          tools, I approach every project with the intent to improve myself.
        </p>
      </div>

      <button
        onClick={() => scrollToSection(footerRef)}
        className="inline-block px-4 py-2 mt-10 border border-indigo-500 text-indigo-400 rounded-md hover:bg-indigo-500 hover:text-white transition-colors text-sm"
      >
        Connect with Me
      </button>
    </section>
  );
};

export default About;
