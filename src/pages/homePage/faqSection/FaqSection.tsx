import { Heading } from "../../../components/Typography";
import { FaqManager } from "./faqManager/FaqManager";
import faqs from "../../../data/faqs.json";
import { Faq } from "./types";
import "./FaqSection.style.scss";

export const FaqSection = () => {
    return (
     <div className="FaqSection">
         <Heading>FAQ</Heading>
         <FaqManager faqs={faqs as Faq[]} />
     </div>
    );
};
