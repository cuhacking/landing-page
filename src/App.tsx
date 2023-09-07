import { useStyletron } from "baseui";
import "minireset.css";
import "./App.css";
import { FooterDecorator, Wordmark } from "./components/icons/Wordmark";
import { CampusSkyline, Clouds } from "./components/icons/CampusSkyline";
import { StyleObject } from "styletron-react";
import { useState } from "react";

export const Column = (props: { children: React.ReactNode; $style?: StyleObject }) => {
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
        ...props.$style,
      })}
    >
      {props.children}
    </div>
  );
};

export const SignUpButton = (props: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const [css, $theme] = useStyletron();

  return (
    <div
      onClick={props.onClick}
      className={
        css({
          width: "160px",
          height: "60px",
          borderRadius: "100px",
          background: "#FF7C7C",
          boxShadow: "0px 8px 7px 0px rgba(0, 0, 0, 0.25)",
          cursor: "pointer",

          ":hover": {
            boxShadow: "0px 8px 7px 0px rgba(0, 0, 0, 0.25)",
            // make it bigger
            transform: "scale(1.05)",
            transition: "transform 0.2s ",

          },

        })
      }
    >
      <p className={
        css({
          display: "flex",
          height: "100%",
          flexShrink: 0,
          padding: "10px",

          /*
          color: var(--Logo-Foreground, #FFF);
text-align: center;
font-family: Poppins;
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 1.4px;
*/

          color: "#FFF",
          textAlign: "center",
          fontFamily: "Poppins",

          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          letterSpacing: "1.4px",


        })
      }><Row>{props.children}</Row></p>
    </div>
  );
}

export const Subheading = (props: { children: React.ReactNode; $style?: StyleObject }) => {
  const [css, $theme] = useStyletron();

  return (
    <p
      className={css({
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "35px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "normal",
        letterSpacing: "-0.88px",
        ...props.$style,
      })}
    >
      {props.children}
    </p>
  );
}

export const Subheading2 = (props: { children: React.ReactNode; $style?: StyleObject }) => {
  const [css, $theme] = useStyletron();

  return (
    <p
      className={css({
        color: "#000",
        textAlign: "center",
        fontFamily: "Poppins",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "300",
        lineHeight: "normal",
        letterSpacing: "-0.88px",
        ...props.$style,
      })}
    >
      {props.children}
    </p>
  );
}


export const Row = (props: { children: React.ReactNode; $style?: StyleObject }) => {
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
        ...props.$style,
      })}
    >
      {props.children}
    </div>
  );
};

const Section = (props: { children: React.ReactNode; $style?: StyleObject; title: string }) => {
  const [css, $theme] = useStyletron();

  return <div
    className={css({
      width: "100%",
      height: "100%",
      paddingLeft: "150px",
      paddingRight: "150px",


    })}
  >
    <h1
      className={
        css({
          color: "#000",
          fontSize: "36px",
          fontFamily: "Poppins",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
        })
      }
    >{props.title}</h1>
    <div>
      {props.children}
    </div>
  </div>
}

const SkyBackground = () => {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        height: "100vh",
        width: "100vw",
      })}
    >

      <div
        className={
          css({
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: 2,
          })
        }
      >
        <Row>
          <Column $style={
            {
              width: "400px",
              height: "400px",
            }
          }>
            <div
              className={
                css({
                  paddingBottom: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                })
              }
            >

              <Wordmark width="400px" />
              <Subheading>January-February 2024</Subheading>
              <Subheading2>Carleton's Official Hackathon</Subheading2>
              <SignUpButton
                onClick={
                  () => {
                    window.open("https://cuhacking.ca", "_blank");
                  }
                }
              >Join our team!</SignUpButton>
            </div>
          </Column>
        </Row>
      </div>
      <Row
        $style={
          {
            overflow: "hidden",
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            zIndex: 1,
          }
        }>
        <div
          className={css({
            justifyContent: "center",
            alignItems: "center",
            zIndex: 0,
            maxWidth: "1200px",
            width: "100%",
            minWidth: "600px",
          })}
        >
          <CampusSkyline />
        </div>
      </Row>


      {/* Clouds layer */}
      <div
        className={css({
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          zIndex: 0,
          overflow: "hidden",
        })}
      >
        <Clouds />
      </div>

    </div >
  );
};

export const QuestionAccordion = (props: { question: string; answer: string; }) => {
  const [css, $theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles = {
    width: "100%",
    height: "111px",
    cursor: "pointer",
    background: "transparent",
    border: "5px solid #000",
    borderRadius: "100px",
    display: "flex",
    padding: "32px",
    paddingLeft: "80px",
    alignContent: "center",
    alignItems: "center",
    transition: "height 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out",
  };

  if (!isOpen) {
    return (
      <div
        onClick={
          () => {
            setIsOpen(true);
          }
        }
        id={`question-${props.question}`}
        className={css(baseStyles)}>
        <h1 className={
          css({
            color: "#000",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
          })
        }>
          {props.question}
        </h1>
      </div >
    );
  }

  return (
    <div
      onClick={
        () => {
          setIsOpen(false);
        }
      }
      id={`question-${props.question}`}
      className={css({
        ...baseStyles,
        height: "302px",
        alignItems: "flex-start",
        flexDirection: "column",

        backgroundColor: "#E8EBEF",
      }
      )}>

      <h1 className={
        css({
          color: "#000",
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          transition: "all 0.2s ease-in-out",
        })
      }>
        {props.question}
      </h1>


      <p className={
        css({
          color: "#000",
          textAlign: "center",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          paddingLeft: "44px",
        })
      }>
        {"✦"} {props.answer}
      </p>

    </div >
  );




}



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
          gap: "97px",
        }
      }>
        <Section title="Frequently Asked Questions">
          <Column $style={
            {
              marginTop: "34px",
              gap: "34px",
            }
          }>
            <QuestionAccordion question="What is CUHacking?" answer="CUHacking is Carleton University's official hackathon." />
            <QuestionAccordion question="Who can participate?" answer="CUHacking is Carleton University's official hackathon." />
            <QuestionAccordion question="What does it cost?" answer="CUHacking is Carleton University's official hackathon." />
            <QuestionAccordion question="What are the prizes?" answer="CUHacking is Carleton University's official hackathon." />
            <QuestionAccordion question="Do I need coding experience?" answer="CUHacking is Carleton University's official hackathon." />
          </Column>
        </Section>


        <Section title="Past Sponsors">

        </Section>

        <FooterDecorator />
      </Column>
    </Column>
  );
};

export default App;
