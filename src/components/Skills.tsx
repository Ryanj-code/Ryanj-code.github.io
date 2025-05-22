import { forwardRef } from "react";
import SkillsItem from "./SkillsItem";

import {
  FaCode,
  FaCogs,
  FaToolbox,
  FaDatabase,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaLinux,
  FaFigma,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiGo,
  SiTypescript,
  SiDart,
  SiFlutter,
  SiTensorflow,
  SiKeras,
  SiUbuntu,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
} from "react-icons/si";

const Skills = forwardRef<HTMLElement, {}>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="bg-gray-900 py-16 text-center min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-2">My Skills</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <SkillsItem
            title="Languages"
            icon={<FaCode className="text-white" />}
            skills={[
              { name: "C++", icon: <SiCplusplus /> },
              { name: "Python", icon: <FaPython /> },
              { name: "Java", icon: <FaJava /> },
              { name: "JavaScript", icon: <FaJs /> },
              { name: "TypeScript", icon: <SiTypescript /> },
              { name: "HTML", icon: <FaHtml5 /> },
              { name: "CSS", icon: <FaCss3Alt /> },
              { name: "Go", icon: <SiGo /> },
              { name: "Dart", icon: <SiDart /> },
            ]}
          />

          {/* Frameworks & Libraries */}
          <SkillsItem
            title="Frameworks & Libraries"
            icon={<FaCogs className="text-white" />}
            skills={[
              { name: "React", icon: <FaReact /> },
              { name: "Node.js", icon: <FaNodeJs /> },
              { name: "Flutter", icon: <SiFlutter /> },
              { name: "TensorFlow", icon: <SiTensorflow /> },
              { name: "Keras", icon: <SiKeras /> },
            ]}
          />

          {/* Tools */}
          <SkillsItem
            title="Tools"
            icon={<FaToolbox className="text-white" />}
            skills={[
              { name: "Git", icon: <FaGit /> },
              { name: "Linux", icon: <FaLinux /> },
              { name: "Ubuntu", icon: <SiUbuntu /> },
              { name: "Figma", icon: <FaFigma /> },
            ]}
          />

          {/* Technologies */}
          <SkillsItem
            title="Technologies"
            icon={<FaDatabase className="text-white" />}
            skills={[
              { name: "MongoDB", icon: <SiMongodb /> },
              { name: "PostgreSQL", icon: <SiPostgresql /> },
              { name: "GraphQL", icon: <SiGraphql /> },
            ]}
          />
        </div>
      </div>
    </section>
  );
});

export default Skills;
