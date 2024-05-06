import { Heading } from "../../../components/Typography";
import { SponsorEmailSignup } from "../heroSection/EmailSignup";
import { PastSponsors } from "./PastSponsors";

export const SponsorsSection = () => {
    return (
      <div>
      <Heading>Past Sponsors</Heading>
      <PastSponsors />
      <SponsorEmailSignup />
    </div>
    );
};
