import { LabelHTMLAttributes, useState} from "react";
import { Question } from "./Apply";

let inputNumber = 0;

const handleInputNumber = (index: number) => {
	inputNumber = index;
};

const handleEnterKey = (e: React.KeyboardEvent<HTMLElement>) => {
	if (e.key == "Enter") {
		if (inputNumber < questions.length - 1) {
			inputNumber++;
		}

		let id = questions[inputNumber].questionId;
		if (questions[inputNumber].type == "mc") {
			id = id.concat("0");
		}

		document.getElementById(id)?.focus();
	}
};

const handleNextButton = (questions: Question[]) => {
  if (inputNumber < questions.length - 1) {
  	inputNumber++;
  }
  
	let id = questions[inputNumber].questionId;
	if (questions[inputNumber].type == "mc") {
		id = id.concat("0");
	}

	document.getElementById(id)?.focus();
};

const handleBackButton = (questions: Question[]) => {
  if (inputNumber > 0) {
  	inputNumber--;
  }

	let id = questions[inputNumber].questionId;
	if (questions[inputNumber].type == "mc") {
		id = id.concat("0");
	}

	document.getElementById(id)?.focus();
};

// function handleOnChange(e: React.FormEvent<HTMLDivElement>, setFunction: React.Dispatch<React.SetStateAction<string>>){
//   setFunction(e.target.value);
// }

export const Button = (props: { children: React.ReactNode; onClick: () => void }) => {
	return (
		<div className="apply-button" onClick={props.onClick}>
			{props.children}
		</div>
	);
};

export const Label = (props: { children: React.ReactNode } & LabelHTMLAttributes<HTMLLabelElement>) => {
	return (
		<label className="apply-question" {...props}>
			{props.children}
		</label>
	);
};

export const QuestionCard = (props: { children: React.ReactNode }) => {
	return (
		<div className="apply-question-card">
			<div>
				{props.children}
				<Button onClick={handleNextButton}>{">"}</Button>
				<Button onClick={handleBackButton}>{"<"}</Button>
			</div>
		</div>
	);
};

export const TextInput = (props: {
	question: string;
	questionId: string /*variable: string, setVar: React.Dispatch<React.SetStateAction<string>>,*/;
	index: number;
}) => {
	return (
		<QuestionCard>
			<Label htmlFor={props.questionId}>{props.question}</Label>
			<input
				className="apply-text-input"
				type="text"
				id={props.questionId}
				onKeyUp={handleEnterKey}
				onClick={() => { handleInputNumber(props.index);}} /*value={props.variable} onChange={(e) => props.setVar(e.target.value)}*/
			></input>
		</QuestionCard>
	);
};

export const MultipleChoice = (props: {
  question: string, choices: string[], questionId: string, variable: string, setVar: React.Dispatch<React.SetStateAction<string>>, index: number, questions: Question[]
}) => {
	return (
		<QuestionCard>
			<Label htmlFor={props.questionId}>{props.question}</Label>
			{props.choices.map((choice, index) => (
				<div className="apply-radio" key={index}>
					<input
						type="radio"
						id={props.questionId.concat(index.toString())}
						name={props.questionId}
						onKeyUp={handleEnterKey}
						onClick={() => {handleInputNumber(props.index);}}
					></input>
					<label htmlFor={props.questionId.concat(index.toString())}>{choice}</label>{" "}
					<br></br>
				</div>
			))}
		</QuestionCard>
	);
};

export const Dropdown = (props: {
  question: string, choices: string[], questionId: string, variable: string, setVar: React.Dispatch<React.SetStateAction<string>>, index: number, questions: Question[]
}) => {
	return (
		<QuestionCard>
			<Label htmlFor={props.questionId}>{props.question}</Label>
			<select
				className="apply-dropdown"
				name={props.questionId}
				id={props.questionId}
				onKeyUp={handleEnterKey}
				onClick={() => { handleInputNumber(props.index);}}
			>
				{props.choices.map((choice, index) => (
					<option key={index} id={index.toString()} value={choice}>
						{choice}
					</option>
				))}
			</select>
		</QuestionCard>
	);
};
