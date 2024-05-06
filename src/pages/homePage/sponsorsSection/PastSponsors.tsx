import { useStyletron } from "baseui";
import { PAST_SPONSOR_IMAGES } from "./cuHackingPastSponsors";

export const PastSponsors = () => {
  const [css, _$theme] = useStyletron();

  // list of image url strings
  const images = PAST_SPONSOR_IMAGES;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-x-10 gap-y-4 place-items-center">
          {images.map((image, index) => (
          <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={image}
            key={index}
          />
          </div>
        ))}
      </div>
  );
};
