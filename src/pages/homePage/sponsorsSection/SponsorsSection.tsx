import { Heading } from "../../../components/Typography";
import { SponsorEmailSignup } from "../heroSection/EmailSignup";
import { PastSponsors } from "./PastSponsors";

export const SponsorsSection = () => {
    return (
      <div id="sponsors">
      <Heading>Past Sponsors</Heading>
      <PastSponsors />
      <SponsorEmailSignup className="w-5/6 md:w-1/2 mx-auto my-20 max-w-lg"/>
    </div>
    );
};