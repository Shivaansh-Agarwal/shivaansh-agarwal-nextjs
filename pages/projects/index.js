import { useState } from "react";
import Layout from "../../components/Layout.jsx";
import { ProjectCard } from "../../components/Projects/ProjectCard.jsx";
import { projectsData } from "../../utilities/projects.js";

const Projects = () => {
  const [filterType, setFilterType] = useState("ALL");
  return (
    <Layout title="Shivaansh | Projects">
      <h1 className="text-4xl font-medium">Projects</h1>
      <div className="flex gap-2 mt-4">
        <button
          className={`border rounded px-2 py-1 ${
            filterType === "ALL" ? "bg-slate-300" : null
          }`}
          onClick={() => {
            setFilterType("ALL");
          }}
        >
          All
        </button>
        <button
          className={`border rounded px-2 py-1 ${
            filterType === "WEB_APPS" ? "bg-slate-300" : null
          }`}
          onClick={() => {
            setFilterType("WEB_APPS");
          }}
        >
          Web Apps
        </button>
        <button
          className={`border rounded px-2 py-1 ${
            filterType === "PROJECTS" ? "bg-slate-300" : null
          }`}
          onClick={() => {
            setFilterType("PROJECTS");
          }}
        >
          Projects
        </button>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectsData
          .filter((project) => {
            if (filterType === "ALL") {
              return true;
            } else if (
              filterType === "WEB_APPS" &&
              project.tags.includes("webapp")
            ) {
              return true;
            } else if (
              filterType === "PROJECTS" &&
              project.tags.includes("interview")
            ) {
              return true;
            }
            return false;
          })
          .map((project) => {
            return <ProjectCard key={project.name} project={project} />;
          })}
      </div>
    </Layout>
  );
};

export default Projects;
