import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

export const Heading = (props: {
  children: React.ReactNode;
  $style?: StyleObject;
}) => {
  const [css, $theme] = useStyletron();
  return (
    <a
      className={css({
        fontFamily: "Lexend Deca",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "75px",
        lineHeight: "94px",
        color: "#2A2547",
        letterSpacing: "0.05em",
        ...props.$style,
      })}
    >
      {props.children}
    </a>
  );
};

export const Paragraph = (props: {
  children: React.ReactNode;
  $style?: StyleObject;
}) => {
  const [css, $theme] = useStyletron();
  return (
    <a
      className={css({
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "27px",
        letterSpacing: "0.05em",
        ...props.$style,
      })}
    >
      {props.children}
    </a>
  );
};
