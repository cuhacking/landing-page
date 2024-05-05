import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

export const Heading = (props: { children: React.ReactNode; $style?: StyleObject }) => {
	const [css, $theme] = useStyletron();
	return (
		<a className="flex text-6xl font-bold font-display" href="heading">
			<h1>❆* </h1>
			<h1>{props.children}</h1>
			<h2>*❆</h2>
		</a>
	);
};

export const Paragraph = (props: { children: React.ReactNode; $style?: StyleObject }) => {
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
