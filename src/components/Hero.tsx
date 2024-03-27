import carleton from "../HeroSVG/carleton.svg";
import mountainBig from "../HeroSVG/mountain_big.svg";
import mountainSmall from "../HeroSVG/mountain_small.svg";
import raven from "../HeroSVG/raven.svg";
import snow from "../HeroSVG/snow.svg";

import "./Hero.scss";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const Hero = () => {
	return (
		<div>
			<Parallax pages={3}>
				<ParallaxLayer offset={0} speed={0.75}>
					<img className="mountain-small" src={mountainSmall} alt="mountain" />
				</ParallaxLayer>

				<ParallaxLayer offset={0} speed={1}>
					<img className="mountain-big" src={mountainBig} alt="mountain-big" />
				</ParallaxLayer>

				<ParallaxLayer offset={0.9} speed={2}>
                    <div>
                        <img className="land snow" src={snow} alt="snow" />
                        <img className="land carleton" src={carleton} alt="carleton" />
                    </div>
					
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};
