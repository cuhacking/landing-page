import { AllHTMLAttributes, LabelHTMLAttributes, useState } from "react";
import { questions } from "./Apply";
import { useStyletron } from "baseui";

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

export const Button = (props: { children: React.ReactNode, onClick: () => void }) => {
  const [css, $theme] = useStyletron();
  return (
    <div className={
      css({
        color: "#C5DFF8",
        backgroundColor: "#EC9292",
        float: "left",
        marginBottom: "1.5em",
        textAlign: "center",
        fontWeight: "700",
        letterSpacing: "0.1em",
        width: "4.5em",
        borderRadius: "4px",
      })
    } onClick={props.onClick}>{props.children}</div>
  );
}

export const Label = (props: { children: React.ReactNode } & LabelHTMLAttributes<HTMLLabelElement>) => {
  const [css, $theme] = useStyletron();

  return <label className={css({
    display: "block",
    marginBottom: "1em",
    fontWeight: "600",
    fontSize: "1.4em",
  })} {...props}>{props.children}</label>
}

export const QuestionCard = (props: { children: React.ReactNode }) => {
  const [css, $theme] = useStyletron();

  return <div className={css({
    position: "relative",
    display: "flex",
    alignItems: "center",
    height: "100vh",
  })}>
    <div className={
      css({
        width: "100%",
      })
    }>
      {props.children}
      <Button onClick={handleBackButton}>BACK</Button>
      <Button onClick={handleNextButton}>NEXT</Button>
    </div></div>
}

export const TextInput = (props: {
  question: string, questionId: string, /*variable: string, setVar: React.Dispatch<React.SetStateAction<string>>,*/
  index: number
}) => {
  const [css, $theme] = useStyletron();

  return (
    <QuestionCard>
      <Label htmlFor={props.questionId}>{props.question}</Label>
      <input className={
        css({
          all: "unset",
          marginBottom: "1em",
          width: "100%",
          fontSize: "1.5em",
          borderBottom: "3px solid #2A2547",
        })
      } type="text" id={props.questionId} onKeyUp={handleEnterKey} onClick={() => { handleInputNumber(props.index) }} /*value={props.variable} onChange={(e) => props.setVar(e.target.value)}*/></input>
    </QuestionCard >
  );
}

export const MultipleChoice = (props: {
  question: string, choices: string[], questionId: string, index: number
}) => {
  return (
    <QuestionCard>
      <Label htmlFor={props.questionId}>{props.question}</Label>
      {
        props.choices.map((choice, index) => (
          <div className="apply-radio" key={index}>
            <input type="radio" id={props.questionId.concat(index.toString())} name={props.questionId} onKeyUp={handleEnterKey} onClick={() => { handleInputNumber(props.index) }} ></input>
            <label htmlFor={props.questionId.concat(index.toString())}>{choice}</label> <br></br>
          </div>
        ))
      }
    </QuestionCard>)
}

export const Dropdown = (props: {
  question: string, choices: string[], questionId: string, index: number
}) => {
  return (
    <QuestionCard>
      <Label htmlFor={props.questionId}>{props.question}</Label>
      <select className="apply-dropdown" name={props.questionId} id={props.questionId} onKeyUp={handleEnterKey} onClick={() => { handleInputNumber(props.index) }}>
        {props.choices.map((choice, index) => (
          <option key={index} id={index.toString()} value={choice} >{choice}</option>
        ))}
      </select>
    </QuestionCard>
  )
}

