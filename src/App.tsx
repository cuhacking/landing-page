import { useStyletron } from "baseui";
import "minireset.css";

export const Column = (props: { children: React.ReactNode }) => {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      })}
    >
      {props.children}
    </div>
  );
};

export const Row = (props: { children: React.ReactNode }) => {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      })}
    >
      {props.children}
    </div>
  );
};

const SkyBackground = () => {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        height: "100vh",
        width: "100vw",
        backgroundColor: "#C5DFF8",
      })}
    >
      <Row>
        <h1>Sky background</h1>
      </Row>
    </div>
  );
};

export const App = () => {
  return (
    <Column>
      <SkyBackground />
      <Row>
        <h1>Past Sponsors</h1>
      </Row>

      <Row>
        <h1>FAQ</h1>
      </Row>
    </Column>
  );
};

export default App;
