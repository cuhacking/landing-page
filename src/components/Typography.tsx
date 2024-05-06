import { useStyletron } from "baseui";
import { StyleObject } from "styletron-react";

export enum Typo {
	TITLE,
	TITLE_2,
	TITLE_3,
	SUBTITLE,
	PARAGRAPH,
}

export const Text: React.FC<{ children: React.ReactNode; typo?: Typo; className?: string }> = (
	props
) => {
	switch (props.typo) {
		case Typo.TITLE:
			return <h1 className={"text-9xl font-bold font-display " + props.className}>{props.children}</h1>;
		case Typo.TITLE_2:
			return <h2 className={"text-6xl font-display " + props.className}>{props.children}</h2>;
		case Typo.TITLE_3:
			return <h2 className={"text-4xl font-bold font-body text-secondary " + props.className}>{props.children}</h2>;
		case Typo.SUBTITLE:
			return <h5 className={"font-body " + props.className}>{props.children}</h5>;
		case Typo.PARAGRAPH:
			return <p className={"font-body " + props.className}>{props.children}</p>;
		default:
			return <div className={props.className}>{props.children}</div>;
	}
};

export const Heading = (props: { children: React.ReactNode }) => {
	return (
		<div className="my-14 px-20 ">
			<a className="flex justify-center items-center" href="heading">
				<Text typo={Typo.TITLE_2}>❆*</Text>
				<Text typo={Typo.TITLE_2} className="mx-10 font-bold text-center ">{props.children}</Text>
				<Text typo={Typo.TITLE_2}>*❆</Text>
			</a>
		</div>
	);
};
