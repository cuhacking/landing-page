import { useStyletron } from "baseui";
import { Button } from "baseui/button";
import { Input } from "baseui/input";
import React from "react";
import ReactConfetti from "react-confetti";
import Confetti from "react-confetti/dist/types/Confetti";
import { useConfetti } from "./Confetti";
import { StyleObject } from "styletron-react";

export const Title = (props: { children: React.ReactNode }) => {
  const [css, $theme] = useStyletron();
  return (
    <a
      className={css({
        fontFamily: "Lexend Deca",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "115px",
        lineHeight: "144px",
        letterSpacing: "-0.07em",
        color: "#2A2547",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
      })}
    >
      {props.children}
    </a>
  );
};

export const DateText = (props: { children: React.ReactNode }) => {
  const [css, $theme] = useStyletron();
  return (
    <a
      className={css({
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "30px",
        lineHeight: "45px",
        letterSpacing: "0.05em",
        color: "#F05FAE",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
      })}
    >
      {props.children}
    </a>
  );
};

export const Subtitle = (props: { children: React.ReactNode }) => {
  const [css, $theme] = useStyletron();
  return (
    <a
      className={css({
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: 300,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.05em",
        color: "#2A2547",
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        marginTop: "-10px",
        padding: "0px",
      })}
    >
      {props.children}
    </a>
  );
};

export const EmailSubscriptionForm = () => {
  const [css, $theme] = useStyletron();
  const [value, setValue] = React.useState("");
  const [prevSubmissions, setPrevSubmissions] = React.useState([] as string[]);
  const { activate } = useConfetti();

  const submitEmail = () => {
    const payload = {
      email: value,
      emailType: "email-subscription",
    };
    if (prevSubmissions.includes(value)) {
      return;
    }
    fetch("https://hooks.zapier.com/hooks/catch/18464353/3p8hlfr/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(payload),
    });

    setPrevSubmissions([...prevSubmissions, value]);
    activate();
  };

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "14px",
        marginTop: "21px",
      })}
    >
      <Input
        placeholder="Email"
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            submitEmail();
          }
        }}
        overrides={{
          Root: {
            style: {
              backgroundColor: "#EFF7FF",
              borderRadius: "119px",
              width: "314px",
              border: "none",
              height: "44px",
            },
          },
        }}
      />
      <Button
        onClick={() => {
          submitEmail();
        }}
        overrides={{
          Root: {
            style: {
              backgroundColor: "#F05FAE",
              borderRadius: "119px",
              width: "143px",
              height: "44px",
            },
          },
        }}
      >
        Subscribe
      </Button>
    </div>
  );
};

export const FrostedPanel = (props: {
  children: React.ReactNode;
  $style?: StyleObject;
}) => {
  const [css, $theme] = useStyletron();

  return (
    <div
      className={css({
        width: "830px",
        height: "329px",
        border: "1px solid #E5E5E5",
        borderRadius: "45px",
        backgroundSize: "cover",

        boxShadow:
          "inset -17px -12px 87.9px -51px #EDCBE9, inset -2px -2px 100px rgba(255, 255, 255, 0.1), inset 2px 2px 100px rgba(66, 66, 66, 0.1)",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))",
        backdropFilter: "blur(25px)",
        ...props.$style,
      })}
    >
      {props.children}
    </div>
  );
};

export const EmailSignup = () => {
  const [css, $theme] = useStyletron();

  return (
    <FrostedPanel>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            width: "100%",
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "90px",
            paddingRight: "90px",
          })}
        >
          <DateText>Coming in 2025!</DateText>
          <Title>cuHacking</Title>
          <Subtitle>Carleton University's Official Hackathon</Subtitle>
          <EmailSubscriptionForm />
        </div>
      </div>
    </FrostedPanel>
  );
};

export const SponsorEmailSubscriptionForm = () => {
  const [css, $theme] = useStyletron();
  const [value, setValue] = React.useState("");
  const [prevSubmissions, setPrevSubmissions] = React.useState([] as string[]);
  const { activate } = useConfetti();

  const submitEmail = () => {
    const payload = {
      email: value,
      emailType: "sponsor",
    };
    if (prevSubmissions.includes(value)) {
      return;
    }
    fetch("https://hooks.zapier.com/hooks/catch/18464353/3p8hlfr/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(payload),
    });

    setPrevSubmissions([...prevSubmissions, value]);
    activate();
  };

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "14px",
        marginTop: "21px",
      })}
    >
      <Input
        placeholder="Email"
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            submitEmail();
          }
        }}
        overrides={{
          Root: {
            style: {
              backgroundColor: "#EFF7FF",
              borderRadius: "119px",
              width: "314px",
              border: "none",
              height: "44px",
            },
          },
        }}
      />
      <Button
        onClick={() => {
          submitEmail();
        }}
        overrides={{
          Root: {
            style: {
              backgroundColor: "transparent",
              borderRadius: "119px",
              width: "143px",
              height: "44px",

              color: "#2A2547",
              border: "2px solid #2A2547",
            },
          },
        }}
      >
        SIGN UP
      </Button>
    </div>
  );
};

export const SponsorEmailSignup = () => {
  const [css, $theme] = useStyletron();

  return (
    <FrostedPanel
      $style={{
        height: "193px",
      }}
    >
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
            width: "100%",
            paddingTop: "40px",
            paddingBottom: "40px",
            paddingLeft: "90px",
            paddingRight: "90px",
          })}
        >
          <a
            className={css({
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "54px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              letterSpacing: "0.05em",
            })}
          >
            Interested in becoming a sponsor?
          </a>
          <SponsorEmailSubscriptionForm />
        </div>
      </div>
    </FrostedPanel>
  );
};
