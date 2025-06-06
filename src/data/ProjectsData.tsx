import nexusImg from "../assets/Nexus.png";
import codeStashImg from "../assets/CodeStash.png";
import modelImg from "../assets/Model.png";
import bookRecommenderImg from "../assets/BookRecommender.png";
import travelJourneyImg from "../assets/TravelJourney.png";
import atlasBoardImg from "../assets/AtlasBoard.png";

export const projectList = [
  {
    title: "AtlasBoard",
    desc: "A task management app that enables teams to collaborate through board creation, creating and managing tasks all in real time.",
    technologies: ["Node.js", "GraphQL", "PostgreSQL", "Prisma", "React", "Apollo"],
    img: atlasBoardImg,
    link: "https://github.com/Ryanj-code/atlasboard",
  },
  {
    title: "Nexus",
    desc: "A team-finding app for gamers that matches users based on game preferences, regions, and playstyle using filters, chat, and a reputation system.",
    technologies: ["Go", "Gin", "GraphQL", "PostgreSQL", "React", "JWT"],
    img: nexusImg,
    link: "https://nexus-mu-ten.vercel.app/",
  },
  {
    title: "CodeStash",
    desc: "A snippet management application with syntax highlighting, detailed snippet view, and option to download snippets.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    img: codeStashImg,
    link: "https://github.com/Ryanj-code/CodeStash",
  },
  {
    title: "Image Classification Model",
    desc: "A Deep learning model using CNN based on ResNet and InceptionV4 architectures for image classification.",
    technologies: ["Python", "TensorFlow", "Keras"],
    img: modelImg,
    link: "",
  },
  {
    title: "NextPage",
    desc: "A Book Recommender app made using Google Books API to allow users to search, favorite, and manage their book collection.",
    technologies: ["Flutter", "Firebase", "Dart"],
    img: bookRecommenderImg,
    link: "https://github.com/Ryanj-code/nextpage",
  },
  {
    title: "Travel Journey",
    desc: "A travel diary app that lets users to log their trips and upload photos to document them.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    img: travelJourneyImg,
    link: "https://github.com/Ryanj-code/Travel-Journey",
  },
];
