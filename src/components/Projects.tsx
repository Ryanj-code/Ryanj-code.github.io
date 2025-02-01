import { forwardRef } from "react";
import snippetImg from "../assets/snippet.png";
import cnnImg from "../assets/cnn.png";
import bookRecommenderImg from "../assets/bookrecommender.png";
// import exImg from "../assets/image.png";

const Projects = forwardRef<HTMLElement, {}>((props, ref) => {
  const projectList = [
    {
      title: "CodeStash",
      desc: "A Full-stack snippet management application using with syntax highlighting and a detailed snippet view.",
      technologies: "MongoDB, Express, React, Nodejs",
      img: snippetImg,
    },
    {
      title: "Image Classification Model",
      desc: "A Deep learning model using CNN based on ResNet, and InceptionV4 architectures for image classification.",
      technologies: "Python, Tensorflow",
      img: cnnImg,
    },
    {
      title: "NextPage",
      desc: "A Book Recommender app made using Google Books API to allow users to search, favorite, and manage their book collection.",
      technologies: "Flutter, Firebase",
      img: bookRecommenderImg,
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-gray-800 py-16 text-center min-h-screen flex flex-col justify-center"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl text-white font-bold mb-10">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-teal-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 cursor-pointer transition"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-50 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-4">{project.desc}</p>
                <p className="text-gray-300 font-semibold mt-4">
                  Technologies:{" "}
                </p>
                <p className="text-gray-300 mt-1">{project.technologies}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Projects;
