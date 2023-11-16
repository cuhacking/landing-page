import { LabelHTMLAttributes } from "react";
import { Question, FormOutput } from "./Apply";

let inputNumber = 0;

const handleInputNumber = (index: number) => {
	inputNumber = index;
};

const checkRequired = (question: Question, value?: string) => {
	if (!question.required)
		return true;

	if (value === undefined) value = question.variable;

	if(value == "" || (question.type == "dropdown" && value == question.choices[0]))
		return false;

	return true;
};

const showErrorMessage = (message: string, id: number) => {
	let messageElement = document.getElementById(`msg${id}`);

	messageElement!.innerText = message;
	messageElement!.style.visibility = 'visible';

};

const hideErrorMessage = (id: number) => {
	let messageElement = document.getElementById(`msg${id}`);

	messageElement!.style.visibility = 'hidden';

}

const goToNextQuestion = (questions: Question[], anchor: string) => {
	let id = questions[inputNumber].questionId;
	if (questions[inputNumber].type == "mc") {
		id = id.concat("0");
	}

	var loc = document.location.toString().split('#')[0];
	document.location = loc + anchor;

	document.getElementById(id)?.focus({ preventScroll: true });
	
}

const getAnchor = (index: number) => {
	return `#question${index}`;
}

const handleEnterKey = (e: React.KeyboardEvent<HTMLElement>, questions: Question[]) => {
	if (!checkRequired(questions[inputNumber])){
		showErrorMessage("Oops! This field is required.", inputNumber);
		return;
	}

	if (e.key == "Enter") {
		if (inputNumber < questions.length - 1) {
			inputNumber++;
		}

		goToNextQuestion(questions, getAnchor(inputNumber));
	}
};

const handleNextButton = (questions: Question[]) => {
	if (!checkRequired(questions[inputNumber])){
		showErrorMessage("Oops! This field is required.", inputNumber);
		return;
	}

	if (inputNumber < questions.length - 1) {
		inputNumber++;
	} 

	goToNextQuestion(questions, getAnchor(inputNumber));
};

const handleBackButton = (questions: Question[]) => {
  if (inputNumber > 0) {
  	inputNumber--;
  }

	goToNextQuestion(questions, getAnchor(inputNumber));
};

const isRequired = (required: boolean) => {
	return (required) ? "*" : "";
}

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

export const QuestionCard = (props: { children: React.ReactNode, questions: Question[], index: number }) => {
	return (
		<div className="apply-question-card" id={`question${props.index}`}>
			<div>
				{props.children}
				<div>
					<p id={`msg${props.index}`}></p>
				</div>
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
		<QuestionCard questions={props.questions} index={props.index} >
			<Label htmlFor={props.questionId}>{props.question} {isRequired(props.questions[props.index].required)}</Label>
			<input
				className="apply-text-input"
				type="text"
    			name={props.questionId}
				id={props.questionId}
				onKeyUp={(e) => {handleEnterKey(e, props.questions)}}
				onClick={() => { handleInputNumber(props.index);}}
        		value={props.variable} 
        		onChange={(e) => {props.setVar(e.target.value); 
					if (checkRequired(props.questions[props.index], e.target.value)) hideErrorMessage(props.index);
				}}
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
		<QuestionCard questions={props.questions} index={props.index} >
			<Label htmlFor={props.questionId}>{props.question} {isRequired(props.questions[props.index].required)}</Label>
			{props.choices.map((choice, index) => (
				<div className="apply-radio" key={index}>
					<input
						type="radio"
						id={props.questionId.concat(index.toString())}
						name={props.questionId}
            			value={choice} 
            			onKeyUp={(e) => {handleEnterKey(e, props.questions);}} 
						onClick={() => {handleInputNumber(props.index);}}
            			onChange={() => {props.setVar(choice);
							if (checkRequired(props.questions[props.index], choice)) hideErrorMessage(props.index);
						}}
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
		<QuestionCard questions={props.questions} index={props.index} >
			<Label htmlFor={props.questionId}>{props.question} {isRequired(props.questions[props.index].required)}</Label>
			<select
				className="apply-dropdown"
				name={props.questionId}
				id={props.questionId}
				onKeyUp={(e) => {handleEnterKey(e, props.questions);}}
				onClick={() => { handleInputNumber(props.index);}}
        		onChange={(e) => {props.setVar(e.target.value);
					if (checkRequired(props.questions[props.index], e.target.value)) hideErrorMessage(props.index);
				}}
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

const getProperty = (obj: FormOutput, key: keyof FormOutput) => {
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
		  <p><a href={getAnchor(index)}>edit</a></p>
          <br></br>
        </div>
      ))}
    </div>
  )
}
