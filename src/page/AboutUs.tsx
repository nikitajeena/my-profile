import Card from "../components/component-ui/card";
import Heading from "../components/component-ui/header";
import { Experience_Detail } from "../contants";
import "./hero.css";
export default function AboutUs({ id }: { id: string }) {
  let text =
    "Innovative, self-motivated and goal-oriented SDE with around 3+ years of hands-on experience as a Front-End Developer. Possessing in-depth knowledge of frontend Development, specializing in React and Web Development.";
  return (
    <section id={id}>
      <Heading text={"About me"} />
      <section>
        <p className="about-content">{text}</p>
      </section>

      <div className="about-us-card">
        <Card
          icon={Experience_Detail.EXPERIENCE}
          subInformation={"3+ years"}
          information={"Front-end Development"}
          title={"Experience"}
        />

        <Card
          icon={Experience_Detail.EDUCATION}
          information={"Bachalor in computer application"}
          subInformation={"Haldwani, Uttrakhand"}
          title={"Education"}
        />
      </div>
    </section>
  );
}
