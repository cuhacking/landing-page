import carleton from "../HeroSVG/carleton.svg";
import mountainBig from "../HeroSVG/mountain_big.svg";
import mountainSmall from "../HeroSVG/mountain_small.svg";
import raven from "../HeroSVG/raven.svg";
import snow from "../HeroSVG/snow.svg";

import "./Hero.scss";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ImageCarousel } from "./ImageCarousel";
import { useStyletron } from "baseui";
import { Heading, Paragraph } from "./Typography";

export const Hero = () => {
  const [css, $theme] = useStyletron();

  return (
    <Parallax pages={3}>
      <ParallaxLayer offset={0} speed={0.75}>
        <img className="mountain-small" src={mountainSmall} alt="mountain" />
        <div className="sunrise-gradient"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1}>
        <img className="mountain-big" src={mountainBig} alt="mountain-big" />
        <div className="sunrise-gradient"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.9} speed={2}>
        <div>
          <img className="land snow" src={snow} alt="snow" />
          <img className="land carleton" src={carleton} alt="carleton" />
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.98} speed={2}>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          })}
          id="#about"
        >
          <Heading>❆⋆ What is cuHacking? ⋆❆</Heading>
          <ImageCarousel />
          <Paragraph
            $style={{
              paddingLeft: "20%",
              paddingRight: "20%",
              alignContent: "center",
              justifyContent: "center",
              display: "flex",
              textAlign: "center",
              marginTop: "84px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est.
          </Paragraph>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};
