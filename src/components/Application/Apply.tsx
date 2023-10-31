import "./Apply.css";
import { TextInput, MultipleChoice, Dropdown } from "./QuestionComponents"
import { useEffect } from "react";

interface Question {
    type: string,
    question: string,
    questionId: string,
    // variable: string,
    // setVar: React.Dispatch<React.SetStateAction<string>>,
    choices: string[]
}

interface FormOutput {
    firstName: string,
    lastName: string,
    school: string,
    year: string
}

export const questions: Question[] = [
    {
        type: "text",
        question: "First Name: ",
        questionId: "fname",
        // variable: fname,
        // setVar: setfname,
        choices: []
    },
    {
        type: "text",
        question: "Last Name: ",
        questionId: "lname",
        // variable: lname,
        // setVar: setlname,
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
        questionId: "year2"
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

export const Apply = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById(questions[0].questionId)?.focus();
    }, []);

    return (
        <div className="up">
            <div id="apply-background">
                <div id="apply-background_blue-gradient"></div>
                <div id="apply-background_pink-gradient"></div>
            </div>

            <form id="apply-form">
                {questions.map((q, index) => {
                    if (q.type == "text") {
                        return <TextInput key={index} question={q.question} questionId={q.questionId} /*variable={q.variable} setVar={q.setVar}*/ index={index} />
                    }
                    else if (q.type == "mc") {
                        return <MultipleChoice key={index} question={q.question} choices={q.choices} questionId={q.questionId} index={index} />
                    }
                    else if (q.type == "dropdown") {
                        return <Dropdown key={index} question={q.question} choices={q.choices} questionId={q.questionId} index={index} />
                    }
                })}

            </form>
        </div>
    );
}



