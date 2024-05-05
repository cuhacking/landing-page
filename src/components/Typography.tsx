import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

export const Heading = (props: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <a className={"flex text-4xl " + props.className}>
      <h1>❆</h1>
      <h1 className="text-4xl text-center">{props.children}</h1>
      <h1>❆</h1>
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
