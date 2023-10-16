import { useStyletron } from "baseui";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export const QuestionAccordion = (props: { question: string; answer: string; }) => {
    const [css, _$theme] = useStyletron();
    const [isOpen, setIsOpen] = useState(false);

    const baseStyles = {
        width: "100%",
        height: "fit-content",
        cursor: "pointer",
        background: "transparent",
        border: "5px solid #000",
        borderRadius: "100px",
        display: "flex",
        padding: "32px",
        paddingLeft: "80px",
        alignContent: "center",
        alignItems: "flex-start",
        transition: "height 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out",
        "@media screen and (max-width: 1300px)": {
            borderRadius: "50px",
        }
    };

    // if the width of the viewport is <=600px we want to render the mobile version of the accordion 
    if (window.innerWidth <= 600) {
        return (
            <>
                <div
                    meta-answer={props.answer}
                    meta-question={props.question}
                    onClick={
                        () => {
                            setIsOpen(!isOpen);
                        }
                    }
                    id={`question-${props.question}`}
                    className={css(baseStyles)}
                >
                    <h1 className={
                        css({
                            color: "#000",
                            fontFamily: "Poppins",
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: "700",
                            lineHeight: "normal",
                            paddingTop: "5px",

                        })
                    }>
                        {props.question}
                    </h1>
                </div>

                <Modal
                    mountNode={document.body}
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    overrides={
                        {
                            Root: {
                                style: {
                                    zIndex: 1000,
                                }
                            },
                        }
                    }
                >
                    <div
                        className={
                            css({
                                padding: "32px",
                            })
                        }>
                        <h1 className={
                            css({
                                color: "#000",
                                textAlign: "center",
                                fontFamily: "Poppins",
                                fontSize: "auto",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal",
                                transition: "all 0.2s ease-in-out",
                            })
                        }>
                            {props.question}
                        </h1>

                        <p className={
                            css({
                                color: "#000",
                                fontFamily: "Poppins",

                                fontStyle: "normal",
                                fontWeight: "400",
                                lineHeight: "normal",
                                fontSize: "15px",
                            })
                        }>
                            <ReactMarkdown>{props.answer}</ReactMarkdown>
                        </p>
                    </div>
                </Modal>
            </>);
    }


    if (!isOpen) {
        return (
            <div
                onClick={
                    () => {
                        setIsOpen(true);
                    }
                }
                id={`question-${props.question}`}
                className={css(baseStyles)}>
                <h1 className={
                    css({
                        color: "#000",
                        fontFamily: "Poppins",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "700",
                        lineHeight: "normal",
                        paddingTop: "5px",

                    })
                }>
                    {props.question}
                </h1>
            </div >
        );
    }

    return (
        <div
            onClick={
                () => {
                    setIsOpen(false);
                }
            }
            id={`question-${props.question}`}
            className={css({
                ...baseStyles,
                height: "fit-content",
                alignItems: "flex-start",
                flexDirection: "column",
                backgroundColor: "#E8EBEF",
            }
            )}>

            <h1 className={
                css({
                    color: "#000",
                    textAlign: "center",
                    fontFamily: "Poppins",
                    fontSize: "auto",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    transition: "all 0.2s ease-in-out",
                })
            }>
                {props.question}
            </h1>

            <p className={
                css({
                    color: "#000",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    paddingLeft: "44px",
                    "@media screen and (max-width: 1300px)": {
                        fontSize: "1.75vw",
                        paddingLeft: "0",
                    }
                })
            }>
                <ReactMarkdown>{"✦ " + props.answer}</ReactMarkdown>
            </p>
        </div >
    );
}
