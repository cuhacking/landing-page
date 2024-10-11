import { StandoutStickersLogo } from "../../../components/MLHBadge";
import { Heading } from "../../../components/Typography";
import { PastSponsors } from "./PastSponsors";

export const SponsorsSection = () => {
  return (
    <>
      <div id="current-sponsors">
        <Heading>Current Sponsors</Heading>
        <div className="flex items-center justify-center">
          <StandoutStickersLogo />
        </div>
      </div>
      <div id="sponsors">
        <Heading>Past Sponsors</Heading>
        <PastSponsors />
      </div>
    </>
  );
};
