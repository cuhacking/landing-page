import { Faq } from "../types";
import "./FaqAccordion.style.scss";

interface FaqAccordionProps {
    faq: Faq;
    selected: boolean;
    onClick: () => void;
}

export const FaqAccordion = ({faq, selected, onClick }: FaqAccordionProps) => {
    return (
        <div className={`FaqAccordion ${selected ? "FaqAccordion--open" : "FaqAccordion--closed"}`} onClick={onClick}>
            <div className="FaqAccordion__head">
                {/* // TODO: should be svg */}
                <div className="FaqAccordion__button">{selected ? "-" : "+"}</div>
                <div className="FaqAccordion__question">{faq.question}</div>
            </div>
            {selected && (<div className="FaqAccordion__answer">{faq.answer}</div>)}
        </div>
    );
};
