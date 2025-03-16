import { forwardRef } from "react";
import "../App.css";

const About = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section
      ref={ref}
      className="py-16 text-center min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold animate-slide-up-1">
          Hi, I'm Ryan Jiang.
        </h1>
        <h2 className="mt-6 text-white text-xl md:text-3xl font-bold animate-slide-up-2">
          A developer passionate about learning.
        </h2>
        <p className="mt-10 text-lg text-gray-300 max-w-4xl mx-auto animate-slide-up-3">
          I'm a developer who thrives on continuous learning and exploring new
          technologies. Whether refining my skills or experimenting with new
          tools, I approach every project with the intent to improve myself.
        </p>
      </div>
    </section>
  );
});

export default About;
