import "minireset.css";
import "./App.css";
import { Hero } from "./components/Hero";
import { FrequentlyAskedQuestions } from "./components/FrequentlyAskedQuestions";
import { NavBar } from "./components/NavBar";
import { useStyletron } from "baseui";

export const App = () => {
  const [css, $theme] = useStyletron();

  return (
    <>
      <NavBar></NavBar>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        })}
      >
        <Hero />
      </div>
    </>
  );
};

export default App;
