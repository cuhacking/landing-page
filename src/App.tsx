
import "./App.css";
//import { Hero } from "./components/Hero";
import { FrequentlyAskedQuestions } from "./components/FrequentlyAskedQuestions";
import { NavBar } from "./components/NavBar";
import { useStyletron } from "baseui";
import ReactConfetti from "react-confetti";
import { ConfettiProvider } from "./components/Confetti";
import { ImageCarousel } from "./components/ImageCarousel";
import { EmailSignup, SponsorEmailSignup } from "./components/EmailSignup";
import { PastSponsors } from "./cuhacking-past-sponsors/PastSponsors";
import { Heading, Paragraph } from "./components/Typography";

export const App = () => {
  const [css, $theme] = useStyletron();

  return (
    <>
      {/* <ConfettiProvider> */}
      <NavBar></NavBar>


      <EmailSignup />

      <Heading>What is cuHacking?</Heading>
      
      <ImageCarousel />
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est.
      </Paragraph>

      <Heading>❆⋆ FAQ ⋆❆</Heading>
      <FrequentlyAskedQuestions></FrequentlyAskedQuestions>

      <Heading>❆⋆ Past Sponsors ⋆❆</Heading>
      <PastSponsors />
      <SponsorEmailSignup />

      {/* <Hero /> */}
      {/* </ConfettiProvider> */}
    </>
  );
};

export default App;
