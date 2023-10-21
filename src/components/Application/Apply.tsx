import { useStyletron } from "baseui";
import { useState } from "react";

export const Apply = () => {
    // const [css, _$theme] = useStyletron();
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [inputNumber, setInputNumber] = useState(0);

    const questions = [
        {
            type: "text",
            question: "First Name: ",
            questionId: "fname",
            variable: fname,
            setVar: setfname
        },
        {
            type: "text",
            question: "Last Name: ",
            questionId: "lname",
            variable: lname,
            setVar: setlname
        },
        {
            type: "mc",
            question: "What school do you go to?",
            choices: [
                "Carleton University",
                "Ottawa U",
                "Other"
            ],
            questionId: "school"
        },
        {
            type: "dropdown",
            question: "What year are you in?",
            choices: [
                "First year",
                "Second year",
                "Third year",
                "Fourth year",
                "Other"
            ],
            questionId: "year"
        }
    ]

    const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // console.log(e.key);
        if (e.key == "Enter" || e.key == "ArrowDown"){
            if(inputNumber < questions.length - 1){
                setInputNumber(inputNumber+1);
            }

            let id = questions[inputNumber+1].questionId;
            if (questions[inputNumber+1].type == "mc") {
                id = id.concat("0");
            }

            document.getElementById(id)?.focus();
            // console.log(inputNumber);
        }

        if (e.key == "ArrowUp"){
            if(inputNumber > 0){
                setInputNumber(inputNumber-1);
            }

            let id = questions[inputNumber+1].questionId;
            if (questions[inputNumber+1].type == "mc") {
                id = id.concat("0");
            }

            document.getElementById(id)?.focus();
            // console.log(inputNumber);
        }
    };

    return (
        <div>
            Join cuHacking 2024!
            
            <form>
                {questions.map((q, index) => 
                    {
                    if (q.type == "text"){
                        return <TextInput key={index} question={q.question} questionId={q.questionId} variable={q.variable} setVar={q.setVar} handleEnterKey={handleEnterKey} /> 
                    }
                    else if (q.type == "mc"){
                        return <MultipleChoice key={index} question={q.question} choices={q.choices} questionId={q.questionId} handleEnterKey={handleEnterKey} />
                    }
                    else if (q.type == "dropdown"){
                        return <Dropdown key={index} question={q.question} choices={q.choices} questionId={q.questionId} />
                    }
                    
                    }
                )}
                
            </form>
        </div>
    );
}

export const TextInput = (props: { 
                                    question: string, 
                                    questionId: string, 
                                    variable: string, 
                                    setVar: React.Dispatch<React.SetStateAction<string>>,
                                    handleEnterKey: React.KeyboardEventHandler<HTMLInputElement>
                                }) => {
    
    return (
        <div>
            <label htmlFor={props.questionId}>{props.question}</label>
            <input type="text" id={props.questionId} onKeyUp={props.handleEnterKey} value={props.variable} onChange={(e)=>props.setVar(e.target.value)}></input>
        </div>
    )
}

export const MultipleChoice = ( props: { question: string, choices: string[], questionId: string, handleEnterKey: React.KeyboardEventHandler<HTMLInputElement> }) => {
    return (
        <div>
            <p>{props.question}</p> 
            {
                props.choices.map((choice, index) => (
                    <div key={index}>
                        <input type="radio" id={props.questionId.concat(index.toString())} name={props.questionId} onKeyUp={props.handleEnterKey}></input>
                        <label htmlFor={props.questionId.concat(index.toString())}>{choice}</label> <br></br>
                    </div>
                ))
            }
        </div>
    )
}

export const Dropdown = ( props: { question: string, choices: string[], questionId: string }) => {
    return (
        <div>
            <label htmlFor={props.questionId}>{props.question}</label>
            <select name={props.questionId} id={props.questionId}>

                {props.choices.map((choice, index) => (
                    <option key={index} id={index.toString()} value={choice}>{choice}</option>
                ))}

            </select>
        </div>
    )
}

