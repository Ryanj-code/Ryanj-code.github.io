import { forwardRef } from "react";
import SkillsItem from "./SkillsItem";

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
          <SkillsItem
            title="Languages"
            icon={<i className="fas fa-code text-white" />}
            skills={["C++", "Python", "Java", "HTML", "CSS", "JavaScript"]}
          />

          {/* Frameworks */}
          <SkillsItem
            title="Frameworks"
            icon={<i className="fas fa-cogs text-white" />}
            skills={["Node.js", "React", "Express", "Flutter"]}
          />

          {/* Tools */}
          <SkillsItem
            title="Tools"
            icon={<i className="fas fa-toolbox text-white" />}
            skills={["Git", "Ubuntu", "Linux", "Figma"]}
          />

          {/* Technologies */}
          <SkillsItem
            title="Technologies"
            icon={<i className="fas fa-database text-white" />}
            skills={["MongoDB", "NumPy"]}
          />
        </div>
      </div>
    </section>
  );
});

export default Skills;
