import React from "react";
import { useConfetti } from "./Confetti";
import { FrostedPanel } from "../../../components/FrostedPanel";
import { Text, Typo } from "../../../components/Typography";

export const EmailSignup = () => {
	return (
		<FrostedPanel>
				<div className="flex flex-col items-center justify-center">
					<Text typo={Typo.TITLE_3}>Coming in 2025!</Text>
					<Text typo={Typo.TITLE}>cuHacking</Text>
					<Text typo={Typo.SUBTITLE}>Carleton University's Official Hackathon</Text>
					<EmailSubscriptionForm />
				</div>
		</FrostedPanel>
	);
};

export const SponsorEmailSignup = () => {
	return (
		<FrostedPanel>
      <div className="flex flex-col items-center justify-center">
			<a>Interested in becoming a sponsor?</a>
			<SponsorEmailSubscriptionForm />
      </div>
		</FrostedPanel>
	);
};

export const EmailSubscriptionForm = () => {
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
		<div className="flex mt-5 w-full">
			<input
				type="text"
				placeholder="Email"
				className="input input-bordered mr-5 rounded-full w-full "
				onChange={(e) => setValue(e.currentTarget.value)}
				onKeyUp={(e) => {
					if (e.key === "Enter") submitEmail();
				}}
			/>
			<button
				className="btn btn-secondary rounded-full"
				onClick={() => {
					submitEmail();
				}}
			>
				SUBSCRIBE
			</button>
		</div>
	);
};

export const SponsorEmailSubscriptionForm = () => {
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
		<div className="flex mt-5 w-full">
			<input
				type="text"
				placeholder="Email"
				className="input input-bordered mr-5 rounded-full w-full "
				onChange={(e) => setValue(e.currentTarget.value)}
				onKeyUp={(e) => {
					if (e.key === "Enter") submitEmail();
				}}
			/>
			<button
				className="btn btn-outline btn-secondary rounded-full"
				onClick={() => {
					submitEmail();
				}}
			>
				SIGN UP
			</button>
		</div>
	);
};
