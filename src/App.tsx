import "minireset.css";
import "./App.css";
import {Hero} from './components/Hero';
import { FrequentlyAskedQuestions } from "./components/FrequentlyAskedQuestions";
import {NavBar} from "./components/NavBar"

export const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Hero />
    </div>
  );
};

export default App;
