import "./component.css"
type ProjectType = {
  projectName: string;
  githubLink: string;
  techStack: string[];
  description: string;
};

type CardProps = {
  project: ProjectType;
};

export default function ProjectCard({project}: CardProps) {
  return (
    <section className="project-container">
      <div className="project-card">
        <h2 className="project-name">{project.projectName}</h2>
        <p className="project-description">{project.description}</p>
          <a
          className="git-link"
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
           GitHub Link
        </a>
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-item">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
