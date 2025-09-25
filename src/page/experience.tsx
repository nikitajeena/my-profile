import ExperienceCard from "../components/component-ui/experience-card";
import Heading from "../components/component-ui/header";
import "./hero.css"
export default function Experience({ id }: {id: string}) {
  return (
         <section id={id}>

      <Heading text={"Experience"} />
      <div className="experience-container">
        <ExperienceCard techStack={["HTML", "CSS", "JAVASCRIPT"]} />
        <ExperienceCard techStack={["React js", "Next js", "Typescript"]} />
        <ExperienceCard techStack={["Git", "JEST", "RTK"]} />
        <ExperienceCard techStack={["MUI", "Redux", "SQL"]} />
      </div>
    </section>
  );
}
