import "minireset.css";
import "./App.css";
import { FooterDecorator } from "./components/icons/Wordmark";
import { Sponsors } from "./Sponsors";
import { QuestionAccordion } from "./components/QuestionAccordion";
import { Section } from "./components/Section";
import { Column } from "./components/util";
import { SkyBackground } from "./components/SkyBackground";
import { FrequentlyAskedQuestions } from "./components/FrequentlyAskedQuestions";

export const App = () => {
  return (
    <Column
      $style={
        {
          backgroundColor: "#C5DFF8",
          background: "#C5DFF8",
        }
      }
    >
      <SkyBackground />
      <Column $style={
        {
          zIndex: 5,
          gap: "97px",
        }
      }>
        <FrequentlyAskedQuestions />
        <Section title="Past Sponsors">
          <Sponsors />
        </Section>
        <FooterDecorator />
      </Column>
    </Column>
  );
};

export default App;
