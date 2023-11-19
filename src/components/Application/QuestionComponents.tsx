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

const toggleVisibility = (isVisible: boolean, elementId: string) => {
	let element = document.getElementById(elementId);

	element!.style.visibility = isVisible ? 'visible' : 'hidden';
};

const showErrorMessage = (message: string, id: number) => {
	toggleVisibility(true, `msg${id}`);

	document.getElementById(`msg${id}`)!.innerText = message;

};

const hideErrorMessage = (id: number) => {
	toggleVisibility(false, `msg${id}`);

}

const goToNextQuestion = (questions: Question[], anchor: string) => {
	let id = questions[inputNumber].questionId;
	if (questions[inputNumber].type == "mc") {
		id = id.concat("0");
	}

	let loc = document.location.toString().split('#')[0];
	document.location = loc + anchor;
	// document.getElementById(anchor.slice(1))?.scrollIntoView();

	document.getElementById(id)?.focus({ preventScroll: true });
	
}

const getAnchor = (index: number) => {
	return `#question${index}`;
}

const handleReviewEdit = (index: number) => {
	document.getElementById("review-page")!.style.display = "none";
	document.getElementById("apply-form")!.style.display = "grid";
	inputNumber = index;
};

const handleEnterKey = (e: React.KeyboardEvent<HTMLElement>, questions: Question[]) => {
	if (e.key == "Enter") {
		if (!checkRequired(questions[inputNumber])){
			showErrorMessage("Oops! This field is required.", inputNumber);
			return;
		}

		if (inputNumber < questions.length - 1) {
			inputNumber++;
			goToNextQuestion(questions, getAnchor(inputNumber));
		} 
		else {
			document.getElementById("review-page")!.style.display = "block";
			document.getElementById("apply-form")!.style.display = "none";
		}
	}
};

const handleNextButton = (questions: Question[]) => {
	if (!checkRequired(questions[inputNumber])){
		showErrorMessage("Oops! This field is required.", inputNumber);
		return;
	}

	if (inputNumber < questions.length - 1) {
		inputNumber++;
		goToNextQuestion(questions, getAnchor(inputNumber));
	} 
	else {
		// toggleVisibility(true, "review-page");
		// toggleVisibility(false, "apply-form");

		document.getElementById("review-page")!.style.display = "block";
		document.getElementById("apply-form")!.style.display = "none";
	}
};

const handleBackButton = (questions: Question[]) => {
  if (inputNumber > 0) {
  	inputNumber--;
	goToNextQuestion(questions, getAnchor(inputNumber));
  }
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

export const QuestionCard = (props: { 
	children: React.ReactNode, 
	questions: Question[], 
	index: number, 
	animation: string 
}) => {
	return (
		<div className={`apply-question-card ${props.animation}`} id={`question${props.index}`}>
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

export const TitlePage = (props: {
	index: number;
  	questions: Question[];
	animation: string;
}) => {
	return (
		<div className={`apply-question-card align-center ${props.animation}`} id={`question${props.index}`} >
			<div>
				<div className="apply-title" >
					Welcome to cuHacking 2024:
				</div>
				<div className="apply-subheader">
					Canada's Capital Hackathon
				</div>

				<div className="apply-register-button" onClick={() => handleNextButton(props.questions)}>
					REGISTER
				</div>
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
	animation: string;
}) => {
	return (
		<QuestionCard questions={props.questions} index={props.index} animation={props.animation} >
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
  animation: string;
}) => {
	return (
		<QuestionCard questions={props.questions} index={props.index} animation={props.animation} >
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
  animation: string;
}) => {
	return (
		<QuestionCard questions={props.questions} index={props.index} animation={props.animation} >
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
				value={props.variable}
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
    <div id="review-page" className="apply-question-card align-center">
      <h1 className="apply-subheader">REVIEW APPLICATION</h1>
      <br></br>
      {props.questions.map((q, index) => {
		if (q.type != "title"){
			return (
				<div key={index}>
					<p>{q.question} {getProperty(props.answers, q.questionId as keyof FormOutput)}</p>
					<p><a onClick={() => handleReviewEdit(index)} href={getAnchor(index)} >edit</a></p> 
					<br></br>
				</div>
			)
		}
	  })}

		<div className="apply-register-button" /* Add click functionality with backend */>
			SUBMIT
		</div>
    </div>
  )
}
