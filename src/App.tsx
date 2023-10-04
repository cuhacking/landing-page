import { useStyletron } from "baseui";
import "minireset.css";
import "./App.css";
import { FooterDecorator, Wordmark } from "./components/icons/Wordmark";
import { CampusSkyline, Clouds } from "./components/icons/CampusSkyline";
import { StyleObject } from "styletron-react";
import { useState } from "react";
import { Sponsors } from "./Sponsors";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Modal } from "baseui/modal";

export const Column = (props: { children: React.ReactNode; $style?: StyleObject }) => {
  const [css, _$theme] = useStyletron();

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
  const [css, _$theme] = useStyletron();

  return (
    <div
      onClick={props.onClick}
      className={
        css({
          width: "auto",
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
  const [css, _$theme] = useStyletron();

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
  const [css, _$theme] = useStyletron();

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
  const [css, _$theme] = useStyletron();

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
  const [css, _$theme] = useStyletron();

  return <div
    className={css({
      width: "100%",
      height: "100%",
      paddingLeft: "150px",
      paddingRight: "150px",
      "@media screen and (max-width: 1300px)": {
        paddingLeft: "3%",
        paddingRight: "3%",
      },

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
  </div >
}

const SkyBackground = () => {
  const [css, _$theme] = useStyletron();

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
                    window.open("https://forms.gle/DswuFCy1NvBG5m6Z6", "_blank");
                  }
                }
              >Join our Team!</SignUpButton>
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
  const [css, _$theme] = useStyletron();
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles = {
    width: "100%",
    height: "fit-content",
    cursor: "pointer",
    background: "transparent",
    border: "5px solid #000",
    borderRadius: "100px",
    display: "flex",
    padding: "32px",
    paddingLeft: "80px",
    alignContent: "center",
    alignItems: "flex-start",
    transition: "height 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out",
    "@media screen and (max-width: 1300px)": {
      borderRadius: "50px",
    }
  };

  // if the width of the viewport is <=600px we want to render the mobile version of the accordion 
  if (window.innerWidth <= 600) {
    return (
      <>
        <div
          meta-answer={props.answer}
          meta-question={props.question}
          onClick={
            () => {
              setIsOpen(!isOpen);
            }
          }
          id={`question-${props.question}`}
          className={css(baseStyles)}
        >
          <h1 className={
            css({
              color: "#000",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              paddingTop: "5px",

            })
          }>
            {props.question}
          </h1>
        </div>

        <Modal
          mountNode={document.body}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          overrides={
            {
              Root: {
                style: {
                  zIndex: 1000,
                }
              },
            }
          }
        >
          <div
            className={
              css({
                padding: "32px",
              })
            }>
            <h1 className={
              css({
                color: "#000",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "auto",
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
                fontFamily: "Poppins",

                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                fontSize: "15px",
              })
            }>
              <ReactMarkdown>{props.answer}</ReactMarkdown>
            </p>
          </div>
        </Modal>
      </>);
  }


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
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            paddingTop: "5px",

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
        height: "fit-content",
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
          fontSize: "auto",
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
          fontFamily: "Poppins",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "normal",
          paddingLeft: "44px",
          "@media screen and (max-width: 1300px)": {
            fontSize: "1.75vw",
            paddingLeft: "0",
          }
        })
      }>
        <ReactMarkdown>{"✦ " + props.answer}</ReactMarkdown>
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
          zIndex: 5,
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
            <QuestionAccordion question="What is cuHacking?" answer={
              `cuHacking is Carleton University's official hackathon event. It's a dynamic and exciting gathering where participants come together to innovate, collaborate, and create solutions to various challenges. Whether you're a tech enthusiast, developer, designer, or simply curious about technology, cuHacking provides a unique platform for you to engage with like-minded individuals, learn new skills, and turn your ideas into reality.
              `
            } />
            <QuestionAccordion question="Who can participate?" answer={`cuHacking is open to a wide range of participants, including university and high school students. It's not limited to computer science or software engineering; we encourage individuals with various skills and interests to join. Teams can consist of up to four members, and we welcome anyone who is interested in problem-solving and innovation, regardless of their field of study or background. It's a platform where diverse talents can come together to explore new possibilities.`} />
            <QuestionAccordion question="What does it cost?" answer="cuHacking costs nothing to attend! We will also try to provide travel reimbursements and arrangements for partipicants coming from outside of Ottawa." />
            <QuestionAccordion question="What are the prizes?" answer={`The specific prizes have yet to be determined but they can vary from cash prizes, physical items such as laptops and of course, gift cards.`} />
            <QuestionAccordion question="Do I need coding experience?" answer={`
No, coding experience is not a requirement to participate in cuHacking. We welcome participants with varying levels of coding experience, from beginners to seasoned coders. Our event is designed to be inclusive, offering opportunities for skill development and learning. Whether you're new to coding and want to explore this field or you're an experienced coder looking to hone your skills further, cuHacking provides a supportive environment for everyone. You'll have the chance to collaborate, learn, and innovate, regardless of your coding background.`} />
          </Column>
        </Section>


        <Section title="Past Sponsors">
          <Sponsors />
        </Section>

        <FooterDecorator />
      </Column>
    </Column>
  );
};

export default App;
