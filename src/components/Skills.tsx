import { forwardRef } from "react";

const Skills = forwardRef<HTMLElement, {}>((props, ref) => {
  return (
    <section
      ref={ref}
      className="bg-gray-900 py-16 text-center min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white">My Skills</h2>
        <p className="text-xl text-gray-400 mt-2">Technologies I work with</p>

        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Languages
            </h3>
            <ul className="text-gray-400 space-y-2">
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          {/* Frameworks */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Frameworks
            </h3>
            <ul className="text-gray-400 space-y-2">
              <li>Node.js</li>
              <li>React</li>
              <li>Express</li>
              <li>Flutter</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">Tools</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Git</li>
              <li>Ubuntu</li>
              <li>Linux</li>
              <li>Figma</li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Technologies
            </h3>
            <ul className="text-gray-400 space-y-2">
              <li>MongoDB</li>
              <li>NumPy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Skills;
