import { useStyletron } from "baseui";
import "./Apply.css";
import { TextInput, MultipleChoice, Dropdown } from "./QuestionComponents"
import { useEffect } from "react";
import React from "react";
import noise from "../../../public/noise.png";

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
        choices: []
    },
    {
        type: "text",
        question: "Last Name: ",
        questionId: "lname",
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


export const generateRadialGradient = (color: string, size: number, posTop: number, posLeft: number, color2?: string): string => {
    // if there is no second color, make it transparent
    color2 ??= "transparent";
    return `radial-gradient(circle ${size}vw at ${posTop}% ${posLeft}%, ${color} 20%, ${color2})`;
}

export const compileGradients = (gradients: string[]): Record<string, string> => {
    return {
        background: gradients.join(", ")
    }
}

export const Apply = () => {
    const [css, $theme] = useStyletron();

    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById(questions[0].questionId)?.focus();
    }, []);

    const GRADIENT_PINK = "var(--pink)";

    const gradients = [
        generateRadialGradient(GRADIENT_PINK, 50, 90, -30),

        //Bottom left
        generateRadialGradient(GRADIENT_PINK, 50, -10, 110),
        generateRadialGradient(GRADIENT_PINK, 40, -10, 80),
        generateRadialGradient(GRADIENT_PINK, 30, -10, 50),
        generateRadialGradient(GRADIENT_PINK, 20, -10, 40),

        // Bottom Middle
        generateRadialGradient(GRADIENT_PINK, 40, 40, 140),
    ];

    return (
        <div>
            <div id="apply-background">
                <div className={
                    css({
                        width: "100%",
                        height: "100%",
                        ...compileGradients(gradients),
                        backdropFilter: "blur(5px)", // Apply a blur effect to the background
                        "::before": { // Pseudo-element for the noise texture
                            content: '""',
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            backgroundImage: `url('${noise}')`, // The URL to a noise texture image
                            opacity: 0.03, // Adjust opacity as needed to reduce the intensity of the noise
                            zIndex: -1, // Ensure the noise texture is behind the content of the div
                        }
                    })
                } id="apply-background_blue-gradient"></div>
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
        </div >
    );
}



