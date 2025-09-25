import Heading from "../components/component-ui/header";
import ProjectCard from "../components/component-ui/projectCard";

export default function Projects({ id }: { id: string }) {
  const projectData = {
    projectName: "project management",
    techStack: ["React", "TypeScript", "CSS", "redux"],
    description: "User can add, edit and delete.",
    githubLink: "https://github.com/nikitajeena/project-team",
  };
 const projectData1 = {
    projectName: "E-commerce",
    techStack: ["Next.js", "TypeScript", "CSS", "redux"],
    description: "Ecommerce .",
    githubLink: "https://github.com/nikitajeena/project-team",
  };
 const projectData2 = {
    projectName: "Dashboard",
    techStack: ["Next.js", "TypeScript", "CSS", "redux"],
    description: "Ecommerce .",
    githubLink: "https://github.com/nikitajeena/project-team",
  };

  return (
    <section id={id}>
      <Heading text={"My Project"} />
      <div className="project-container">
        <ProjectCard project={projectData} />
                <ProjectCard project={projectData1} />
                <ProjectCard project={projectData2} />

      </div>
    </section>
  );
}
