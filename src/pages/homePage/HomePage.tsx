import "minireset.css";
import "./HomePage.css";
import { Hero } from "./heroSection/Hero";
import { NavBar } from "../../components/NavBar";
import { ConfettiProvider } from "./heroSection/Confetti";
import { AboutSection } from "./aboutSection/AboutSection";
import { SponsorsSection } from "./sponsorsSection/SponsorsSection";
import { FaqSection } from "./faqSection";

export const App = () => {

  return (
    <>
    <ConfettiProvider>
        <Hero />
        <AboutSection />
        <FaqSection />
        <SponsorsSection />
    </ConfettiProvider>
    </>
  );
};

export default App;
