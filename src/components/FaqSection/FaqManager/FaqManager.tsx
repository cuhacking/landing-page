import { useState } from "react";
import { FaqAccordion } from "../FaqAccordion/FaqAccordion";
import { Faq } from "../types";
import "./FaqManager.style.scss";

interface FaqManagerProps {
    faqs: Faq[];
}

export const FaqManager = ({faqs}: FaqManagerProps) => {
    const [selected, setSelected] = useState<number | null>(null);

    const toggleSelected = (index: number) => {
        if (selected === index) {
            setSelected(null);
        } else {
            setSelected(index);
        }
    }
    return (
        <div className="FaqManager">
            {faqs.map((faq: Faq, index: number) => (
                <FaqAccordion key={index} faq={faq} selected={index == selected} onClick={() => toggleSelected(index)}/>
            ))}
        </div>
    );
};
