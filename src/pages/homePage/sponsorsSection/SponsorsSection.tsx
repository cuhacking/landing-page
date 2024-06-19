import { Heading } from "../../../components/Typography";
import { SponsorEmailSignup } from "../heroSection/EmailSignup";
import { PastSponsors } from "./PastSponsors";

export const SponsorsSection = () => {
    return (
      <div id="sponsors">
      <Heading>Past Sponsors</Heading>
      <PastSponsors />
      <SponsorEmailSignup className="w-1/2 mx-auto my-20"/>
    </div>
    );
};
