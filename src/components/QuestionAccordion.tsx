import { useStyletron } from "baseui";
import { Modal } from "baseui/modal";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export const QuestionAccordion = (props: { questions: string[]; answers: string[]; }) => {
    return (
        <div>
            {props.questions.map((q, index) => (
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="q-accordian"/> 
                    <div className="collapse-title text-xl font-medium">
                        {q}
                    </div>
                    <div className="collapse-content"> 
                        <p>{props.answers[index]}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
