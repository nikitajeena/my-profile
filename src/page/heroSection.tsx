import Button from "../components/component-ui/button";

import "./hero.css";
export default function HeroSection({ id }: { id: string }) {
  function handleDownload() {
    window.open("/cv_nikita.pdf", "_blank");
  }

  function handleRouteToContact() {
    const link = document.createElement("a");
    link.href = "#about";
    link.click();
  }
  return (
    <section id={id}>
      <div className="hero-container">
        <img className="hero-image" src="./girImage.png" />
        <div className="right-container">
          <p> Hello, My name is Nikita Jeena</p>
          <p> Frontend Developer</p>
          <div className="hero-button">
            <Button
              text={"Download CV"}
              handleOnclick={() => {
                handleDownload();
              }}
            />
            <Button
              text={"Contact Info"}
              handleOnclick={() => {
                handleRouteToContact();
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
