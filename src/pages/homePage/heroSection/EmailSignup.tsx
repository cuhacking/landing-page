import { FrostedPanel } from "../../../components/FrostedPanel";
import { Text, Typo } from "../../../components/Typography";

export const EmailSignup = (props: { id?: string; className?: string }) => {
  return (
    <FrostedPanel className={props.className} id={props.id}>
      <div className="flex flex-col items-center justify-center space-y-5">
        <Text typo={Typo.TITLE_3}>Coming February 2025!</Text>
        <Text typo={Typo.TITLE}>cuHacking</Text>
        <Text typo={Typo.SUBTITLE} className="text-center">
          Carleton University's Official Hackathon
        </Text>
      </div>
    </FrostedPanel>
  );
};