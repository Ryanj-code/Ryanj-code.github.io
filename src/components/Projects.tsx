import { forwardRef } from "react";
import { projectList } from "../data/ProjectsData";

const Projects = forwardRef<HTMLElement, {}>((_props, ref) => {
  return (
    <section
      ref={ref}
      className="py-20 text-center min-h-screen flex flex-col justify-center"
      id="projects"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-2 text-white">My Projects</h2>
        <div className="w-24 h-1 bg-indigo-700 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 hover:translate-y-2 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 bg-gray-800">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.desc}</p>

                <div>
                  <p className="text-sm font-medium text-gray-400 mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-blue-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-blue-500 text-blue-400 rounded-md hover:bg-blue-500 hover:text-white transition-colors text-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
