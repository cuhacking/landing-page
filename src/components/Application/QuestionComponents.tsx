import { LabelHTMLAttributes} from "react";
import { Question, FormOutput } from "./Apply";

let inputNumber = 0;

const handleInputNumber = (index: number) => {
	inputNumber = index;
};

const handleEnterKey = (e: React.KeyboardEvent<HTMLElement>, questions: Question[]) => {
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

export const QuestionCard = (props: { children: React.ReactNode, questions: Question[] }) => {
	return (
		<div className="apply-question-card">
			<div>
				{props.children}
				<Button onClick={() => handleNextButton(props.questions)}>{">"}</Button>
				<Button onClick={() => handleBackButton(props.questions)}>{"<"}</Button>
			</div>
		</div>
	);
};

export const TextInput = (props: {
	question: string;
	questionId: string;
  variable: string, 
  setVar: React.Dispatch<React.SetStateAction<string>>;
	index: number;
  questions: Question[];
}) => {
	return (
		<QuestionCard questions={props.questions}>
			<Label htmlFor={props.questionId}>{props.question}</Label>
			<input
				className="apply-text-input"
				type="text"
        name={props.questionId}
				id={props.questionId}
				onKeyUp={(e) => {handleEnterKey(e, props.questions)}}
				onClick={() => { handleInputNumber(props.index);}}
        value={props.variable} 
        onChange={(e) => props.setVar(e.target.value)}
			></input>
		</QuestionCard>
	);
};

export const MultipleChoice = (props: {
  question: string;
  choices: string[];
  questionId: string;
  variable: string;
  setVar: React.Dispatch<React.SetStateAction<string>>;
  index: number;
  questions: Question[];
}) => {
	return (
		<QuestionCard questions={props.questions}>
			<Label htmlFor={props.questionId}>{props.question}</Label>
			{props.choices.map((choice, index) => (
				<div className="apply-radio" key={index}>
					<input
						type="radio"
						id={props.questionId.concat(index.toString())}
						name={props.questionId}
            value={choice} 
            onKeyUp={(e) => {handleEnterKey(e, props.questions);}} 
						onClick={() => {handleInputNumber(props.index);}}
            onChange={() => {props.setVar(choice);}}
					></input>
					<label htmlFor={props.questionId.concat(index.toString())}>{choice}</label>{" "}
					<br></br>
				</div>
			))}
		</QuestionCard>
	);
};

export const Dropdown = (props: {
  question: string;
  choices: string[];
  questionId: string;
  variable: string;
  setVar: React.Dispatch<React.SetStateAction<string>>;
  index: number;
  questions: Question[];
}) => {
	return (
		<QuestionCard questions={props.questions}>
			<Label htmlFor={props.questionId}>{props.question}</Label>
			<select
				className="apply-dropdown"
				name={props.questionId}
				id={props.questionId}
				onKeyUp={(e) => {handleEnterKey(e, props.questions);}}
				onClick={() => { handleInputNumber(props.index);}}
        onChange={(e) => {props.setVar(e.target.value);}}
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

const getProperty= (obj: FormOutput, key: keyof FormOutput) => {
  return obj[key];
}

export const ReviewQuestions = (props: {
  questions: Question[];
  answers: FormOutput;

}) => {
  return (
    <div>
      <h1>REVIEW APPLICATION</h1>
      <br></br>
      {props.questions.map((q, index) => (
        <div key={index}>
          <p>{q.question} {getProperty(props.answers, q.questionId as keyof FormOutput)}</p>
          <br></br>
        </div>
      ))}
    </div>
  )
}
