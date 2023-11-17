import "./Apply.css";
import { TextInput, MultipleChoice, Dropdown, ReviewQuestions } from "./QuestionComponents"
import { useState, useEffect } from "react";
import {useScrollDirection} from "./s"

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

    const [scrollDiretion, setScrollDiretion] = useState("");
    const [questionIndex, setQuestionIndex] = useState(0);

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

    window.addEventListener('wheel', (event) => {
        console.log(event.deltaY)
        if (event.deltaY < 0){
            setScrollDiretion("up");
        } else if (event.deltaY > 0 ){
            setScrollDiretion("down");
        }
    });

    window.addEventListener('scrollend', (event) => {
        if (scrollDiretion == "up" && questionIndex > 0){
            setQuestionIndex(questionIndex - 1);
        } else if (scrollDiretion == "down" && questionIndex < (questions.length -1)) {
            setQuestionIndex(questionIndex + 1);
        }
    });

    // window.addEventListener('scrollend', (event) => {
    //     console.log("fired");
    //     if (scrollDiretion == "up" && questionIndex > 0){
    //         setQuestionIndex(questionIndex - 1);
    //     } else if (scrollDiretion == "down" && questionIndex < 5) {
    //         setQuestionIndex(questionIndex + 1);
    //     }
    // });

    const questionRender = (q: Question, index: number) => {
        if (q.type == "text") {
            return <TextInput key={index} question={q.question} questionId={q.questionId} variable={q.variable} setVar={q.setVar} index={index} questions={questions} />
        }
        else if (q.type == "mc") {
            return <MultipleChoice key={index} question={q.question} choices={q.choices} questionId={q.questionId} variable={q.variable} setVar={q.setVar} index={index} questions={questions} />
        }
        else if (q.type == "dropdown") {
            return <Dropdown key={index} question={q.question} choices={q.choices} questionId={q.questionId} variable={q.variable} setVar={q.setVar} index={index} questions={questions} />
        }
    }

    //console.log(output); // debugging: will remove later
    
    return (
        <div className="up">
            <div id="apply-background">
                <div id="apply-background_blue-gradient"></div>
                <div id="apply-background_pink-gradient"></div>
            </div>

            <form id="apply-form">
                {questions.map((q, index) => questionRender(q, index))}
                {/* questionRender(questions[questionIndex], questionIndex) */}

                {/*// Review page here temporarily until further decided where to put it.
                // TODO: Aashna please add css to make it look nice TT
                 <ReviewQuestions questions={questions} answers={output}></ReviewQuestions>  */}

            </form>
        </div>
    );
}
