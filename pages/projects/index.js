import Layout from "../../components/Layout.jsx";
import { ProjectCard } from "../../components/Projects/ProjectCard.jsx";
import imgQuizzoMania from "../../public/images/screenshot-quizzomania.png";
import imgFinMart from "../../public/images/screenshot-finmart.png";
import imgFinTube from "../../public/images/screenshot-fintube.png";

const Projects = () => {
  const projectsList = [
    {
      name: "QuizzoMania",
      description:
        "A webapp which allows users to attempt quizzes on a variety of topics, and supports custom JWT Authentication.",
      imgSrc: imgQuizzoMania,
      techStack: ["ReactJS", "ExpressJS", "MongoDB", "TailwindCSS"],
      liveLink: "https://quizzo-mania-shivaansh.netlify.app/",
      codeFrontend:
        "https://github.com/Shivaansh-Agarwal/Quizzo-Mania-Frontend",
      codeBackend: "https://github.com/Shivaansh-Agarwal/Quizzo-Mania-Backend",
    },
    {
      name: "FinMart",
      description:
        "One stop destination to get the books you need to improve your financial wisdom.",
      imgSrc: imgFinMart,
      techStack: ["React", "ExpressJS", "MongoDB", "CSS3"],
      liveLink: "https://fin-mart-dev.netlify.app/",
      codeFrontend: "https://github.com/Shivaansh-Agarwal/fin-mart",
      codeBackend: "https://github.com/Shivaansh-Agarwal/fin-mart-backend",
    },
    {
      name: "FinTube",
      description:
        "A Place to learn all there's to learn about Personal Finance, Investing from a list of high quality curated content from Youtube.",
      imgSrc: imgFinTube,
      techStack: ["ReactJS", "CSS3"],
      liveLink: "https://fin-tube-dev.netlify.app/",
      codeFrontend: "https://github.com/Shivaansh-Agarwal/fin-tube",
      codeBackend: "",
    },
  ];
  return (
    <Layout title="Shivaansh | Projects">
      <h1 className="text-4xl font-medium">Projects</h1>
      <div className="mt-8 flex flex-col gap-8">
        {projectsList.map((project) => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </div>
    </Layout>
  );
};

export default Projects;
