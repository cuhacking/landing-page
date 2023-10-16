import { QuestionAccordion } from "./QuestionAccordion";
import { Section } from "./Section";
import { Column } from "./util";

// Define the Question interface
interface Question {
    question: string;
    answer: string;
}

// Create an array of questions and answers
const questions: Question[] = [
    {
        question: "What is cuHacking?",
        answer: `cuHacking is Carleton University's official hackathon event. It's a dynamic and exciting gathering where participants come together to innovate, collaborate, and create solutions to various challenges. Whether you're a tech enthusiast, developer, designer, or simply curious about technology, cuHacking provides a unique platform for you to engage with like-minded individuals, learn new skills, and turn your ideas into reality.`,
    },
    {
        question: "Who can participate?",
        answer: `cuHacking is open to a wide range of participants, including university and high school students. It's not limited to computer science or software engineering; we encourage individuals with various skills and interests to join. Teams can consist of up to four members, and we welcome anyone who is interested in problem-solving and innovation, regardless of their field of study or background. It's a platform where diverse talents can come together to explore new possibilities.`,
    },
    {
        question: "What does it cost?",
        answer: "cuHacking costs nothing to attend! We will also try to provide travel reimbursements and arrangements for participants coming from outside of Ottawa.",
    },
    {
        question: "What are the prizes?",
        answer: "The specific prizes have yet to be determined but they can vary from cash prizes, physical items such as laptops and of course, gift cards.",
    },
    {
        question: "Do I need coding experience?",
        answer: `No, coding experience is not a requirement to participate in cuHacking. We welcome participants with varying levels of coding experience, from beginners to seasoned coders. Our event is designed to be inclusive, offering opportunities for skill development and learning. Whether you're new to coding and want to explore this field or you're an experienced coder looking to hone your skills further, cuHacking provides a supportive environment for everyone. You'll have the chance to collaborate, learn, and innovate, regardless of your coding background.`,
    }
];

export const FrequentlyAskedQuestions = () => {
    return (
        <Section title="Frequently Asked Questions">
            <Column $style={{ marginTop: "34px", gap: "34px" }}>
                {questions.map((q, index) => (
                    <QuestionAccordion key={index} question={q.question} answer={q.answer} />
                ))}
            </Column>
        </Section>
    );
};
