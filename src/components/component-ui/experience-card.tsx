
import "./component.css"
export default function ExperienceCard({ techStack }: { techStack: string[] }) {
  return (
    <>
      <div className="experience-card ">
        {techStack.map((stack: string) => {
          return <p className="experience-content">{stack}</ p>;
        })}
      </div>
    </>
  );
}
