import { useState } from "react";
import { questions } from "./Apply";

let inputNumber = 0;

const handleInputNumber = (index: number) => {
  inputNumber = index;
}

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

const handleNextButton = () => {
  inputNumber++;
  let id = questions[inputNumber].questionId;
  if (questions[inputNumber].type == "mc") {
      id = id.concat("0");
  }

  document.getElementById(id)?.focus();
  
};

const handleBackButton = () => {
  inputNumber--;
  let id = questions[inputNumber].questionId;
  if (questions[inputNumber].type == "mc") {
      id = id.concat("0");
  }

  document.getElementById(id)?.focus();
};

export const TextInput = (props: {
  question: string, questionId: string, /*variable: string, setVar: React.Dispatch<React.SetStateAction<string>>,*/
  index: number
}) => {

  return (
    <div className="apply-question-card">
      <div>
        <label className="apply-question" htmlFor={props.questionId}>{props.question}</label>
        <input className="apply-text-input" type="text" id={props.questionId} onKeyUp={handleEnterKey} onClick={() => { handleInputNumber(props.index) }} /*value={props.variable} onChange={(e) => props.setVar(e.target.value)}*/></input>
        <div className="apply-button" onClick={handleBackButton}>BACK</div>
        <div className="apply-button" onClick={handleNextButton}>NEXT</div>
      </div>
    </div>
  )
}

export const MultipleChoice = (props: {
  question: string, choices: string[], questionId: string, index: number
}) => {
  return (
    <div className="apply-question-card">
      <div>
        <p className="apply-question">{props.question} </p>
        {
          props.choices.map((choice, index) => (
            <div className="apply-radio" key={index}>
              <input type="radio" id={props.questionId.concat(index.toString())} name={props.questionId} onKeyUp={handleEnterKey} onClick={() => { handleInputNumber(props.index) }} ></input>
              <label htmlFor={props.questionId.concat(index.toString())}>{choice}</label> <br></br>
            </div>
          ))
        }
        <div className="apply-button" onClick={handleBackButton}>BACK</div>
        <div className="apply-button" onClick={handleNextButton}>NEXT</div>
      </div>
    </div>
  )
}

export const Dropdown = (props: {
  question: string, choices: string[], questionId: string, index: number
}) => {
  return (
    <div className="apply-question-card">
      <div>
        <label className="apply-question" htmlFor={props.questionId}>{props.question}</label>
        <select className="apply-dropdown" name={props.questionId} id={props.questionId} onKeyUp={handleEnterKey} onClick={() => { handleInputNumber(props.index)} }>

          {props.choices.map((choice, index) => (
            <option key={index} id={index.toString()} value={choice} >{choice}</option>
          ))}

        </select>
        <div className="apply-button" onClick={handleBackButton}>BACK</div>
        <div className="apply-button" onClick={handleNextButton}>NEXT</div>
      </div>
    </div>
  )
}

