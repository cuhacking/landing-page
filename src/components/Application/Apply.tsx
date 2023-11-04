import "./Apply.css";
import { TextInput, MultipleChoice, Dropdown, ReviewQuestions } from "./QuestionComponents"
import { useState, useEffect } from "react";

export interface Question {
    type: string,
    question: string,
    questionId: string,
    variable: string,
    setVar: React.Dispatch<React.SetStateAction<string>>,
    choices: string[]
}

export interface FormOutput {
    firstName: string,
    lastName: string,
    school: string,
    year: string
}

export const Apply = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [year2, setYear2] = useState("");
    const [school, setSchool] = useState("");
    const [year, setYear] = useState("");

    const questions: Question[] = [
        {
            type: "text",
            question: "First Name: ",
            questionId: "firstName",
            variable: fname,
            setVar: setFname,
            choices: []
        },
        {
            type: "text",
            question: "Last Name: ",
            questionId: "lastName",
            variable: lname,
            setVar: setLname,
            choices: []
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
            variable: year2,
            setVar: setYear2,
            questionId: "year2"
        },
        {
            type: "mc",
            question: "What school do you go to?",
            choices: [
                "Carleton University",
                "mouse U",
                "ravens U",
                "turkey U",
                "chicken U",
                "koala U",
                "Other"
            ],
            variable: school,
            setVar: setSchool,
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
            variable: year,
            setVar: setYear,
            questionId: "year"
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById(questions[0].questionId)?.focus();
    }, []);

    // User's choices
    const output: FormOutput = {
        firstName: fname,
        lastName: lname,
        school: school,
        year: year
    }

    console.log(output); // debugging: will remove later
    
    return (
        <div className="up">
            <div id="apply-background">
                <div id="apply-background_blue-gradient"></div>
                <div id="apply-background_pink-gradient"></div>
            </div>

            <form id="apply-form">
                {questions.map((q, index) => {
                    if (q.type == "text") {
                        return <TextInput key={index} question={q.question} questionId={q.questionId} variable={q.variable} setVar={q.setVar} index={index} questions={questions} />
                    }
                    else if (q.type == "mc") {
                        return <MultipleChoice key={index} question={q.question} choices={q.choices} questionId={q.questionId} variable={q.variable} setVar={q.setVar} index={index} questions={questions} />
                    }
                    else if (q.type == "dropdown") {
                        return <Dropdown key={index} question={q.question} choices={q.choices} questionId={q.questionId} variable={q.variable} setVar={q.setVar} index={index} questions={questions} />
                    }
                })}

                <ReviewQuestions // Review page here temporarily until further decided where to put it.
                                 // TODO: Aashna please add css to make it look nice TT
                    questions={questions} answers={output}></ReviewQuestions>

            </form>
        </div>
    );
}
