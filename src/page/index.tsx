import AboutUs from "./AboutUs";
import ContactUs from "./contactUs";
import Experience from "./experience";
import HeroSection from "./heroSection";
import Projects from "./projects";

export default function Profile(){
    return <>
   <HeroSection id="hero" />
<AboutUs id="about" />
<Experience id="experience" />
<Projects id="projects" />
<ContactUs id="contact" />
    </>
}