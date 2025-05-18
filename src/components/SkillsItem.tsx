import { ReactNode } from "react";

interface Skill {
  name: string;
  icon: ReactNode;
}

interface SkillsItemProps {
  title: string;
  icon: ReactNode;
  skills: Skill[];
}

const SkillsItem = ({ title, icon, skills }: SkillsItemProps) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center">
      <h3 className="text-2xl font-semibold text-white mb-4 flex items-center space-x-2">
        {icon}
        <span>{title}</span>
      </h3>
      <ul className="text-white space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-lg">{skill.icon}</span>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsItem;
