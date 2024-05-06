import "./Hero.scss";
import carleton from "/hero-svgs/carleton.svg";
import mountainBig from "/hero-svgs/mountain_big.svg";
import mountainSmall from "/hero-svgs/mountain_small.svg";
import raven from "/hero-svgs/raven.svg";
import snow from "/hero-svgs/snow.svg";

import { EmailSignup } from "./EmailSignup";

export const Hero = () => {
	return (
		<div className="hero">
			{/* <div className="hero__background">
				<img className="image mountain-big" src={mountainBig} alt="Mountain" />
				<img className="image mountain-small" src={mountainSmall} alt="Mountain" />
				<img className="image snow" src={snow} alt="Snow" />
				<img className="image carleton" src={carleton} alt="Carleton University campus" />
				<img className="image raven" src={raven} alt="Raven" />
			</div> */}
			<div className="hero__content">
				<EmailSignup />
			</div>
		</div>
	);
};
