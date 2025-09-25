import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // mail
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Heading from "../components/component-ui/header";
import "./hero.css"
export default function ContactUs({ id }: { id: string }) {
  return (
    <section id={id} className="contact-us-container">
      <Heading text={"Contact Me"} />
      <div className="contact-us">
        <div>
<FontAwesomeIcon icon={faEnvelope} size="2x" />
          <span>- nikitajeena8@gmail.com</span>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/nikita-jeena-9981a0150/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
}
